import Link from 'next/link';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="w-full h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
        <span className="text-4xl">📚</span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="flex gap-2 mb-3">
          <span className="inline-block bg-purple-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-500 text-xs pt-1">
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
          <span>By {post.author}</span>
        </div>
      </div>
    </article>
  );
}
