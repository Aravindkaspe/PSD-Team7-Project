// import React from 'react';
// import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// import ContactForm from './Components/ContactForm';

// // Mock axios
// jest.mock('axios');

// describe('ContactForm Component', () => {
//   beforeEach(() => {
//     render(<ContactForm />);
//   });

//   test('renders ContactForm component', () => {
//     expect(screen.getByText('Contact Us')).toBeInTheDocument();
//     expect(screen.getByText(/Please allow up to 48 hours for a response./)).toBeInTheDocument();
//     expect(screen.getByLabelText('Name*')).toBeInTheDocument();
//     expect(screen.getByLabelText('Email address*')).toBeInTheDocument();
//     expect(screen.getByLabelText('Phone number')).toBeInTheDocument();
//     expect(screen.getByLabelText('Description')).toBeInTheDocument();
//     expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
//   });

//   test('handles input changes', () => {
//     fireEvent.change(screen.getByLabelText('Name*'), { target: { value: 'John Doe' } });
//     fireEvent.change(screen.getByLabelText('Email address*'), { target: { value: 'john@example.com' } });
//     fireEvent.change(screen.getByLabelText('Phone number'), { target: { value: '1234567890' } });
//     fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test description' } });

//     expect(screen.getByLabelText('Name*').value).toBe('John Doe');
//     expect(screen.getByLabelText('Email address*').value).toBe('john@example.com');
//     expect(screen.getByLabelText('Phone number').value).toBe('1234567890');
//     expect(screen.getByLabelText('Description').value).toBe('Test description');
//   });
// });
