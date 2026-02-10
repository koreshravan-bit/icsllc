

## Add Contentful Credentials and Remove Press Releases

### 1. Update Contentful credentials in `src/lib/contentful.ts`
- Set Space ID to `jxvlv4w2gttw`
- Set Delivery API token to `S8XbZPeTUyxTpYpIgzbA4KKfouk1vlsL8IaDzxIGcUc`
- Remove all `pressRelease` references from `getAllInsights()`, `getLatestInsights()`, and related logic

### 2. Update `src/pages/Insights.tsx`
- Remove the "Press" tab from the TabsList (change from 4 columns to 3)
- Remove the `pressRelease` mapping in the tab query logic

### 3. Update `src/components/insights/InsightCard.tsx`
- Remove the `pressRelease` entry from the `typeConfig` object

### 4. Update `src/pages/InsightDetail.tsx`
- Remove the `press` entry from the `typeMap` object

### 5. Files unchanged
- `LatestInsights.tsx` -- it calls `getLatestInsights()` which will automatically exclude press releases after the contentful.ts update
- `RichTextRenderer.tsx` -- no changes needed
- Routes in `App.tsx` -- the `/insights/:type/:slug` route still works for blog and news

