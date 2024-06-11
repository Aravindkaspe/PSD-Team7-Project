
import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="product-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>From ${product.price}</p>
            {isHovered && <button onClick={() => addToCart(product)}>Quick add</button>}
        </div>
    );
};

export default ProductCard;