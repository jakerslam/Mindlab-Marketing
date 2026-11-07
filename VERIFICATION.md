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

Integration update: the real Tally form renders inside the call page with automatic height; blank submission reports the three missing required answers. Its field requirements match the updated privacy copy. The mobile call page has no horizontal overflow at 360px, and its form resizes to fit the loaded content. The Cal.com event reports a 30-minute duration, America/Denver timezone, and available slots. No accepted lead or booking was created. Authenticated Sanity import succeeded for 18 published records in project o19f4dqg / production. A public read verified all 3 package amounts and setup fees, 6 industries, 2 samples, and 5 FAQs. Astro built all 10 pages using the real published-content adapter and its validation, with no local fallback. The editor and schema were deployed successfully to https://mindlab-solutions.sanity.studio/; the browser correctly requires Sanity sign-in. An authenticated editor session was not exercised in the in-app browser. Still unverified: accepted inquiry delivery and notifications, retry behavior, confirmed bookings, automatic CMS rebuild hook, optional analytics consent and tags, production DNS and indexing.

The browser logged a transient Vite stylesheet-reload failure while dependencies were being refreshed during development. Subsequent fresh navigation rendered the corrected styles. The final static build remains the deployment artifact.

## GitHub Pages verification

Root-domain and `/Mindlab-Marketing` builds each passed all 10 pages and 233 local URL, asset, and anchor checks. Canonical URLs also respect the deployment base. The official Pages workflow YAML parsed successfully. The signed-in GitHub CLI enabled Pages without using a personal token from chat.

The initial artifact-based publication timed out in GitHub's `updating_pages` phase. Branch-based publishing succeeded from `codex/pages-static`; both the normal public URL and a fresh request returned HTTP 200. Browser checks on the live Pages site confirmed service navigation, the $6,500 Demand Campaigns estimate, the prefixed package handoff, the Tally form, and the 30-minute Cal.com link. No browser console errors were reported in those checks. The editable source was restored after a deployment-branch merge using a regular revert commit.

## Dedicated Pricing page

Package fees and setup fees were halved in Sanity and the seed content. The full comparison, combined package, and calculator now live at `/pricing/`; Home links to that page and Services focuses on scope. Header, footer, service pricing links, and the booking-page return link point to Pricing. Existing `#packages` anchors on Home and Services remain as short links to the new page.

Astro checked 40 files with zero errors, warnings, or hints. The root-domain build passed 11 pages and 266 URL, asset, and anchor checks. Browser checks confirmed mobile navigation to Pricing, no horizontal overflow at 360px and 861px viewport settings, desktop navigation without logo overlap, calculator totals of $4,750 initially / $4,250 ongoing for Demand Campaigns with $3,000 media, selected-package handoff, and return to Pricing. The homepage has no package price cards, and no browser console errors were recorded in these checks.

## Header and footer typography

Navigation uses 14px text on desktop and 16px in the mobile menu. Footer links and copy use 14px, section labels 11px, and legal text 12px; mobile overrides no longer shrink them. Browser checks at 360px, 861px, and the default desktop viewport confirmed the computed sizes, working menu, no horizontal overflow, and no logo/navigation overlap. Footer line-break spacing remains correct when the mobile layout hides the breaks. The static build and all 266 URL, asset, and anchor checks passed across 11 pages.

## Header scroll behavior

After 32px of scrolling, the bar contracts from 92px to 64px on desktop and from 77px to 60px on mobile, with a soft bottom shadow. The header reserves its original space to keep the content position stable. The dropdown follows the current bar height, text sizes stay unchanged, and existing reduced-motion styles disable the transitions. Browser checks covered the scroll state and shadow, return to the top, stable main-content offset, navigation clicks, menu alignment, 44px mobile menu control, and horizontal overflow. Astro/TypeScript checking passed, followed by the final build and all 266 generated URL, asset, and anchor checks.

## Editorial expansion · November 6, 2026

The visitor can browse concrete sample deliverables and original guides, follow a guide to a relevant service, compare pricing, and carry the chosen package to the inquiry page. Published content flows through the Sanity adapter and validated domain models into static HTML.

