import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/Checkout.css';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    email: ''
  });
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could handle the order submission (e.g., send to a server)
    setOrderConfirmed(true);
    setCart([]);
  };

  if (orderConfirmed) {
    return (
      <div className="checkout">
        <h2>Thank you for your order, {userInfo.name}!</h2>
        <p>Your order will be shipped to {userInfo.address}.</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={userInfo.name} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={userInfo.address} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userInfo.email} onChange={handleChange} required />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
