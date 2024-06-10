import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import ContactForm from './ContactForm';

// Mock axios
jest.mock('axios');

describe('ContactForm', () => {
    it('should submit form data on click of Send button', async () => {
        // Arrange
        render(<ContactForm />);

        // Fill in the form fields
        fireEvent.change(screen.getByPlaceholderText('John Smith'), {
            target: { value: 'John Smith' }
        });
        fireEvent.change(screen.getByPlaceholderText('name@domain.com'), {
            target: { value: 'john.smith@example.com' }
        });
        fireEvent.change(screen.getByPlaceholderText('country code + number'), {
            target: { value: '1234567890' }
        });
        fireEvent.change(screen.getByPlaceholderText('Tell us about your Query'), {
            target: { value: 'This is a test query.' }
        });

        // Mock the post request response
        axios.post.mockResolvedValueOnce({ data: { message: 'Success' } });

        // Act
        fireEvent.click(screen.getByText('Send'));

        // Assert
        await screen.findByText('Form submitted successfully:', { exact: false });
        expect(axios.post).toHaveBeenCalledWith(
            'http://localhost:5555/contact/createcontact',
            new URLSearchParams({
                name: 'John Smith',
                email: 'john.smith@example.com',
                phoneNumber: '1234567890',
                description: 'This is a test query.'
            }).toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                transformRequest: expect.any(Array)
            }
        );
    });
});
