

## Fix GitHub Pages Blank Page Issue

The blank page on GitHub Pages is caused by two issues: the `CNAME` file not being in the build output, and GitHub Pages not supporting SPA client-side routing. Here's the fix:

### Changes

**1. Move CNAME to `public/` folder**
- Create `public/CNAME` with content `icsllc.ai`
- Delete the root `CNAME` file
- This ensures Vite copies it into the `dist/` folder during build

**2. Create `public/404.html`**
- GitHub Pages serves this file for any unknown route
- It will contain a small script that redirects the browser to `index.html` while preserving the original URL path
- This enables client-side routing (React Router) to work properly on GitHub Pages

### Technical Details

The `404.html` file will use a redirect technique where:
- GitHub Pages serves `404.html` for any route it doesn't recognize (e.g., `/about`, `/services/ai`)
- The script converts the path into a query parameter and redirects to `index.html`
- A corresponding script in `index.html` will restore the original URL before React Router loads

Both `index.html` and `public/404.html` need coordinating scripts for this to work seamlessly.

### After Approval
Once these changes are made in Lovable:
1. Push to GitHub
2. Rebuild and redeploy to GitHub Pages
3. All routes should load correctly

