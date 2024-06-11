// ShopPage.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';
import NavigationBar from '../Components/NavigationBar';
import { fetchProducts } from '../Components/Api/productApi'; // Import the fetchProducts function
import '../Styles/ShopPage.css';

const ShopPage = () => {
    // Static product data
    const staticProducts = [
        { id: 1, name: 'Mandala Planter White Pearl', price: 51, type: 'Planter', color: 'White', image: 'path/to/white-planter.jpg' },
        { id: 2, name: 'Mandala Stool Brown Wood', price: 544, type: 'Furniture', color: 'Brown', image: 'path/to/brown-stool.jpg' },
        { id: 3, name: 'Mandala Planters Clear', price: 51, type: 'Planter', color: 'Clear', image: 'path/to/clear-planter.jpg' },
    ];

    const [products, setProducts] = useState(staticProducts);
    const [filteredProducts, setFilteredProducts] = useState(staticProducts);
    const [isLoadingProducts, setIsLoadingProducts] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        furniture: false,
        planters: false,
        sortOrder: 'asc',
    });

    useEffect(() => {
        const filterProducts = async () => {
            let filtered = [...products];

            if (filterOptions.furniture || filterOptions.planters) {
                setIsLoadingProducts(true);

                try {
                    const fetchedProducts = await fetchProducts(filterOptions);
                    filtered = fetchedProducts;
                } catch (error) {
                    console.error('Error fetching products:', error);
                } finally {
                    setIsLoadingProducts(false);
                }
            }

            filtered.sort((a, b) => {
                if (filterOptions.sortOrder === 'asc') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });

            setFilteredProducts(filtered);
        };

        filterProducts();
    }, [filterOptions, products]);

    const handleFilterChange = (e) => {
        setFilterOptions({
            ...filterOptions,
            [e.target.name]: e.target.checked,
        });
    };

    // Dummy cart data and addToCart function
    const [cart, setCart] = useState([]);

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
                        <div className="filter-option">
                            <input
                                type="checkbox"
                                id="furniture"
                                name="furniture"
                                checked={filterOptions.furniture}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor="furniture">Furniture</label>
                        </div>
                        <div className="filter-option">
                            <input
                                type="checkbox"
                                id="planters"
                                name="planters"
                                checked={filterOptions.planters}
                                onChange={handleFilterChange}
                            />
                            <label htmlFor="planters">Planters</label>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="product-list-header">
                        <h2>Shop All</h2>
                        <div>
                            <span>Sort by:</span>
                            <select name="sortOrder" value={filterOptions.sortOrder} onChange={handleFilterChange}>
                                <option value="asc">Price (Low to High)</option>
                                <option value="desc">Price (High to Low)</option>
                            </select>
                        </div>
                    </div>
                    {isLoadingProducts ? (
                        <div>Loading products...</div>
                    ) : (
                        <div className="product-grid">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;