// ShopPage.js
import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import NavigationBar from '../Components/NavigationBar';
import '../Styles/ShopPage.css';

const ShopPage = () => {
    // Dummy product data
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
        { id: 4, name: 'Product 4', price: 40 }
    ]);

    // Dummy cart data
    const [cart, setCart] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div className="shop-page">
            <NavigationBar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
            <div className="shop-content">
                <div className="sidebar">Filters</div>
                <div className="product-list">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
