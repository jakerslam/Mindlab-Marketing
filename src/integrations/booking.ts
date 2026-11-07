/** Calendar-specific configuration stays at the integration boundary. */
export function getBookingEmbed(bookingUrl: string) {
  const url = new URL(bookingUrl);
  const calLink = url.pathname.replace(/^\/+|\/+$/g, '');
  if (url.hostname !== 'cal.com' || calLink.split('/').length < 2) return null;
  return { provider: 'cal-com' as const, calLink, origin: 'https://app.cal.com' };
}
