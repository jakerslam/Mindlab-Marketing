import { projectConfig } from '../src/integrations/project.ts';
const settings = {
  SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID || projectConfig.sanity.projectId,
  SANITY_DATASET: process.env.SANITY_DATASET || projectConfig.sanity.dataset,
  PUBLIC_TALLY_FORM_ID: process.env.PUBLIC_TALLY_FORM_ID || projectConfig.tallyFormId,
  PUBLIC_BOOKING_URL: process.env.PUBLIC_BOOKING_URL || projectConfig.bookingUrl,
  PUBLIC_CONTACT_EMAIL: process.env.PUBLIC_CONTACT_EMAIL,
};
const missing = Object.entries(settings).filter(([, value]) => !value?.trim()).map(([key]) => key);
if (process.env.SITE_STAGE !== 'production') missing.push('SITE_STAGE=production');
if ((process.env.CONTENT_SOURCE || projectConfig.contentSource) !== 'sanity') missing.push('CONTENT_SOURCE=sanity');
if (process.env.LAUNCH_CONTENT_APPROVED !== 'true') missing.push('LAUNCH_CONTENT_APPROVED=true');
if (missing.length) {
  console.error(`Production is not ready. Configure: ${missing.join(', ')}. See README.md for the connection and delivery checks.`);
  process.exitCode = 1;
} else {
  console.log('Required launch configuration is present. Run the build and verify real inquiry delivery, calendar availability, privacy details, and CMS publishing before release.');
}
