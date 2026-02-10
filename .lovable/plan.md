

## Sanity.io CMS Integration for Blog, News, and Press Releases

### What You Need to Do First (Outside Lovable)

1. Go to [sanity.io](https://www.sanity.io) and sign up (free tier: 3 users, 500K API requests/month)
2. Create a new project -- name it something like "ICS LLC Website"
3. Note down your **Project ID** and **Dataset** name (found in project settings)
4. Under Settings > API > CORS Origins, add:
   - `https://icsllc.ai`
   - `https://int-in.lovable.app`
   - `http://localhost:8080`
5. For the Sanity Studio (where you edit content), you can deploy it separately to `cms.icsllc.ai` or use Sanity's hosted studio

### What I Will Build in Lovable

#### 1. Sanity Client Setup
- Install `@sanity/client` and `@sanity/image-url` packages
- Create `src/lib/sanity.ts` with the client configuration (Project ID + Dataset)
- Create query helpers for fetching posts, news, and press releases

#### 2. Content Types (you define these in Sanity Studio)
I will provide you the exact schema files to add to your Sanity Studio project:

- **Blog Post**: title, slug, author, publishedAt, excerpt, body (rich text), coverImage, categories
- **News Article**: title, slug, publishedAt, excerpt, body, coverImage, source
- **Press Release**: title, slug, publishedAt, excerpt, body, coverImage

#### 3. New Pages (4 total)

| Page | Route | Description |
|------|-------|-------------|
| Insights Hub | `/insights` | Combined listing of blogs, news, and press releases with tab filtering |
| Blog Detail | `/insights/blog/:slug` | Individual blog post page |
| News Detail | `/insights/news/:slug` | Individual news article page |
| Press Release Detail | `/insights/press/:slug` | Individual press release page |

#### 4. Navigation Update
- Add "Insights" link to the Navbar between "Industries" and "Contact"

#### 5. Homepage Section
- Add an "Latest Insights" section on the homepage showing the 3 most recent posts

#### 6. Components
- `InsightCard` -- reusable card for listing posts (similar to existing ServiceCard/IndustryCard)
- `RichTextRenderer` -- renders Sanity's Portable Text (rich text) content
- `InsightFilters` -- tab component to filter between Blog / News / Press Releases / All

### Technical Details

**Data Fetching**: Uses `@tanstack/react-query` (already installed) to fetch and cache content from Sanity's CDN API. Content loads fast since Sanity serves from a global CDN.

**Routing**: Adds 4 new routes to `App.tsx` following the existing pattern.

**Fallback**: While Sanity is not yet configured or has no content, pages will show a friendly "No posts yet" state.

**SEO-friendly slugs**: Blog URLs will be like `/insights/blog/how-ai-transforms-healthcare`

### Content Editing Workflow (for your team)
1. Log into Sanity Studio (hosted at your chosen URL)
2. Create/edit a blog post, news article, or press release using the visual editor
3. Hit "Publish" -- changes appear on the live site within seconds (no code changes needed)

### After Approval
Once I build the integration, you will need to:
1. Set up a Sanity Studio project (I will provide the schema files to copy in)
2. Share your Project ID and Dataset name so I can configure the client
3. Create your first piece of content in Sanity Studio to test

