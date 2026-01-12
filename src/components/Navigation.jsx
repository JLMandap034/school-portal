import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import '../styles/Navigation.css';

function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img 
            src="/school-logo.png" 
            alt="Mother of Perpetual Help School Logo" 
            className="logo-icon"
            onError={(e) => {
              if (e.target.nextSibling) {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }
            }}
          />
          <span className="logo-icon-fallback">🏫</span>
          <span className="logo-text">MPHSI</span>
        </Link>
        <button 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <DarkModeToggle />
          </li>
          <li className="nav-item">
            <Link to="/login" className={`nav-link nav-link-button ${isActive('/login')}`} onClick={closeMenu}>
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
