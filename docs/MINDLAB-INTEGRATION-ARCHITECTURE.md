# Mindlab Integration Architecture

Design requirement for the upcoming website build. November 5, 2026.

Mindlab should own the website design, content models, URLs, workflow definitions, and event names. External services sit behind small integration adapters. A replacement implements the relevant adapter and migrates its data, while the marketing pages continue to use the same Mindlab interfaces.

The first implementation should include only the selected working integrations and their boundaries. Additional providers and custom backends are options to implement when needed.

## Integration options

| Capability | Proposed launch option | Replacement options | Mindlab owns | Replacement work |
| --- | --- | --- | --- | --- |
| Public content and browser editing | Sanity | Another CMS, a local content source, or a future Mindlab CMS | Page, package, industry, article, project, person, and asset models | Map content, rich text, references, images, publishing, and previews. Recreate editor workflows where needed |
| Inquiry capture | Tally embed | Formspree custom form or a future Mindlab inquiry API | Inquiry field definitions, service identifiers, confirmation copy, and lead export schema | Replace the integration component or submission adapter. Import historical responses and verify the new flow |
| Call booking | Cal.com link | Another scheduler or a future Mindlab booking service | The 30-minute call offer, link placement, event definitions, and client-facing next steps | Configure the new calendar and notifications. Handle existing bookings and update public links |
| Marketing measurement | GA4 through Tag Manager | Another analytics provider or a future first-party collection service | Event names, allowed properties, consent behavior, and business definitions | Map event payloads, implement the sender, and validate tracking. Historical reports need separate treatment |
| Static hosting | GitHub-backed static deployment with production host to be settled | Cloudflare Pages, Vercel, or another suitable static host | Source code, domain, page URLs, and generated static output | Update the build pipeline, deployment hooks, headers, redirects, and DNS as needed |
| Lead notifications | Initially handled by the inquiry provider | A separate delivery provider or Mindlab notification service when inquiry capture is owned | Message requirements, recipients, and delivery expectations | Configure delivery, domain authentication where relevant, and failure handling |

Local content files can help development and migration, but browser editing remains a confirmed requirement for the team's normal publishing workflow.

## Code boundaries

Organize the implementation around three layers:

1. **Domain models:** provider-independent definitions for packages, pages, articles, projects, people, leads, and events.
2. **Integration adapters:** provider SDK calls, queries, embed settings, data transformations, and event mapping.
3. **Pages and feature components:** consume Mindlab models and integration interfaces.

For example, a package card receives a Mindlab Package object with a stable ID, price amount, currency, billing cadence, setup fee, deliverables, and exclusions. It does not query Sanity or depend on Sanity's record shape.

Astro supports custom content loaders for remote data sources and collection schema validation, which can support this boundary. [Astro content collections](https://docs.astro.build/en/guides/content-collections/#custom-build-time-loaders)

Keep provider-specific imports and query language inside the relevant adapter. SDKs that need secrets run during the build or on a suitable server. Public components receive only public configuration and normalized content.

## Configuration and capabilities

Use one configuration location to select the installed adapters. An illustrative launch configuration is:

```ts
const integrations = {
  content: "sanity",
  leadCapture: "tally-embed",
  booking: "cal-link",
  analytics: "gtm",
};
```

This selects working implementations. It does not automatically create another service or translate its data. Credentials and deployment settings live in the appropriate environment and host configuration.

Integrations must declare the capabilities they actually support. In particular, an embedded form is different from a custom form posting to an endpoint. The common inquiry component should support the chosen presentation mode without pretending every provider has the same submit API.

Suggested boundaries:

- **Content source:** return validated Mindlab content and asset descriptions from the selected published-content source.
- **Lead capture:** provide either an embedded form, a hosted-form destination, or a custom-form submission implementation. Expose supported completion/error signals explicitly.
- **Booking:** provide the configured booking destination or embed. Declare whether verified booking confirmation can be reported.
- **Analytics:** accept a Mindlab event name and an allowed property object, then translate them for the configured provider.

Invalid configuration or missing required credentials must fail visibly during setup or build. A live inquiry path must never silently fall back to sample data or display success without an accepted submission.

## Data portability

Maintain stable Mindlab identifiers and public slugs. Keep provider record IDs as integration metadata where practical. Preserve URLs during a migration or supply explicit redirects.

Define a versioned lead export format covering an internal ID assigned at normalization, source provider and record ID, creation time, submitted contact and company fields, goal, selected service, and relevant source or consent metadata. Preserve unanswered fields and the meaning of each field.

For content, use a small documented set of block types, such as paragraphs, headings, lists, links, and images. Translate provider rich text into the Mindlab representation at the boundary. Preserve image files, alternative text, captions, and relationships. An export of text alone is insufficient for moving the complete site.

Sanity documents dataset export with asset handling. Tally documents CSV export of response data. Exports still need verification and transformation for a replacement system. [Sanity dataset export](https://www.sanity.io/docs/content-lake/exporting-data), [Tally export instructions](https://tally.so/help/faq)

Keep lead exports and other private records outside public repositories and the public website CMS dataset. Establish a backup/export process appropriate to the selected service and retention needs. Verify a restore or migration before relying on a backup.

## Moving to a custom implementation

Build the replacement behind the relevant interface when there is a concrete reason, such as recurring cost, a missing feature, or control over the workflow.

- An owned inquiry API must validate and persist a submission before acknowledging it, prevent duplicate processing where retries occur, and handle notifications separately from the durable lead record.
- An owned CMS needs a browser editor as well as content storage, authentication, permissions, publishing, previews, image management, and backups.
- An owned scheduler needs availability, time zones, calendar synchronization, conflict handling, cancellations, and reminders. Existing bookings require an explicit transition plan.
- An owned analytics service needs collection, storage, reporting, consent behavior, and maintenance. Preserve metric definitions and account for gaps when comparing old and new reports.

A custom backend requires a server, function runtime, or other appropriate compute service. The public marketing site can remain static while communicating with that backend. Moving static files between hosts and replacing a backend are separate changes.

## Replacement procedure

1. Define the required capabilities and document any behavior that will change.
2. Provision or build the real replacement and implement the existing Mindlab interface.
3. Export, transform, and import content or records. Verify IDs, URLs, rich text, images, counts, timestamps, and important fields.
4. Test the new adapter with representative success and failure cases, and verify the end-to-end user flow.
5. Switch configuration in a preview environment and review the resulting site and integration behavior.
6. Cut over with a plan for submissions or bookings arriving during the transition. Keep a rollback path and retained records until verification is complete.

Useful acceptance checks include unchanged package facts after a CMS replacement, no lost form fields, no false submission success, consistent analytics event names, a working confirmation and booking path, and preserved public page URLs.

## Launch implementation scope

Start with one content adapter, one inquiry integration component, one booking component, one analytics wrapper, and a static deployment pipeline. Keep interfaces narrow and document supported capabilities. Add further adapters when a provider change is actually chosen.

Modularity reduces the website changes required for a replacement. It does not remove the work of data migration, editor retraining, provider configuration, backend operation, or feature differences.
