import { defineCliConfig } from 'sanity/cli';
import { projectConfig } from './src/integrations/project';
export default defineCliConfig({
  api: { projectId: process.env.SANITY_STUDIO_PROJECT_ID || projectConfig.sanity.projectId, dataset: process.env.SANITY_STUDIO_DATASET || projectConfig.sanity.dataset },
});
