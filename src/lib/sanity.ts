import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// TODO: Replace these with your actual Sanity project values
const SANITY_PROJECT_ID = "YOUR_PROJECT_ID";
const SANITY_DATASET = "production";

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// Types
export interface SanityPost {
  _id: string;
  _type: "blogPost" | "newsArticle" | "pressRelease";
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any[];
  coverImage?: any;
  author?: string;
  categories?: string[];
  source?: string;
}

// GROQ Queries
const postFields = `
  _id,
  _type,
  title,
  slug,
  publishedAt,
  excerpt,
  coverImage,
  author,
  categories,
  source
`;

const postWithBodyFields = `
  ${postFields},
  body
`;

export async function getAllInsights(): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type in ["blogPost", "newsArticle", "pressRelease"]] | order(publishedAt desc) {${postFields}}`
  );
}

export async function getInsightsByType(type: string): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type == $type] | order(publishedAt desc) {${postFields}}`,
    { type }
  );
}

export async function getLatestInsights(limit = 3): Promise<SanityPost[]> {
  return sanityClient.fetch(
    `*[_type in ["blogPost", "newsArticle", "pressRelease"]] | order(publishedAt desc) [0...$limit] {${postFields}}`,
    { limit }
  );
}

export async function getPostBySlug(type: string, slug: string): Promise<SanityPost | null> {
  const posts = await sanityClient.fetch(
    `*[_type == $type && slug.current == $slug][0] {${postWithBodyFields}}`,
    { type, slug }
  );
  return posts || null;
}

export function isConfigured(): boolean {
  return SANITY_PROJECT_ID !== "YOUR_PROJECT_ID";
}
