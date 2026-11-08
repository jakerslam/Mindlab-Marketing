import { z } from 'zod';

const originalPackageIds = ['brand-blueprint', 'content-studio', 'demand-campaigns'] as const;

export const packageSchema = z.object({
  id: z.enum([...originalPackageIds, 'crm-lead-setup']),
  number: z.string(),
  name: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  price: z.number().nonnegative(),
  currency: z.literal('USD'),
  cadence: z.enum(['project', 'month']),
  setup: z.number().nonnegative(),
  timeline: z.string(),
  deliverables: z.array(z.string()).min(1),
  exclusions: z.array(z.string()).min(1),
  idealFor: z.string(),
});
export const industrySchema = z.object({
  id: z.string(), name: z.string(), audience: z.enum(['b2b', 'b2c']),
  examples: z.string(), challenge: z.string(), approach: z.string(), action: z.string(),
});
export const artifactSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  format: z.enum(['message-map', 'copy', 'plan']),
  introduction: z.string(),
  items: z.array(z.object({ label: z.string(), title: z.string(), body: z.string() })).min(1),
});
export const projectSchema = z.object({
  id: z.string(), slug: z.string().regex(/^[a-z0-9-]+$/), title: z.string(),
  label: z.literal('Sample concept'), audience: z.string(), service: z.string(),
  summary: z.string(), headline: z.string(), visual: z.enum(['northline', 'daybreak', 'alder']),
  context: z.string(), decisions: z.array(z.object({ title: z.string(), body: z.string() })),
  takeaway: z.string(),
  objective: z.string().nullish(),
  artifacts: z.array(artifactSchema).default([]),
  measurement: z.object({ approach: z.string(), metrics: z.array(z.string()).min(1) }).nullish(),
  relatedPackages: z.array(packageSchema.shape.id).default([]),
});
export const guideSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/), title: z.string().min(1),
  category: z.string(), summary: z.string(), introduction: z.string(),
  sections: z.array(z.object({
    heading: z.string(), paragraphs: z.array(z.string()).min(1),
    list: z.array(z.string()).default([]),
  })).min(1),
  relatedPackage: packageSchema.shape.id,
});
export const websiteSchema = z.object({
  settings: z.object({ name: z.string(), description: z.string() }),
  home: z.object({ eyebrow: z.string(), title: z.string(), description: z.string() }),
  packages: z.array(packageSchema).refine((items) => {
    const ids = new Set(items.map((item) => item.id));
    return ids.size === items.length && originalPackageIds.every((id) => ids.has(id));
  }, 'Package IDs must be unique and include the original three packages'),
  industries: z.array(industrySchema).min(1),
  projects: z.array(projectSchema).min(1),
  guides: z.array(guideSchema).default([]),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })).min(1),
});
export type Package = z.infer<typeof packageSchema>;
export type Industry = z.infer<typeof industrySchema>;
export type Project = z.infer<typeof projectSchema>;
export type Artifact = z.infer<typeof artifactSchema>;
export type Guide = z.infer<typeof guideSchema>;
export type WebsiteContent = z.infer<typeof websiteSchema>;
export const formatPrice = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
