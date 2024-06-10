import express from 'express';
import { sendContactEmail, sendAlertEmailToProductUsers } from '../emailService.js';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/createcontact', async (req, res) => {
  const contactDetails = req.body;

  try {
    console.log('Received contact details:', contactDetails);

    const newContact = new Contact(contactDetails);
    await newContact.save();
    console.log('Contact details saved to DB.');

    sendContactEmail(contactDetails);
    console.log('Contact email sent.');

    await sendAlertEmailToProductUsers(contactDetails);
    console.log('Alert emails sent to product users.');

    res.status(200).send('Contact form submitted successfully');
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).send('Error submitting contact form');
  }
});

export default router;
