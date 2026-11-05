# First-build verification · November 5, 2026

The visitor can understand the three services, compare prices, estimate the first-month cost, review clearly disclosed sample concepts, and carry package interest to the conversation page.

- Astro/TypeScript check: passed with zero errors, warnings, or hints.
- Static build: 10 HTML pages, plus robots and sitemap output.
- Generated-page check: 231 local links/anchors, one H1 per page, titles/descriptions, unique IDs, and sample disclosure checks passed.
- Browser checks: desktop, 768px tablet, and 360px mobile. The homepage and service page had no horizontal document overflow at the mobile widths checked. A hero column sizing issue was corrected after visual inspection.
- Real browser interactions: mobile menu opens and navigates, FAQ expands, sample work detail opens, service calculator updates, and selected service reaches the call page.
- Calculator examples verified: Demand Campaigns with $3,000 media = $6,500 initially / $5,500 ongoing; Content Studio = $2,500 initially / $2,000 ongoing; combined retainers with $3,000 media = $9,000 initially / $7,500 ongoing.
- Production configuration check correctly refuses release without real destinations, CMS, contact details, and content approval.
- npm audit after targeted dependency fixes: zero known vulnerabilities.

Integration update: the real Tally form renders inside the call page with automatic height; blank submission reports the three missing required answers. Its field requirements match the updated privacy copy. The mobile call page has no horizontal overflow at 360px, and its form resizes to fit the loaded content. The Cal.com event reports a 30-minute duration, America/Denver timezone, and available slots. No accepted lead or booking was created. Sanity project o19f4dqg has a reachable public production dataset with zero published documents; its CLI requires sign-in before seeding. Sanity Studio builds successfully against that real project. Still unverified: Sanity import/publishing, accepted inquiry delivery and notifications, retry behavior, confirmed bookings, CMS rebuild hook, optional analytics consent and tags, production DNS and indexing.

The browser logged a transient Vite stylesheet-reload failure while dependencies were being refreshed during development. Subsequent fresh navigation rendered the corrected styles. The final static build remains the deployment artifact.
