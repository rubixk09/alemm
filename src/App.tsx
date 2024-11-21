import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { Tabs } from './components/Tabs';
import { AnimalCard } from './components/AnimalCard';
import { AnimalModal } from './components/AnimalModal';
import { Footer } from './components/Footer';
import { CategoryFilter } from './components/CategoryFilter';
import { ThemeToggle } from './components/ThemeToggle';
import { TabType, Animal, CategoryType } from './types';
import { animals } from './data/animals';
import { PawPrint } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('animals');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>('all');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.species.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || animal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <PawPrint className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Wildlife Explorer
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
            </div>
          </div>
          <div className="mt-6">
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'animals' && (
          <>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAnimals.map(animal => (
                <AnimalCard
                  key={animal.id}
                  animal={animal}
                  onClick={setSelectedAnimal}
                />
              ))}
            </div>
            {filteredAnimals.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">No animals found matching your search.</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'habitats' && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Habitats section coming soon!</p>
          </div>
        )}

        {activeTab === 'conservation' && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">Conservation section coming soon!</p>
          </div>
        )}
      </main>

      <Footer />

      {selectedAnimal && (
        <AnimalModal
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </div>
  );
}

export default App;