export type DietType = 'veg' | 'non-veg';

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  dietType: DietType;
}

export interface Category {
  category: string;
  items: MenuItem[];
}

export interface CafeConfig {
  name: string;
  tagline: string;
  menu: Category[];
}