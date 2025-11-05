# Arpitha Jain - Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript featuring a portfolio, resume, and bio-data pages.

## Features

- **Multi-page website** with home, resume, and bio-data pages
- **Responsive design** that works on all devices (mobile, tablet, desktop)
- **Modern dark theme** with cyan and purple accents
- **Smooth animations** and transitions
- **Download functionality** for resume and bio-data
- **Print-friendly** pages
- **Mobile navigation** with hamburger menu
- **Social media links** integration

## Project Structure

\`\`\`
.
├── index.html           # Home page with portfolio overview
├── resume.html          # Professional resume page
├── biodata.html         # Personal bio-data page
├── styles.css           # All styling (responsive design included)
├── script.js            # JavaScript for interactivity
├── vercel.json          # Vercel deployment configuration
└── README.md            # This file
\`\`\`

## Pages

### Home (index.html)
- Hero section with profile image
- About section
- Featured projects
- Technical skills with progress bars
- Achievements
- Contact information
- Social media links

### Resume (resume.html)
- Professional summary
- Technical skills breakdown
- Project descriptions
- Achievements and certifications
- Education details
- Download and print functionality

### Bio-data (biodata.html)
- Personal information
- Education details
- Interests and expertise
- Hobbies and activities
- Key achievements
- Core skills overview
- Download and print functionality

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with CSS Grid and Flexbox
- **JavaScript** - Interactivity and functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Local Development

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   \`\`\`

2. Open in a local server (recommended):
   \`\`\`bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js (install http-server first)
   npx http-server
   \`\`\`

3. Visit `http://localhost:8000` in your browser

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub**:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git branch -M main
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect the configuration
   - Click "Deploy"

3. **Your site is live!** Vercel will provide you with a URL

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Deploy**:
   \`\`\`bash
   vercel
   \`\`\`

3. Follow the prompts and your site will be deployed

### Option 3: Manual Upload to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → "Import Git Repository"
3. Upload your project files directly
4. Click "Deploy"

## Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (usually 24-48 hours)

## Environment Variables

No environment variables are required for this static website.

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
\`\`\`css
:root {
    --accent-cyan: #06b6d4;
    --accent-purple: #a855f7;
    --accent-orange: #f97316;
}
\`\`\`

### Update Personal Information
Edit the HTML files and update:
- Name and title
- Contact information
- Social media links
- Skills and projects
- Education details

### Add New Projects
Add a new project card to `index.html` in the projects section:
\`\`\`html
<div class="project-card">
    <img src="project-image.png" alt="Project name">
    <h3>Project Name</h3>
    <p>Project description...</p>
    <!-- Add more details -->
</div>
\`\`\`

## Performance Optimization

- Optimized CSS for minimal file size
- Lightweight JavaScript with no external dependencies
- Responsive images for faster loading
- CSS animations using GPU-accelerated properties

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast colors for readability
- Mobile-friendly navigation

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions:
1. Check the README for common solutions
2. Review the code comments
3. Open an issue on GitHub

## Author

**Arpitha Jain C B**
- Email: arpithaammujain39@gmail.com
- LinkedIn: [arpitha-jain-c-b-475438290](https://www.linkedin.com/in/arpitha-jain-c-b-475438290)
- GitHub: [Arpithajain26](https://github.com/Arpithajain26)
- Instagram: [@arpitha._jain](https://www.instagram.com/arpitha._jain)

---

Built with HTML, CSS, and JavaScript | Deployed on Vercel
