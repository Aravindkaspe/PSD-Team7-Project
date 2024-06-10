const request = require('supertest');
const express = require('express');
const contactRouter = require('../routes/contactRoute');
const { sendContactEmail, sendAlertEmailToProductUsers } = require('../emailService');

jest.mock('../emailService');

const app = express();
app.use(express.json());
app.use('/contact', contactRouter);

describe('Contact Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new contact and send emails', async () => {
    const contactDetails = {
      name: 'Customer',
      email: 'customer@example.com',
      phoneNumber: '(123) 456-7890',
      description: 'Hello',
    };

    const response = await request(app)
      .post('/contact/createcontact')
      .send(contactDetails);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Contact form submitted successfully');
    expect(sendContactEmail).toHaveBeenCalledWith(contactDetails);
    expect(sendAlertEmailToProductUsers).toHaveBeenCalledWith(contactDetails);
  });
});
