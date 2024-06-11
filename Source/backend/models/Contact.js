import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  phoneNumber: { type: String, required: true },
  description: { type: String, required: true }
});

const ContactDetails = mongoose.model('Contact', contactSchema);
export default ContactDetails;
