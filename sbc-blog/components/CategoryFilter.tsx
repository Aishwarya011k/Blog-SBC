'use client';

import { CATEGORIES } from '@/lib/constants';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
      <button
        onClick={() => onCategoryChange('')}
        className={`block w-full text-left px-4 py-2 rounded-lg transition ${
          selectedCategory === ''
            ? 'bg-primary text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        All Articles
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`block w-full text-left px-4 py-2 rounded-lg transition ${
            selectedCategory === category
              ? 'bg-primary text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
