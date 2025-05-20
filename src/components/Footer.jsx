import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Skywave</h4>
            <p>Comprehensive report, data visualization, and insights to analyze your business.</p>
          </div>
          
          <div className="footer-col">
            <h4>Solution</h4>
            <ul>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">By Workflow</a></li>
              <li><a href="#">By Team</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">News & Press</a></li>
              <li><a href="#">Our Customer</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Webinar & Events</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">E-book & Guides</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="#">Contact Sales</a></li>
              <li><a href="#">Become Partner</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Skywave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;