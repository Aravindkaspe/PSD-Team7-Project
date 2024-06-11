import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../src/Components/NavBar';

//NavBar test cases
describe('NavBar', () => {
    const openModalMock = jest.fn();

    test('renders logo and navigation items correctly', () => {
        render(
            <Router>
                <NavBar openModal={openModalMock} />
            </Router>
        );

        // Check if the logo is rendered
        const logoImg = screen.getByAltText('3D Craft House Logo');
        expect(logoImg).toBeInTheDocument();
        
        // Check if the logo text is rendered
        const logoText = screen.getByText('The 3D Craft House');
        expect(logoText).toBeInTheDocument();
        
        // Check if navigation items are rendered
        const contactUsLink = screen.getByText('Contact Us');
        const bookingLink = screen.getByText('Booking');
        const shopLink = screen.getByText('Shop');
        
        expect(contactUsLink).toBeInTheDocument();
        expect(bookingLink).toBeInTheDocument();
        expect(shopLink).toBeInTheDocument();
    });

    test('calls openModal function when Contact Us is clicked', () => {
        render(
            <Router>
                <NavBar openModal={openModalMock} />
            </Router>
        );

        const contactUsLink = screen.getByText('Contact Us');
        fireEvent.click(contactUsLink);
        expect(openModalMock).toHaveBeenCalled();
    });

    test('renders links with correct paths', () => {
        render(
            <Router>
                <NavBar openModal={openModalMock} />
            </Router>
        );

        const bookingLink = screen.getByRole('link', { name: /booking/i });
        const shopLink = screen.getByRole('link', { name: /shop/i });
        
        expect(bookingLink).toHaveAttribute('href', '/booking');
        expect(shopLink).toHaveAttribute('href', '/shop');
    });
});