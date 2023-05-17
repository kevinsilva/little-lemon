import { Link } from 'react-router-dom';
import Header from './Header';
import ConfirmationPage from './ConfirmationPage';
import Footer from './Footer';

function ConfirmedBooking() {
  return (
    <>
      <Header />
      <ConfirmationPage />
      <Link
        to="/"
        className="primary-button primary-button--yellow"
        aria-label="homepage button"
      >
        Go To Homepage
      </Link>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;
