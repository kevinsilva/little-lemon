import { Link } from 'react-router-dom';
import restaurantFood from '../assets/restauranfood.jpg';
import restaurant from '../assets/restaurant.jpg';
import chefs from '../assets/chefs.jpg';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h3 className="hero-subtitle">Chicago</h3>
        <p className="hero-description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="primary-button primary-button--yellow">
          <Link to="/booking" aria-label="Reservation Button">
            Reserve a table
          </Link>
        </button>
      </div>
      <div className="hero-image-container">
        <img
          src={restaurantFood}
          alt="hero"
          className="hero-image hero-image-1"
        />
        <img src={restaurant} alt="hero" className="hero-image hero-image-2" />
        <img src={chefs} alt="hero" className="hero-image hero-image-3" />
      </div>
    </section>
  );
}

export default Hero;
