import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-white tracking-tight">DevFree Hub</span>
            <p className="text-xs text-slate-500">
              Catálogo aberto de ferramentas e APIs gratuitas para impulsionar seus projetos.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium">
          <span className="flex items-center gap-1.5 text-slate-400">
            Feito com <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> para a comunidade dev
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400">Atualizado para 2026</span>
        </div>
      </div>
    </footer>
  );
};
