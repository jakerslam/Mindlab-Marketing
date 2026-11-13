import draft from './site.json';
import { guideSchema, industrySchema, packageSchema, projectSchema, websiteSchema, type WebsiteContent } from '@/domain/content';
import { integrations } from '@/integrations/config';
import { getSanityContent } from '@/integrations/sanity';

const renameAdCampaigns = (copy: string) => copy.replaceAll('Demand Campaigns', 'Ad Campaigns');

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
        const industries = [...site.industries];
        if (!industries.some((industry) => industry.id === 'beauty-boutiques')) {
          const boutique = industrySchema.parse(draft.industries.find((industry) => industry.id === 'beauty-boutiques'));
          const retailIndex = industries.findIndex((industry) => industry.id === 'retail-consumer');
          industries.splice(retailIndex === -1 ? industries.length : retailIndex, 0, boutique);
        }
        const faqs = site.faqs.map((faq) => ({
          question: faq.question === 'Do we need all three services?'
            ? 'Do we need all four services?'
            : renameAdCampaigns(faq.question),
          answer: renameAdCampaigns(faq.answer),
        }));
        const launchGuideSlugs = ['first-visit-facial-ads', 'better-qualified-remodeling-inquiries'];
        const guides = [
          ...site.guides,
          ...draft.guides
            .filter((guide) => launchGuideSlugs.includes(guide.slug) && !site.guides.some((item) => item.slug === guide.slug))
            .map((guide) => guideSchema.parse(guide)),
        ];
        return {
          ...site,
          guides,
          packages: packages.map((pkg) => pkg.id === 'demand-campaigns' ? { ...pkg, name: renameAdCampaigns(pkg.name) } : pkg),
          projects: projects.map((project) => ({
            ...project,
            service: renameAdCampaigns(project.service),
            artifacts: project.artifacts.map((artifact) => ({ ...artifact, title: renameAdCampaigns(artifact.title) })),
          })),
          industries,
          faqs,
        };
      })
    : Promise.resolve(websiteSchema.parse(draft));
}
