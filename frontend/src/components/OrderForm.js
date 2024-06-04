import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function OrderForm() {
  const { id } = useParams();
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/orders', {
      productId: id,
      userEmail: email,
      quantity,
    })
      .then(response => {
        alert('Order placed successfully');
        console.log('Order response:', response.data);
      })
      .catch(error => {
        console.error('Error placing order:', error);
        alert('Failed to place order');
      });
  };

  return (
    <div>
      <h1>Order Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
              min="1"
            />
          </label>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
