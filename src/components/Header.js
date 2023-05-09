import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="logo" className="primary-logo" />
      </Link>
      <input type="checkbox" className="menu__checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu__button">
        <span class="menu__icon">&nbsp;</span>
      </label>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li className="header__item">
            <a href="#about" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <a href="#menu" className="header__link">
              Menu
            </a>
          </li>
          <li className="header__item">
            <Link to="/reservation" className="header__link">
              Reservations
            </Link>
          </li>
          <li className="header__item">
            <a href="#login" className="header__link">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
