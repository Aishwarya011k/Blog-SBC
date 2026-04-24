'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/lib/constants';

export default function Home() {
  const [posts] = useState([
    {
      title: 'Introduction to NEP 2020: The Future of Indian Education',
      slug: 'nep-2020-introduction',
      excerpt: 'Understanding the National Education Policy 2020 and its impact on educational transformation in India.',
      date: '2024-04-20',
      category: 'NEP 2020',
      author: 'SBC Team',
      readingTime: 5,
    },
    {
      title: 'Game Development for School Students: A Beginner\'s Guide',
      slug: 'game-dev-beginners',
      excerpt: 'Learn how game development can be an effective tool for teaching students programming and creative thinking.',
      date: '2024-04-18',
      category: 'Game Development',
      author: 'Tech Lead',
      readingTime: 7,
    },
    {
      title: 'Creative Learning: Beyond Traditional Classrooms',
      slug: 'creative-learning-beyond',
      excerpt: 'Exploring innovative methods to engage students through creative problem-solving and hands-on learning.',
      date: '2024-04-15',
      category: 'Creative Learning',
      author: 'Education Expert',
      readingTime: 6,
    },
  ]);

  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smart Brain Creations Blog
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8">
            Explore Creative Learning, Technology, and Innovation in Education
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/blog"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition"
            >
              Read Articles
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition"
            >
              Learn About SBC
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="w-full h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center group-hover:from-primary-dark group-hover:to-primary transition">
                    <span className="text-5xl">📚</span>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="inline-block bg-purple-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs pt-1">{post.readingTime} min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 border-t pt-4">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      <span>By {post.author}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-dark transition"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg hover:border-primary border-2 border-transparent transition"
              >
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-lg font-bold text-gray-900 hover:text-primary transition">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-purple-100 mb-6">
            Subscribe to get the latest articles delivered to your inbox
          </p>
          <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary px-6 py-3 rounded font-bold hover:bg-purple-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
