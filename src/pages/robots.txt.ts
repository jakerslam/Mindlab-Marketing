import type { APIRoute } from 'astro';
import { integrations } from '@/integrations/config';
export const GET: APIRoute = ({ site }) => new Response(integrations.stage === 'production'
  ? `User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap-index.xml', site)}\n`
  : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
