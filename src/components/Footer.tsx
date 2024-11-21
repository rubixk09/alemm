import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
          <span>Created with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
          <span>by</span>
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ömer Ali Yücel
          </span>
        </div>
      </div>
    </footer>
  );
}