import React, { useState } from 'react';
import '../styles/components.css';

interface FilterBarProps {
  onVegToggle: (checked: boolean) => void;
  onNonVegToggle: (checked: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onVegToggle, onNonVegToggle }) => {
  const [vegChecked, setVegChecked] = useState(false);
  const [nonVegChecked, setNonVegChecked] = useState(false);

  const handleVegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setVegChecked(checked);
    onVegToggle(checked);
  };

  const handleNonVegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setNonVegChecked(checked);
    onNonVegToggle(checked);
  };

  return (
    <div className="filter-bar" role="group" aria-label="Dietary filters">
      <label className="diet-toggle">
        <div className="diet-icon veg-icon-toggle"></div>
        <input 
          type="checkbox" 
          checked={vegChecked} 
          onChange={handleVegChange}
          aria-label="Show only vegetarian items"
        />
        <div className="toggle-switch"></div>
      </label>
      <label className="diet-toggle non-veg">
        <div className="diet-icon non-veg-icon-toggle"></div>
        <input 
          type="checkbox" 
          checked={nonVegChecked} 
          onChange={handleNonVegChange}
          aria-label="Show only non-vegetarian items"
        />
        <div className="toggle-switch"></div>
      </label>
    </div>
  );
};

export default FilterBar;