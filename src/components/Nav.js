import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <button
        aria-label="Toggle Menu"
        className="mobileMenuBtn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={36} /> : <FaBars size={36} />}
      </button>

      <ul className={`menuLinks ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><a href="/#about" onClick={closeMenu}>About</a></li>
        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
        <li><Link to="/reservation" onClick={closeMenu}>Reservation</Link></li>
        <li><Link to="/order-online" onClick={closeMenu}>Order Online</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
