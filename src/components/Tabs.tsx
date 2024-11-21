import React from 'react';
import { TabType } from '../types';

interface TabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'animals', label: 'Animals' },
    { id: 'habitats', label: 'Habitats' },
    { id: 'conservation', label: 'Conservation' }
  ];

  return (
    <div className="flex space-x-1 bg-blue-50 p-1 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            activeTab === tab.id
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-blue-600 hover:bg-white/60'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}