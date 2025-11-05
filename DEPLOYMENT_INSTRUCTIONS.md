# Deployment Instructions for Vercel

## Prerequisites

Before deploying, make sure you have:
- A GitHub account (for git-based deployment)
- A Vercel account (free at [vercel.com](https://vercel.com))
- All project files ready

## Step-by-Step Deployment Guide

### Step 1: Prepare Your Local Repository

1. Open terminal/command prompt in your project folder
2. Initialize git (if not already done):
   \`\`\`bash
   git init
   \`\`\`

3. Add all files:
   \`\`\`bash
   git add .
   \`\`\`

4. Commit your files:
   \`\`\`bash
   git commit -m "Initial commit: Personal website with resume and biodata"
   \`\`\`

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click "+" icon → "New repository"
3. Name it "portfolio-website" (or your preferred name)
4. Choose "Public" for accessibility
5. Click "Create repository"

### Step 3: Push to GitHub

1. In your terminal, add the remote repository:
   \`\`\`bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   \`\`\`

2. Rename branch to main (if needed):
   \`\`\`bash
   git branch -M main
   \`\`\`

3. Push your code:
   \`\`\`bash
   git push -u origin main
   \`\`\`

### Step 4: Deploy on Vercel

#### Method A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Log in" and use GitHub authentication
3. Click "New Project"
4. Select "Import Git Repository"
5. Find and select your "portfolio-website" repository
6. Click "Import"
7. Vercel will auto-detect your project settings
8. Click "Deploy"
9. Wait for deployment to complete (usually 1-2 minutes)
10. You'll get a live URL like `your-portfolio.vercel.app`

#### Method B: Using Vercel CLI

1. Install Vercel CLI:
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. In your project directory, run:
   \`\`\`bash
   vercel
   \`\`\`

3. Follow the prompts:
   - Connect to GitHub (first time)
   - Select your project
   - Accept default settings
   - Click "Deploy"

4. Your site will be live!

### Step 5: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings"
3. Go to "Domains"
4. Click "Add Domain"
5. Enter your custom domain (e.g., arpithajain.com)
6. Follow DNS configuration instructions:
   - Go to your domain provider (GoDaddy, Namecheap, etc.)
   - Update DNS records with Vercel's values
   - Wait for DNS propagation (24-48 hours)

### Step 6: Update DNS Records

If using a custom domain:

1. **For .com/.net domains**:
   - Go to your domain provider's DNS settings
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Wait for propagation

2. **For root domain**:
   - Add A record with Vercel's IP address
   - Vercel will provide the IP in dashboard

### Step 7: Automatic Deployments

Once deployed, your site will:
- **Automatically update** every time you push to GitHub
- **Generate preview URLs** for pull requests
- **Rollback easily** to previous versions

### Making Updates

To update your website:

1. Make changes locally to HTML/CSS/JS files
2. Commit and push to GitHub:
   \`\`\`bash
   git add .
   git commit -m "Update: Description of changes"
   git push
   \`\`\`

3. Vercel automatically deploys the changes (1-2 minutes)
4. Your live site updates instantly

## Troubleshooting

### Site shows 404 errors
- Make sure `index.html` is in the root directory
- Check `vercel.json` configuration
- Redeploy project

### Styles not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path is correct in HTML
- Verify `styles.css` is deployed

### Images not showing
- Use absolute paths starting with `/`
- Check image files are in project
- Verify image extensions are correct (.jpg, .png, etc.)

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct in provider
- Verify domain is added in Vercel dashboard

### Deployment fails
- Check GitHub repository is public
- Ensure all files are committed
- Review Vercel build logs for errors
- Re-run deployment from Vercel dashboard

## Performance Tips

1. **Optimize images**: Compress before uploading
2. **Minify CSS/JS**: Remove unnecessary characters
3. **Use CDN**: Vercel provides global CDN automatically
4. **Cache headers**: Already optimized by Vercel

## Security

- Vercel provides free SSL/TLS certificate
- Your site uses HTTPS automatically
- Regular security updates
- DDoS protection included

## Monitoring

Check your site's performance:
1. Go to Vercel dashboard
2. Select your project
3. View analytics and performance metrics
4. Monitor deployments and build logs

## Useful Links

- Vercel Documentation: https://vercel.com/docs
- GitHub Pages: https://pages.github.com
- Domain Registrars: GoDaddy, Namecheap, Route53
- DNS Propagation Checker: https://www.whatsmydns.net

## Need Help?

- Vercel Support: https://vercel.com/support
- GitHub Help: https://docs.github.com
- Check project's README.md for more info

---

**Your website is now live and accessible to the world!**
