import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/footerLogo.png";

/**
 * Footer Component
 * ----------------
 * - Logo & navigasi utama
 * - Kontak & sosial media
 * - Copyright text
 */
const Footer = () => {
  return (
    <footer className="footer" aria-label="Page Footer">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo">
          <img src={Logo} alt="Little Lemon logo" width="80" height="80" />
        </div>

        {/* Navigasi */}
        <div className="footer__links">
          <div className="footer__col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="/#about">About</a></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/order-online">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="footer__col">
            <h4>Contact Us</h4>
            <ul>
              <li>101 Michigan Avenue</li>
              <li>(312) 555-0179</li>
              <li>
                <a href="mailto:contact@example.com">Email Us</a>
              </li>
            </ul>
          </div>

          {/* Sosial */}
          <div className="footer__col">
            <h4>Socials</h4>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>© 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
