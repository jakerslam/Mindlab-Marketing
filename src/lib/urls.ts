/** Prefix site routes for a project host while keeping root-domain hosting portable. */
export function withBase(pathname: string): string {
  if (!pathname.startsWith('/') || pathname.startsWith('//')) return pathname;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${pathname}`;
}
