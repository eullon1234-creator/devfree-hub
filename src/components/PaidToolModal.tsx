import React, { useState } from 'react';
import type { PaidToolItem } from '../types/tool';
import { CategoryIcon } from './CategoryIcon';
import { 
  X, 
  ExternalLink, 
  BookOpen, 
  DollarSign, 
  Copy, 
  Check, 
  Sparkles, 
  Lightbulb, 
  Bookmark, 
  Tag, 
  Code2, 
  Gift, 
  CheckCircle2 
} from 'lucide-react';

interface PaidToolModalProps {
  tool: PaidToolItem | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const PaidToolModal: React.FC<PaidToolModalProps> = ({
  tool,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !tool) return null;

  const handleCopyCode = () => {
    if (tool.codeSnippet) {
      navigator.clipboard.writeText(tool.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-slate-950/80 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl shadow-black/50 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Background Banner */}
        <div className="relative h-28 bg-gradient-to-r from-amber-950/60 via-yellow-950/40 to-slate-900 p-6 flex items-start justify-between border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xl shadow-amber-500/10">
              <CategoryIcon category={tool.category} className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {tool.name}
                </h2>
                {tool.isPopular && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Destaque
                  </span>
                )}
              </div>
              <p className="text-sm text-amber-200 font-medium">
                {tool.tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(tool.id)}
              className={`p-2.5 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800/80 hover:bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
            >
              <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Fechar (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-7rem)] overflow-y-auto">
          {/* Quick Action Links */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href={tool.pricingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <DollarSign className="w-4 h-4" />
              <span>Ver Tabela Oficial de Preços</span>
            </a>

            {tool.docsUrl && (
              <a
                href={tool.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                <span>Documentação da API</span>
              </a>
            )}

            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              <span>Site Oficial</span>
            </a>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
              Sobre o Serviço
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Free Trial / Bonus Credits callout */}
          {tool.hasFreeTrialOrCredits && (
            <div className="rounded-2xl bg-indigo-950/30 border border-indigo-500/40 p-4 flex items-start gap-3">
              <Gift className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">
                  Créditos Promocionais / Teste Gratuito
                </h5>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {tool.hasFreeTrialOrCredits}
                </p>
              </div>
            </div>
          )}

          {/* Pricing Tiers Grid */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-300">
                Planos e Estrutura de Preços
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {tool.pricingTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all ${
                    tier.isPopular
                      ? 'bg-amber-950/15 border-amber-500/40 shadow-sm'
                      : 'bg-slate-800/50 border-slate-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h5 className="text-sm font-bold text-white">
                      {tier.name}
                    </h5>
                    {tier.isPopular && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Mais Usado
                      </span>
                    )}
                  </div>

                  <div className="mb-2">
                    <span className="text-lg font-extrabold text-emerald-400">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs text-slate-400 ml-1">
                        {tier.period}
                      </span>
                    )}
                  </div>

                  {tier.description && (
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {tier.description}
                    </p>
                  )}

                  {tier.features && tier.features.length > 0 && (
                    <ul className="space-y-1.5 border-t border-slate-700/50 pt-2.5">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          {tool.tips && (
            <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-4 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  Dica de Custo & Economia (Cost Saving Tip)
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tool.tips}
                </p>
              </div>
            </div>
          )}

          {/* Code Snippet */}
          {tool.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                    {tool.codeSnippet.title}
                  </h4>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-200 overflow-x-auto">
                <pre className="leading-relaxed">
                  <code>{tool.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> Tags
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {tool.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
