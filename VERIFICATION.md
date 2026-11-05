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

Not yet verified: Sanity authentication/publishing, Tally validation/submission/retry/notification delivery, actual calendar availability, hosted CMS rebuild hook, optional analytics consent and tag configuration, production DNS and indexing. Those depend on accounts and destinations that have not been supplied. No test leads or bookings were submitted and no completion was simulated.

The browser logged a transient Vite stylesheet-reload failure while dependencies were being refreshed during development. Subsequent fresh navigation rendered the corrected styles. The final static build remains the deployment artifact.
