import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve('dist');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat();
}
const files = await walk(root);
const pages = files.filter((file) => file.endsWith('.html'));
const idsByFile = new Map();
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${file}: expected one H1`);
  assert.match(html, /<title>[^<]+<\/title>/, `${file}: missing title`);
  assert.match(html, /name="description"/, `${file}: missing description`);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, `${file}: duplicate IDs`);
  idsByFile.set(file, new Set(ids));
}
let links = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  for (const [, href] of html.matchAll(/href="([^"<>]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    if (href.startsWith('//')) continue;
    const [resource, anchor] = href.split('#');
    const urlPath = resource.split('?')[0];
    let target = urlPath ? path.join(root, urlPath) : file;
    if (urlPath.endsWith('/')) target = path.join(target, 'index.html');
    if (urlPath) await stat(target).catch(() => assert.fail(`${file}: broken local link ${href}`));
    if (anchor && idsByFile.has(target)) assert.ok(idsByFile.get(target).has(anchor), `${file}: missing anchor ${href}`);
    links++;
  }
}
const home = await readFile(path.join(root, 'index.html'), 'utf8');
assert.match(home, /Sample concept/, 'Sample work disclosure must be visible');
assert.doesNotMatch(home, /googletagmanager\.com\/gtm\.js/, 'The home page must not embed an unconditional analytics loader');
assert.ok(files.some((file) => file.endsWith('sitemap-index.xml')), 'Missing sitemap');
console.log(`Verified ${pages.length} generated pages and ${links} local links/anchors; metadata, unique IDs, sample disclosures, and sitemap passed.`);
