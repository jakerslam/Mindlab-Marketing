# Mindlab website · Current build

November 6, 2026.

The first website is implemented in `site/` using Astro, TypeScript, Tailwind CSS 4, selective React, and a customized shadcn/ui Button.

**Private review:** https://mindlab-solutions-review.jakerslam.chatgpt.site

This owner-private Sites deployment is a review of the website design and content. The public website is hosted on GitHub Pages at https://mindlab.solutions/ with HTTPS enforced. Final production content approval and indexing remain to be finalized. The app and static output are portable to the planned GitHub-backed host.

## Included

- Home, Services, dedicated Pricing, Who we help overview, separate B2B and B2C pages, About with Jay Haslam and Daiana Costa profiles and condensed Our thinking, two expanded fictional demonstrations, three original practical guides, call page, draft privacy information, and 404.
- Shared validated package data, clear setup and media fees, and a working first-month calculator.
- Responsive navigation, accessible FAQ disclosures, focus states, reduced-motion support, local fonts, metadata, sitemap, and preview noindex behavior.
- Provider boundaries for content, inquiries, scheduling, and optional consent-gated analytics.
- Sanity Studio schemas, published-content adapter, and a non-overwriting seed importer.

## Verified

The current build checks 56 Astro/TypeScript files with zero errors/warnings/hints. The published-Sanity build produces 16 HTML pages, including the old work overview redirect, and verifies 790 local URLs, assets, and anchors plus metadata, unique IDs, and sample disclosures. Pricing uses compact service rows with a collapsed estimator. Services and Who we help dropdowns support desktop hover, keyboard controls, and nested mobile navigation without top-level arrows. The industry list has 16 entries: seven named sectors and Other for each audience. The longer desktop dropdown scrolls within short viewports. About is a direct link and includes condensed example cards, guide links, and a collapsed briefing checklist. The audience pages have distinct service applications, examples, guides, and calls to action; old industry anchors remain supported. Desktop and narrow layouts, audience and guide navigation, related service links, pricing, and selected-package handoff were checked in the browser. Detailed verification and limits remain recorded in `VERIFICATION.md`.

The homepage previews the two audiences and one guide, and links to the full lists. Team profiles appear only on About under “Our team,” beneath a smaller page heading. Direct section headings replace repetitive purple labels; useful audience, article, and sample context remains at readable sizes. Decorative artwork is simplified on desktop and hidden on narrow screens. Approved team copy lives in `src/content/team.ts`. The scrolled topbar contracts to 60px on desktop and 56px on mobile, with a 25px wordmark, 28px mark, 3px blur, and a translucent background. Its original document space stays reserved to prevent a layout jump.

The footer now reads Mindlab LLC and includes Light / System / Dark choices, defaulting to System. Preferences persist locally, follow system changes, and initialize before paint. The site has a coordinated dark palette; provider widgets and demonstration artboards keep their own readable canvases. The header call button has a brief 12-second shimmer cycle that is disabled for reduced motion.

## Integration and launch status

1. Sanity project `o19f4dqg` / `production` is connected with 31 published records, including 16 industry entries. The industry expansion added ten entries while preserving existing industry copy and package data. Browser editor: https://mindlab-solutions.sanity.studio/. The guide and deliverable schemas are deployed. Published changes still need a website rebuild/redeployment; automatic host publish hooks remain to be configured.
2. Live Tally form `https://tally.so/r/zEN7DM` is optional below the calendar and loads when opened, with automatic height and a hosted fallback. Required name/company/email validation and mobile layout were checked. The official widget forwards the selected service query. Accepted submissions, notification recipients and delivery, retry behavior, and the contact inbox remain to be checked. Add a primary-goal question and a `service` hidden field if package interest should be retained in submissions.
3. Live booking event `https://cal.com/jacob-haslam-zfpxbo/30min` is embedded as the primary path, with a hosted-calendar fallback. Its 30-minute duration, America/Denver timezone, available slots, date/time selection, and name/email/optional-notes booking form were verified. An inquiry is not required before scheduling. No booking was created and confirmed-booking measurement remains disabled.
4. Owner review of prices, scope, terms, business details, draft privacy/retention information, and the proposed visual direction.
5. GitHub source repository: https://github.com/jakerslam/Mindlab-Marketing. GitHub Pages serves https://mindlab.solutions/ with HTTPS. The owner approved Jay Haslam and Daiana Costa profiles using the supplied biographies and silhouette placeholders. Public contact details remain deferred. Final production approval and indexing remain to be completed through the existing launch gate.

No inquiry or booking completion is simulated. The call page shows the real calendar and optional inquiry form. Sanity Studio is deployed; an authenticated editing session was not exercised in this pass. Original guides are available. Verified client case studies remain later work; current demonstrations are visibly fictional.

Application setup: [README.md](../README.md). Detailed checks and limits: [VERIFICATION.md](../VERIFICATION.md).

Review deployment source commit: `d76eb9222355f895f35f9bdf879b53220d0440f7`.
