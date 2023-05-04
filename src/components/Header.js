import logo from '../assets/logo.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src={logo} alt="logo" className="primary-logo" />
      </a>
      <input type="checkbox" className="menu__checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu__button">
        <span class="menu__icon">&nbsp;</span>
      </label>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="/" className="header__link">
              Home
            </a>
          </li>
          <li className="header__item">
            <a href="/about.html" className="header__link">
              About
            </a>
          </li>
          <li className="header__item">
            <a href="/menu.html" className="header__link">
              Menu
            </a>
          </li>
          <li className="header__item">
            <a href="/reservations.html" className="header__link">
              Reservations
            </a>
          </li>
          <li className="header__item">
            <a href="login.html" className="header__link">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
