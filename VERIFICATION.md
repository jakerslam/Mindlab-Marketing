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
