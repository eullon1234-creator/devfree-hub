import React, { useState, useEffect, useMemo } from 'react';
import { INITIAL_TOOLS, CATEGORIES } from './data/toolsData';
import type { ToolItem, CategoryId } from './types/tool';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import type { SortOption } from './components/CategoryFilter';
import { ToolCard } from './components/ToolCard';
import { ToolModal } from './components/ToolModal';
import { AddToolModal } from './components/AddToolModal';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem('devfree_theme') !== 'light';
  });

  // Tools state (defaults + custom items in localStorage)
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

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('devfree_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [noCardOnly, setNoCardOnly] = useState(false);
  const [apiOnly, setApiOnly] = useState(false);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Modals state
  const [selectedTool, setSelectedTool] = useState<ToolItem | null>(null);
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
      // Save only custom tools to localStorage
      const customOnly = next.filter((t) => t.id.startsWith('custom-'));
      localStorage.setItem('devfree_custom_tools', JSON.stringify(customOnly));
      return next;
    });
  };

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      all: tools.length,
      ai: 0,
      database: 0,
      image_media: 0,
      hosting: 0,
      auth: 0,
      email_messaging: 0,
      apis_data: 0,
    };

    tools.forEach((tool) => {
      if (counts[tool.category] !== undefined) {
        counts[tool.category]++;
      }
    });

    return counts;
  }, [tools]);

  // Filtering & Sorting
  const filteredTools = useMemo(() => {
    let list = tools;

    // Filter by Favorites
    if (showOnlyFavorites) {
      list = list.filter((tool) => favorites.includes(tool.id));
    }

    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter((tool) => tool.category === selectedCategory);
    }

    // Filter by No Credit Card
    if (noCardOnly) {
      list = list.filter((tool) => !tool.requiresCreditCard);
    }

    // Filter by API
    if (apiOnly) {
      list = list.filter((tool) => tool.hasApi);
    }

    // Search query filter
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

    // Sorting
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
  }, [tools, showOnlyFavorites, favorites, selectedCategory, noCardOnly, apiOnly, searchQuery, sortBy]);

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setNoCardOnly(false);
    setApiOnly(false);
    setShowOnlyFavorites(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200`}>
      {/* Top Header */}
      <Header
        totalTools={tools.length}
        favoritesCount={favorites.length}
        showOnlyFavorites={showOnlyFavorites}
        onToggleFavorites={() => setShowOnlyFavorites((prev) => !prev)}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        isDark={isDark}
        onToggleDark={() => setIsDark((prev) => !prev)}
      />

      {/* Hero Section with Search */}
      <Hero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalTools={tools.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Category Selector, Filters and Sorting */}
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
          noCardOnly={noCardOnly}
          onToggleNoCard={() => setNoCardOnly((prev) => !prev)}
          apiOnly={apiOnly}
          onToggleApiOnly={() => setApiOnly((prev) => !prev)}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Counter / Active Filter Bar */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <div>
            Mostrando <strong className="text-white font-semibold">{filteredTools.length}</strong> {filteredTools.length === 1 ? 'ferramenta' : 'ferramentas'}
            {showOnlyFavorites && ' (Filtrado por favoritos)'}
            {searchQuery && ` para "${searchQuery}"`}
          </div>
          {(selectedCategory !== 'all' || noCardOnly || apiOnly || showOnlyFavorites || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline"
            >
              Resetar todos os filtros
            </button>
          )}
        </div>

        {/* Tools Cards Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => (
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
        )}
      </main>

      {/* Detail Modal */}
      <ToolModal
        tool={selectedTool}
        isOpen={Boolean(selectedTool)}
        onClose={() => setSelectedTool(null)}
        isFavorite={selectedTool ? favorites.includes(selectedTool.id) : false}
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
