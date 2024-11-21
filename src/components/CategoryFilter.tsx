import React from 'react';
import { CategoryType } from '../types';

interface CategoryFilterProps {
  selectedCategory: CategoryType | 'all';
  onCategoryChange: (category: CategoryType | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories: (CategoryType | 'all')[] = [
    'all',
    'Mammals',
    'Birds',
    'Reptiles',
    'Marine Life',
    'Amphibians',
    'Insects'
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {category === 'all' ? 'All Categories' : category}
        </button>
      ))}
    </div>
  );
}