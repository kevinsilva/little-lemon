import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import restaurant from '../assets/restaurant.jpg';
import '../styles/BookingPage.css';

function ConfirmationPage() {
  const [formData, setFormData] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) setFormData(JSON.parse(storedData));
  }, []);

  return (
    <div className="confirmation">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <h2 className="confirmation-title">
            We have received your confirmation
          </h2>
          <p className="confirmation-message">
            Please wait for the confirmation email you'll receive at
            <span>&nbsp;{formData.email}</span>.
          </p>
          <img
            className="confirmation-photo"
            src={restaurant}
            alt="restaurant"
          />
        </div>
        <div className="confirmation-details">
          <h3 className="details-title">Your reservation</h3>
          <p>
            <span>{formData.name}</span>
          </p>
          <p>
            <span>{formData.date} at&nbsp;</span>
            <span>{formData.time}</span>
          </p>
          <p>
            <span>{formData.numberOfGuests}&nbsp;</span>
            <span>people</span>
          </p>
          <p>{formData.bookingOccasion}</p>
        </div>
        <Link
          to="/"
          className="primary-button primary-button--yellow"
          aria-label="homepage button"
        >
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;
