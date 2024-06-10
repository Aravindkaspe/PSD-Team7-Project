import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  }],
  totalPrice: {
    type: Number,
    default: 0,
  },
});

export const Cart = mongoose.model('Cart', cartSchema);