# Mindlab website · Current build

November 6, 2026.

The first website is implemented in `site/` using Astro, TypeScript, Tailwind CSS 4, selective React, and a customized shadcn/ui Button.

**Private review:** https://mindlab-solutions-review.jakerslam.chatgpt.site

This owner-private Sites deployment is a review of the website design and content. The public website is hosted on GitHub Pages at https://mindlab.solutions/ with HTTPS enforced. Final production content approval and indexing remain to be finalized. The app and static output are portable to the planned GitHub-backed host.

## Included

- Home, Services, dedicated Pricing, Who we help overview, separate B2B and B2C pages, Our thinking, two expanded fictional demonstrations, three original practical guides, firm-focused About, call page, draft privacy information, and 404.
- Shared validated package data, clear setup and media fees, and a working first-month calculator.
- Responsive navigation, accessible FAQ disclosures, focus states, reduced-motion support, local fonts, metadata, sitemap, and preview noindex behavior.
- Provider boundaries for content, inquiries, scheduling, and optional consent-gated analytics.
- Sanity Studio schemas, published-content adapter, and a non-overwriting seed importer.

## Verified

The current build checks 49 Astro/TypeScript files with zero errors/warnings/hints. The published-Sanity build produces 16 HTML pages and verifies 636 local URLs, assets, and anchors plus metadata, unique IDs, and sample disclosures. Pricing uses compact service rows with a collapsed estimator. Services, Who we help, and About dropdowns support desktop hover, keyboard controls, and nested mobile navigation without top-level arrows. About contains About Mindlab and Our thinking. The audience pages have distinct service applications, examples, guides, and calls to action; old industry anchors remain supported. Desktop and narrow layouts, audience and guide navigation, related service links, pricing, and selected-package handoff were checked in the browser. Detailed verification and limits remain recorded in `VERIFICATION.md`.

## Integration and launch status

1. Sanity project `o19f4dqg` / `production` is connected with 21 published records. The editorial migration updated only the homepage introduction and the two sample demonstrations, and added three guides. Package records were preserved. Browser editor: https://mindlab-solutions.sanity.studio/. The new guide and deliverable schemas are deployed. Published changes still need a website rebuild/redeployment; automatic host publish hooks remain to be configured.
2. Live Tally form `https://tally.so/r/zEN7DM` is embedded with automatic height. Required name/company/email validation and mobile layout were checked. Accepted submissions, notification recipients and delivery, retry behavior, and the contact inbox remain to be checked. Add a primary-goal question and a `service` hidden field if package interest should be retained in submissions.
3. Live booking event `https://cal.com/jacob-haslam-zfpxbo/30min` is linked. Its 30-minute duration, America/Denver timezone, and available slots were verified. Site copy now matches the actual event. No booking was created.
4. Owner review of prices, scope, terms, business details, draft privacy/retention information, and the proposed visual direction.
5. GitHub source repository: https://github.com/jakerslam/Mindlab-Marketing. GitHub Pages serves https://mindlab.solutions/ with HTTPS. The owner deferred personal profiles and public contact details during this pass. Final production approval and indexing remain to be completed through the existing launch gate.

No inquiry or booking completion is simulated. The call page shows the real inquiry form and booking link. Sanity Studio is deployed; an authenticated editing session was not exercised in this pass. Original guides are now available. Verified client case studies remain later work; current demonstrations are visibly fictional.

Application setup: [README.md](../README.md). Detailed checks and limits: [VERIFICATION.md](../VERIFICATION.md).

Review deployment source commit: `d76eb9222355f895f35f9bdf879b53220d0440f7`.
