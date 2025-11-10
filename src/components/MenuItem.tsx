import React from 'react';
import type { MenuItem as MenuItemType } from '../data/types';
import '../styles/components.css';

interface MenuItemProps {
  item: MenuItemType;
}

const VegIcon: React.FC = () => <div className="veg-icon" aria-label="Vegetarian"></div>;
const NonVegIcon: React.FC = () => <div className="non-veg-icon" aria-label="Non-vegetarian"></div>;

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const Icon = item.dietType === 'veg' ? VegIcon : NonVegIcon;

  return (
    <div className="menu-item">
      <div className="item-header">
        <div className="item-name-wrapper">
          <Icon />
          <span className="item-name">{item.name}</span>
        </div>
        <span className="item-price" aria-label={`Price: ${item.price}`}>{item.price}</span>
      </div>
      <p className="item-description">{item.description}</p>
    </div>
  );
};

export default MenuItem;