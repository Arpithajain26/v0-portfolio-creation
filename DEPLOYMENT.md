# Deployment Guide for Vercel

## Prerequisites
- GitHub account
- Vercel account (free tier available)
- Git installed on your machine

## Step-by-Step Deployment Instructions

### 1. Prepare Your Local Repository
\`\`\`bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio commit"
\`\`\`

### 2. Push to GitHub
\`\`\`bash
# Create a new repository on GitHub
# Then add the remote and push
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
\`\`\`

### 3. Deploy on Vercel

**Option A: Using Vercel CLI (Recommended)**
\`\`\`bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Which scope? (select your account)
# - Project name? (default: portfolio-creation)
# - Detected framework? (should detect Next.js)
# - Root directory? (default: ./)
\`\`\`

**Option B: Using Vercel Dashboard**
1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure project settings:
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
5. Click "Deploy"

### 4. Custom Domain (Optional)
1. In Vercel Dashboard, go to your project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions from Vercel

### 5. Environment Variables (If Needed)
1. Go to Project Settings → Environment Variables
2. Add any required variables
3. Redeploy with `vercel --prod`

## Accessing Your Site
After deployment:
- Default URL: https://portfolio-creation.vercel.app
- GitHub Repository: https://github.com/YOUR_USERNAME/portfolio-website
- View deployments in Vercel Dashboard for production and preview URLs

## Making Updates

### Push to GitHub
\`\`\`bash
# Make your changes locally
git add .
git commit -m "Describe your changes"
git push origin main
\`\`\`

### Automatic Deployment
- Vercel automatically redeploys when you push to main branch
- You can view deployment status in Vercel Dashboard
- Each commit gets a unique preview URL

### Manual Redeploy
\`\`\`bash
vercel --prod
\`\`\`

## Project Structure
\`\`\`
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home/Portfolio page
│   ├── globals.css         # Global styles
│   ├── resume/
│   │   └── page.tsx        # Resume page
│   └── biodata/
│       └── page.tsx        # Bio-data page
├── components/ui/          # UI components
├── public/                 # Static assets
│   ├── arpitha-photo.jpg   # Profile photo
│   └── [other images]
├── package.json            # Dependencies
├── next.config.mjs         # Next.js config
└── tsconfig.json           # TypeScript config
\`\`\`

## Pages & URLs
- **Home**: `/` - Main portfolio page with all sections
- **Resume**: `/resume` - Detailed resume with download option
- **Bio-data**: `/biodata` - Personal information and background
- **Contact**: Embedded in home page

## Troubleshooting

### Build Errors
\`\`\`bash
# Clean and rebuild locally
rm -rf .next
npm run build
\`\`\`

### Preview Not Working
1. Check that all images exist in `/public` folder
2. Verify Next.js version compatibility
3. Check for TypeScript errors: `npm run build`

### Images Not Loading
- Ensure images are in `/public` folder
- Use relative paths like `/image-name.jpg`
- Check file names for correct case sensitivity

## Performance Optimization
- Images are optimized automatically by Next.js
- Static assets cached by Vercel CDN
- Deployments are edge-optimized worldwide
- Average response time: <100ms

## Support
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- For issues: https://vercel.com/help

## Additional Commands

\`\`\`bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Deploy preview
vercel

# Deploy production
vercel --prod
\`\`\`

---
Created for Arpitha Jain's Portfolio Website
