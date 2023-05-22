import { Link } from 'react-router-dom';
import Logo2 from '../assets/logo_2.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo2} alt="logo" className="footer-logo" />
      <nav className="footer-nav">
        <section className="footer-nav-section">
          <h4 className="footer-nav-section-title">Navigation</h4>
          <ul className="footer-nav-section-list">
            <li className="footer-nav-section-item">
              <Link
                to="/"
                className="footer-nav-section-link"
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#about.html">
                About
              </a>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#menu.html">
                Menu
              </a>
            </li>
            <li className="footer-nav-section-item">
              <Link
                to="/booking"
                className="footer-nav-section-link"
                aria-label="Reservations"
              >
                Reservations
              </Link>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#order.html">
                Order Online
              </a>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#login.html">
                Login
              </a>
            </li>
          </ul>
        </section>
        <section className="footer-nav-section">
          <h4 className="footer-nav-section-title">Contact</h4>
          <ul className="footer-nav-section-list">
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#address.html">
                Address
              </a>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#phone.html">
                Phone Number
              </a>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#email.html">
                Email
              </a>
            </li>
          </ul>
        </section>
        <section className="footer-nav-section">
          <h4 className="footer-nav-section-title">Social Media</h4>
          <ul className="footer-nav-section-list">
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#address.html">
                Address
              </a>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#phone.html">
                Phone Number
              </a>
            </li>
            <li className="footer-nav-section-item">
              <a className="footer-nav-section-link" href="#email.html">
                Email
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </footer>
  );
}

export default Footer;
