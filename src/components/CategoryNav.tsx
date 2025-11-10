import React from 'react';
import type { Category } from '../data/types';
import '../styles/components.css';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: number;
  onCategoryClick: (index: number) => void;
  visibleCategories: boolean[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
  visibleCategories,
}) => (
  <nav className="category-nav" aria-label="Menu categories">
    <div className="nav-buttons-wrapper">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`nav-button ${activeCategory === index && visibleCategories[index] ? 'active' : ''}`}
          onClick={() => onCategoryClick(index)}
          disabled={!visibleCategories[index]}
          aria-current={activeCategory === index ? 'page' : undefined}
          aria-label={`${cat.category}${!visibleCategories[index] ? ' (no items match filter)' : ''}`}
        >
          {cat.category}
        </button>
      ))}
    </div>
  </nav>
);

export default CategoryNav;