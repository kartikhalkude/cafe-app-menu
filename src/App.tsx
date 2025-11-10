import { useState, useCallback, useMemo, useEffect } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CategoryNav from './components/CategoryNav';
import MenuGrid from './components/MenuGrid';
import Footer from './components/Footer';
import { CAFE_CONFIG } from './data/config';
import './styles/globals.css';
import './styles/components.css';
import './styles/responsive.css';

interface FilterState {
  veg: boolean;
  nonVeg: boolean;
}

export default function App() {
  const [filters, setFilters] = useState<FilterState>({ veg: false, nonVeg: false });
  const [activeCategory, setActiveCategory] = useState(0);

  const handleVegToggle = useCallback((checked: boolean) => {
    setFilters(prev => ({ veg: checked, nonVeg: checked ? false : prev.nonVeg }));
  }, []);

  const handleNonVegToggle = useCallback((checked: boolean) => {
    setFilters(prev => ({ veg: checked ? false : prev.veg, nonVeg: checked }));
  }, []);

  const handleCategoryClick = (index: number) => {
    setActiveCategory(index);
  };

  // Calculate which categories have visible items based on current filters
  const visibleCategories = useMemo(() => {
    return CAFE_CONFIG.menu.map(category => {
      const hasVisibleItems = category.items.some(item => {
        if (filters.veg) return item.dietType === 'veg';
        if (filters.nonVeg) return item.dietType === 'non-veg';
        return true;
      });
      return hasVisibleItems;
    });
  }, [filters]);

  // Auto-switch to first visible category if current category becomes hidden
  useEffect(() => {
    if (!visibleCategories[activeCategory]) {
      const firstVisible = visibleCategories.findIndex(Boolean);
      setActiveCategory(firstVisible !== -1 ? firstVisible : 0);
    }
  }, [visibleCategories, activeCategory]);

  // Scroll to active category when it changes
  useEffect(() => {
    const id = `category-${activeCategory}`;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeCategory]);

  return (
    <div className="app-container">
      <Header name={CAFE_CONFIG.name} tagline={CAFE_CONFIG.tagline} />
      <FilterBar onVegToggle={handleVegToggle} onNonVegToggle={handleNonVegToggle} />
      <CategoryNav
        categories={CAFE_CONFIG.menu}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
        visibleCategories={visibleCategories}
      />
      <main className="menu-container">
        {CAFE_CONFIG.menu.map((category, index) => (
          <MenuGrid
            key={index}
            category={category}
            filters={filters}
            categoryId={`category-${index}`}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}