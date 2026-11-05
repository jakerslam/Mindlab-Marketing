import draft from './site.json';
import { websiteSchema, type WebsiteContent } from '@/domain/content';
import { integrations } from '@/integrations/config';
import { getSanityContent } from '@/integrations/sanity';

// Explicit source selection, not a catch/fallback. A configured CMS failure stops the build.
let content: Promise<WebsiteContent> | undefined;
export function getContent() {
  return content ??= integrations.content === 'sanity'
    ? getSanityContent()
    : Promise.resolve(websiteSchema.parse(draft));
}
