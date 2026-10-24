import { describe, expect, it } from 'vitest';
import { dishes, filterDishes } from './menu';

describe('original Lume menu', () => {
  it.each([
    ['bruschetta', 28], ['carpaccio', 28], ['risoto', 45],
    ['frango', 35], ['cheesecake', 24], ['brownie', 22],
  ])('preserves the original price for %s', (id, price) => {
    expect(dishes.find(dish => dish.id === id)?.price).toBe(price);
  });
  it('keeps all six original dishes', () => {
    expect(filterDishes('Todos').map(dish => dish.id)).toEqual(['bruschetta', 'carpaccio', 'risoto', 'frango', 'cheesecake', 'brownie']);
  });
  it('filters each course without mixing courses', () => {
    expect(filterDishes('Entradas').map(dish => dish.id)).toEqual(['bruschetta', 'carpaccio']);
    expect(filterDishes('Pratos principais').map(dish => dish.id)).toEqual(['risoto', 'frango']);
    expect(filterDishes('Sobremesas').map(dish => dish.id)).toEqual(['cheesecake', 'brownie']);
  });
});