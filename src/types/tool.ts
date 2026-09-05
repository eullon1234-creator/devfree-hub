export type CategoryId = 
  | 'all'
  | 'ai'
  | 'database'
  | 'image_media'
  | 'hosting'
  | 'auth'
  | 'email_messaging'
  | 'apis_data';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface CodeSnippet {
  language: 'javascript' | 'python' | 'curl' | 'bash';
  title: string;
  code: string;
}

export interface FreeTierDetails {
  quota: string;
  highlights: string[];
  resetPeriod?: string;
  limitations?: string;
}

export interface ToolItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: CategoryId;
  tags: string[];
  websiteUrl: string;
  docsUrl?: string;
  pricingUrl?: string;
  requiresCreditCard: boolean;
  hasApi: boolean;
  freeTierDetails: FreeTierDetails;
  starsRating: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  codeSnippet?: CodeSnippet;
  tips?: string;
  addedAt: string;
}
