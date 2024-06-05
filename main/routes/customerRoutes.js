const express = require('express');
const router = express.Router();
const customerController = require('../controllers/CustomersController');

router.post('/add-customer', customerController.createCustomer);

module.exports = router;
