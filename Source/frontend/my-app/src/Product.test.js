import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

const products = [
  { id: 1, name: 'Smartphone', category: 'Electronics' },
  { id: 2, name: 'Laptop', category: 'Electronics' },
  { id: 3, name: 'T-shirt', category: 'Clothing' },
  { id: 4, name: 'Novel', category: 'Books' },
  { id: 5, name: 'Headphones', category: 'Electronics' },
];

describe('ProductList Component', () => {
  test('renders all products by default', () => {
    render(<ProductList products={products} />);
    
    products.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  test('filters products by search term', () => {
    render(<ProductList products={products} />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'Laptop' } });

    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.queryByText('Smartphone')).toBeNull();
    expect(screen.queryByText('T-shirt')).toBeNull();
    expect(screen.queryByText('Novel')).toBeNull();
    expect(screen.queryByText('Headphones')).toBeNull();
  });

  test('filters products by category', () => {
    render(<ProductList products={products} />);

    const categorySelect = screen.getByDisplayValue('All Categories');
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } });

    expect(screen.getByText('Smartphone')).toBeInTheDocument();
    expect(screen.getByText('Laptop')).toBeInTheDocument();
    expect(screen.getByText('Headphones')).toBeInTheDocument();
    expect(screen.queryByText('T-shirt')).toBeNull();
    expect(screen.queryByText('Novel')).toBeNull();
  });

  test('filters products by search term and category', () => {
    render(<ProductList products={products} />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    const categorySelect = screen.getByDisplayValue('All Categories');
    
    fireEvent.change(searchInput, { target: { value: 'Head' } });
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } });

    expect(screen.getByText('Headphones')).toBeInTheDocument();
    expect(screen.queryByText('Smartphone')).toBeNull();
    expect(screen.queryByText('Laptop')).toBeNull();
    expect(screen.queryByText('T-shirt')).toBeNull();
    expect(screen.queryByText('Novel')).toBeNull();
  });

  test('shows no products if no match found', () => {
    render(<ProductList products={products} />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    fireEvent.change(searchInput, { target: { value: 'NonExistingProduct' } });

    products.forEach(product => {
      expect(screen.queryByText(product.name)).toBeNull();
    });
  });
});
