// ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <div>{product.name}</div>
            <div>${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ProductCard;
