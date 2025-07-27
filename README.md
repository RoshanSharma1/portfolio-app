# Digital Workbench - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. The website follows the "Digital Workbench" concept - a clean, organized space showcasing technical expertise and project work.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with excellent UX
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structured content
- **Dark Mode Ready**: Built-in dark mode support
- **Accessible**: Following accessibility best practices
- **Modular**: Easy to customize and extend

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog listing page
│   ├── projects/          # Projects listing page
│   │   └── [slug]/       # Individual project pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Navigation component
│   ├── hero-section.tsx  # Homepage hero
│   ├── featured-projects.tsx # Featured projects section
│   └── footer.tsx        # Footer component
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/app/layout.tsx` - Update metadata (title, description, etc.)
- `src/components/hero-section.tsx` - Update professional summary and skills
- `src/components/footer.tsx` - Update social links and contact information
- `src/app/about/page.tsx` - Update education, certifications, and skills

### Projects

Add your projects by:

1. **Adding to the projects array** in `src/app/projects/page.tsx`
2. **Creating individual project pages** in `src/app/projects/[slug]/page.tsx`
3. **Updating featured projects** in `src/components/featured-projects.tsx`

### Blog Posts

Add your blog posts by:

1. **Adding to the blog posts array** in `src/app/blog/page.tsx`
2. **Creating individual blog post pages** in `src/app/blog/[slug]/page.tsx`

### Styling

The website uses Tailwind CSS with a custom design system. You can customize:

- **Colors**: Update CSS variables in `src/app/globals.css`
- **Components**: Modify shadcn/ui components in `src/components/ui/`
- **Layout**: Adjust spacing and layout in component files

## 📝 Content Management

For a production site, consider:

1. **Headless CMS**: Integrate with Strapi, Sanity, or Contentful
2. **Markdown Files**: Use MDX for blog posts and project descriptions
3. **Database**: Use PostgreSQL or MongoDB for dynamic content

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Components

1. **shadcn/ui components**: `npx shadcn@latest add [component-name]`
2. **Custom components**: Create in `src/components/`
3. **Pages**: Create in `src/app/` following Next.js App Router conventions

## 🎯 Design Philosophy

The website follows the "Digital Workbench" concept:

- **Clean Organization**: Well-structured content and navigation
- **Professional Presentation**: Modern, minimalist design
- **Interactive Elements**: Engaging user experience
- **Scalable Architecture**: Easy to extend and maintain

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
