import React from 'react';
import { 
  Sparkles, 
  Bookmark, 
  PlusCircle, 
  Sun, 
  Moon
} from 'lucide-react';

interface HeaderProps {
  totalTools: number;
  favoritesCount: number;
  showOnlyFavorites: boolean;
  onToggleFavorites: () => void;
  onOpenAddModal: () => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalTools,
  favoritesCount,
  showOnlyFavorites,
  onToggleFavorites,
  onOpenAddModal,
  isDark,
  onToggleDark,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-900/80 border-b border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                DevFree<span className="text-indigo-400">Hub</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                100% Grátis
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {totalTools} ferramentas e APIs catalogadas
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Favorites Toggle */}
          <button
            onClick={onToggleFavorites}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
              showOnlyFavorites
                ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-sm shadow-amber-500/10'
                : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300 hover:text-white'
            }`}
            title="Filtrar favoritos"
          >
            <Bookmark className={`w-4 h-4 ${showOnlyFavorites ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span className="hidden md:inline">Favoritos</span>
            {favoritesCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-xs bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Add Tool Button */}
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <PlusCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Adicionar API</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={onToggleDark}
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors"
            title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            aria-label="Alternar tema"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
