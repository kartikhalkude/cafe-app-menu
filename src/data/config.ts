import type { CafeConfig } from './types';

export const CAFE_CONFIG: CafeConfig = {
  name: 'Café Lumière',
  tagline: 'Simple pleasures, exceptional taste',
  menu: [
    {
      category: 'Coffee',
      items: [
        {
          name: 'Espresso',
          price: '₹120',
          description: 'Single shot of premium Arabica beans',
          dietType: 'veg',
        },
        {
          name: 'Cappuccino',
          price: '₹150',
          description: 'Espresso with steamed milk and microfoam',
          dietType: 'veg',
        },
        {
          name: 'Flat White',
          price: '₹160',
          description: 'Ristretto shots with velvety steamed milk',
          dietType: 'veg',
        },
        {
          name: 'Latte',
          price: '₹150',
          description: 'Smooth espresso with steamed milk',
          dietType: 'veg',
        },
        {
          name: 'Mocha',
          price: '₹180',
          description: 'Espresso with chocolate and steamed milk',
          dietType: 'veg',
        },
        {
          name: 'Caramel Macchiato',
          price: '₹200',
          description: 'Vanilla-infused espresso with caramel drizzle',
          dietType: 'veg',
        },
      ],
    },
    {
      category: 'Cold Drinks',
      items: [
        {
          name: 'Iced Americano',
          price: '₹140',
          description: 'Espresso over ice with cold water',
          dietType: 'veg',
        },
        {
          name: 'Cold Brew',
          price: '₹160',
          description: 'Slow-steeped for 16 hours, served over ice',
          dietType: 'veg',
        },
        {
          name: 'Iced Latte',
          price: '₹170',
          description: 'Espresso with cold milk over ice',
          dietType: 'veg',
        },
        {
          name: 'Frappe',
          price: '₹180',
          description: 'Blended coffee with ice and whipped cream',
          dietType: 'veg',
        },
        {
          name: 'Mango Smoothie',
          price: '₹160',
          description: 'Fresh mango blended with yogurt',
          dietType: 'veg',
        },
      ],
    },
    {
      category: 'Sandwiches',
      items: [
        {
          name: 'Grilled Cheese',
          price: '₹180',
          description: 'Melted cheddar and mozzarella on sourdough',
          dietType: 'veg',
        },
        {
          name: 'Paneer Tikka Sandwich',
          price: '₹220',
          description: 'Spiced paneer with mint chutney',
          dietType: 'veg',
        },
        {
          name: 'Veggie Club',
          price: '₹200',
          description: 'Layered vegetables with pesto mayo',
          dietType: 'veg',
        },
        {
          name: 'Chicken Club',
          price: '₹280',
          description: 'Grilled chicken with bacon and lettuce',
          dietType: 'non-veg',
        },
        {
          name: 'BBQ Chicken',
          price: '₹300',
          description: 'Smoky BBQ chicken with caramelized onions',
          dietType: 'non-veg',
        },
      ],
    },
    {
      category: 'Pizza',
      items: [
        {
          name: 'Margherita',
          price: '₹380',
          description: 'San Marzano tomatoes, fresh mozzarella, basil',
          dietType: 'veg',
        },
        {
          name: 'Funghi',
          price: '₹420',
          description: 'Wild mushrooms, truffle oil, parmesan',
          dietType: 'veg',
        },
        {
          name: 'Farm Fresh',
          price: '₹450',
          description: 'Bell peppers, olives, corn, and tomatoes',
          dietType: 'veg',
        },
        {
          name: 'Pepperoni',
          price: '₹480',
          description: 'Classic pepperoni with mozzarella',
          dietType: 'non-veg',
        },
        {
          name: 'Prosciutto',
          price: '₹520',
          description: 'Italian ham, arugula, shaved parmesan',
          dietType: 'non-veg',
        },
        {
          name: 'BBQ Chicken',
          price: '₹500',
          description: 'Grilled chicken with BBQ sauce and onions',
          dietType: 'non-veg',
        },
      ],
    },
    {
      category: 'Burgers',
      items: [
        {
          name: 'Classic Veg Burger',
          price: '₹180',
          description: 'Crispy veggie patty with fresh lettuce',
          dietType: 'veg',
        },
        {
          name: 'Paneer Burger',
          price: '₹200',
          description: 'Spiced paneer patty with tandoori mayo',
          dietType: 'veg',
        },
        {
          name: 'Mushroom Swiss',
          price: '₹220',
          description: 'Portobello mushroom with Swiss cheese',
          dietType: 'veg',
        },
        {
          name: 'Chicken Burger',
          price: '₹240',
          description: 'Grilled chicken with herb aioli',
          dietType: 'non-veg',
        },
        {
          name: 'Chicken Tikka Burger',
          price: '₹260',
          description: 'Tandoori chicken with mint chutney',
          dietType: 'non-veg',
        },
      ],
    },
  ],
};
