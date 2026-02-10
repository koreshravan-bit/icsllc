

## Replace Sanity with Contentful for Blog, News, and Press Releases

### Why Contentful?
Contentful provides a fully visual, web-based content editor. You can create content types, add fields, and publish content entirely through the Contentful web dashboard -- no terminal, no code, no GitHub needed.

### What You Need to Do (on contentful.com)

1. **Sign up** at [contentful.com](https://www.contentful.com) (free tier: 5 users, 25K records)
2. **Create a Space** (e.g., "ICS LLC Website")
3. **Create 3 Content Models** via the web UI (Content Model tab, click "Add Content Type"):

   **Blog Post**
   - title (Short text)
   - slug (Short text)
   - author (Short text)
   - publishedAt (Date & time)
   - excerpt (Short text)
   - body (Rich text)
   - coverImage (Media)
   - categories (Short text, list)

   **News Article**
   - title, slug, publishedAt, excerpt, body, coverImage (same as above)
   - source (Short text)

   **Press Release**
   - title, slug, publishedAt, excerpt, body, coverImage (same as above)

4. **Get your credentials** from Settings > API Keys > Add API Key:
   - Space ID
   - Content Delivery API access token (read-only, safe to embed in frontend code)

### What I Will Change in Code

#### 1. Remove Sanity Dependencies
- Uninstall `@sanity/client`, `@sanity/image-url`, `@portabletext/react`
- Install `contentful` and `@contentful/rich-text-react-renderer`

#### 2. Replace `src/lib/sanity.ts` with `src/lib/contentful.ts`
- Configure the Contentful client with your Space ID and Delivery API token
- Create query helpers: `getAllInsights()`, `getInsightsByType()`, `getLatestInsights()`, `getPostBySlug()`
- Map Contentful entry types to the same internal post interface

#### 3. Update Components
- **InsightCard.tsx**: Update imports to use new Contentful types and image URLs (Contentful uses `https://images.ctfassets.net/...` URLs directly)
- **RichTextRenderer.tsx**: Replace Portable Text renderer with `@contentful/rich-text-react-renderer` which renders Contentful's rich text format
- **LatestInsights.tsx**: Update imports from sanity to contentful

#### 4. Update Pages
- **Insights.tsx**: Switch imports from sanity to contentful
- **InsightDetail.tsx**: Switch imports and update rich text rendering

#### 5. Keep Everything Else Unchanged
- Routes in `App.tsx` stay the same
- Navigation stays the same
- Page structure and design stay the same
- The "Insights" link, homepage section, and all styling remain identical

### Technical Notes

- Contentful's Delivery API token is a **read-only, publishable key** -- safe to include in frontend code (no backend/edge function needed)
- Rich text rendering uses `@contentful/rich-text-react-renderer` which provides similar component customization to what we had with Portable Text
- Image URLs come directly from Contentful's CDN, with query parameters for resizing (e.g., `?w=600&h=340&fit=fill`)
- The `isConfigured()` check will work the same way -- showing "Coming Soon" until credentials are set

