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
  imageUrl: string;
  status?: 'live' | 'alpha' | 'beta' | 'coming-soon'; // Project status
  version?: string; // Current version
  isNew?: boolean; // Show "New" badge
}

export type DonationType = 'crypto' | 'link';

export interface DonationOption {
  id: string;
  name: string;
  type: DonationType;
  value: string; // URL for link, Address for crypto
  iconName: string;
  color: string;
  description: string;
}