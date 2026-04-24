import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(postsDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        content,
        slug: file.replace(/\.md$/, ''),
        date: data.date || new Date().toISOString(),
        category: data.category || 'Uncategorized',
        author: data.author || 'SBC Team',
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    content,
    slug,
    date: data.date || new Date().toISOString(),
    category: data.category || 'Uncategorized',
    author: data.author || 'SBC Team',
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
  } as BlogPost;
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}
