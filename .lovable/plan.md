

## Fix GitHub Pages Deployment

### Problem
The `npm ci` command requires `package-lock.json` to be perfectly in sync with `package.json`. Your lockfile has missing/outdated entries, causing the build to fail.

### Solution
Update the workflow file to use `npm install` instead of `npm ci`. This is more forgiving and will generate/update the lockfile as needed.

### Change
**File: `.github/workflows/deploy.yml`**
- Change `run: npm ci` to `run: npm install`

### After Approval
Once this change is deployed:
1. The workflow will automatically re-run on the next push to `main`
2. Or you can manually re-run the failed workflow from the Actions tab
3. The site should build and deploy successfully to `icsllc.ai`

