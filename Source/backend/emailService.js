import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Contact from './models/Contact.js';
import ProductUser from './models/ProductUser.js';
import Quote from './models/Quote.js';

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

export const sendContactEmail = (contactDetails) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: contactDetails.email,
    subject: 'Thank you for contacting us!',
    text: `Dear ${contactDetails.name},\n\nThank you for reaching out to us. We will get back to you shortly.\n\nBest regards,\nThe 3D Craft House`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending contact email:', error);
    } else {
      console.log('Contact email sent:', info.response);
    }
  });
};

export const sendAlertEmailToProductUsers = async (contactDetails) => {
  try {
    const productUsers = await ProductUser.find({ notify_orders: true });

    productUsers.forEach((user) => {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: user.email,
        subject: 'New Contact Us Submission Alert',
        text: `Dear ${user.name},\n\nA new customer has submitted the Contact Us form. Here are the details:\n\nName: ${contactDetails.name}\nRole: ${contactDetails.role}\nEmail: ${contactDetails.email}\n\nBest regards,\nThe 3D Craft House`,
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

export const sendOrderEmailToCustomer = (orderDetails) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: orderDetails.customerEmail,
    subject: 'Order Confirmation',
    text: `Dear ${orderDetails.customerName},\n\nThank you for your order! Here are the details:\n\nProduct: ${orderDetails.product}\nQuantity: ${orderDetails.quantity}\nPrice: $${orderDetails.price}\nOrder Date: ${orderDetails.orderDate}\n\nBest regards,\nThe 3D Craft House`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending order email:', error);
    } else {
      console.log('Order email sent:', info.response);
    }
  });
};

export const sendOrderAlertEmailToProductUsers = async (orderDetails) => {
  try {
    const productUsers = await ProductUser.find({ notify_orders: true });

    productUsers.forEach((user) => {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: user.email,
        subject: 'New Order Alert',
        text: `Dear ${user.name},\n\nA new order has been placed. Here are the details:\n\nCustomer Name: ${orderDetails.customerName}\nProduct: ${orderDetails.product}\nQuantity: ${orderDetails.quantity}\nPrice: $${orderDetails.price}\nOrder Date: ${orderDetails.orderDate}\n\nBest regards,\nThe 3D Craft House`,
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

export const sendQuoteConfirmationEmail = (quoteDetails) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: quoteDetails.customerEmail,
    subject: 'Quote Confirmation',
    text: `Dear ${quoteDetails.customerName},\n\nThank you for requesting a quote! Here are the details:\n\nService: ${quoteDetails.service}\nTotal Budget: $${quoteDetails.totalBudget}\nItem Description: ${quoteDetails.itemDescription}\nLocation: ${quoteDetails.location}\n\nBest regards,\nThe 3D Craft House`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending quote email:', error);
    } else {
      console.log('Quote email sent:', info.response);
    }
  });
};

export const sendQuoteSubmissionEmailToProductUsers = async (quoteDetails) => {
  try {
    const productUsers = await ProductUser.find({ notify_orders: true });

    productUsers.forEach((user) => {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: user.email,
        subject: 'New Quote Submission Alert',
        text: `Dear ${user.name},\n\nA new quote has been submitted. Here are the details:\n\nCustomer Name: ${quoteDetails.customerName}\nService: ${quoteDetails.service}\nTotal Budget: $${quoteDetails.totalBudget}\nItem Description: ${quoteDetails.itemDescription}\nLocation: ${quoteDetails.location}\n\nBest regards,\nThe 3D Craft House`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(`Error sending quote alert email to ${user.email}:`, error);
        } else {
          console.log(`Quote alert email sent to ${user.email}:`, info.response);
        }
      });
    });
  } catch (error) {
    console.error('Error sending quote alert emails to product users:', error);
  }
};
