'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-primary p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="mb-6 text-purple-100">Get the latest articles, insights, and updates about creative learning and technology.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {subscribed && <p className="text-green-200 mt-2">✓ Thank you for subscribing!</p>}
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4">Smart Brain Creations</h4>
            <p className="text-gray-400 text-sm">Edtech startup focused on creative and digital education for school students.</p>
            <p className="text-gray-400 text-sm mt-2">Based in Bangalore, Karnataka.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/category/education" className="hover:text-white transition">Education</Link></li>
              <li><Link href="/category/technology" className="hover:text-white transition">Technology</Link></li>
              <li><Link href="/category/game-development" className="hover:text-white transition">Game Dev</Link></li>
              <li><Link href="/category/creative-learning" className="hover:text-white transition">Creative Learning</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><a href="https://smartbraincreations.com" className="hover:text-white transition">Main Website</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2024 Smart Brain Creations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
