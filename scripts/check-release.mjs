const required = ['SANITY_PROJECT_ID', 'SANITY_DATASET', 'PUBLIC_TALLY_FORM_ID', 'PUBLIC_BOOKING_URL', 'PUBLIC_CONTACT_EMAIL'];
const missing = required.filter((key) => !process.env[key]?.trim());
if (process.env.SITE_STAGE !== 'production') missing.push('SITE_STAGE=production');
if (process.env.CONTENT_SOURCE !== 'sanity') missing.push('CONTENT_SOURCE=sanity');
if (process.env.LAUNCH_CONTENT_APPROVED !== 'true') missing.push('LAUNCH_CONTENT_APPROVED=true');
if (missing.length) {
  console.error(`Production is not ready. Configure: ${missing.join(', ')}. See README.md for the connection and delivery checks.`);
  process.exitCode = 1;
} else {
  console.log('Required launch configuration is present. Run the build and verify real inquiry delivery, calendar availability, privacy details, and CMS publishing before release.');
}
