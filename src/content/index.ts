import draft from './site.json';
import { packageSchema, projectSchema, websiteSchema, type WebsiteContent } from '@/domain/content';
import { integrations } from '@/integrations/config';
import { getSanityContent } from '@/integrations/sanity';

// Explicit source selection, not a catch/fallback. A configured CMS failure stops the build.
let content: Promise<WebsiteContent> | undefined;
export function getContent() {
  return content ??= integrations.content === 'sanity'
    ? getSanityContent().then((site) => {
        // Existing CMS datasets may predate these site additions.
        const packages = site.packages.some((pkg) => pkg.id === 'crm-lead-setup')
          ? site.packages
          : [...site.packages, packageSchema.parse(draft.packages.find((pkg) => pkg.id === 'crm-lead-setup'))];
        const projects = site.projects.some((project) => project.slug === 'alder-and-plane-kitchens')
          ? site.projects
          : [projectSchema.parse(draft.projects.find((project) => project.slug === 'alder-and-plane-kitchens')), ...site.projects];
        const faqs = site.faqs.map((faq) => faq.question === 'Do we need all three services?'
          ? { ...faq, question: 'Do we need all four services?' }
          : faq);
        return { ...site, packages, projects, faqs };
      })
    : Promise.resolve(websiteSchema.parse(draft));
}
