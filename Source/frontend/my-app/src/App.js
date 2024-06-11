import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import CartPage from './Components/CartPage';
import Checkout from './Components/Checkout';
import products from './Data/products';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
