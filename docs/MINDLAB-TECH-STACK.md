# Mindlab Website Technology Stack

Updated November 5, 2026. This decision covers the public marketing website described in the Website Plan workbook. Browser editing is confirmed. The launch preference is a quick, inexpensive site with code in GitHub; GitHub Pages was the user's preferred starting host.

The revised recommendation uses free service tiers where they fit. Hosting remains a decision to resolve: Astro can generate files for GitHub Pages, but GitHub's business-use restrictions make Cloudflare Pages Free the recommended production alternative for this agency site. The earlier Vercel Pro and Formspree Professional combination was a paid option, not a required launch cost.

The providers below are replaceable integration options. The implementation must keep Mindlab's domain models, design, URLs, and workflow definitions separate from provider-specific code. See [Mindlab Integration Architecture](MINDLAB-INTEGRATION-ARCHITECTURE.md) for the adapter boundaries, data portability rules, and path to custom services.

## Recommended stack

| Layer | Proposed launch choice | Purpose |
| --- | --- | --- |
| Website framework | Astro with TypeScript | Build the service, package, industry, work, about, insight, and inquiry pages as pre-rendered HTML |
| Styling | Tailwind CSS 4 and CSS custom properties | Implement the proposed palette, type scale, grid, spacing, cards, and responsive layouts |
| Page components | Astro components and native HTML | Build the content sections, layouts, service cards, and static page structure |
| Interactive UI | React with TypeScript, added where needed | Implement stateful widgets or custom interactive forms as isolated components |
| UI component source | Selected shadcn/ui components, customized for Mindlab | Supply suitable controls and interaction primitives while retaining editable component source |
| Motion | CSS and small JavaScript enhancements | Provide restrained transitions with reduced-motion support |
| Content management | Sanity Studio and Content Lake | Browser editing for public-facing copy, approved package records, articles, work, industries, and team profiles |
| Hosting and deployment | Cloudflare Pages Free connected to GitHub, proposed as the production alternative to GitHub Pages | Publish the pre-rendered website using the GitHub workflow while keeping hosting costs at zero within plan limits |
| Inquiries | Tally Free for a cost-first launch; Formspree Professional is the optional custom-form alternative | Embed an inquiry form, retain accepted responses, and send owner notifications |
| Scheduling | Cal.com hosted booking page | Offer the 30-minute strategy call after a successful inquiry, with a booking link as the initial integration |
| Marketing measurement | Google Analytics 4 through Google Tag Manager, plus Search Console | Measure relevant website actions and review search visibility |
| Development workflow | GitHub, a locked dependency file, formatting, and focused browser checks | Keep changes reviewable and releases reproducible |

