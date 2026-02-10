import { createClient, Entry, Asset } from "contentful";

// Replace these with your Contentful Space ID and Delivery API token
const CONTENTFUL_SPACE_ID = "";
const CONTENTFUL_ACCESS_TOKEN = "";

const client =
  CONTENTFUL_SPACE_ID && CONTENTFUL_ACCESS_TOKEN
    ? createClient({
        space: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
      })
    : null;

// Unified post interface matching the old SanityPost shape
export interface ContentfulPost {
  _id: string;
  _type: "blogPost" | "newsArticle" | "pressRelease";
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  coverImage?: string;
  author?: string;
  categories?: string[];
  source?: string;
}

// Map Contentful content type IDs to our internal types
const contentTypeMap: Record<string, ContentfulPost["_type"]> = {
  blogPost: "blogPost",
  newsArticle: "newsArticle",
  pressRelease: "pressRelease",
};

function mapEntry(entry: Entry<any>): ContentfulPost {
  const fields = entry.fields as any;
  const contentTypeId = entry.sys.contentType.sys.id;

  const coverAsset = fields.coverImage as Asset | undefined;
  const coverUrl = coverAsset?.fields?.file?.url
    ? `https:${(coverAsset.fields.file as any).url}`
    : undefined;

  return {
    _id: entry.sys.id,
    _type: contentTypeMap[contentTypeId] || "blogPost",
    title: fields.title || "",
    slug: { current: fields.slug || "" },
    publishedAt: fields.publishedAt || entry.sys.createdAt,
    excerpt: fields.excerpt || "",
    body: fields.body || null,
    coverImage: coverUrl,
    author: fields.author,
    categories: fields.categories,
    source: fields.source,
  };
}

export async function getAllInsights(): Promise<ContentfulPost[]> {
  if (!client) return [];
  const entries = await client.getEntries({
    content_type: "blogPost,newsArticle,pressRelease".split(",")[0], // fallback
    order: ["-fields.publishedAt"],
    limit: 100,
  });

  // Fetch all three types in parallel
  const [blogs, news, press] = await Promise.all([
    client.getEntries({ content_type: "blogPost", order: ["-fields.publishedAt"], limit: 100 }),
    client.getEntries({ content_type: "newsArticle", order: ["-fields.publishedAt"], limit: 100 }),
    client.getEntries({ content_type: "pressRelease", order: ["-fields.publishedAt"], limit: 100 }),
  ]);

  const all = [...blogs.items, ...news.items, ...press.items]
    .map(mapEntry)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return all;
}

export async function getInsightsByType(type: string): Promise<ContentfulPost[]> {
  if (!client) return [];
  const entries = await client.getEntries({
    content_type: type,
    order: ["-fields.publishedAt"],
    limit: 100,
  });
  return entries.items.map(mapEntry);
}

export async function getLatestInsights(limit = 3): Promise<ContentfulPost[]> {
  if (!client) return [];
  const [blogs, news, press] = await Promise.all([
    client.getEntries({ content_type: "blogPost", order: ["-fields.publishedAt"], limit }),
    client.getEntries({ content_type: "newsArticle", order: ["-fields.publishedAt"], limit }),
    client.getEntries({ content_type: "pressRelease", order: ["-fields.publishedAt"], limit }),
  ]);

  return [...blogs.items, ...news.items, ...press.items]
    .map(mapEntry)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export async function getPostBySlug(type: string, slug: string): Promise<ContentfulPost | null> {
  if (!client) return null;
  const entries = await client.getEntries({
    content_type: type,
    "fields.slug": slug,
    limit: 1,
  });
  if (entries.items.length === 0) return null;
  return mapEntry(entries.items[0]);
}

export function isConfigured(): boolean {
  return CONTENTFUL_SPACE_ID.length > 0 && CONTENTFUL_ACCESS_TOKEN.length > 0;
}
