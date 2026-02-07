import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Mobile Navigation (Bottom Nav)
  return (
    <nav className="navbar navbar-mobile">
      <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <span className="nav-label">HOME</span>
      </Link>
      
      <Link to="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
          </svg>
        </div>
        <span className="nav-label">EVENTS</span>
      </Link>
      
      <Link to="/team" className={`nav-item ${isActive('/team') ? 'active' : ''}`}>
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
          </svg>
        </div>
        <span className="nav-label">CONTACT</span>
      </Link>
      
      <Link to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
        </div>
        <span className="nav-label">ABOUT</span>
      </Link>
      
      <a href="#sponsors" className="nav-item">
        <div className="nav-icon">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <span className="nav-label">SPONSORS</span>
      </a>
    </nav>
  );
}

export default Navbar;