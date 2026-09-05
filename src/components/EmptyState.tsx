import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onReset }) => {
  return (
    <div className="py-16 text-center max-w-md mx-auto px-4">
      <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 mx-auto mb-4 shadow-xl">
        <SearchX className="w-8 h-8 text-indigo-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        Nenhuma ferramenta encontrada
      </h3>
      <p className="text-sm text-slate-400 mb-6 leading-relaxed">
        Não encontramos nenhum recurso com os filtros ou termo de busca selecionados. Tente buscar por palavras-chave mais amplas ou resetar os filtros.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02]"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        <span>Limpar Filtros e Busca</span>
      </button>
    </div>
  );
};
