import React, { useState } from 'react';
import ContactButton from './ContactButton';
import ContactFormModal from './ContactFormModal';

const ContactSection = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <section className="questions">
                <h1>Got Questions? We're Here to Help!</h1>
                <ContactButton onClick={openModal} />
            </section>
            <ContactFormModal isOpen={modalOpen} onClose={closeModal} />
        </div>
    );
};

export default ContactSection;
