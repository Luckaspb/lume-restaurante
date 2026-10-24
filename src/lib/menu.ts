const bruschetta = '/bruschetta.webp';
const carpaccio = '/carpaccio.webp';
const risoto = '/risoto.webp';
const frango = '/frango.webp';
const cheesecake = '/cheesecake.webp';
const brownie = '/brownie.webp';

export const categories = ['Todos', 'Entradas', 'Pratos principais', 'Sobremesas'] as const;
export type Category = (typeof categories)[number];
export const dishes = [
  { id: 'bruschetta', name: 'Bruschetta de Tomate', category: 'Entradas', description: 'Tomate fresco, manjericão e azeite sobre pão artesanal.', price: 28, image: bruschetta },
  { id: 'carpaccio', name: 'Carpaccio de Salmão', category: 'Entradas', description: 'Fatias finas de salmão fresco, limão, azeite e ervas.', price: 28, image: carpaccio },
  { id: 'risoto', name: 'Risoto de Cogumelos', category: 'Pratos principais', description: 'Arroz arbóreo, cogumelos frescos, parmesão, ervas e manteiga.', price: 45, image: risoto },
  { id: 'frango', name: 'Filé de Frango ao Limão', category: 'Pratos principais', description: 'Filé de frango grelhado, molho de limão, batatas rústicas e ervas frescas.', price: 35, image: frango },
  { id: 'cheesecake', name: 'Cheesecake de Frutas Vermelhas', category: 'Sobremesas', description: 'Base crocante de biscoito, creme de baunilha e cobertura de frutas vermelhas.', price: 24, image: cheesecake },
  { id: 'brownie', name: 'Brownie de Chocolate', category: 'Sobremesas', description: 'Brownie de chocolate meio amargo, castanhas e uma calda de chocolate.', price: 22, image: brownie },
];
export type Dish = (typeof dishes)[number];
export const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
export const filterDishes = (category: Category) => dishes.filter(dish => category === 'Todos' || dish.category === category);
