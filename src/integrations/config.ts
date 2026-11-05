const value = (name: string) => String(import.meta.env[name] || '').trim();
const stage = value('SITE_STAGE') || 'preview';
if (!['preview', 'production'].includes(stage)) throw new Error('SITE_STAGE must be preview or production.');
const content = value('CONTENT_SOURCE') || 'local';
if (!['local', 'sanity'].includes(content)) throw new Error('CONTENT_SOURCE must be local or sanity.');

const tallyId = value('PUBLIC_TALLY_FORM_ID');
if (tallyId && !/^[a-zA-Z0-9]+$/.test(tallyId)) throw new Error('PUBLIC_TALLY_FORM_ID must contain only the Tally form ID.');
const bookingUrl = value('PUBLIC_BOOKING_URL');
if (bookingUrl) {
  const url = new URL(bookingUrl);
  if (url.protocol !== 'https:') throw new Error('PUBLIC_BOOKING_URL must use HTTPS.');
}
const email = value('PUBLIC_CONTACT_EMAIL');
if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('PUBLIC_CONTACT_EMAIL is invalid.');
const gtmId = value('PUBLIC_GTM_ID');
if (gtmId && !/^GTM-[A-Z0-9]+$/.test(gtmId)) throw new Error('PUBLIC_GTM_ID is invalid.');

export const integrations = {
  stage,
  content: content as 'local' | 'sanity',
  leadCapture: tallyId ? { mode: 'embed' as const, provider: 'tally' as const, id: tallyId, hostedUrl: `https://tally.so/r/${tallyId}`, supportsConfirmedSubmission: false } : null,
  booking: bookingUrl ? { mode: 'link' as const, url: bookingUrl, supportsConfirmedBooking: false } : null,
  contactEmail: email || null,
  analytics: gtmId ? { provider: 'gtm' as const, id: gtmId } : null,
};

if (stage === 'production') {
  const missing = [
    content !== 'sanity' && 'CONTENT_SOURCE=sanity',
    !tallyId && 'PUBLIC_TALLY_FORM_ID',
    !bookingUrl && 'PUBLIC_BOOKING_URL',
    !email && 'PUBLIC_CONTACT_EMAIL',
    value('LAUNCH_CONTENT_APPROVED') !== 'true' && 'LAUNCH_CONTENT_APPROVED=true',
  ].filter(Boolean);
  if (missing.length) throw new Error(`Production setup incomplete: ${missing.join(', ')}. Use SITE_STAGE=preview to review the local draft.`);
}
