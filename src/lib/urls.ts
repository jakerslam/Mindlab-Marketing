import type { Industry } from '@/domain/content';

/** Prefix site routes for a project host while keeping root-domain hosting portable. */
export function withBase(pathname: string): string {
  if (!pathname.startsWith('/') || pathname.startsWith('//')) return pathname;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}${pathname}`;
}

export function industryUrl(industry: Pick<Industry, 'id' | 'audience'>): string {
  return withBase(industry.id === 'beauty-boutiques'
    ? '/industries/beauty-boutiques/'
    : `/industries/${industry.audience}/#${industry.id}`);
}
