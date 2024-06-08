import mongoose from 'mongoose';

const productUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  notify_orders: { type: Boolean, required: true },
  email: { type: String, required: true }
});

const ProductUser = mongoose.model('ProductUser', productUserSchema);
export default ProductUser;
