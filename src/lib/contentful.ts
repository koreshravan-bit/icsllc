// Replace these with your Contentful Space ID and Content Delivery API token
const CONTENTFUL_SPACE_ID = "";
const CONTENTFUL_ACCESS_TOKEN = "";

const BASE_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master`;

// Unified post interface
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

async function fetchEntries(contentType: string, limit = 100, extraParams = ""): Promise<any> {
  const url = `${BASE_URL}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&content_type=${contentType}&order=-fields.publishedAt&limit=${limit}&include=1${extraParams}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Contentful API error: ${res.status}`);
  return res.json();
}

function resolveAssetUrl(asset: any): string | undefined {
  if (!asset?.fields?.file?.url) return undefined;
  return `https:${asset.fields.file.url}`;
}

function mapEntry(item: any, includes: any): ContentfulPost {
  const fields = item.fields;
  const contentTypeId = item.sys.contentType.sys.id;

  let coverImage: string | undefined;
  if (fields.coverImage?.sys?.id && includes?.Asset) {
    const asset = includes.Asset.find((a: any) => a.sys.id === fields.coverImage.sys.id);
    coverImage = resolveAssetUrl(asset);
  }

  return {
    _id: item.sys.id,
    _type: contentTypeId as ContentfulPost["_type"],
    title: fields.title || "",
    slug: { current: fields.slug || "" },
    publishedAt: fields.publishedAt || item.sys.createdAt,
    excerpt: fields.excerpt || "",
    body: fields.body || null,
    coverImage,
    author: fields.author,
    categories: fields.categories,
    source: fields.source,
  };
}

export async function getAllInsights(): Promise<ContentfulPost[]> {
  if (!isConfigured()) return [];
  const [blogs, news, press] = await Promise.all([
    fetchEntries("blogPost"),
    fetchEntries("newsArticle"),
    fetchEntries("pressRelease"),
  ]);

  const all = [
    ...blogs.items.map((i: any) => mapEntry(i, blogs.includes)),
    ...news.items.map((i: any) => mapEntry(i, news.includes)),
    ...press.items.map((i: any) => mapEntry(i, press.includes)),
  ].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return all;
}

export async function getInsightsByType(type: string): Promise<ContentfulPost[]> {
  if (!isConfigured()) return [];
  const data = await fetchEntries(type);
  return data.items.map((i: any) => mapEntry(i, data.includes));
}

export async function getLatestInsights(limit = 3): Promise<ContentfulPost[]> {
  if (!isConfigured()) return [];
  const [blogs, news, press] = await Promise.all([
    fetchEntries("blogPost", limit),
    fetchEntries("newsArticle", limit),
    fetchEntries("pressRelease", limit),
  ]);

  return [
    ...blogs.items.map((i: any) => mapEntry(i, blogs.includes)),
    ...news.items.map((i: any) => mapEntry(i, news.includes)),
    ...press.items.map((i: any) => mapEntry(i, press.includes)),
  ]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export async function getPostBySlug(type: string, slug: string): Promise<ContentfulPost | null> {
  if (!isConfigured()) return null;
  const data = await fetchEntries(type, 1, `&fields.slug=${slug}`);
  if (data.items.length === 0) return null;
  return mapEntry(data.items[0], data.includes);
}

export function isConfigured(): boolean {
  return CONTENTFUL_SPACE_ID.length > 0 && CONTENTFUL_ACCESS_TOKEN.length > 0;
}
