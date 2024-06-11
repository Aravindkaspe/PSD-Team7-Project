import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import '../Styles/NavigationBar.css';

const NavigationBar = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navigation-bar">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart ({cartItemCount})</Link>
    </nav>
  );
};

export default NavigationBar;
