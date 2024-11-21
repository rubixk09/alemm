import React from 'react';
import { X } from 'lucide-react';
import { Animal } from '../types';

interface AnimalModalProps {
  animal: Animal;
  onClose: () => void;
}

export function AnimalModal({ animal, onClose }: AnimalModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative h-72">
          <img
            src={animal.imageUrl}
            alt={animal.name}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{animal.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 italic">{animal.species}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Habitat</p>
              <p className="font-medium text-gray-900 dark:text-white">{animal.habitat}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Diet</p>
              <p className="font-medium text-gray-900 dark:text-white">{animal.diet}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Conservation Status</h3>
            <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-4 py-2 rounded-lg inline-block">
              {animal.conservationStatus}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">About</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{animal.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}