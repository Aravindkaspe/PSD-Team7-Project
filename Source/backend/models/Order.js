import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  orderDate: { type: Date, required: true },
});

orderSchema.index({ customerEmail: 1 });
orderSchema.index({ orderDate: 1 });

const Order = mongoose.model('Order', orderSchema);
export default Order;
