import express from 'express';
import Quote from '../models/Quote.js';
import { sendQuoteConfirmationEmail, sendQuoteSubmissionEmailToProductUsers } from '../emailService.js';

const router = express.Router();

router.post('/createquote', async (req, res) => {
  const quoteDetails = req.body;

  try {
    const newQuote = new Quote(quoteDetails);
    await newQuote.save();

    sendQuoteConfirmationEmail(quoteDetails);

    await sendQuoteSubmissionEmailToProductUsers(quoteDetails);

    res.status(200).send('Quote submitted successfully');
  } catch (error) {
    console.error('Error submitting quote:', error);
    res.status(500).send('Error submitting quote');
  }
});

export default router;
