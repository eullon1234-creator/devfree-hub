import React from 'react';
import { 
  Layers, 
  BrainCircuit, 
  Database, 
  Image, 
  Cloud, 
  ShieldCheck, 
  Mail, 
  Globe,
  Sparkles
} from 'lucide-react';
import type { CategoryId } from '../types/tool';

interface CategoryIconProps {
  category: CategoryId | string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ category, className = "w-5 h-5" }) => {
  switch (category) {
    case 'all':
      return <Layers className={className} />;
    case 'ai':
      return <BrainCircuit className={className} />;
    case 'database':
      return <Database className={className} />;
    case 'image_media':
      return <Image className={className} />;
    case 'hosting':
      return <Cloud className={className} />;
    case 'auth':
      return <ShieldCheck className={className} />;
    case 'email_messaging':
      return <Mail className={className} />;
    case 'apis_data':
      return <Globe className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};
