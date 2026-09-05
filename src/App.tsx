import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_TOOLS, CATEGORIES } from './data/toolsData';
import { PAID_TOOLS, PAID_CATEGORIES } from './data/paidToolsData';
import type { ToolItem, PaidToolItem, CategoryId, PricingModel } from './types/tool';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MainTabNav } from './components/MainTabNav';
import type { MainTab } from './components/MainTabNav';
import { CategoryFilter } from './components/CategoryFilter';
import type { SortOption } from './components/CategoryFilter';
import { PaidCategoryFilter } from './components/PaidCategoryFilter';
import { ToolCard } from './components/ToolCard';
import { PaidToolCard } from './components/PaidToolCard';
import { ToolModal } from './components/ToolModal';
import { PaidToolModal } from './components/PaidToolModal';
import { AddToolModal } from './components/AddToolModal';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('devfree_theme') !== 'light';
  });

  // Main active tab ('free' | 'paid')
  const [activeTab, setActiveTab] = useState<MainTab>('free');

  // Free tools state (defaults + custom items in localStorage)
  const [tools, setTools] = useState<ToolItem[]>(() => {
    try {
      const savedCustom = localStorage.getItem('devfree_custom_tools');
      if (savedCustom) {
        const parsed = JSON.parse(savedCustom);
        return [...INITIAL_TOOLS, ...parsed];
      }
    } catch (e) {
      console.error('Erro ao ler ferramentas customizadas:', e);
    }
    return INITIAL_TOOLS;
  });

  // Paid tools state
  const [paidTools] = useState<PaidToolItem[]>(PAID_TOOLS);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('devfree_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Shared Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Free Tab Filter states
  const [selectedFreeCategory, setSelectedFreeCategory] = useState<CategoryId>('all');
  const [noCardOnly, setNoCardOnly] = useState(false);
  const [apiOnly, setApiOnly] = useState(false);

  // Paid Tab Filter states
  const [selectedPaidCategory, setSelectedPaidCategory] = useState<CategoryId>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<PricingModel | 'all'>('all');

  // Shared Filter & Sort states
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Modals state
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
  const [selectedPaidTool, setSelectedPaidTool] = useState<PaidToolItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Sync theme with document class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('devfree_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('devfree_theme', 'light');
    }
  }, [isDark]);

  // Sync favorites
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      localStorage.setItem('devfree_favorites', JSON.stringify(next));
      return next;
    });
  };

  // Add custom tool
  const handleAddTool = (newTool: ToolItem) => {
    setTools((prev) => {
      const next = [newTool, ...prev];
      const customOnly = next.filter((t) => t.id.startsWith('custom-'));
      localStorage.setItem('devfree_custom_tools', JSON.stringify(customOnly));
      return next;
    });
  };

  // Free Category counts calculation
  const freeCategoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      all: tools.length,
      ai: 0,
      database: 0,
      image_media: 0,
      hosting: 0,
      auth: 0,
      email_messaging: 0,
      apis_data: 0,
      payments: 0,
    };

    tools.forEach((tool) => {
      if (counts[tool.category] !== undefined) {
        counts[tool.category]++;
      }
    });

    return counts;
  }, [tools]);

  // Paid Category counts calculation
  const paidCategoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      all: paidTools.length,
      ai: 0,
      database: 0,
      image_media: 0,
      hosting: 0,
      auth: 0,
      email_messaging: 0,
      apis_data: 0,
      payments: 0,
    };

    paidTools.forEach((tool) => {
      if (counts[tool.category] !== undefined) {
        counts[tool.category]++;
      }
    });

    return counts;
  }, [paidTools]);

  // Free Tools Filtering & Sorting
  const filteredFreeTools = useMemo(() => {
    let list = tools;

    if (showOnlyFavorites) {
      list = list.filter((tool) => favorites.includes(tool.id));
    }

    if (selectedFreeCategory !== 'all') {
      list = list.filter((tool) => tool.category === selectedFreeCategory);
    }

    if (noCardOnly) {
      list = list.filter((tool) => !tool.requiresCreditCard);
    }

    if (apiOnly) {
      list = list.filter((tool) => tool.hasApi);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter((tool) => {
        const matchesName = tool.name.toLowerCase().includes(query);
        const matchesTagline = tool.tagline.toLowerCase().includes(query);
        const matchesDesc = tool.description.toLowerCase().includes(query);
        const matchesQuota = tool.freeTierDetails.quota.toLowerCase().includes(query);
        const matchesTags = tool.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesName || matchesTagline || matchesDesc || matchesQuota || matchesTags;
      });
    }

    return [...list].sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return (b.starsRating || 0) - (a.starsRating || 0);
      }
      if (sortBy === 'rating') {
        return (b.starsRating || 0) - (a.starsRating || 0);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [tools, showOnlyFavorites, favorites, selectedFreeCategory, noCardOnly, apiOnly, searchQuery, sortBy]);

  // Paid Tools Filtering & Sorting
  const filteredPaidTools = useMemo(() => {
    let list = paidTools;

    if (showOnlyFavorites) {
      list = list.filter((tool) => favorites.includes(tool.id));
    }

    if (selectedPaidCategory !== 'all') {
      list = list.filter((tool) => tool.category === selectedPaidCategory);
    }

    if (selectedPricingModel !== 'all') {
      list = list.filter((tool) => tool.pricingModel === selectedPricingModel);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      list = list.filter((tool) => {
        const matchesName = tool.name.toLowerCase().includes(query);
        const matchesTagline = tool.tagline.toLowerCase().includes(query);
        const matchesDesc = tool.description.toLowerCase().includes(query);
        const matchesStarting = tool.startingPrice.toLowerCase().includes(query);
        const matchesTags = tool.tags.some((tag) => tag.toLowerCase().includes(query));
        return matchesName || matchesTagline || matchesDesc || matchesStarting || matchesTags;
      });
    }

    return [...list].sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        if (a.isPopular && !b.isPopular) return -1;
        if (!a.isPopular && b.isPopular) return 1;
        return (b.starsRating || 0) - (a.starsRating || 0);
      }
      if (sortBy === 'rating') {
        return (b.starsRating || 0) - (a.starsRating || 0);
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [paidTools, showOnlyFavorites, favorites, selectedPaidCategory, selectedPricingModel, searchQuery, sortBy]);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedFreeCategory('all');
    setSelectedPaidCategory('all');
    setSelectedPricingModel('all');
    setNoCardOnly(false);
    setApiOnly(false);
    setShowOnlyFavorites(false);
  };

  const currentDisplayCount = activeTab === 'free' ? filteredFreeTools.length : filteredPaidTools.length;

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200`}>
      {/* Top Header */}
      <Header
        totalTools={tools.length + paidTools.length}
        favoritesCount={favorites.length}
        showOnlyFavorites={showOnlyFavorites}
        onToggleFavorites={() => setShowOnlyFavorites((prev) => !prev)}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
      />

      {/* Hero Section with Search and Tab Title */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalTools={activeTab === 'free' ? tools.length : paidTools.length}
        activeTab={activeTab}
      />

      {/* Main Tab Navigation (Free vs Paid) */}
      <MainTabNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setSearchQuery('');
        }}
        freeCount={tools.length}
        paidCount={paidTools.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category & Specific Filters */}
        {activeTab === 'free' ? (
          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedFreeCategory}
            onSelectCategory={setSelectedFreeCategory}
            categoryCounts={freeCategoryCounts}
            noCardOnly={noCardOnly}
            onToggleNoCard={() => setNoCardOnly((prev) => !prev)}
            apiOnly={apiOnly}
            onToggleApiOnly={() => setApiOnly((prev) => !prev)}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        ) : (
          <PaidCategoryFilter
            categories={PAID_CATEGORIES}
            selectedCategory={selectedPaidCategory}
            onSelectCategory={setSelectedPaidCategory}
            categoryCounts={paidCategoryCounts}
            selectedPricingModel={selectedPricingModel}
            onSelectPricingModel={setSelectedPricingModel}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        )}

        {/* Results Counter / Active Filter Bar */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <div>
            Mostrando <strong className="text-white font-semibold">{currentDisplayCount}</strong> {currentDisplayCount === 1 ? 'ferramenta' : 'ferramentas'} {activeTab === 'free' ? 'gratuitas' : 'pagas'}
            {showOnlyFavorites && ' (Filtrado por favoritos)'}
            {searchQuery && ` para "${searchQuery}"`}
          </div>
          {(selectedFreeCategory !== 'all' || selectedPaidCategory !== 'all' || noCardOnly || apiOnly || selectedPricingModel !== 'all' || showOnlyFavorites || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
            >
              Resetar todos os filtros
            </button>
          )}
        </div>

        {/* Grid Render */}
        {activeTab === 'free' ? (
          filteredFreeTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFreeTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  isFavorite={favorites.includes(tool.id)}
                  onToggleFavorite={toggleFavorite}
                  onOpenDetails={setSelectedTool}
                />
              ))}
            </div>
          ) : (
            <EmptyState onReset={handleResetFilters} />
          )
        ) : (
          filteredPaidTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPaidTools.map((tool) => (
                <PaidToolCard
                  key={tool.id}
                  tool={tool}
                  isFavorite={favorites.includes(tool.id)}
                  onToggleFavorite={toggleFavorite}
                  onOpenDetails={setSelectedPaidTool}
                />
              ))}
            </div>
          ) : (
            <EmptyState onReset={handleResetFilters} />
          )
        )}
      </main>

      {/* Free Tool Detail Modal */}
      <ToolModal
        tool={selectedTool}
        isOpen={Boolean(selectedTool)}
        onClose={() => setSelectedTool(null)}
        isFavorite={selectedTool ? favorites.includes(selectedTool.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Paid Tool Detail Modal */}
      <PaidToolModal
        tool={selectedPaidTool}
        isOpen={Boolean(selectedPaidTool)}
        onClose={() => setSelectedPaidTool(null)}
        isFavorite={selectedPaidTool ? favorites.includes(selectedPaidTool.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* Add Custom Tool Modal */}
      <AddToolModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddTool={handleAddTool}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
