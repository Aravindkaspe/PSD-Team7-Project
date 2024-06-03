import React from 'react';

const ContactButton = ({ onClick }) => {
    return (
        <button className="contact-button" onClick={onClick}>Contact Us</button>
    );
};

export default ContactButton;