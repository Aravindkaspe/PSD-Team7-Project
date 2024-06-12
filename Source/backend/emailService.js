import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import ProductUser from './models/ProductUser.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export const sendContactConfirmationEmail = (contactDetails) => {
  const text = `Dear ${contactDetails.name},

Thank you for reaching out to us. We will get back to you shortly.

Best regards,
The 3D Craft House`;

  sendEmail(contactDetails.email, 'Thank you for contacting us!', text);
};

export const sendContactAlertEmail = async (contactDetails) => {
  try {
    const productUsers = await ProductUser.find();
    console.log('Product Users:', productUsers);

    if (productUsers.length === 0) {
      console.error('No product users found to send alert email');
      return;
    }

    const text = `Dear Product Owner,

A new customer has submitted the Contact Us form. Here are the details:

Name: ${contactDetails.name}
Email: ${contactDetails.email}
Phone Number: ${contactDetails.phoneNumber}
Description: ${contactDetails.description}

Best regards,
The 3D Craft House`;

    productUsers.forEach((user) => {
      sendEmail(user.email, 'New Contact Us Submission Alert', text);
    });
  } catch (error) {
    console.error('Error sending alert emails to product users:', error);
  }
};

export const sendQuoteConfirmationEmail = (quoteDetails) => {
  const text = `Dear ${quoteDetails.customerName},

Thank you for requesting a quote! Here are the details:

Service: ${quoteDetails.service}
Total Budget: $${quoteDetails.budget}
Item Description: ${quoteDetails.description}

Best regards,
The 3D Craft House`;

  sendEmail(quoteDetails.customerEmail, 'Quote Confirmation', text);
};

export const sendQuoteAlertEmail = async (quoteDetails) => {
  try {
    const productUsers = await ProductUser.find();
    console.log('Product Users:', productUsers);

    if (productUsers.length === 0) {
      console.error('No product users found to send alert email');
      return;
    }

    const text = `Dear Product Owner,

A new quote has been submitted. Here are the details:

Customer Name: ${quoteDetails.customerName}
Service: ${quoteDetails.service}
Total Budget: $${quoteDetails.budget}
Item Description: ${quoteDetails.description}

Best regards,
The 3D Craft House`;

    productUsers.forEach((user) => {
      sendEmail(user.email, 'New Quote Submission Alert', text);
    });
  } catch (error) {
    console.error('Error sending quote alert emails to product users:', error);
  }
};
