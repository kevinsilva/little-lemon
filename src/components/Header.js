import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="logo" className="primary-logo" />
      </Link>
      <input type="checkbox" className="menu-checkbox" id="menu-toggle" />
      <label
        htmlFor="menu-toggle"
        className="menu-button"
        aria-label="Toggle Menu"
      >
        <span className="menu-icon">&nbsp;</span>
      </label>
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-item">
            <Link to="/" className="header-link" aria-label="Home">
              Home
            </Link>
          </li>
          <li className="header-item">
            <a href="#about" className="header-link" aria-label="About">
              About
            </a>
          </li>
          <li className="header-item">
            <a href="#menu" className="header-link" aria-label="Menu">
              Menu
            </a>
          </li>
          <li className="header-item">
            <Link
              to="/booking"
              className="header-link"
              aria-label="Reservations"
            >
              Reservations
            </Link>
          </li>
          <li className="header-item">
            <a href="#login" className="header-link" aria-label="Login">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
