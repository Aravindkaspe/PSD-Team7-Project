const nodemailer = {
    createTransport: jest.fn(() => ({
      sendMail: jest.fn((mailOptions, callback) => {
        callback(null, { response: 'Email sent' });
      }),
    })),
  };
  
  module.exports = nodemailer;
  