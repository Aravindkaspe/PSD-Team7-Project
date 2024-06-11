import React, { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';
import '../Styles/CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
