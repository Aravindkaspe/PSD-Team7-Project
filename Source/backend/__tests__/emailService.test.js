const nodemailer = require('nodemailer');
const { sendEmail, sendContactEmail, sendAlertEmailToProductUsers } = require('../emailService');
const ProductUser = require('../models/ProductUser');
const mongoose = require('mongoose');

jest.mock('nodemailer');
jest.mock('../models/ProductUser', () => {
  return {
    find: jest.fn()
  };
});

describe('Email Service', () => {
  beforeEach(() => {
    nodemailer.createTransport.mockReturnValue({
      sendMail: jest.fn((mailOptions, callback) => {
        callback(null, { response: 'Email sent' });
      }),
    });

    ProductUser.find.mockResolvedValue([
      { email: 'test@example.com', name: 'Test User', notify_orders: true },
    ]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should send an email with given details', () => {
    sendEmail('recipient@example.com', 'Test Subject', 'Test email body');

    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'recipient@example.com',
        subject: 'Test Subject',
        text: 'Test email body',
      }),
      expect.any(Function)
    );
  });

  it('should send a contact email to the customer', () => {
    const contactDetails = { name: 'Customer', email: 'customer@example.com' };

    sendContactEmail(contactDetails);

    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'customer@example.com',
        subject: 'Thank you for contacting us!',
      }),
      expect.any(Function)
    );
  });

  it('should handle error when sending contact email fails', () => {
    nodemailer.createTransport().sendMail.mockImplementationOnce((mailOptions, callback) => {
      callback(new Error('Failed to send email'));
    });

    const contactDetails = { name: 'Customer', email: 'customer@example.com' };

    sendContactEmail(contactDetails);

    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'customer@example.com',
        subject: 'Thank you for contacting us!',
      }),
      expect.any(Function)
    );
  });

  it('should send alert emails to product users', async () => {
    const contactDetails = { name: 'Customer', email: 'customer@example.com' };

    await sendAlertEmailToProductUsers(contactDetails);

    expect(ProductUser.find).toHaveBeenCalledWith({ notify_orders: true });
    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'test@example.com',
        subject: 'New Contact Us Submission Alert',
      }),
      expect.any(Function)
    );
  });

  it('should handle error when sending alert email fails', async () => {
    nodemailer.createTransport().sendMail.mockImplementationOnce((mailOptions, callback) => {
      callback(new Error('Failed to send email'));
    });

    const contactDetails = { name: 'Customer', email: 'customer@example.com' };

    await sendAlertEmailToProductUsers(contactDetails);

    expect(ProductUser.find).toHaveBeenCalledWith({ notify_orders: true });
    expect(nodemailer.createTransport().sendMail).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'test@example.com',
        subject: 'New Contact Us Submission Alert',
      }),
      expect.any(Function)
    );
  });
});
