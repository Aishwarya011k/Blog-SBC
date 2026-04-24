import type { Metadata } from 'next';
import Link from 'next/link';
import AuthorCard from '@/components/AuthorCard';
import Breadcrumb from '@/components/Breadcrumb';
import ShareButtons from '@/components/ShareButtons';
import RelatedPosts from '@/components/RelatedPosts';

// Mock data - In production, fetch from markdown files
const mockPosts: Record<string, any> = {
  'nep-2020-introduction': {
    title: 'Introduction to NEP 2020: The Future of Indian Education',
    slug: 'nep-2020-introduction',
    excerpt: 'Understanding the National Education Policy 2020 and its impact on educational transformation in India.',
    date: '2024-04-20',
    category: 'NEP 2020',
    author: 'SBC Team',
    authorBio: 'Passionate about innovative education and creative learning solutions.',
    authorRole: 'Education Specialist',
    readingTime: 5,
    tags: ['NEP 2020', 'Education', 'Policy'],
    content: `
# Introduction to NEP 2020: The Future of Indian Education

The National Education Policy 2020 (NEP 2020) represents a transformative approach to education in India. This comprehensive policy framework aims to reshape the educational landscape and prepare students for the 21st century.

## Key Objectives

NEP 2020 focuses on several core objectives:

1. **Holistic Development**: Emphasizing the development of critical thinking and problem-solving skills
2. **Flexibility**: Providing flexibility in choice of subjects and learning paths
3. **Equity**: Ensuring equitable access to quality education for all students
4. **Technology Integration**: Leveraging technology to enhance learning experiences

## Major Changes

### Curricular Structure
The policy proposes a 5+3+3+4 structure replacing the existing 10+2 system. This allows students greater flexibility in choosing subjects that align with their interests and career aspirations.

### Skill Development
Emphasis on vocational and skill-based education from an early stage, preparing students for practical applications of knowledge.

### Technology and Innovation
Integration of technology in teaching-learning processes, digital resources, and online learning capabilities.

## Implementation Timeline

The implementation of NEP 2020 is gradual, with specific milestones set for different components:

- **2020-2021**: Foundation and planning phase
- **2021-2025**: Transition phase
- **2025 onwards**: Full implementation

## Impact on Students

Students will benefit from:
- Greater choice in subject selection
- Focus on practical learning and skill development
- Integration of arts, sciences, and vocational education
- Emphasis on critical thinking and creativity

## Conclusion

NEP 2020 is a significant step towards modernizing Indian education and aligning it with global standards while maintaining cultural values and local contexts.
    `,
  },
  'game-dev-beginners': {
    title: 'Game Development for School Students: A Beginner\'s Guide',
    slug: 'game-dev-beginners',
    excerpt: 'Learn how game development can be an effective tool for teaching students programming and creative thinking.',
    date: '2024-04-18',
    category: 'Game Development',
    author: 'Tech Lead',
    authorBio: 'Game developer and tech educator with 10+ years of experience.',
    authorRole: 'Senior Developer',
    readingTime: 7,
    tags: ['Game Development', 'Programming', 'Education'],
    content: `
# Game Development for School Students: A Beginner's Guide

Game development is an excellent way to introduce students to programming, creativity, and problem-solving. This guide helps educators and students get started with game development.

## Why Game Development?

Game development combines multiple skills:
- Programming logic and syntax
- Creative thinking and design
- Problem-solving and debugging
- Team collaboration and project management

## Popular Game Development Engines

### Unity
- Most widely used in education
- Free version available
- Large community support
- C# programming language

### Unreal Engine
- Professional-grade engine
- Free for educational use
- Blueprint visual scripting
- High-quality graphics

### Godot
- Open-source and free
- Lightweight and easy to learn
- GDScript language
- Growing community support

## Getting Started

### Step 1: Choose a Platform
Select an engine based on your needs and target platform (PC, mobile, web).

### Step 2: Learn the Fundamentals
Start with basic concepts like game loops, physics, and sprites.

### Step 3: Build Small Projects
Create simple games before attempting complex projects:
- 2D platformers
- Puzzle games
- Collectible games

### Step 4: Collaborate and Share
Work with peers and share projects to get feedback and inspiration.

## Conclusion

Game development is a fun and engaging way to develop technical and creative skills. Start small, keep learning, and enjoy the journey!
    `,
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = mockPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} - Smart Brain Creations Blog`,
    description: post.excerpt,
    keywords: [...post.tags, 'blog', 'education'].join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://smartbraincreations.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = mockPosts[params.slug];

  if (!post) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
          <Link href="/blog" className="text-primary font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  const allRelatedPosts = Object.values(mockPosts);

  return (
    <>
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` }
          ]} />

          {/* Header */}
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              <span className="inline-block bg-purple-100 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{post.readingTime} min read</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>

            {/* Share Buttons */}
            <div className="py-6 border-y border-gray-200">
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-96 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center mb-12">
            <span className="text-8xl">📚</span>
          </div>

          {/* Content */}
          <div className="prose max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="border-y border-gray-200 py-6 mb-12">
              <p className="text-gray-700 font-semibold mb-3">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Link
                    key={tag}
                    href={`/blog?search=${encodeURIComponent(tag)}`}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Card */}
          <AuthorCard
            name={post.author}
            bio={post.authorBio}
            role={post.authorRole}
          />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allRelatedPosts
              .filter((p: any) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p: any) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <div className="w-full h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:from-primary-dark group-hover:to-primary transition">
                      <span className="text-4xl">📚</span>
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-block bg-purple-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                          {p.category}
                        </span>
                        <span className="text-gray-500 text-xs pt-1">{p.readingTime} min read</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {p.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
