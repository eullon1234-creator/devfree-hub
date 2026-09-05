import React, { useState } from 'react';
import type { ToolItem } from '../types/tool';
import { CategoryIcon } from './CategoryIcon';
import { 
  X, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Sparkles, 
  Lightbulb, 
  Bookmark, 
  Tag, 
  Code2,
  DollarSign
} from 'lucide-react';

interface ToolModalProps {
  tool: ToolItem | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({
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
        <div className="relative h-28 bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 p-6 flex items-start justify-between border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/20">
              <CategoryIcon category={tool.category} className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {tool.name}
                </h2>
                {tool.isPopular && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-indigo-200 font-medium">
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
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Acessar Site Oficial</span>
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

            {tool.pricingUrl && (
              <a
                href={tool.pricingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>Página de Preços & Planos</span>
              </a>
            )}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
              Sobre a Ferramenta
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {tool.description}
            </p>
          </div>

          {/* Free Tier Breakdown Card */}
          <div className="rounded-2xl bg-emerald-950/20 border border-emerald-500/30 p-5 space-y-4">
            <div className="flex items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <h4 className="text-sm font-bold text-emerald-300">
                  Detalhes do Plano Gratuito (Free Tier)
                </h4>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {tool.freeTierDetails.resetPeriod || 'Recorrente'}
              </span>
            </div>

            <div>
              <p className="text-xs text-emerald-400 font-semibold mb-1">Cota Geral:</p>
              <p className="text-sm text-slate-200 font-medium bg-emerald-900/20 p-2.5 rounded-xl border border-emerald-500/20">
                {tool.freeTierDetails.quota}
              </p>
            </div>

            {/* Highlights bullet points */}
            {tool.freeTierDetails.highlights && tool.freeTierDetails.highlights.length > 0 && (
              <div>
                <p className="text-xs text-emerald-400 font-semibold mb-2">O que está incluído:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tool.freeTierDetails.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Limitations if any */}
            {tool.freeTierDetails.limitations && (
              <div className="flex items-start gap-2 text-xs text-amber-300 bg-amber-950/30 p-2.5 rounded-xl border border-amber-500/20">
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Atenção ao limite: </span>
                  {tool.freeTierDetails.limitations}
                </div>
              </div>
            )}
          </div>

          {/* Pro Tips */}
          {tool.tips && (
            <div className="rounded-2xl bg-indigo-950/30 border border-indigo-500/30 p-4 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">
                  Dica de Desenvolvedor (Pro Tip)
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
                  <Code2 className="w-4 h-4 text-indigo-400" />
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
              <Tag className="w-3.5 h-3.5" /> Tags & Palavras-chave
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
