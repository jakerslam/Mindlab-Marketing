import { websiteSchema, type WebsiteContent } from '@/domain/content';
import { projectConfig } from './project';

// All provider record shapes and queries stay inside this adapter.
export async function getSanityContent(): Promise<WebsiteContent> {
  const project = import.meta.env.SANITY_PROJECT_ID || projectConfig.sanity.projectId;
  const dataset = import.meta.env.SANITY_DATASET || projectConfig.sanity.dataset;
  if (!project || !/^[a-z0-9]+$/.test(project) || !/^[a-z0-9_-]+$/.test(dataset)) {
    throw new Error('Sanity selected: set a valid SANITY_PROJECT_ID and SANITY_DATASET.');
  }
  const query = `{
    "settings": *[_type == "siteSettings" && _id == "site-settings"][0]{name, description},
    "home": *[_type == "homePage" && _id == "home-page"][0]{eyebrow, title, description},
    "packages": *[_type == "servicePackage"] | order(number asc) {id, number, name, tagline, description, price, currency, cadence, setup, timeline, deliverables, exclusions, idealFor},
    "industries": *[_type == "industry"] | order(order asc) {id, name, audience, examples, challenge, approach, action},
    "projects": *[_type == "project"] | order(order asc) {id, slug, title, label, audience, service, summary, headline, visual, context, decisions[]{title, body}, takeaway, objective, "artifacts": coalesce(artifacts[]{id, title, format, introduction, items[]{label, title, body}}, []), measurement{approach, metrics}, "relatedPackages": coalesce(relatedPackages, [])},
    "guides": *[_type == "guide"] | order(order asc) {slug, title, category, summary, introduction, sections[]{heading, paragraphs, "list": coalesce(list, [])}, relatedPackage},
    "faqs": *[_type == "faq"] | order(order asc) {question, answer}
  }`;
  const url = `https://${project}.api.sanity.io/v2026-11-01/data/query/${dataset}?perspective=published&query=${encodeURIComponent(query)}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Sanity content request failed (${response.status}). No local fallback was used.`);
  const body = await response.json();
  return websiteSchema.parse(body.result);
}
