# Mindlab Solutions website

An original, static Astro marketing site based on the Mindlab agency guide and website planning workbook. The project lives in `site/` so the strategy documents stay separate from the application.

## Run locally

Use Node **24.22.1** (see `.nvmrc`). With nvm installed:

```sh
nvm use
npm ci
npm run dev
```

The terminal prints the local preview URL. `npm run check` checks Astro and TypeScript; `npm run build` generates `dist/`; `npm run verify` validates the generated pages and internal links. In an execution sandbox, set `ASTRO_TELEMETRY_DISABLED=1` to avoid writing Astro preferences outside the checkout.

## Current state

The local preview includes Home, Services and pricing, Industries, two explicitly fictional sample concepts with detail pages, About, the call page, privacy information, and a 404. It includes a selective React cost calculator and a customized shadcn/ui Button. Content pages render static HTML; no React runtime is needed on the homepage. Fonts are self-hosted. Insights is intentionally deferred until original articles are ready.

**This is a review build, not a live lead-generation site.** A private review deployment can be published through Sites; its identity is in `.openai/hosting.json`. `CONTENT_SOURCE=local` is explicit and `SITE_STAGE=preview` makes pages noindex and disallows crawling. No provider is silently substituted. Missing inquiry and calendar destinations show an honest calls-opening-soon state; no submission is simulated. Production builds require CMS, inquiry, calendar, contact details, and owner-reviewed content.

The Sanity adapter, Studio schemas, and one-time import tool are implemented. A real Sanity project, Tally form, booking event, inbox, and final host have not been connected. End-to-end provider behavior can only be checked after those exist.

## Structure and replaceable integrations

- `src/domain/content.ts`: provider-independent, validated content models.
- `src/content/site.json`: the explicit local draft/seed, including proposed prices and sample disclosures.
- `src/content/index.ts`: selects the content source once per build.
- `src/integrations/sanity.ts`: the only Sanity query and record mapping.
- `src/integrations/config.ts`: configuration and truthful integration capabilities.
- `src/components/Analytics.astro`: consent-gated event wrapper; no tracking when unconfigured.
- `sanity.config.ts`, `studio/schema.ts`: separate authenticated browser editor.

Replacing a provider means implementing its boundary and migrating its records. It does not require redesigning the marketing pages. The current Tally integration is an iframe, not a made-up submission API. Booking is a hosted link and cannot claim confirmed meetings. Inquiry contents are never sent through the site's analytics wrapper. Keep private leads outside the website CMS and repository.

## Connect browser editing

1. Create a Sanity project and a **public** dataset for approved public marketing content. Use the owner's account and preferred plan. Do not put leads or private information in it.
2. Copy `.env.example` to `.env`. Set `SANITY_PROJECT_ID` and `SANITY_STUDIO_PROJECT_ID` to the real project ID. Set both dataset values to the real dataset name.
3. Create a limited write token for the manual import, put it in the ignored `.env`, and run `npm run content:import`. It uses `createIfNotExists` and preserves existing records. Remove/revoke the token after importing; the static website needs no write token.
4. Run `npm run studio`, authenticate with Sanity, and allow the local Studio origin in that project's CORS settings as required. Review and publish the imported homepage, package, industry, sample, and FAQ records. The seed importer creates published records, so use it with a new dataset before connecting production.
5. Set `CONTENT_SOURCE=sanity` and rebuild. Test that changing and publishing a package price updates all its appearances, including combined totals. A missing record, invalid shape, or failed fetch stops the build; no local fallback is used.
6. For a hosted browser editor, build/deploy the Studio separately through Sanity's supported deployment workflow. Set its actual public origin in CORS. Set up a filtered publish webhook to the selected host's secret deploy hook so published edits trigger a static rebuild.

The editor covers the introduction, package facts, industry entries, sample narratives, and FAQs. Layouts, artwork templates, and other page copy live in code. Article editing and real case-study evidence models are later extensions. Stable IDs must be preserved. Export the dataset and assets before any CMS migration.

## Connect inquiries and scheduling

