export type CategoryId = 
  | 'all'
  | 'ai'
  | 'database'
  | 'image_media'
  | 'hosting'
  | 'auth'
  | 'email_messaging'
  | 'apis_data'
  | 'payments';

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

export type PricingModel = 'pay_as_you_go' | 'subscription' | 'transaction_fee' | 'credits';

export interface PricingTier {
  name: string;
  price: string;
  period?: string; // '/mês', 'por 1M tokens', 'por transação', etc.
  description?: string;
  features: string[];
  isPopular?: boolean;
}

export interface PaidToolItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: CategoryId;
  tags: string[];
  websiteUrl: string;
  docsUrl?: string;
  pricingUrl: string;
  pricingModel: PricingModel;
  startingPrice: string;
  pricingTiers: PricingTier[];
  starsRating: number;
  isPopular?: boolean;
  isFeatured?: boolean;
  codeSnippet?: CodeSnippet;
  tips?: string;
  hasFreeTrialOrCredits?: string;
  addedAt: string;
}
