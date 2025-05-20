import { Link } from 'react-router-dom';
import './GuestLayout.css';

const GuestLayout = ({ children }) => {
  return (
    <div className="guest-layout">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="/images/sedap-logo.png" alt="Sedap Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </header>

      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section about">
              <h3>About Sedap</h3>
              <p>The best culinary experience at your fingertips.</p>
            </div>
            <div className="footer-section contact">
              <h3>Contact Us</h3>
              <p>Email: info@sedap.com</p>
              <p>Phone: +62 123 4567 890</p>
            </div>
            <div className="footer-section social">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
            <div className="footer-section partners">
              <h3>Our Partners</h3>
              <div className="partner-logos">
                <img src="/images/partner1.png" alt="Partner 1" />
                <img src="/images/partner2.png" alt="Partner 2" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Sedap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestLayout;