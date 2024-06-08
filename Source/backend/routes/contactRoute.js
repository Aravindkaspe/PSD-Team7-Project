import express from 'express';
import { sendContactEmail, sendAlertEmailToProductUsers } from '../emailService.js';
import Contact from '../models/Contact.js';

const router = express.Router();

// Handle new contact form submission
router.post('/createcontact', async (req, res) => {
  const contactDetails = req.body;

  try {
    console.log('Received contact details:', contactDetails);

    // Save the contact details in the database
    const newContact = new Contact(contactDetails);
    await newContact.save();
    console.log('Contact details saved to DB.');

    // Send email to the customer who filled the contact form
    sendContactEmail(contactDetails);
    console.log('Contact email sent.');

    // Send alert email to product users who opted for notifications
    await sendAlertEmailToProductUsers(contactDetails);
    console.log('Alert emails sent to product users.');

    res.status(200).send('Contact form submitted successfully');
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).send('Error submitting contact form');
  }
});

export default router;
