import express from 'express';
import Order from '../models/Order.js';
import { sendOrderEmailToCustomer, sendOrderAlertEmailToProductUsers } from '../emailService.js';

const router = express.Router();

// Handle new order creation
router.post('/createorder', async (req, res) => {
  const orderDetails = req.body;

  try {
    // Save the order details in the database
    const newOrder = new Order(orderDetails);
    await newOrder.save();

    // Send email to the customer who placed the order
    sendOrderEmailToCustomer(orderDetails);

    // Send alert email to product users who opted for notifications
    await sendOrderAlertEmailToProductUsers(orderDetails);

    res.status(200).send('Order placed successfully');
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).send('Error placing order');
  }
});

export default router;
