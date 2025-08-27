# Deploying to Vercel

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket
3. Connect your Git provider

### Step 2: Import Your Project

1. Click "New Project" on your Vercel dashboard
2. Import your repository (`lenggah.com`)
3. Vercel will automatically detect it's a Next.js project

### Step 3: Configure Build Settings

Vercel should automatically detect these settings, but verify:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install`

### Step 4: Environment Variables (if needed)

- Add any environment variables in the "Environment Variables" section
- For this project, no additional env vars are needed

### Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm i -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy from Project Directory

```bash
cd /Users/khaeransori/Downloads/project\ 3
vercel
```

Follow the prompts:

- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N** (for first deployment)
- What's your project's name? `lenggah-com` (or any name you prefer)
- In which directory is your code located? `./`

### Step 4: Production Deployment

After the initial deployment, deploy to production:

```bash
vercel --prod
```

## Method 3: GitHub Integration (Automatic Deployments)

### Step 1: Push to GitHub

Make sure your code is pushed to GitHub:

```bash
git add .
git commit -m "Configure for static deployment"
git push origin main
```

### Step 2: Connect Repository

1. Go to Vercel dashboard
2. Click "New Project"
3. Select your GitHub repository
4. Configure as described in Method 1

### Benefits of GitHub Integration:

- **Automatic deployments**: Every push to main branch triggers a deployment
- **Preview deployments**: Pull requests get preview URLs
- **Rollback capability**: Easy to rollback to previous deployments

## Domain Configuration

### Step 1: Add Custom Domain

1. Go to your project dashboard on Vercel
2. Click "Domains"
3. Add your domain: `lenggah.com`

### Step 2: DNS Configuration

Update your domain's DNS settings:

- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com

For apex domain (lenggah.com):

- **Type**: A
- **Name**: @
- **Value**: 76.76.19.19

## Vercel Configuration Features

The `vercel.json` file includes:

- ✅ Security headers (XSS protection, etc.)
- ✅ Cache optimization for static assets
- ✅ Proper framework detection
- ✅ Build configuration

## Monitoring & Analytics

### Enable Vercel Analytics

1. Go to project dashboard
2. Click "Analytics" tab
3. Enable Web Analytics
4. Add analytics script to your site (optional)

### Speed Insights

1. Go to project dashboard
2. Click "Speed Insights" tab
3. Enable to monitor Core Web Vitals

## Environment-Specific Deployments

### Production

- Branch: `main`
- Domain: `lenggah.com`
- Command: `vercel --prod`

### Staging (optional)

- Branch: `staging`
- Domain: `staging.lenggah.com`
- Automatic preview deployments

## Troubleshooting

### Common Issues:

1. **Build Fails**

   ```bash
   # Test build locally first
   npm run build
   ```

2. **Static Export Issues**

   - Ensure no dynamic API routes
   - Check `next.config.js` has `output: 'export'`

3. **Domain Not Working**
   - Check DNS propagation (up to 48 hours)
   - Verify DNS settings in your domain provider

### Build Logs

- Check build logs in Vercel dashboard
- Look for errors in the Functions or Build tabs

## Performance Tips

1. **Enable Compression**: Automatic with Vercel
2. **Image Optimization**: Already configured with `unoptimized: true`
3. **CDN**: Automatic global CDN distribution
4. **Caching**: Configured in `vercel.json`

## Cost

- **Hobby Plan**: Free for personal projects
- **Pro Plan**: $20/month for commercial use
- **Enterprise**: Custom pricing

Your static site should deploy very efficiently and stay within free tier limits.

## Next Steps After Deployment

1. ✅ Test all pages and functionality
2. ✅ Verify OG images work (create actual images)
3. ✅ Set up custom domain
4. ✅ Enable analytics
5. ✅ Monitor Core Web Vitals
6. ✅ Set up automatic deployments via GitHub