- Our thinking now includes two expanded fictional demonstrations, three complete guides, and a usable briefing checklist. The demonstrations contain eight deliverable sections: positioning/messages, sample writing, ad variants, a landing-page brief, and a proposed test plan. Proposed measurement is distinguished from campaign results.
- About uses a firm-focused layout and current service descriptions. The owner explicitly deferred personal profiles and public contact details. No team size, biography, client evidence, or performance claims were invented.
- Sanity accepted one atomic six-record editorial update after a revision/draft check: homepage introduction, two examples, and three new guides. A separate public read verified 21 published records, keyed nested arrays, all guide sections, and exact preservation of every package field.
- The updated Studio schema and manifest deployed successfully to `https://mindlab-solutions.sanity.studio/`. An authenticated browser editing session was not exercised.
- Astro/TypeScript: 46 files, zero errors/warnings/hints. The published-Sanity build generated 14 HTML pages and passed 377 local URL/asset/anchor checks, metadata, unique IDs, sample disclosures, and sitemap checks.
- Browser: desktop article/overview layouts, Pricing, About, service navigation, guide-to-service navigation, article contents links, mobile menu navigation, and selected-package handoff were checked. At 360px, the inspected Home, Our thinking, Northline example, and guide had no horizontal document overflow. No browser console errors were captured in the checked preview tab.
- Demand Campaigns handoff displayed `$1,250 / month + $500 one-time setup. Media additional.` on the inquiry page. No inquiry was submitted and no booking was created in this pass.
- A branded share image was rendered and visually inspected; Open Graph metadata uses an absolute site URL through the shared base-path helper.

GitHub Pages remains in preview/noindex mode. Public contact setup, final launch approval, accepted inquiry delivery, booking confirmation, automatic CMS rebuild hooks, and optional analytics remain outside the completed editorial changes. The original private review deployment was not refreshed in this pass.

## Compact pricing and navigation dropdowns · November 6, 2026

Pricing now uses three horizontal service rows on desktop and stacked blocks on mobile. Agency fees, setup, media exclusions, writing-only scope, and the managed-spend cap remain visible. Full scope links and selected-package handoff are preserved. The combined option is a compact strip, the estimator starts collapsed, and an incoming `#estimate` link opens it automatically. No content records, package fees, scope, or integrations changed.

Services and Industries are disclosure buttons. Services contains the overview and three package anchors. Industries contains the overview plus B2B/B2C groups and six industry anchors. The dropdowns support click/tap, Enter/Space, Arrow Up/Down from the trigger, Escape with focus restoration, dismissal outside the menu, and closing when focus leaves the header. Mobile navigation nests the same destinations and scrolls within the available viewport.

The published-content build generates 14 HTML pages and passes 543 local URL/asset/anchor checks. Astro/TypeScript checks 47 files without errors, warnings, or hints. Browser checks covered desktop pricing, both dropdowns, keyboard opening/focus restoration, outside clicks, industry and service anchors, mobile menu dismissal, and no horizontal document overflow at the checked 360px and 861px widths. A dropdown clipping issue at 861px was fixed by centering the industry panel beneath its trigger.

The first desktop price moved from about 1,030px to about 420px from the document top in the inspected 1280px viewport. The collapsed calculator opened and hydrated, then produced $4,750 initially and $4,250 ongoing for Demand Campaigns with an illustrative $3,000 media budget. The new pricing-row link carried Demand Campaigns and its unchanged $1,250/month + $500 setup fee to the call page. No accepted inquiry or booking was created. No browser console errors were captured in these preview checks.

## Audience pages and simpler header · November 6, 2026

The Who we help overview now links to `/industries/b2b/` and `/industries/b2c/`. Each page has a distinct buying question, priorities, service applications, fictional demonstration, relevant guides, sector sections, and call to action. The pages reuse published package, industry, project, and guide records. No fees, scope, integrations, or CMS records changed. Existing overview audience and sector bookmarks redirect to the corresponding new page; the overview retains working links and matching IDs for visitors without JavaScript.

The header now contains Services, Pricing, Who we help, and About. Services and Who we help omit dropdown arrows and open on mouse hover at desktop widths. A transparent bridge spans the gap to the panel and a short close delay supports pointer movement. Touch/mobile and keyboard activation still toggle the disclosures; Arrow Up/Down, Escape with focus restoration, outside dismissal, and focus-leave handling remain supported. About is a direct link to the combined page described below.

Astro/TypeScript checked 49 files with zero errors, warnings, or hints. The initial published-Sanity audience build passed 16 HTML pages and 636 local URL/asset/anchor checks for the domain root and the `/Mindlab-Marketing` repository base. Browser checks covered the overview and both audience layouts, 360px mobile navigation, desktop hover opening/switching/dismissal and movement across the panel gap, keyboard opening and Escape, old B2B and B2C sector bookmarks, and an audience-to-pricing package anchor. The inspected pages had no horizontal document overflow at 360px, 861px, and 1280px viewport settings; the desktop industry panel remained within the viewport at 861px. No console errors were captured in the checked preview tab. No inquiry or booking was submitted.

## Our thinking condensed into About · November 6, 2026

