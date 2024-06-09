
// ShopPage.js
import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import NavigationBar from '../Components/NavigationBar';
import '../Styles/ShopPage.css';

const ShopPage = () => {
    // Dummy product data
    const [products, setProducts] = useState([
        { id: 1, name: 'Mandala Planter White Pearl', price: 51, type: 'Planter', color: 'White', image: 'path/to/white-planter.jpg' },
        { id: 2, name: 'Mandala Stool Brown Wood', price: 544, type: 'Furniture', color: 'Brown', image: 'path/to/brown-stool.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
        // Add more products here
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
                <div className="sidebar">
                    <h3>Filters</h3>
                    <div>
                        <h4>Product type</h4>
                        <div>
                            <input type="checkbox" id="furniture" />
                            <label htmlFor="furniture">Furniture</label>
                        </div>
                        {/* Add more checkboxes for other product types */}
                    </div>
                    {/* Add more filters here */}
                </div>
                <div className="product-list">
                    <div className="product-list-header">
                        <h2>Shop All</h2>
                        <div>
                            <span>Sort by:</span>
                            <select>
                                <option value="price">Price</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;