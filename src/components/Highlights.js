import greekSalad from '../assets/greek_salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon_dessert.jpg';
import '../styles/Highlights.css';

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2 className="highlights-title">This Week's Specials</h2>
        <button className="primary-button primary-button--yellow">Menu</button>
      </div>
      <div className="highlights-content">
        <div className="highlights-card">
          <div className="highlights-card-image-container">
            <img
              src={greekSalad}
              alt="Greek Salad"
              className="highlights-card-image"
            />
          </div>
          <div className="highlights-card-content">
            <div className="highlights-card-header">
              <h4 className="highlights-card-title">Greek Salad</h4>
              <p className="highlights-card-price">10.99$</p>
            </div>
            <div className="highlights-card-main">
              <p className="highlights-card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>
        <div className="highlights-card">
          <div className="highlights-card-image-container">
            <img
              src={bruschetta}
              alt="Bruschetta"
              className="highlights-card-image"
            />
          </div>
          <div className="highlights-card-content">
            <div className="highlights-card-header">
              <h4 className="highlights-card-title">Bruschetta</h4>
              <p className="highlights-card-price">10.99$</p>
            </div>
            <div className="highlights-card-main">
              <p className="highlights-card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>
        <div className="highlights-card">
          <div className="highlights-card-image-container">
            <img
              src={lemonDessert}
              alt="Lemon Dessert"
              className="highlights-card-image"
            />
          </div>
          <div className="highlights-card-content">
            <div className="highlights-card-header">
              <h4 className="highlights-card-title">Lemon Dessert</h4>
              <p className="highlights-card-price">10.99$</p>
            </div>
            <div className="highlights-card-main">
              <p className="highlights-card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
