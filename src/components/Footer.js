import { Link } from 'react-router-dom';
import Logo3 from '../assets/logo_3.png';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo3} alt="logo" className="footer__logo" />
      <nav className="footer__nav">
        <section className="footer__nav-section">
          <h4 className="footer__nav-section-title">Navigation</h4>
          <ul className="footer__nav-section-list">
            <li className="footer__nav-section-item">
              <Link to="/" className="footer__nav-section-link">
                Home
              </Link>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#about.html">
                About
              </a>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#menu.html">
                Menu
              </a>
            </li>
            <li className="footer__nav-section-item">
              <Link to="/reservation" className="footer__nav-section-link">
                Reservations
              </Link>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#order.html">
                Order Online
              </a>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#login.html">
                Login
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__nav-section">
          <h4 className="footer__nav-section-title">Contact</h4>
          <ul className="footer__nav-section-list">
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#address.html">
                Address
              </a>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#phone.html">
                Phone Number
              </a>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#email.html">
                Email
              </a>
            </li>
          </ul>
        </section>
        <section className="footer__nav-section">
          <h4 className="footer__nav-section-title">Social Media</h4>
          <ul className="footer__nav-section-list">
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#address.html">
                Address
              </a>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#phone.html">
                Phone Number
              </a>
            </li>
            <li className="footer__nav-section-item">
              <a className="footer__nav-section-link" href="#email.html">
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
