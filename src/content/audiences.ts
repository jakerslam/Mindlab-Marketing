import type { Industry, Package } from '@/domain/content';

export type Audience = Industry['audience'];
interface AudiencePage {
  label: string;
  title: string;
  description: string;
  headline: string;
  introduction: string;
  question: string;
  questionContext: string;
  priorities: { title: string; body: string }[];
  applications: Record<Package['id'], string>;
  projectSlug: string;
  guideSlugs: string[];
  cta: { title: string; description: string };
}

export const audiencePages: Record<Audience, AudiencePage> = {
  b2b: {
    label: 'B2B businesses',
    title: 'Brand strategy, content & campaigns for B2B businesses',
    description: 'Help business buyers understand your offer through positioning, expert content, and focused paid campaigns. Explore Mindlab’s approach to B2B marketing.',
    headline: 'Help business buyers see the value.',
    introduction: 'Make a complex service easier to understand. Turn your expertise into useful content, and connect a focused campaign to the business conversation you want to start.',
    question: '“Is this the right approach for our business?”',
    questionContext: 'Give buyers a useful explanation of the problem, the offer, and what a first conversation would cover.',
    priorities: [
      { title: 'Explain the offer.', body: 'Lead with the business problem and the buyer you can help. Make the service, its boundaries, and the next step understandable before asking for a meeting.' },
      { title: 'Make expertise useful.', body: 'Use source interviews, articles, and written social content to answer the questions that come up in real customer conversations.' },
      { title: 'Define a suitable inquiry.', body: 'Focus a campaign on one priority offer and audience. Agree which inquiries are relevant and who will follow up before buying traffic.' },
    ],
    applications: {
      'brand-blueprint': 'Define a priority buyer, position the offer around their business problem, and build a message hierarchy your content and campaigns can use.',
      'content-studio': 'Turn the monthly expert interview into written social posts and an article or email that helps buyers evaluate a specific decision.',
      'demand-campaigns': 'Manage a campaign around one business service, market, and ad platform. Match the ad copy to a ready inquiry destination and review the available evidence.',
      'crm-lead-setup': 'Route inquiries to the right sales contact and track each conversation from the initial form through the decision.',
    },
    projectSlug: 'northline-advisory',
    guideSlugs: ['one-interview-a-month-of-content', 'brand-strategy-or-a-new-logo'],
    cta: { title: 'Which business buyers do you need to reach?', description: 'Bring your priority service, the problem it solves, and what a suitable inquiry looks like. We’ll discuss where the work could start.' },
  },
  b2c: {
    label: 'B2C businesses',
    title: 'Brand strategy, content & campaigns for B2C businesses',
    description: 'Connect your offer to customer needs with brand strategy, written content, and focused paid campaigns. Explore marketing applications for consumer businesses.',
    headline: 'Give customers a reason to take the next step.',
    introduction: 'Make the offer easy to assess, answer the practical questions, and give people a straightforward route to a booking, inquiry, or purchase.',
    question: '“Is this right for me, and how do I start?”',
    questionContext: 'Connect the customer’s need to the offer, the details that matter, and one clear action.',
    priorities: [
      { title: 'Make the offer tangible.', body: 'Explain who it is for, what is included, and the practical details someone needs before deciding. Let the message reflect the experience you can deliver.' },
      { title: 'Answer the hesitation.', body: 'Write around the questions behind a first visit, quote request, or order. Show what happens next and what the customer needs to know.' },
      { title: 'Connect the whole journey.', body: 'Match the campaign promise to a working booking, inquiry, or purchase destination. Confirm the next step and follow-up before launch.' },
    ],
    applications: {
      'brand-blueprint': 'Choose the customer need and offer to prioritize. Define the positioning, voice, and content themes that connect the business to that decision.',
      'content-studio': 'Create written social content and an article or email around customer questions, offer details, and what someone can expect from the next step.',
      'demand-campaigns': 'Promote one offer in one market through a focused ad platform. Develop copy variants, review campaign activity, and connect it to a ready customer destination.',
      'crm-lead-setup': 'Send quote requests or customer inquiries into HighLevel so your team can see who needs a response.',
    },
    projectSlug: 'daybreak-studio',
    guideSlugs: ['before-you-spend-on-ads', 'brand-strategy-or-a-new-logo'],
    cta: { title: 'What should your next customer do?', description: 'Share the offer, the people you want to reach, and the next step you want to support. We’ll discuss a focused starting point.' },
  },
};
