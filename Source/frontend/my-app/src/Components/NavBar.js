
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/3D company Icon.png';
import '../Styles/NavigationBar.css';

const NavBar = ({ openModal }) => {
    return (
        <header>
            <nav>
                <div className="logo-container">
                    <img src={logo} alt="3D Craft House Logo" className="logo-img" />
                    <div className="logo">The 3D Craft House</div>
                </div>
                <ul>
                    <li><a href="#" onClick={openModal}>Contact Us</a></li>
                    <li><Link to="/booking">Booking</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
