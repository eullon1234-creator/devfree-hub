import React from 'react';
import { Gift, Gem, Sparkles } from 'lucide-react';

export type MainTab = 'free' | 'paid';

interface MainTabNavProps {
  activeTab: MainTab;
  onTabChange: (tab: MainTab) => void;
  freeCount: number;
  paidCount: number;
}

export const MainTabNav: React.FC<MainTabNavProps> = ({
  activeTab,
  onTabChange,
  freeCount,
  paidCount,
}) => {
  return (
    <div className="flex justify-center -mt-5 mb-8 relative z-20 px-4">
      <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
        {/* Free Tab Button */}
        <button
          onClick={() => onTabChange('free')}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'free'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Gift className={`w-4 h-4 ${activeTab === 'free' ? 'text-white' : 'text-indigo-400'}`} />
          <span>APIs Gratuitas (Free Tier)</span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              activeTab === 'free'
                ? 'bg-white/20 text-white'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {freeCount}
          </span>
        </button>

        {/* Paid Tab Button */}
        <button
          onClick={() => onTabChange('paid')}
          className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeTab === 'paid'
              ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Gem className={`w-4 h-4 ${activeTab === 'paid' ? 'text-slate-950' : 'text-amber-400'}`} />
          <span>APIs Pagas & Valores</span>
          <span className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-md text-[10px] uppercase tracking-wider font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-2.5 h-2.5" /> Novo
          </span>
          <span
            className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              activeTab === 'paid'
                ? 'bg-slate-950/20 text-slate-950'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            {paidCount}
          </span>
        </button>
      </div>
    </div>
  );
};
