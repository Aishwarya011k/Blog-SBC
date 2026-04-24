'use client';

import { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Mock blog posts
  const allPosts = [
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
    {
      title: 'Digital Literacy in the 21st Century',
      slug: 'digital-literacy-21st',
      excerpt: 'Why digital literacy is essential and how educators can effectively teach technology skills.',
      date: '2024-04-10',
      category: 'Technology',
      author: 'Tech Expert',
      readingTime: 5,
    },
    {
      title: 'Personalized Learning Paths for Every Student',
      slug: 'personalized-learning',
      excerpt: 'How AI and adaptive learning can create customized educational experiences for students.',
      date: '2024-04-05',
      category: 'Education',
      author: 'Education Specialist',
      readingTime: 8,
    },
  ];

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]} />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Articles</h1>
          <p className="text-gray-600 text-lg">
            Discover articles on education, technology, game development, and creative learning
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar onSearch={setSearchQuery} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="md:col-span-1">
              <CategoryFilter 
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </aside>

            {/* Main Content */}
            <main className="md:col-span-3">
              {filteredPosts.length > 0 ? (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group"
                    >
                      <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition border-l-4 border-transparent hover:border-primary">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <div className="flex gap-2 mb-3">
                              <span className="inline-block bg-purple-100 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                                {post.category}
                              </span>
                              <span className="text-gray-500 text-xs pt-1">{post.readingTime} min read</span>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                              {post.title}
                            </h2>
                            <p className="text-gray-600 mb-4">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                              <span>By {post.author}</span>
                            </div>
                          </div>
                          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded flex items-center justify-center flex-shrink-0 group-hover:from-primary-dark group-hover:to-primary transition">
                            <span className="text-3xl">📚</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-4">No articles found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('');
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
