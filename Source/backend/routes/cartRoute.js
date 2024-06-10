import express from 'express';
import { Cart } from '../models/Cart.js';
import { Product } from '../models/Product.js';

const cartRouter = express.Router();

// Add item to cart
cartRouter.post('/add', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ products: [], totalPrice: 0 });
    }

    const existingProductIndex = cart.products.findIndex(p => p.productId.toString() === productId);
    if (existingProductIndex >= 0) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    cart.totalPrice += product.price * quantity;
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update cart item quantity
cartRouter.post('/update', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne();
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const productInCart = cart.products.find(p => p.productId.toString() === productId);
    if (productInCart) {
      cart.totalPrice -= product.price * productInCart.quantity;
      productInCart.quantity = quantity;
      cart.totalPrice += product.price * quantity;
      await cart.save();
      res.json(cart);
    } else {
      res.status(404).json({ message: 'Product not in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Checkout
cartRouter.post('/checkout', async (req, res) => {
  try {
    let cart = await Cart.findOne();
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.products = [];
    cart.totalPrice = 0;
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default cartRouter;
