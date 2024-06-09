import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Contact from './models/Contact.js';
import ProductUser from './models/ProductUser.js';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendEmail = (to, subject, text) => {
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

// Function to send email to customers who filled contact us page
export const sendContactEmail = (contactDetails) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: contactDetails.email,
    subject: 'Thank you for contacting us!',
    text: `Dear ${contactDetails.name},\n\nThank you for reaching out to us. We will get back to you shortly.\n\nBest regards,\nYour Company`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending contact email:', error);
    } else {
      console.log('Contact email sent:', info.response);
    }
  });
};

// Function to send alert email to product users
export const sendAlertEmailToProductUsers = async (contactDetails) => {
  try {
    // Find all users who opted for order notifications
    const productUsers = await ProductUser.find({ notify_orders: true });

    productUsers.forEach((user) => {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: user.email,
        subject: 'New Contact Us Submission Alert',
        text: `Dear ${user.name},\n\nA new customer has submitted the Contact Us form. Here are the details:\n\nName: ${contactDetails.name}\nRole: ${contactDetails.role}\nEmail: ${contactDetails.email}\n\nBest regards,\nYour Company`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(`Error sending alert email to ${user.email}:`, error);
        } else {
          console.log(`Alert email sent to ${user.email}:`, info.response);
        }
      });
    });
  } catch (error) {
    console.error('Error sending alert emails to product users:', error);
  }
};

// Function to send email to customers who placed an order
export const sendOrderEmailToCustomer = (orderDetails) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: orderDetails.customerEmail,
    subject: 'Order Confirmation',
    text: `Dear ${orderDetails.customerName},\n\nThank you for your order! Here are the details:\n\nProduct: ${orderDetails.product}\nQuantity: ${orderDetails.quantity}\nPrice: $${orderDetails.price}\nOrder Date: ${orderDetails.orderDate}\n\nBest regards,\nYour Company`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending order email:', error);
    } else {
      console.log('Order email sent:', info.response);
    }
  });
};

// Function to send alert email to product users about a new order
export const sendOrderAlertEmailToProductUsers = async (orderDetails) => {
  try {
    // Find all users who opted for order notifications
    const productUsers = await ProductUser.find({ notify_orders: true });

    productUsers.forEach((user) => {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: user.email,
        subject: 'New Order Alert',
        text: `Dear ${user.name},\n\nA new order has been placed. Here are the details:\n\nCustomer Name: ${orderDetails.customerName}\nProduct: ${orderDetails.product}\nQuantity: ${orderDetails.quantity}\nPrice: $${orderDetails.price}\nOrder Date: ${orderDetails.orderDate}\n\nBest regards,\nYour Company`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(`Error sending order alert email to ${user.email}:`, error);
        } else {
          console.log(`Order alert email sent to ${user.email}:`, info.response);
        }
      });
    });
  } catch (error) {
    console.error('Error sending order alert emails to product users:', error);
  }
};
