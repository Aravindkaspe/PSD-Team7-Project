import mongoose from 'mongoose';

const { Schema } = mongoose;

const quoteSchema = new Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  totalBudget: { type: Number, required: true },
  itemDescription: { type: String, required: true },
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