Astro is designed for content-driven websites and supports pre-rendered pages with client-side JavaScript added where needed. That matches the planned agency site. It also supports Tailwind 4 through the official Vite plugin. [Astro overview](https://docs.astro.build/en/concepts/why-astro/), [Astro styling documentation](https://docs.astro.build/en/guides/styling/#tailwind)

The design should come from the Mindlab website plan and its eventual review decisions. Use Astro components for page sections. React is the recommended integration for stateful UI when needed, with selected shadcn/ui components styled to Mindlab's own tokens.

## Framework and component choices

These tools serve different roles:

- **Astro** is the site framework for page routing, layouts, and static generation.
- **React** is the recommended UI library for interactive components inside those pages. Svelte is an alternative UI approach, and choosing one keeps the interactive component conventions consistent.
- **TypeScript** is the programming language used for models, integration interfaces, and component logic.
- **Tailwind CSS** supplies the styling utilities, together with the site's CSS custom properties.
- **shadcn/ui** supplies component source that can be added to the project and customized. It is a component system and code-distribution approach.

Astro has official React and Svelte integrations. Framework components can render as static HTML; interactive components receive client directives that control when their JavaScript loads. Keep normal content sections static and hydrate only components that need browser state or interaction. [Astro framework integrations](https://docs.astro.build/en/guides/framework-components/)

For Mindlab, the recommendation is **Astro with selective React components, TypeScript, Tailwind CSS 4, and selected shadcn/ui components**. shadcn/ui documents an Astro installation path. Use it for suitable controls and complex interactions, while the site's page composition, typography, spacing, imagery, and brand treatment follow the Mindlab design. [shadcn/ui with Astro](https://ui.shadcn.com/docs/installation/astro), [shadcn/ui component ownership](https://ui.shadcn.com/docs)

If the team prefers Svelte, use Astro's Svelte integration and evaluate shadcn-svelte for comparable components. shadcn-svelte identifies itself as a community-led port of shadcn/ui. Changing the interactive UI choice does not require changing the provider-independent content models and integration boundaries. [shadcn-svelte](https://www.shadcn-svelte.com/docs)

Do not install both React and Svelte for interchangeable widgets in this initial site. Select individual components when a real UI requirement warrants them. The embedded launch form and hosted booking link do not require a React wrapper merely to be displayed.

## Content editing

Sanity is the recommended browser editor and has a documented Astro integration path. It can supply content to the static build independently of the chosen host. [Sanity and Astro](https://docs.astro.build/en/guides/cms/sanity/)

Define structured records for:

- Site settings, navigation, footer, contact details, and calls to action.
- Service descriptions and approved package prices, billing cadence, setup fees, deliverables, and exclusions.
- Industry examples and audience-specific applications.
- Work examples with project context, the team's role, permissions, and evidence behind any result.
- Articles, authors, team biographies, images, and page metadata.

Store price amounts as numbers with an explicit currency and billing cadence. After approval, the website reads package facts from these records wherever a price or scope appears. This keeps the Pricing page, calculator, and booking summaries consistent.

The editor manages content inside designed components. Layout changes, new component types, and integration changes continue through code review.

For the public website, fetch published content during the build. With Cloudflare Pages, a filtered publish webhook triggers the host's deploy hook. Published changes appear after a successful build and deployment. Keep draft and production behavior distinct. [Cloudflare Pages deploy hooks](https://developers.cloudflare.com/pages/configuration/deploy-hooks/)

## Hosting and release flow

GitHub Pages serves static HTML, CSS, and JavaScript and supports custom domains, so it is technically compatible with the planned Astro output. Free Pages hosting is available for public repositories; private-repository availability depends on the GitHub plan. [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

GitHub's limits page restricts using Pages as free hosting to run an online business or a site primarily facilitating commercial transactions. Given Mindlab's package sales and lead-generation purpose, the recommendation is to resolve eligibility with GitHub before treating Pages as the production host. This is an assessment of fit against the published policy, rather than a claim that every organization or business information page is prohibited. [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

The recommended free production alternative is Cloudflare Pages, retaining GitHub as the code source. Cloudflare supports automatic deployment from GitHub, custom domains, and CMS-triggered deploy hooks. Its Free plan includes 500 builds per month. [GitHub integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/), [Pages limits](https://developers.cloudflare.com/pages/platform/limits/)

Review code changes in preview deployments, and rebuild when approved content is published. Connect mindlab.solutions to the selected production host while preserving existing email-related DNS records.

Resolve compatible stable framework and dependency versions when scaffolding, commit the lockfile, and keep framework upgrades deliberate. The initial implementation is a pre-rendered website with managed external forms and scheduling.

## Inquiry and booking flow

1. The visitor chooses a service or reaches Book a Call from another page.
2. The form collects name, email, company, and the primary goal. Website, package interest, audience type, and budget can be optional.
3. For the cost-first option, the booking page contains a real embedded Tally form. Tally stores accepted responses and sends configured owner notifications.
4. Use the provider's supported completion and failure handling. Any site-level success state must follow a confirmed accepted submission. Test how retries and entered information behave in the actual embed.
5. The confirmation offers the actual Cal.com strategy-call booking link. Load an optional calendar embed only on the relevant booking or confirmation view if it improves the experience.
6. A named Mindlab contact reviews the inquiry and follows up. Check notification delivery and dashboard records as part of launch verification.

Tally offers free embedding, unlimited forms and submissions under its fair-use policy, owner notifications, and a custom completion page. Its Free form retains Tally branding; removing branding, custom CSS, and some collaboration features require Pro. This makes it the proposed cost-saving option when an embedded form is acceptable. [Tally pricing](https://tally.so/pricing), [Tally embeds](https://tally.so/help/embed-your-form)

Formspree remains the alternative for a custom HTML inquiry form. Free includes 50 submissions monthly and 30 days of history, and is described as for testing and development. Professional is $30 month to month or $240 annually, equivalent to $20 monthly. Choose it when the required production features or custom workflow justify that cost. [Formspree plans and features](https://formspree.io/plans)

Cal.com supports hosted booking links and website embeds. Begin with a link to the configured event to keep the opening pages light. [Cal.com embedding](https://cal.com/features/embed)

Keep public marketing content in Sanity and private inquiry records in the form service. Sanity's free datasets are public, which makes them appropriate for approved website material. Choose Growth if private datasets or editor-specific roles are required. [Sanity plans](https://www.sanity.io/pricing)

## Measurement

Define the launch events around the plan's real outcomes:

- Primary strategy-call CTA selected.
- Package interest selected.
- Inquiry accepted successfully.
- Booking link opened.
- Meeting confirmed, once a verified provider integration can report that event.

Keep booking-link clicks and confirmed meetings as distinct measures. Use the scheduling dashboard as the booking record until confirmation measurement is verified. Mark suitable GA4 events as key events and link advertising measurement when campaigns are actually running. [GA4 key events](https://support.google.com/analytics/answer/9267568?hl=en)

Use only approved analytics and advertising tags, with consent behavior appropriate to the actual deployment and visitors. Form field contents and personal contact details must stay out of analytics events.

## Starting operating cost

Published USD prices checked November 5, 2026. Taxes, variable usage, additional seats, domain renewal, and business email are additional where applicable.

| Service | Lean launch assumption | Published price |
| --- | --- | --- |
| Cloudflare Pages | Proposed free production hosting, with code in GitHub | $0 within Free limits |
| Sanity | Free for trusted administrators managing public marketing content | $0 within Free limits |
| Tally | Free embedded inquiry form, with Tally branding and fair-use limits | $0 within Free limits |
| Cal.com | One person hosting the initial strategy calls | Individuals plan is free |
| Google measurement tools | Standard GA4 and Google Tag Manager | $0 for the standard services |

This proposed combination has **$0 in recurring hosting, CMS, form, and scheduling subscription fees** within the listed free-plan conditions. Domain renewal and business email are separate. Upgrade only when the actual workflow or usage needs a paid feature.

Sanity Growth is listed at $15 per seat per month when separate editor roles or private datasets are needed. Two Growth seats would add $30 per month. Cal.com team scheduling is a separate paid choice if shared or round-robin availability becomes necessary.

Paid alternatives: Vercel Pro starts at $20 monthly if its hosting features are chosen later. Formspree Professional adds $30 monthly, or $20 monthly equivalent with annual billing, if replacing Tally. These two choices were the basis of the earlier $50 or $40-equivalent estimate.

Pricing sources: [Cloudflare Pages](https://www.cloudflare.com/products/pages/), [Sanity](https://www.sanity.io/pricing), [Tally](https://tally.so/pricing), [Formspree](https://formspree.io/plans), [Cal.com](https://cal.com/pricing), [Vercel](https://vercel.com/pricing), [Google Analytics](https://www.about.google/business/faq/), [Google Tag Manager](https://support.google.com/tagmanager/answer/7582054?hl=en).

## Implementation readiness

The technology selection provides a concrete baseline for the visual wireframes and build. Before connecting production services, settle the production host, then establish project owners, editor roles, inquiry recipients, strategy-call host and availability, and chosen subscription plans. Browser editing is confirmed. The proposed cost-saving form choice uses an embed with provider branding, which should be reflected in the booking-page design.

Provision the real content, form, and scheduling services before implementing their working flows. Use their current official guides and supported integrations. The project can then be verified against the existing Website Plan, including content accuracy, mobile layouts, accessibility, inquiry delivery, booking, and measurement.
