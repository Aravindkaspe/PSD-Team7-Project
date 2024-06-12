import dotenv from 'dotenv';

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);  // Add this line to verify
console.log('PORT:', process.env.PORT);  // Add this line to verify

export const PORT = process.env.PORT || 5000;
export const MongoURL = process.env.MONGO_URI;
