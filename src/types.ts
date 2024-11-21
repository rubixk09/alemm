export interface Animal {
  id: string;
  name: string;
  species: string;
  habitat: string;
  diet: string;
  category: 'Mammals' | 'Birds' | 'Reptiles' | 'Marine Life' | 'Amphibians' | 'Insects';
  conservationStatus: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered';
  description: string;
  imageUrl: string;
}

export type TabType = 'animals' | 'habitats' | 'conservation';
export type CategoryType = Animal['category'];