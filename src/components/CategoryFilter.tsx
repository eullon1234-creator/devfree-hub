import React from 'react';
import type { CategoryId, Category } from '../types/tool';
import { CategoryIcon } from './CategoryIcon';
import { CreditCard, Code2, ArrowDownAZ, Star, Flame } from 'lucide-react';

export type SortOption = 'featured' | 'rating' | 'name';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  categoryCounts: Record<CategoryId, number>;
  noCardOnly: boolean;
  onToggleNoCard: () => void;
  apiOnly: boolean;
  onToggleApiOnly: () => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  noCardOnly,
  onToggleNoCard,
  apiOnly,
  onToggleApiOnly,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300 hover:text-white'
              }`}
            >
              <CategoryIcon category={cat.id} className="w-4 h-4" />
              <span>{cat.name}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-xs font-semibold ${
                  isSelected
                    ? 'bg-indigo-700 text-indigo-100'
                    : 'bg-slate-700/70 text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary Quick Toggles & Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-2">
          {/* No Card Filter */}
          <button
            onClick={onToggleNoCard}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              noCardOnly
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 text-slate-400 hover:text-slate-200'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Sem Cartão de Crédito</span>
            {noCardOnly && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
          </button>

          {/* API Only Filter */}
          <button
            onClick={onToggleApiOnly}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
              apiOnly
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Possui API Rest / SDK</span>
            {apiOnly && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
          </button>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/50 p-1 rounded-xl border border-slate-700/50">
          <span className="px-2 text-slate-400 font-medium">Ordenar:</span>
          <button
            onClick={() => onSortChange('featured')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
              sortBy === 'featured'
                ? 'bg-indigo-600 text-white font-semibold'
                : 'hover:text-slate-200'
            }`}
            title="Destaques e Mais Populares"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Destaques</span>
          </button>
          <button
            onClick={() => onSortChange('rating')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
              sortBy === 'rating'
                ? 'bg-indigo-600 text-white font-semibold'
                : 'hover:text-slate-200'
            }`}
            title="Melhor Avaliação"
          >
            <Star className="w-3.5 h-3.5" />
            <span>Avaliação</span>
          </button>
          <button
            onClick={() => onSortChange('name')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
              sortBy === 'name'
                ? 'bg-indigo-600 text-white font-semibold'
                : 'hover:text-slate-200'
            }`}
            title="Ordem Alfabética"
          >
            <ArrowDownAZ className="w-3.5 h-3.5" />
            <span>Nome</span>
          </button>
        </div>
      </div>
    </div>
  );
};
