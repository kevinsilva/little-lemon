import restaurantFood from '../assets/restauranfood.jpg';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Little Lemon</h1>
        <h3 className="hero__subtitle">Chicago</h3>
        <p className="hero__description">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="hero__button">Reserve a table</button>
      </div>
      <div className="hero__image-container">
        <img src={restaurantFood} alt="hero" className="hero__image" />
      </div>
    </section>
  );
}

export default Hero;
