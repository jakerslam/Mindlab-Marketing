import { readFile, writeFile } from 'node:fs/promises';
import { getCliClient } from 'sanity/cli';
import { projectConfig } from '../src/integrations/project.ts';

// Two-phase, revision-checked update. Package records are never mutated here.
const mode = process.argv.includes('--apply') ? '--apply' : '--plan';
const planPath = process.argv[process.argv.indexOf(mode) + 1];
if (!process.argv.includes(mode) || !planPath) throw new Error('Use --plan /absolute/plan.json, then --apply the same plan after reviewing it.');
const client = getCliClient({ apiVersion: '2026-11-01' }).withConfig({
  projectId: projectConfig.sanity.projectId, dataset: projectConfig.sanity.dataset, useCdn: false,
});
const keyArrays = (value) => Array.isArray(value)
  ? value.map((item, index) => item && typeof item === 'object' ? { _key: `item-${index}`, _type: 'object', ...keyArrays(item) } : item)
  : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, keyArrays(item)])) : value;

if (mode === '--plan') {
  const content = JSON.parse(await readFile(new URL('../src/content/site.json', import.meta.url), 'utf8'));
  const changes = [
    { id: 'home-page', set: { eyebrow: content.home.eyebrow, description: content.home.description } },
    ...content.projects.map((project) => ({ id: `project-${project.id}`, set: Object.fromEntries(['summary', 'objective', 'artifacts', 'measurement', 'relatedPackages'].map((field) => [field, project[field]])) })),
    ...content.guides.map((guide, order) => ({ id: `guide-${guide.slug}`, create: { _id: `guide-${guide.slug}`, _type: 'guide', ...guide, order } })),
  ];
  const ids = changes.flatMap(({ id }) => [id, `drafts.${id}`]);
  const current = await client.fetch('*[_id in $ids]', { ids }, { perspective: 'raw' });
  const plan = changes.map((change) => {
    if (current.some((doc) => doc._id === `drafts.${change.id}`)) throw new Error(`Unpublished edits exist for ${change.id}. Review them in Studio before planning this update.`);
    const existing = current.find((doc) => doc._id === change.id);
    if (change.create && existing) throw new Error(`${change.id} already exists. Edit the existing guide in Studio instead of overwriting it.`);
    if (change.set && !existing) throw new Error(`Missing expected document ${change.id}.`);
    return { ...change, set: change.set && keyArrays(change.set), create: change.create && keyArrays(change.create), revision: existing?._rev, before: existing && Object.fromEntries(Object.keys(change.set).map((field) => [field, existing[field]])) };
  });
  await writeFile(planPath, JSON.stringify({ project: projectConfig.sanity, changes: plan }, null, 2) + '\n', { flag: 'wx', mode: 0o600 });
  console.log(JSON.stringify({ plan: planPath, patches: plan.filter((item) => item.set).map(({ id, set }) => ({ id, fields: Object.keys(set) })), newGuides: plan.filter((item) => item.create).map(({ id }) => id), packageRecordsChanged: 0 }, null, 2));
} else {
  const plan = JSON.parse(await readFile(planPath, 'utf8'));
  if (JSON.stringify(plan.project) !== JSON.stringify(projectConfig.sanity)) throw new Error('The plan targets a different project or dataset.');
  if (plan.changes.some(({ id }) => !id.startsWith('project-') && !id.startsWith('guide-') && id !== 'home-page')) throw new Error('Unexpected document type in editorial plan.');
  const ids = plan.changes.flatMap(({ id }) => [id, `drafts.${id}`]);
  const current = await client.fetch('*[_id in $ids]', { ids }, { perspective: 'raw' });
  const transaction = client.transaction();
  for (const change of plan.changes) {
    if (current.some((doc) => doc._id === `drafts.${change.id}`)) throw new Error(`Unpublished edits now exist for ${change.id}. Reconcile those edits first.`);
    const existing = current.find((doc) => doc._id === change.id);
    if (change.create) {
      if (existing) throw new Error(`${change.id} was created after the plan. Review it before proceeding.`);
      transaction.create(change.create);
    } else {
      if (existing?._rev !== change.revision) throw new Error(`${change.id} changed after the plan. Regenerate and review the update.`);
      transaction.patch(change.id, (patch) => patch.ifRevisionId(change.revision).set(change.set));
    }
  }
  await transaction.commit();
  console.log(`Published ${plan.changes.length} editorial updates. Service fees and scope were not changed. The website still needs a rebuild.`);
}
