import React from 'react';
import { Animal } from '../types';
import { Info } from 'lucide-react';

interface AnimalCardProps {
  animal: Animal;
  onClick: (animal: Animal) => void;
}

export function AnimalCard({ animal, onClick }: AnimalCardProps) {
  const statusColors = {
    'Least Concern': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'Near Threatened': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Vulnerable': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    'Endangered': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    'Critically Endangered': 'bg-red-200 text-red-900 dark:bg-red-900 dark:text-red-300'
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-gray-200 dark:border-gray-700"
      onClick={() => onClick(animal)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{animal.name}</h3>
          <p className="text-white/90 text-sm italic">{animal.species}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600 dark:text-gray-300">{animal.habitat}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[animal.conservationStatus]}`}>
            {animal.conservationStatus}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">{animal.description}</p>
        <button className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
          <Info className="w-4 h-4 mr-1" />
          Learn More
        </button>
      </div>
    </div>
  );
}