import React from 'react';
import type { Category } from '../data/types';
import MenuItem from './MenuItem';
import '../styles/components.css';

interface FilterState {
  veg: boolean;
  nonVeg: boolean;
}

interface MenuGridProps {
  category: Category;
  filters: FilterState;
  categoryId: string;
}

const MenuGrid: React.FC<MenuGridProps> = ({ category, filters, categoryId }) => {
  const filteredItems = category.items.filter(item => {
    if (filters.veg) return item.dietType === 'veg';
    if (filters.nonVeg) return item.dietType === 'non-veg';
    return true;
  });

  if (filteredItems.length === 0) return null;

  return (
    <section className="category" id={categoryId}>
      <h2 className="category-title">{category.category}</h2>
      <div className="menu-grid" role="list">
        {filteredItems.map((item, index) => (
          <div key={index} role="listitem">
            <MenuItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuGrid;