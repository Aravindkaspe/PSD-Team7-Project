import express from 'express';
import Quote from '../models/Quote.js';
import { sendQuoteConfirmationEmail, sendQuoteAlertEmail } from '../emailService.js';

const router = express.Router();

router.post('/createquote', async (req, res) => {
  try {
    console.log('Received Quote Request Body:', req.body);

    const { name, email, phoneNumber, service, budget, description } = req.body;

    const newQuote = await Quote.create({ name, email, phoneNumber, service, budget, description });
    console.log('New Quote Created:', newQuote);

    await sendQuoteConfirmationEmail({ customerName: name, customerEmail: email, service, budget, description });
    await sendQuoteAlertEmail({ customerName: name, customerEmail: email, service, budget, description });

    res.status(201).json({ message: 'Quote request submitted successfully' });
  } catch (error) {
    console.error('Error creating new quote:', error);
    res.status(500).json({ error: 'Failed to submit quote request' });
  }
});

export default router;