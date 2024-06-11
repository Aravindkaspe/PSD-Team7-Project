import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CartProvider } from '../Context/CartContext';
import CartPage from '../Components/CartPage';

const mockCart = [
  { id: 1, name: 'Product 1', price: 10, quantity: 1 },
  { id: 2, name: 'Product 2', price: 20, quantity: 2 },
];

test('renders CartPage component with items', () => {
  render(
    <CartProvider value={{ cart: mockCart, setCart: jest.fn() }}>
      <CartPage />
    </CartProvider>
  );
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
  expect(screen.getByText('Total: $50')).toBeInTheDocument();
});
