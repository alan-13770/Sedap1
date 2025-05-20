import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GuestHeader.css';

const GuestHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="guest-header">
      <div className="container">
        <Link to="/guest" className="logo">
          <h1>Skywave</h1>
        </Link>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
        
        <nav className={`guest-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/guest" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/guest/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/guest/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link 
                to="/login" 
                className="auth-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GuestHeader;