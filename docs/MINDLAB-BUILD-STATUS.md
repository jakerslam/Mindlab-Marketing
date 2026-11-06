# Mindlab website · First build

November 5, 2026.

The first website is implemented in `site/` using Astro, TypeScript, Tailwind CSS 4, selective React, and a customized shadcn/ui Button.

**Private review:** https://mindlab-solutions-review.jakerslam.chatgpt.site

This owner-private Sites deployment is a review of the website design and content. A public GitHub Pages preview is configured at https://jakerslam.github.io/Mindlab-Marketing/. The connection to mindlab.solutions and final production approval remain to be finalized. The app and static output are portable to the planned GitHub-backed host.

## Included

- Home, Services and package pricing, Industries, Our Thinking, two original fictional sample details, About, call page, draft privacy information, and 404.
- Shared validated package data, clear setup and media fees, and a working first-month calculator.
- Responsive navigation, accessible FAQ disclosures, focus states, reduced-motion support, local fonts, metadata, sitemap, and preview noindex behavior.
- Provider boundaries for content, inquiries, scheduling, and optional consent-gated analytics.
- Sanity Studio schemas, published-content adapter, and a non-overwriting seed importer.

## Verified

The final source check has zero errors/warnings/hints. The build produces 10 pages. Page verification checks 231 local links and anchors plus metadata, IDs, and sample disclosures. Desktop, 768px, and 360px layouts were reviewed in the browser; calculator updates, mobile navigation, FAQ behavior, work details, and package handoff were exercised. The dependency audit reports zero known vulnerabilities after targeted fixes. The private deployment succeeded.

## Integration and launch status

1. Sanity project `o19f4dqg` / `production` is connected. All 18 content records were imported with existing records preserved. The site now reads the published dataset and stops the build if it cannot load valid content. Browser editor: https://mindlab-solutions.sanity.studio/. Its schema and manifest are deployed. Sign in with the project's authorized Sanity account to edit. Published changes still need a website rebuild/redeployment; automatic host publish hooks remain to be configured.
2. Live Tally form `https://tally.so/r/zEN7DM` is embedded with automatic height. Required name/company/email validation and mobile layout were checked. Accepted submissions, notification recipients and delivery, retry behavior, and the contact inbox remain to be checked. Add a primary-goal question and a `service` hidden field if package interest should be retained in submissions.
3. Live booking event `https://cal.com/jacob-haslam-zfpxbo/30min` is linked. Its 30-minute duration, America/Denver timezone, and available slots were verified. Site copy now matches the actual event. No booking was created.
4. Owner review of prices, scope, terms, business details, draft privacy/retention information, and the proposed visual direction.
5. GitHub source repository: https://github.com/jakerslam/Mindlab-Marketing. The public GitHub Pages preview is configured. Custom-domain deployment and final production approval remain to be finalized. Set production indexing and correct canonical URLs in that build.

No inquiry or booking completion is simulated. The call page now shows the real inquiry form and booking link. The authenticated content import is complete and Sanity Studio is deployed. The in-app browser showed the expected Sanity sign-in gate; an authenticated editing session was not exercised there. Insights and verified client case studies remain later work; current samples are visibly fictional.

Application setup: [README.md](../README.md). Detailed checks and limits: [VERIFICATION.md](../VERIFICATION.md).

Review deployment source commit: `d76eb9222355f895f35f9bdf879b53220d0440f7`.
