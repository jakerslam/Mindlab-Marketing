import { readFile } from 'node:fs/promises';
import { projectConfig } from '../src/integrations/project.ts';

const project = process.env.SANITY_PROJECT_ID || projectConfig.sanity.projectId;
const dataset = process.env.SANITY_DATASET || projectConfig.sanity.dataset;
const token = process.env.SANITY_WRITE_TOKEN;
const cliSession = process.argv.includes('--cli-session');
if ((!token && !cliSession) || !/^[a-z0-9]+$/.test(project) || !/^[a-z0-9_-]+$/.test(dataset)) {
  throw new Error('Sign in with sanity login and run npm run content:import:session, or set a write token in your ignored .env file.');
}
const content = JSON.parse(await readFile(new URL('../src/content/site.json', import.meta.url), 'utf8'));
const documents = [
  { _id: 'site-settings', _type: 'siteSettings', ...content.settings },
  { _id: 'home-page', _type: 'homePage', ...content.home },
  ...content.packages.map((item) => ({ _id: `package-${item.id}`, _type: 'servicePackage', ...item })),
  ...content.industries.map((item, order) => ({ _id: `industry-${item.id}`, _type: 'industry', ...item, order })),
  ...content.projects.map((item, order) => ({ _id: `project-${item.id}`, _type: 'project', ...item, decisions: item.decisions.map((decision, index) => ({ ...decision, _key: `${item.id}-${index}`, _type: 'object' })), order })),
  ...content.faqs.map((item, order) => ({ _id: `faq-${order + 1}`, _type: 'faq', ...item, order })),
];
// createIfNotExists never overwrites an editor's changes on a repeated import.
const mutations = documents.map((document) => ({ createIfNotExists: document }));
if (cliSession) {
  const { getCliClient } = await import('sanity/cli');
  const client = getCliClient({ apiVersion: '2026-11-01' }).withConfig({ projectId: project, dataset, useCdn: false });
  await client.mutate(mutations);
} else {
  const response = await fetch(`https://${project}.api.sanity.io/v2026-11-01/data/mutate/${dataset}`, {
    method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations }),
  });
  if (!response.ok) throw new Error(`Content import failed (${response.status}). Check dataset, token permissions, and the Sanity dashboard.`);
}
console.log(`Seed import accepted for ${documents.length} documents. Existing documents were preserved. Review the published records in Studio.`);
