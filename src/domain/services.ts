import type { Package } from './content';

// Provider-independent presentation labels. Fees and scope come from content.
export const serviceDetails: Record<Package['id'], { description: string; input: string; example?: string }> = {
  'brand-blueprint': {
    description: 'Brand strategy & a 90-day plan',
    input: 'Your business priorities, existing materials, and access to the people closest to the offer.',
    example: 'northline-advisory',
  },
  'content-studio': {
    description: 'Monthly organic content writing',
    input: 'An expert interview, source material, and someone on your team to approve the copy and publish it through your channels.',
    example: 'northline-advisory',
  },
  'demand-campaigns': {
    description: 'Paid advertising management',
    input: 'An agreed offer, access to your ad account, approved assets, a separate media budget, and a working page, booking link, or intake form.',
    example: 'daybreak-studio',
  },
  'crm-lead-setup': {
    description: 'HighLevel setup and intake connection',
    input: 'Access to the intake form and HighLevel, approval for any required connector, and a team member responsible for following up.',
  },
};

export const crmSoftwareCosts = 'HighLevel and any connector fees are separate.';
