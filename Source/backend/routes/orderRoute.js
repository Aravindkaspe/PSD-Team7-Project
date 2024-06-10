import express from 'express';
import Order from '../models/Order.js';
import { sendOrderEmailToCustomer, sendOrderAlertEmailToProductUsers } from '../emailService.js';

const router = express.Router();

router.post('/createorder', async (req, res) => {
  const orderDetails = req.body;

  try {
    const newOrder = new Order(orderDetails);
    await newOrder.save();

    sendOrderEmailToCustomer(orderDetails);

    await sendOrderAlertEmailToProductUsers(orderDetails);

    res.status(200).send('Order placed successfully');
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).send('Error placing order');
  }
});

export default router;
