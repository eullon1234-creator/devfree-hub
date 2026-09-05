import React from 'react';
import type { CategoryId, Category, PricingModel } from '../types/tool';
import { CategoryIcon } from './CategoryIcon';
import { ArrowDownAZ, Star, Flame, DollarSign } from 'lucide-react';
import type { SortOption } from './CategoryFilter';

interface PaidCategoryFilterProps {
  categories: Category[];
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  categoryCounts: Record<CategoryId, number>;
  selectedPricingModel: PricingModel | 'all';
  onSelectPricingModel: (model: PricingModel | 'all') => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const PaidCategoryFilter: React.FC<PaidCategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  selectedPricingModel,
  onSelectPricingModel,
  sortBy,
  onSortChange,
}) => {
  const pricingModels: { id: PricingModel | 'all'; label: string }[] = [
    { id: 'all', label: 'Todos os Modelos' },
    { id: 'pay_as_you_go', label: 'Pay-as-you-go' },
    { id: 'transaction_fee', label: 'Taxa por Transação' },
    { id: 'subscription', label: 'Assinatura Mensal' },
  ];

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
                  ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300 hover:text-white'
              }`}
            >
              <CategoryIcon category={cat.id} className="w-4 h-4" />
              <span>{cat.name}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-xs font-semibold ${
                  isSelected
                    ? 'bg-slate-950/20 text-slate-950'
                    : 'bg-slate-700/70 text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Pricing Model filters & Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {/* Pricing Models */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" /> Cobrança:
          </span>
          {pricingModels.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelectPricingModel(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors ${
                selectedPricingModel === m.id
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300 font-bold'
                  : 'bg-slate-800/50 hover:bg-slate-800 border-slate-700/50 text-slate-400 hover:text-slate-200'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/50 p-1 rounded-xl border border-slate-700/50">
          <span className="px-2 text-slate-400 font-medium">Ordenar:</span>
          <button
            onClick={() => onSortChange('featured')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-colors ${
              sortBy === 'featured'
                ? 'bg-amber-500 text-slate-950 font-bold'
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
                ? 'bg-amber-500 text-slate-950 font-bold'
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
                ? 'bg-amber-500 text-slate-950 font-bold'
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