1. Create and publish a real Tally form. Required fields: name, email, company, primary goal. Optional: website, service interest, B2B/B2C audience, budget. Add a `service` hidden field to receive the package identifier. Include the actual privacy link.
2. Configure the owner notification recipient and a genuine completion message. Use the form provider's own accepted-submission and error behavior; do not redirect to an unverified success page. Retain Tally branding on the free tier.
3. Put only the form ID in `PUBLIC_TALLY_FORM_ID`. The site provides an embed and a hosted-form fallback link. Inspect the actual form at mobile and desktop sizes; adjust its height if needed.
4. Create the actual 20-minute event and availability in Cal.com. Put the HTTPS booking URL in `PUBLIC_BOOKING_URL`. The booking-link boundary can support another scheduler later.
5. Set `PUBLIC_CONTACT_EMAIL` to a verified monitored inbox. Do not invent an address.
6. Send a clearly marked test inquiry with authorization, verify it exists in the Tally dashboard and that the owner notification arrives, then verify the live calendar's availability/timezone. Check invalid input, retry behavior, retained entries, completion, and package-interest handoff.

Until these checks pass, inquiry delivery and confirmed scheduling remain unverified. The site deliberately has no false success state.

## Optional analytics

Set `PUBLIC_GTM_ID` only after configuring the actual container. The script loads after explicit consent and stores a versioned preference. Declining does not load GTM. Changing a granted choice to decline reloads the page without GTM. Review the actual tags and relevant cookie retention/deletion behavior before launch. Enabling the wrapper does not itself configure GA4, advertising tags, or consent behavior for those tags.

Allowed site events: `strategy_call_click`, `package_interest`, `booking_link_opened`. `inquiry_accepted` and `booking_confirmed` are **not** emitted because the current iframe/link adapters do not verify those outcomes. Set up and test provider-supported confirmation tracking before reporting them. No field values, emails, URLs, or query strings are included in the site's event payloads.

## Hosting and production release

The output is portable static files. Proposed free host: **Cloudflare Pages**, backed by GitHub. Do not change domain or mail DNS until the production destination is chosen and verified. Existing planning documents discuss GitHub Pages policy suitability; no production host has been selected by this implementation.

If this folder becomes the repository root: build command `npm run check && npm run build && npm run verify`; output `dist`; Node `24.22.1`. If the repository includes the parent strategy docs, set the host's root directory to `site`.

For preview deployments use `SITE_STAGE=preview`. For production set the real provider configuration, `CONTENT_SOURCE=sanity`, `SITE_STAGE=production`, and `LAUNCH_CONTENT_APPROVED=true` **after** the owner reviews prices, scope, terms, sample disclosures, business/contact information, privacy and retention practices, and the original visual direction. Do not flip the flag simply to bypass the gate.

```sh
node --env-file=.env scripts/check-release.mjs
npm run check
npm run build
npm run verify
```

Review the generated site, test real inquiry delivery and calendar availability, then connect the custom domain. Ensure the production build allows indexing, generates the correct canonical URLs and sitemap, and uses a CMS publish hook for updates. `SITE_URL` can be supplied as a host environment variable; it defaults to `https://mindlab.solutions`.

The production gate validates configuration, not external service ownership or delivery. Manual provider checks are still required. The private review uses a Sites source repository and deployment. The final GitHub repository, production host, domain connection, and paid resources have not been provisioned. The source and static output remain portable.

## Dependency maintenance

Versions and lockfile are pinned. Targeted npm overrides patch transitive CMS CLI dependencies without downgrading Sanity. Recheck these when upgrading; remove them when the upstream ranges resolve patched versions. Build and check after a dependency change. shadcn/ui's Button pattern is MIT licensed; see `THIRD-PARTY-NOTICES.md`.

Official implementation references: [Astro](https://docs.astro.build/), [Tailwind with Astro](https://tailwindcss.com/docs/installation/framework-guides/astro), [shadcn with Astro](https://ui.shadcn.com/docs/installation/astro), [Sanity with Astro](https://docs.astro.build/en/guides/cms/sanity/), [Tally embeds](https://tally.so/help/embed-your-form).
