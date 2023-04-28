import logo from '../assets/logo.svg';
import basket from '../assets/basket.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img src={logo} alt="logo" className="primary-logo" />
      </a>
      <nav className="header__navbar">
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
          <li className="header__item">
            <a href="/order.html" className="header__link header__link--button">
              Order Online
            </a>
          </li>
        </ul>
      </nav>
      <button className="basket-icon">
        <img src={basket} alt="basket-icon" />
      </button>
    </header>
  );
}

export default Header;
