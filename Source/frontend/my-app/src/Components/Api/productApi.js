

const fetchProducts = async (filterOptions) => {
    // Dummy product data
    const furnitureItems = [
        { id: 4, name: 'Furniture Item 1', price: 100, type: 'Furniture', color: 'Brown', image: 'path/to/furniture-item-1.jpg' },
        { id: 5, name: 'Furniture Item 2', price: 200, type: 'Furniture', color: 'Black', image: 'path/to/furniture-item-2.jpg' },
    ];

    const planterItems = [
        { id: 6, name: 'Planter Item 1', price: 30, type: 'Planter', color: 'White', image: 'path/to/planter-item-1.jpg' },
        { id: 7, name: 'Planter Item 2', price: 40, type: 'Planter', color: 'Green', image: 'path/to/planter-item-2.jpg' },
    ];

    let products = [];

    if (filterOptions.furniture && filterOptions.planters) {
        products = [...furnitureItems, ...planterItems];
    } else if (filterOptions.furniture) {
        products = furnitureItems;
    } else if (filterOptions.planters) {
        products = planterItems;
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    return products;
};

export { fetchProducts };