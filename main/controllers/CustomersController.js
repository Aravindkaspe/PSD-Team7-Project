const Customer = require('../models/Customers');
const { sendOrderSuccessEmail } = require('../services/emailService');

const createCustomer = async (req, res) => {
    try {
        const { name, email } = req.body;
        const customer = new Customer({ name, email });
        await customer.save();
        await sendOrderSuccessEmail(customer); // Send email after saving customer
        res.status(201).json(customer);
    } catch (err) {
        console.log("error occurred", err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createCustomer };
