import React from 'react';
import '../Styles/QuoteForm.css';

const QuoteForm = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Quote</h2>
        <p>Please allow up to 48 hours for a response. All 3D printing requests will need a minimum of 2 weeks due to high demands in our schedules.</p>
        <form action="/submit_form" method="post">
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" placeholder="John Smith" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address*</label>
            <input type="email" id="email" name="email" placeholder="name@domain.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" placeholder="country code + number" />
          </div>
          <div className="form-group">
            <label htmlFor="service">Service</label>
            <input type="text" id="service" name="service" placeholder="What would you like to let us know?" required />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Total Budget (INR)</label>
            <input type="number" id="budget" name="budget" placeholder="Please specify total maximum budget ₹XX" required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Project Description</label>
            <textarea id="description" name="description" rows="4" placeholder="Tell us about your project - we need the rar format .DXF or .STL in order to quote." required></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;