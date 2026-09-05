import React from 'react';
import { Search, X, Sparkles, ShieldAlert, Terminal, Zap } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalTools: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  totalTools,
}) => {
  return (
    <div className="relative overflow-hidden pt-10 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
          <span>Curadoria de {totalTools}+ Ferramentas & APIs Gratuitas</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          As Melhores Ferramentas e <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            APIs Gratuitas para Desenvolvedores
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Chega de surpresas na fatura. Descubra serviços com limites generosos de <strong className="text-white font-medium">IA, Bancos de Dados, Geração de Imagens e Hospedagem</strong> sem precisar cadastrar cartão de crédito.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por nome, tag (ex: Llama 3, Postgres, Redis, CEP, IA)..."
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-white placeholder-slate-400 text-base shadow-xl shadow-black/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/60 transition-colors"
                title="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Value Props Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Sem Cartão Obrigatório</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Snippets Prontos para Uso</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <ShieldAlert className="w-4 h-4 text-indigo-400" />
            <span>Cotas & Limites Detalhados</span>
          </div>
        </div>
      </div>
    </div>
  );
};
