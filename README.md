# Kamrul Hasan's Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Built-in SEO optimization with Next.js
- **Fast Performance**: Optimized for speed with Next.js and image optimization
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Dark Theme**: Eye-friendly dark theme with blue accent colors
- **Easy to Customize**: Well-organized code structure for easy customization

## 📋 Sections

- **Hero**: Eye-catching hero section with call-to-action buttons
- **About**: Brief introduction about yourself
- **Skills**: Display of technical skills and technologies
- **Projects**: Showcase of featured projects with links
- **Experience**: Timeline of work experience
- **Contact**: Contact information and social links
- **Navigation**: Smooth scrolling navigation bar

## 💻 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons & Font Awesome

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `app/layout.tsx` to update the metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description here',
}
```

### 2. Update Hero Section

Edit `components/Hero.tsx`:
- Change the greeting message
- Update the description
- Modify the button text and click handlers

### 3. Update Skills

Edit `components/Skills.tsx`:
- Add or remove skills from the `skills` array
- Change skill categories and add new ones
- Swap icons from `react-icons` library

### 4. Update Projects

Edit `components/Projects.tsx`:
- Modify the `projects` array with your own projects
- Add project images (replace placeholder URLs)
- Update live and code repository links

### 5. Update Experience

Edit `components/Experience.tsx`:
- Update the `experiences` array with your work history
- Change job titles, companies, and timelines
- Update descriptions and technologies

### 6. Update Contact Information

Edit `components/Contact.tsx`:
- Update email address
- Update phone number
- Update social media links (GitHub, LinkedIn, Twitter, etc.)

### 7. Update Profile Picture

Replace the image at `/public/me.jpeg` with your own profile picture.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Experience.tsx      # Experience section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── public/
│   └── me.jpeg             # Profile picture
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🎯 Next Steps

1. Replace all placeholder content with your actual information
2. Update the color scheme in `tailwind.config.js` if desired
3. Add your profile picture to `/public/me.jpeg`
4. Deploy to Vercel, GitHub Pages, or your preferred hosting platform

## 📦 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Click "Deploy"

### Other Hosting Options

- **GitHub Pages**: Great for static sites
- **Netlify**: Easy deployment with Git integration
- **AWS Amplify**: Scalable and feature-rich

## 🔧 Environment Variables

No environment variables needed for this basic portfolio. If you add features like contact forms or CMS integration, you'll need to add appropriate environment variables.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Kamrul Hasan

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Happy coding! 🚀
