import express from 'express';
import { sendContactEmail, sendAlertEmailToProductUsers } from '../emailService.js';
import Contact from '../models/Contact.js';

const contactRouter = express.Router();

contactRouter.post('/createcontact', async (req, res) => {
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

contactRouter.post("/createcontact", async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phoneNumber) {
            return res.status(400).send("Please provide required information!");
        }

        const newContact = {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            description: req.body.description,
        };

        const createdContact = await Contact.create(newContact);

        // Send an automated email
        const subject = "Thank you for contacting us!";
        const text = `Hello ${newContact.name},\n\nThank you for reaching out to us. We have received your query and will get back to you within 48 hours.\n\nBest regards,\nYour Company Name`;
        // sendEmail(newContact.email, subject, text);

        return res.status(201).send(createdContact);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});

export default contactRouter;
