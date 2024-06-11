import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import '../Styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [feedback, setFeedback] = useState('');

  const handleAddToCart = () => {
    addToCart(product);
    setFeedback('Added to cart!');
    setTimeout(() => setFeedback(''), 2000);
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default ProductCard;
