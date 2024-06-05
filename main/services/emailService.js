const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendOrderSuccessEmail = async (customer) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: customer.email,
        subject: 'Order Successful',
        text: `Hi ${customer.name},\n\nYour order has been successfully placed. Thank you for shopping with us!\n\nBest Regards,\nYour Company`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.log('Error sending email:', error);
    }
};

module.exports = { sendOrderSuccessEmail };
