import React from 'react';
import Logo from '../assets/little-lemon-green-logo2.png'
import Nav from './Nav';

/**
 * Header component displaying the restaurant logo and navigation menu.
 * Appears on all view. Uses semantic <header> and includes ARIA labeling for accessibility.
 */
const Header = () => {
    return (
    <header aria-label="Restaurant Logo" className="header">
        <img src={Logo} alt="logo"/>
        <Nav />
    </header>
    );
}

export default Header;