import greekSalad from '../assets/greek_salad.jpg';
import bruschetta from '../assets/bruchetta.svg';
import lemonDessert from '../assets/lemon_dessert.jpg';
import '../styles/Highlights.css';

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights__header">
        <h2 className="highlights__title">This Week's Specials</h2>
        <button className="primary-button primary-button--yellow">Menu</button>
      </div>
      <div className="highlights__content">
        <div className="highlights__card">
          <div className="highlights__card-image-container">
            <img
              src={greekSalad}
              alt="Greek Salad"
              className="highlights__card-image"
            />
          </div>
          <div className="highlights__card-content">
            <div className="highlights__card-header">
              <h4 className="highlights__card-title">Greek Salad</h4>
              <p className="highlights__card-price">10.99$</p>
            </div>
            <div className="highlights__card-main">
              <p className="highlights__card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>
        <div className="highlights__card">
          <div className="highlights__card-image-container">
            <img
              src={bruschetta}
              alt="Bruschetta"
              className="highlights__card-image"
            />
          </div>
          <div className="highlights__card-content">
            <div className="highlights__card-header">
              <h4 className="highlights__card-title">Bruschetta</h4>
              <p className="highlights__card-price">10.99$</p>
            </div>
            <div className="highlights__card-main">
              <p className="highlights__card-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt accusamus similique provident sint neque sit mollitia,
                illo vero ullam autem fugit placeat.
              </p>
              <button className="primary-button">Order a delivery</button>
            </div>
          </div>
        </div>
        <div className="highlights__card">
          <div className="highlights__card-image-container">
            <img
              src={lemonDessert}
              alt="Lemon Dessert"
              className="highlights__card-image"
            />
          </div>
          <div className="highlights__card-content">
            <div className="highlights__card-header">
              <h4 className="highlights__card-title">Lemon Dessert</h4>
              <p className="highlights__card-price">10.99$</p>
            </div>
            <div className="highlights__card-main">
              <p className="highlights__card-description">
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
