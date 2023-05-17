import { useDataContext } from './DataContext';
import restaurant from '../assets/restaurant.jpg';

function ConfirmationPage() {
  const { formState } = useDataContext();
  return (
    <div>
      <div className="confirmation-header">
        <h2>We have received your confirmation</h2>
        <p>
          Please wait for the confirmation email you'll receive at
          <span>&nbsp;{formState.email}</span>.
        </p>
        <img src={restaurant} alt="restaurant" />
      </div>
      <div className="confirmation-details">
        <h3>Your reservation</h3>
        <p>
          <span>{formState.name}</span>
        </p>
        <p>
          <span>{formState.date}&nbsp;</span>
          <span>{formState.time}</span>
        </p>
        <p>
          <span>{formState.numberOfGuests}&nbsp;</span>
          <span>people</span>
        </p>
        <p>{formState.bookingOccasion}</p>
      </div>
    </div>
  );
}

export default ConfirmationPage;
