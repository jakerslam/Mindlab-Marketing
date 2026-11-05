import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './studio/schema';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
if (!projectId) throw new Error('Set SANITY_STUDIO_PROJECT_ID before starting the browser editor.');

export default defineConfig({
  name: 'mindlab', title: 'Mindlab · Content Studio', projectId, dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
