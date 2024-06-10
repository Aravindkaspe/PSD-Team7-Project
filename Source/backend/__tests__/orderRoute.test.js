const request = require('supertest');
const express = require('express');
const orderRouter = require('../routes/orderRoute');
const { sendOrderEmailToCustomer, sendOrderAlertEmailToProductUsers } = require('../emailService');

jest.mock('../emailService');

const app = express();
app.use(express.json());
app.use('/order', orderRouter);

describe('Order Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new order and send emails', async () => {
    const orderDetails = {
      customerName: 'Customer',
      customerEmail: 'customer@example.com',
      product: 'Product A',
      quantity: 1,
      price: 100,
    };

    const response = await request(app)
      .post('/order/createorder')
      .send(orderDetails);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Order placed successfully');
    expect(sendOrderEmailToCustomer).toHaveBeenCalledWith(orderDetails);
    expect(sendOrderAlertEmailToProductUsers).toHaveBeenCalledWith(orderDetails);
  });
});
