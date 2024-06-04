import React from 'react';
import ContactForm from './ContactForm';

const ContactFormModal = ({ isOpen, onClose }) => {
    return (
        isOpen && (
            <div className="modal" onClick={(e) => { if (e.target.className === 'modal') onClose(); }}>
                <div className="modal-content">
                    <span className="close-button" onClick={onClose}>&times;</span>
                    <ContactForm />
                </div>
            </div>
        )
    );
};

export default ContactFormModal;
