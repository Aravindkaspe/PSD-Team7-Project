import express from 'express';
import Contact from '../models/Contact.js';
import { sendContactConfirmationEmail, sendContactAlertEmail } from '../emailService.js';

const router = express.Router();

router.post('/createcontact', async (req, res) => {
  try {
    const { name, email, phoneNumber, description } = req.body;

    const newContact = await Contact.create({ name, email, phoneNumber, description });

    await sendContactConfirmationEmail({ name, email });
    await sendContactAlertEmail({ name, email, phoneNumber, description });

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

export default router;
