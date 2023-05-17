import restaurant from '../assets/restaurant.jpg';

function ConfirmationPage() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  return (
    <div>
      <div className="confirmation-header">
        <h2>We have received your confirmation</h2>
        <p>
          Please wait for the confirmation email you'll receive at
          <span>&nbsp;{formData.email}</span>.
        </p>
        <img src={restaurant} alt="restaurant" />
      </div>
      <div className="confirmation-details">
        <h3>Your reservation</h3>
        <p>
          <span>{formData.name}</span>
        </p>
        <p>
          <span>{formData.date}&nbsp;</span>
          <span>{formData.time}</span>
        </p>
        <p>
          <span>{formData.numberOfGuests}&nbsp;</span>
          <span>people</span>
        </p>
        <p>{formData.bookingOccasion}</p>
      </div>
    </div>
  );
}

export default ConfirmationPage;
