import mongoose from 'mongoose';
import validator from 'validator';

const { Schema } = mongoose;

const productUserSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Invalid email format']
  },
  notify_orders: { type: Boolean, required: true }
});

const ProductUser = mongoose.model('ProductUser', productUserSchema);
export default ProductUser;
