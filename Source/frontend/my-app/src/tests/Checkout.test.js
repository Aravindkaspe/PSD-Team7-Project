import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CartProvider } from '../Context/CartContext';
import Checkout from '../Components/Checkout';

test('renders Checkout component', () => {
  render(
    <CartProvider value={{ cart: [], setCart: jest.fn() }}>
      <Checkout />
    </CartProvider>
  );
  expect(screen.getByText('Checkout')).toBeInTheDocument();
});

test('submits the checkout form', () => {
  render(
    <CartProvider value={{ cart: [], setCart: jest.fn() }}>
      <Checkout />
    </CartProvider>
  );

  fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText('Address:'), { target: { value: '123 Main St' } });
  fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });

  fireEvent.click(screen.getByText('Place Order'));

  expect(screen.getByText('Thank you for your order, John Doe!')).toBeInTheDocument();
  expect(screen.getByText('Your order will be shipped to 123 Main St.')).toBeInTheDocument();
});
