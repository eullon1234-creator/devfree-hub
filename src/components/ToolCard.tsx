import React from 'react';
import type { ToolItem } from '../types/tool';
import { CategoryIcon } from './CategoryIcon';
import { 
  Bookmark, 
  ExternalLink, 
  FileCode2, 
  CheckCircle2, 
  CreditCard, 
  Code2, 
  Sparkles, 
  BookOpen 
} from 'lucide-react';

interface ToolCardProps {
  tool: ToolItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenDetails: (tool: ToolItem) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  tool,
  isFavorite,
  onToggleFavorite,
  onOpenDetails,
}) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden">
      {/* Top subtle highlight line for featured items */}
      {tool.isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      )}

      <div className="p-6">
        {/* Top bar with icon, title, rating & favorite */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-200">
              <CategoryIcon category={tool.category} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {tool.name}
                </h3>
                {tool.isPopular && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Sparkles className="w-2.5 h-2.5" /> Popular
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-medium line-clamp-1">
                {tool.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={() => onToggleFavorite(tool.id)}
            className={`p-2 rounded-xl border transition-all duration-200 ${
              isFavorite
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 shadow-sm shadow-amber-500/10'
                : 'bg-slate-800/40 hover:bg-slate-800 border-slate-700/40 text-slate-400 hover:text-slate-200'
            }`}
            title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
          </button>
        </div>

        {/* Description snippet */}
        <p className="text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
          {tool.description}
        </p>

        {/* Free Tier Highlight Box */}
        <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span className="text-xs font-semibold text-emerald-300">Cota Gratuita:</span>
          </div>
          <p className="text-xs text-slate-200 pl-6 leading-normal font-medium">
            {tool.freeTierDetails.quota}
          </p>
        </div>

        {/* Badges: No Card & API */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${
              !tool.requiresCreditCard
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
            }`}
          >
            <CreditCard className="w-3 h-3" />
            {!tool.requiresCreditCard ? 'Sem Cartão de Crédito' : 'Requer Cartão'}
          </span>

          {tool.hasApi && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Code2 className="w-3 h-3" />
              API Rest / SDK
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tool.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
            >
              #{tag}
            </span>
          ))}
          {tool.tags.length > 3 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400">
              +{tool.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Card Actions */}
      <div className="px-6 py-3.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(tool)}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <FileCode2 className="w-3.5 h-3.5" />
          <span>Ver Detalhes & Código</span>
        </button>

        <div className="flex items-center gap-1">
          {tool.docsUrl && (
            <a
              href={tool.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
              title="Abrir Documentação da API"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={tool.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
            title="Acessar Site Oficial"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
