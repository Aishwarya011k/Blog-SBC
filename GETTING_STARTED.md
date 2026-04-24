# Smart Brain Creations Blog

A professional blog website for Smart Brain Creations edtech startup.

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Adding Blog Posts

Create markdown files in `content/posts/` with the following structure:

```markdown
---
title: Article Title
slug: article-slug
date: 2024-04-20
category: Education
author: Author Name
excerpt: Brief summary of the article
tags:
  - tag1
  - tag2
---

# Article Content

Your markdown content here...
```

## Pages

- **Home** (`/`) - Featured articles and hero section
- **Blog** (`/blog`) - All articles with search and filters
- **Blog Post** (`/blog/[slug]`) - Individual article page
- **Category** (`/category/[category]`) - Posts by category
- **About** (`/about`) - About Smart Brain Creations
- **Privacy Policy** (`/privacy-policy`) - Privacy information

## Features

- 📱 Fully responsive design
- 🔍 Search and category filtering
- 📝 Markdown blog posts
- 🎨 Purple color scheme (#6B21A8)
- 📊 SEO optimized
- 📢 Social sharing buttons
- 💌 Newsletter subscription
- 🏷️ Reading time indicator
- 👤 Author information
- 🔗 Breadcrumb navigation
- 📊 Google AdSense ready

## Customization

### Colors
Edit `tailwind.config.ts` to change the primary color from purple (#6B21A8) to your preferred color.

### Content
- Add new blog posts in `content/posts/`
- Update company information in `app/about/page.tsx`
- Modify footer links in `components/Footer.tsx`

### Configuration
- Update AdSense ID in `app/layout.tsx`
- Set `NEXT_PUBLIC_BASE_URL` in `.env.local`

## Deployment

Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

Or use any Node.js hosting platform.

## Project Structure

```
app/                 # Pages and layouts
├── page.tsx        # Home page
├── blog/           # Blog pages
├── category/       # Category pages
├── about/          # About page
└── privacy-policy/ # Privacy page

components/         # React components
├── Navbar.tsx
├── Footer.tsx
├── BlogCard.tsx
└── ...

content/
└── posts/          # Markdown blog posts

lib/                # Utilities
├── blog.ts         # Blog functions
├── types.ts        # TypeScript types
└── constants.ts    # Constants
```

## Support

For information about Smart Brain Creations, visit [smartbraincreations.com](https://smartbraincreations.com)

## License

© 2024 Smart Brain Creations. All rights reserved.
