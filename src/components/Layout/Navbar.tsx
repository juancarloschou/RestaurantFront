// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`icon-bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <ul className="menu">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <hr />
          <li><Link to="/admin/restaurants" onClick={closeMenu}>Admin - Restaurants</Link></li>
          <li><Link to="/admin/menu" onClick={closeMenu}>Admin - Menu</Link></li>
          <hr />
          <li><Link to="/worker/order" onClick={closeMenu}>Worker - Order</Link></li>
          <li><Link to="/worker/customer" onClick={closeMenu}>Worker - Customer</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
