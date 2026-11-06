import { z } from 'zod';

export const packageSchema = z.object({
  id: z.enum(['brand-blueprint', 'content-studio', 'demand-campaigns']),
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
export const projectSchema = z.object({
  id: z.string(), slug: z.string().regex(/^[a-z0-9-]+$/), title: z.string(),
  label: z.literal('Sample concept'), audience: z.string(), service: z.string(),
  summary: z.string(), headline: z.string(), visual: z.enum(['northline', 'daybreak']),
  context: z.string(), decisions: z.array(z.object({ title: z.string(), body: z.string() })),
  takeaway: z.string(),
});
export const websiteSchema = z.object({
  settings: z.object({ name: z.string(), description: z.string() }),
  home: z.object({ eyebrow: z.string(), title: z.string(), description: z.string() }),
  packages: z.array(packageSchema).length(3).refine((items) => new Set(items.map((item) => item.id)).size === 3, 'Package IDs must be unique'),
  industries: z.array(industrySchema).min(1),
  projects: z.array(projectSchema).min(1),
  faqs: z.array(z.object({ question: z.string(), answer: z.string() })).min(1),
});
export type Package = z.infer<typeof packageSchema>;
export type Industry = z.infer<typeof industrySchema>;
export type Project = z.infer<typeof projectSchema>;
export type WebsiteContent = z.infer<typeof websiteSchema>;
export const formatPrice = (amount: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
