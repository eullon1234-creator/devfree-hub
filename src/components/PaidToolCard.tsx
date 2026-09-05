import React from 'react';
import type { PaidToolItem } from '../types/tool';
import { CategoryIcon } from './CategoryIcon';
import { 
  Bookmark, 
  ExternalLink, 
  FileCode2, 
  DollarSign, 
  Sparkles, 
  Gift, 
  Layers, 
  BookOpen 
} from 'lucide-react';

interface PaidToolCardProps {
  tool: PaidToolItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenDetails: (tool: PaidToolItem) => void;
}

export const PaidToolCard: React.FC<PaidToolCardProps> = ({
  tool,
  isFavorite,
  onToggleFavorite,
  onOpenDetails,
}) => {
  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'pay_as_you_go':
        return 'Pay-as-you-go (Pague pelo uso)';
      case 'subscription':
        return 'Assinatura Mensal';
      case 'transaction_fee':
        return 'Taxa por Transação';
      case 'credits':
        return 'Pacotes de Créditos';
      default:
        return 'Preço Flexível';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden">
      {/* Top subtle highlight line for paid items */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500" />

      <div className="p-6">
        {/* Top bar with icon, title, rating & favorite */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-200">
              <CategoryIcon category={tool.category} className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {tool.name}
                </h3>
                {tool.isPopular && (
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Sparkles className="w-2.5 h-2.5" /> Top Líder
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

        {/* Starting Price Box */}
        <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 mb-3">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              A partir de:
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300">
              <Layers className="w-3 h-3 text-indigo-400" />
              {getPricingModelLabel(tool.pricingModel)}
            </span>
          </div>
          <div className="flex items-baseline gap-1 text-emerald-400 font-extrabold text-base">
            <DollarSign className="w-4 h-4 text-emerald-400 -mr-0.5" />
            <span>{tool.startingPrice}</span>
          </div>
        </div>

        {/* Trial or Free Credits Bonus if available */}
        {tool.hasFreeTrialOrCredits && (
          <div className="flex items-start gap-2 p-2.5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 text-xs text-indigo-300 mb-4">
            <Gift className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
            <span className="font-medium">{tool.hasFreeTrialOrCredits}</span>
          </div>
        )}

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
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <FileCode2 className="w-3.5 h-3.5" />
          <span>Ver Tabela de Preços & Código</span>
        </button>

        <div className="flex items-center gap-1">
          {tool.docsUrl && (
            <a
              href={tool.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
              title="Abrir Documentação"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={tool.pricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
            title="Acessar Página Oficial de Preços"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
