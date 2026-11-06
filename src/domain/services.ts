import type { Package } from './content';

// Provider-independent presentation labels. Fees and scope come from content.
export const serviceDetails: Record<Package['id'], { description: string; input: string; example: string }> = {
  'brand-blueprint': {
    description: 'Brand strategy & a 90-day plan',
    input: 'Your business priorities, existing materials, and access to the people closest to the offer.',
    example: 'northline-advisory',
  },
  'content-studio': {
    description: 'Ongoing written content',
    input: 'An expert interview, source material, and one point of contact for feedback and approval.',
    example: 'northline-advisory',
  },
  'demand-campaigns': {
    description: 'Paid advertising management',
    input: 'An agreed offer, account access, approved assets, a ready destination, and a separate media budget.',
    example: 'daybreak-studio',
  },
};
