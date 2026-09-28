export enum ProductCategory {
  OFFICE = 'Office Suite',
  LANGUAGE = 'Learning',
  MUSIC = 'Music Platform',
  CREATIVE = 'Creative Tools',
  ENTERPRISE = 'Enterprise Suite',
  PRIVACY = 'Privacy & Security',
  WELLNESS = 'Health & Wellness'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  iconName: string; // Mapping string to Lucide icon
  repoUrl?: string; // Optional for coming soon projects
  liveUrl?: string; // Live demo URL
  features: string[];
  status?: 'live' | 'alpha' | 'beta' | 'coming-soon'; // Project status
  version?: string; // Current version
  isNew?: boolean; // Show "New" badge
}
