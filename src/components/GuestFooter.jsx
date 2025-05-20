import './GuestFooter.css';

const GuestFooter = () => {
  return (
    <footer className="guest-footer">
      <div className="container">
        <div className="footer-about">
          <h3>Skywave</h3>
          <p>Comprehensive solutions for your business needs. Join our community today.</p>
        </div>
        
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact Us</a>
        </div>
        
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Skywave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;