About now includes two short sample-project cards, three practical-guide links, and a collapsed six-question briefing checklist. The overlapping collaboration content is combined into one section. Full sample deliverables and original articles remain at their existing detail URLs, with return links to the appropriate About section. Header About is a single direct link; homepage and footer thinking links now point into About. The old `/work/` overview uses a static meta refresh with a usable fallback link, canonicalizes to About, and is excluded from the sitemap.

Astro/TypeScript checked 49 files without errors, warnings, or hints. The final published-content builds passed all 16 HTML pages and 615 local URL/asset/anchor checks for both the domain root and repository base. The redirect destination and canonical also preserve `/Mindlab-Marketing`. Browser checks covered the combined desktop layout, guide and sample navigation back to About, the old work URL redirect, mobile direct About navigation and menu dismissal, keyboard activation of the checklist, and its six visible questions. The inspected mobile page, including the open checklist, had no horizontal document overflow at 360px; no console errors were captured in the checked preview tab. No CMS records, package fees, scope, or external integrations changed.

The Pages publication check was extended from five to eight minutes after GitHub exceeded the earlier limit while continuing to deploy. A matching static commit that is already built now finishes immediately; a matching build in progress is polled without requesting a duplicate. The workflow YAML parsed successfully and the publishing script passed `bash -n`.

## Who we are profiles · November 6, 2026

About now includes Jay Haslam and Daiana Costa beneath the introduction, using the owner-provided names and experience. Jay's profile covers sales and marketing across 18 industries, a digital marketing Nanodegree, software engineering, business automation, and his B2C specialization. Daiana's profile covers her sales and marketing background and specialization in B2B service companies and the financial industry. Both profiles use neutral decorative SVG silhouette placeholders. No additional titles, credential providers, or experience claims were added.

Astro/TypeScript checked 49 files without errors, warnings, or hints. The published-Sanity build generated 16 HTML pages and passed 615 local URL/asset/anchor checks. Browser checks covered the desktop two-column layout, stacked mobile profiles, and 768px tablet layout. The inspected page had no horizontal overflow at 360px, 768px, or the default desktop width, and no console errors were captured. The update adds no dependency or external image requests; CMS records, services, pricing, and integrations remain unchanged.

## Expanded industry lists · November 6, 2026

The shared industry list now has 16 entries, with seven named sectors and Other under each audience. New named sectors cover finance and insurance, manufacturing and industrial, construction and engineering, logistics and distribution, healthcare and wellness, real estate and property, food and hospitality, and automotive services. The homepage, navigation, overview, and audience pages all use the same content records. Homepage Other labels include the audience to distinguish the two destinations.

The signed-in industry-only seed import added ten entries without changing existing industry copy or timestamps. A separate public read verified all 16 entry payloads, Other ordering, 31 published records, and exact preservation of all three package records. Existing industry revision identifiers were regenerated by Sanity, so verification compared authored fields and timestamps separately from those identifiers. No new service or past-client claims were added.

Astro/TypeScript checked 49 files with no errors, warnings, or hints. The published-Sanity build generated 16 pages and passed 805 local URL/asset/anchor checks, metadata, unique IDs, sample disclosures, and sitemap checks. Browser checks covered all overview entries, both audience Other anchors, mobile menu dismissal, and distinct homepage Other links. At 1280×600 the expanded dropdown remained within the viewport and its list scrolled; keyboard Arrow Up focused the final Other link. The checked 360px pages had no horizontal overflow, and no console errors were captured in the preview tab.

## Clearer headings and direct scheduling · November 6, 2026

The visitor now reaches an inline calendar directly from a call CTA. The real Cal.com event is the primary path; an optional Tally message form sits below it and loads only when opened. A hosted-calendar fallback remains visible, and a non-Cal scheduler URL receives a generic hosted-link presentation through the booking adapter. Shared approved Jay Haslam and Daiana Costa summaries now appear on Home as well as the full About profiles. Silhouette placeholders remain.

Repetitive section labels were removed in favor of direct headings. Audience, article category, and sample-concept context remains, at 12px. Meaningful miniature artwork captions were replaced with larger labels; the decorative artwork is hidden on narrow screens. Home uses two audience previews and one guide preview, with the complete industry and guide lists still available at their existing destinations. Package fees, scope, the current homepage positioning, CMS records, preview indexing gate, and deployment workflow were not changed.

- Astro/TypeScript: 54 files, zero errors, warnings, or hints. Published-Sanity builds for `/` and `/Mindlab-Marketing` each generate 16 pages and pass 791 local URL/asset/anchor checks, metadata, unique IDs, sample disclosures, and sitemap checks.
- Browser: the calendar displayed the actual 30-minute event, America/Denver timezone, selectable dates, and real available times. Selecting November 12 at 9:00am reached the name/email/optional-notes form. No details were entered and no meeting was confirmed.
- The optional inquiry remained closed and its iframe unloaded initially. Keyboard opening loaded the real Tally fields and automatic height. The widget forwarded `service=demand-campaigns`; recording this in accepted responses still requires the configured hidden field. No inquiry was submitted.
- Pricing-to-call navigation retained Demand Campaigns and its unchanged $1,250/month + $500 setup fee, with media additional. A one-off adapter check covered the actual Cal event, a generic scheduler URL, and a Cal username-only URL.
- Desktop Home, Pricing, About, and B2B layouts and mobile Home, About navigation, and calendar layouts were inspected. The checked 360px pages had no horizontal document overflow. At this width, the call heading stays on two lines and the calendar section begins about 333px from the top. No console errors were captured in the checked preview tab.

The site does not report confirmed booking or accepted inquiry events. Real client proof, final portraits, accepted inquiry delivery, owner notifications, a monitored public inbox, and the existing production approval/indexing gate remain outstanding. The older private review deployment was not refreshed.

## About team placement and lighter topbar · November 6, 2026

Team profiles now appear only on About under “Our team.” The homepage team block and its unused styles were removed. About uses a smaller heading (about 44px at a 1280px viewport, 34px at 360px) and a shorter introduction area. Approved biographies and silhouette placeholders remain intact.

The scrolled topbar uses 3px blur and an 86% opaque background. Its visible height is 60px on desktop and 56px on mobile, with a 25px wordmark and 28px mark. Navigation text sizes stay unchanged. The original header height is reserved in the document; reduced-motion styles continue to disable transitions.

Astro/TypeScript checked 54 files with zero errors, warnings, or hints. The published-Sanity build passed 16 pages and 790 local URL/asset/anchor checks, metadata, unique IDs, sample disclosures, and sitemap checks. Browser checks confirmed the smaller About heading, both profiles, the absence of a homepage team block, desktop and mobile compact states, stable 92px desktop content offset, aligned desktop dropdown, keyboard opening and Escape, mobile navigation below the 56px bar, 44px menu control, menu dismissal, and restoration of the expanded header at the top. The inspected 360px layout had no horizontal overflow and no console errors were captured. No CMS records, fees, integrations, or deployment settings changed.

## Appearance preferences and call-button shimmer · November 6, 2026

The footer copyright now reads Mindlab LLC. Native radio controls offer Light, System, and Dark, with System selected when there is no saved preference. A small inline head initializer applies a saved choice before paint, follows system changes, synchronizes other tabs, and tolerates unavailable storage. CSS color-scheme and paired colors also provide a system-based appearance without JavaScript; the interactive control stays hidden in that case. Privacy copy explains the local preference. No preference or form content is sent to analytics.

The dark palette covers the page canvas, navigation, readable text, calls to action, audience panels, portraits, and estimator controls. Illustration artboards and provider-owned booking/inquiry widgets retain readable light canvases. Changing the site theme does not reload these widgets. Cal.com’s dynamic theme API did not reliably update its rendered palette during investigation; the final implementation keeps the existing light theme and sets its supported body background to white.

The header Let’s talk button has a brief left-to-right sheen on a 12-second cycle, with about one second of movement and the remainder still. Existing and explicit reduced-motion rules disable the animation.

Astro/TypeScript checked 56 files with zero errors, warnings, or hints. The published-content build passed all 16 pages and 790 URL/asset/anchor checks, metadata, unique IDs, disclosures, and sitemap checks. Browser checks confirmed the current dark system preference, explicit Light overriding it, persistence through reload and navigation, keyboard radio selection, a readable dark pricing estimator with $4,750 first-month / $4,250 ongoing totals for Demand Campaigns plus $3,000 illustrative media, selected-service handoff, and white inquiry canvas. Desktop and 360px footer/navigation layouts were inspected without horizontal overflow. The rendered shimmer reports a 12-second infinite cycle. Reduced-motion behavior was checked in the CSS rather than changing the device preference. A one-off execution of the actual initializer passed system changes, explicit overrides, stored choices, cross-tab resets, invalid values, and blocked storage. No inquiry or booking was submitted. CMS content, fees, preview indexing, and deployment settings remain unchanged.

## Original homepage artwork captions restored · November 6, 2026

Restored the original small labels, numbered card headings, captions, stamp wording, and footnote in the homepage illustration to match the owner’s screenshot. The component matches its earlier markup; the unused replacement-label style was removed. Current themes, mobile visibility, layout, navigation, pricing, and integrations remain intact. Astro checked 56 files without errors, warnings, or hints; the build passed 16 pages and 790 local URL/asset/anchor checks. The restored illustration was inspected in the browser against the supplied reference.
