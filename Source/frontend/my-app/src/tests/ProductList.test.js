import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from '../Components/ProductList';
import products from '../Data/products';

test('renders ProductList component', () => {
  render(<ProductList products={products} />);
  expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument();
});

test('filters products by search term', () => {
  render(<ProductList products={products} />);
  const searchInput = screen.getByPlaceholderText('Search products...');
  fireEvent.change(searchInput, { target: { value: 'Book' } });
  expect(screen.getAllByText(/Book/i).length).toBeGreaterThan(0);
});

test('filters products by category', () => {
  render(<ProductList products={products} />);
  const categorySelect = screen.getByRole('combobox');
  fireEvent.change(categorySelect, { target: { value: 'Electronics' } });
  expect(screen.getAllByText(/Electronics/i).length).toBeGreaterThan(0);
});
