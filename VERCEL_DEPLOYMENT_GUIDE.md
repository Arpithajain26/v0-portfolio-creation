# Deployment Guide for Arpitha's Portfolio

This guide will help you deploy your portfolio to Vercel, a modern hosting platform optimized for Next.js applications.

## Prerequisites

Before you start, make sure you have:
- A GitHub account (https://github.com)
- A Vercel account (https://vercel.com) - free tier available
- Your portfolio code pushed to a GitHub repository

## Step 1: Prepare Your GitHub Repository

### Option A: If you haven't created a GitHub repo yet

1. Go to https://github.com/new
2. Create a new repository named `portfolio` (or any name you prefer)
3. Initialize it with:
   - Add a README (optional)
   - Add .gitignore for Node.js
   - Choose a license (optional)
4. Click "Create repository"

### Option B: Push your existing code to GitHub

1. Open terminal/command prompt in your portfolio folder
2. Run these commands:

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username and `portfolio` with your repo name.

## Step 2: Deploy on Vercel

### Method 1: Using Vercel Dashboard (Recommended)

1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. You'll see "Import Project" - click it
5. Find your portfolio repository and click "Import"
6. Configure project settings:
   - **Framework**: Next.js (should auto-detect)
   - **Root Directory**: ./ (default)
   - **Build Command**: `next build` (should auto-detect)
   - **Output Directory**: .next (should auto-detect)
7. Click "Deploy"
8. Wait for deployment to complete (usually 1-2 minutes)

### Method 2: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. In your portfolio directory, run:
```bash
vercel
```

3. Follow the prompts:
   - Link to an existing project or create a new one
   - Set project name (e.g., "arpitha-portfolio")
   - Confirm build settings
4. Done! Your site is live

## Step 3: Set Custom Domain (Optional)

### Using Vercel Domain
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Vercel will provide a free `.vercel.app` domain

### Using Custom Domain
1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Go to your project settings → "Domains"
3. Add your custom domain
4. Update DNS records at your domain registrar with Vercel's nameservers
5. Verify domain ownership

## Step 4: After Deployment

### Automatic Updates
- Every time you push to GitHub, Vercel automatically redeploys
- Just commit and push your changes:

```bash
git add .
git commit -m "Update portfolio"
git push
```

### Monitoring Your Site
1. Check deployment status at https://vercel.com/dashboard
2. View live site at your Vercel URL or custom domain
3. Check analytics and performance metrics

## Common Issues & Solutions

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are listed in package.json
- Try running `npm install` locally first

### 404 Errors
- Clear browser cache (Ctrl+Shift+Delete)
- Check that all page routes are correct

### API Routes Not Working
- Ensure API route files are in `/app/api/` directory
- Restart the Vercel deployment

## Environment Variables (If Needed)

If you add environment variables in the future:

1. Go to Project Settings → "Environment Variables"
2. Add your variables (KEY=VALUE)
3. Redeploy the project

## Useful Links

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Your Portfolio GitHub: https://github.com/YOUR_USERNAME/portfolio

## Next Steps

Once deployed:
1. Share your portfolio URL with potential employers
2. Update your resume with your portfolio link
3. Share on LinkedIn, Twitter, and other platforms
4. Continue updating with new projects and achievements

---

**Questions or Issues?**
- Visit Vercel Support: https://vercel.com/support
- Check deployment logs for detailed error messages
