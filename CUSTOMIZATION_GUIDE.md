# Portfolio Customization Guide

This guide will help you customize your portfolio with your actual information from your resume.

## 📋 Step-by-Step Customization

### 1. Update Your Profile Picture

Replace the `public/me.jpeg` file with your own profile photo. The image should be:
- A professional headshot (similar to LinkedIn profile picture)
- Square dimensions (e.g., 400x400px or larger)
- Good quality and well-lit

### 2. Update Hero Section

**File**: `components/Hero.tsx`

Find this section and update:
```typescript
<motion.h1>
  Hello, I'm <span className="text-accent">Kamrul Hasan</span>
</motion.h1>
```

Replace with your name, and update the description paragraphs below:

```typescript
<motion.p>
  Your professional headline here - something catchy about your specialty
</motion.p>

<motion.p>
  Your detailed description - mention key technologies and your expertise
</motion.p>
```

### 3. Update About Section

**File**: `components/About.tsx`

Replace the paragraph content with information from your resume:
- Background and experience summary
- Your professional philosophy or approach
- Interests outside of work
- Call to action

### 4. Update Skills Section

**File**: `components/Skills.tsx`

Find the `skills` array and update it:

```typescript
const skills = [
  {
    category: 'Frontend', // Change category name
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      // Add your actual skills here
    ],
  },
  {
    category: 'Backend',
    items: [
      // Update with your backend skills
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      // Update with your tools
    ],
  },
]
```

**Available Icons**: Check `react-icons` library for available icons:
- `SiJavascript`, `SiTypescript`, `SiPython`, `SiJava`, etc. (programming languages)
- `SiReact`, `SiVue`, `SiAngular` (frontend frameworks)
- `SiNodedotjs`, `SiDjango`, `SiSpringboot` (backend frameworks)
- `SiPostgresql`, `SiMongodb`, `SiMysql` (databases)
- `SiGit`, `SiDocker`, `SiKubernetes` (DevOps tools)

### 5. Update Projects Section

**File**: `components/Projects.tsx`

Replace the `projects` array with your actual projects:

```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Brief description of what the project does and its impact',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'https://example.com/project-image.jpg', // or local image path
    liveUrl: 'https://project-live-link.com',
    codeUrl: 'https://github.com/yourusername/project-repo',
  },
  // Add more projects...
]
```

**Tips**:
- Use 3-6 of your best projects
- Include real live links and GitHub repositories
- Write compelling, concise descriptions
- Use project screenshots or placeholder images

### 6. Update Experience Section

**File**: `components/Experience.tsx`

Update the `experiences` array with your work history:

```typescript
const experiences = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    period: '2023 - Present',
    description: 'What you did, key accomplishments, and impact',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
  },
  // Add all your previous positions
]
```

**Tips**:
- List positions in reverse chronological order (newest first)
- Include start and end dates
- Highlight key achievements and technologies used
- Include 2-3 relevant positions from your resume

### 7. Update Contact Information

**File**: `components/Contact.tsx`

Update these contact details:

```typescript
// Find and update:
href="mailto:kamrul.h456@gmail.com"
// Replace with your actual email

href="tel:+1234567890"
// Replace with your phone number
```

Update social media links:
```typescript
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername', // Your GitHub URL
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername', // Your LinkedIn URL
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername', // Your Twitter URL
  },
]
```

### 8. Update Site Metadata

**File**: `app/layout.tsx`

Update the metadata for SEO:

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Job Title',
  description: 'Brief description about yourself and your expertise',
}
```

### 9. (Optional) Update Navigation

**File**: `components/Navigation.tsx`

The navigation is auto-linked to sections. If you want to change the section order or add new sections, update:

```typescript
const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  // Update as needed
]
```

Then make sure corresponding section `id` attributes exist in your components.

## 🎨 Color Customization

**File**: `tailwind.config.js`

To change the accent color (currently blue), update:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark background
      secondary: '#1e293b',    // Lighter background
      accent: '#3b82f6',       // Blue accent - CHANGE THIS
    },
  },
}
```

Popular color options:
- **Blue**: `#3b82f6`
- **Purple**: `#a855f7`
- **Green**: `#10b981`
- **Red**: `#ef4444`
- **Orange**: `#f97316`

## 🚀 Environment Variables

**File**: `.env.local`

If you want to add email functionality (optional):

```
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## ✅ Pre-Launch Checklist

Before deploying your portfolio:

- [ ] Replaced all placeholder images with actual ones
- [ ] Updated all personal information (name, email, phone)
- [ ] Updated skills with your actual technologies
- [ ] Added 3-6 of your best projects
- [ ] Updated work experience
- [ ] Updated social media links
- [ ] Fixed all links (projects, GitHub, LinkedIn, etc.)
- [ ] Verified all sections display correctly
- [ ] Tested responsive design on mobile
- [ ] Run `npm run build` to check for errors

## 📱 Testing Your Portfolio

### Local Testing
```bash
npm run dev
# Visit http://localhost:3000
# Test all links, scroll, animations
# Check mobile responsive design
```

### Before Deployment
```bash
npm run build
npm start
# Test the production build locally
```

## 🚀 Deployment

See the main README.md for deployment instructions on Vercel, Netlify, or GitHub Pages.

## 💡 Tips for a Great Portfolio

1. **Keep it Fresh**: Update projects and experience regularly
2. **Use Real Links**: Make sure all GitHub and live links work
3. **Professional Content**: Use the same professional photo as LinkedIn
4. **Consistent Branding**: Use your resume's tone and style
5. **Mobile First**: Always test on mobile devices
6. **Fast Loading**: Optimize images before uploading
7. **SEO Friendly**: Keep metadata and descriptions keyword-rich
8. **Call to Action**: Make it easy for people to contact you

## 🆘 Common Issues

### Images Not Loading
- Check file paths are correct
- For local images, place them in the `public` folder
- Use `/filename.jpg` format for local files

### Styling Issues
After changing colors or styles, restart the dev server:
```bash
npm run dev
```

### Build Errors
Make sure you have Node.js 18+ installed:
```bash
node --version
```

## 📞 Need Help?

- Check the main README.md for more information
- Review Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- See Framer Motion docs: https://www.framer.com/motion/

Happy customizing! 🎉
