import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './studio/schema';
import { projectConfig } from './src/integrations/project';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || projectConfig.sanity.projectId;
const dataset = process.env.SANITY_STUDIO_DATASET || projectConfig.sanity.dataset;
if (!projectId) throw new Error('Set SANITY_STUDIO_PROJECT_ID before starting the browser editor.');

export default defineConfig({
  name: 'mindlab', title: 'Mindlab · Content Studio', projectId, dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
