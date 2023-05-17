import { useNavigate } from 'react-router-dom';
import { useDataContext } from './DataContext';
import { submitAPI } from '../utils/mockAPI';
import { occasions } from '../utils/utilities';

import '../styles/BookingForm.css';

function BookingForm() {
  const { availableTimes, dispatch, formState, setFormState } =
    useDataContext();

  const navigate = useNavigate();

  function submitForm(formData) {
    const response = submitAPI(formData);
    if (response) navigate('/confirmation');
    else throw new Error('Error in confirmation');
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(formState);
    console.log('form submitted');
  }

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setFormState({ ...formState, date: selectedDate });
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  }

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="title-container">
          <h2 className="form-title">Reserve a table</h2>
          <p className="form-description">
            Enter the details for reservation in this page. You will receive an
            email confirming the reservation as soon as possible.
          </p>
        </div>
        <div className="input-container">
          <label htmlFor="res-name">Name</label>
          <input
            type="text"
            id="res-name"
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            name="res-name"
            aria-label="name input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="res-date">Email</label>
          <input
            type="email"
            id="res-email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            name="res-email"
            aria-label="email input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            value={formState.date}
            onChange={handleDateChange}
            name="res-date"
            aria-label="date selection"
          />
        </div>
        <div className="input-container">
          <label htmlFor="res-time">Choose Time</label>
          <select
            id="res-time"
            value={formState.time}
            onChange={(e) =>
              setFormState({ ...formState, time: e.target.value })
            }
            name="res-time"
            aria-label="time selection"
          >
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="guests">Number of Guests</label>
          <input
            type="number"
            id="res-guests"
            value={formState.numberOfGuests}
            onChange={(e) =>
              setFormState({ ...formState, numberOfGuests: e.target.value })
            }
            name="res-guests"
            placeholder="1"
            min="1"
            max="10"
            aria-label="number of guests input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="res-occasion">Occasion</label>
          <select
            id="res-occasion"
            value={formState.bookingOccasion}
            onChange={(e) =>
              setFormState({ ...formState, bookingOccasion: e.target.value })
            }
            name="res-occasion"
            aria-label="occasion selection"
          >
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>

        <input
          className="primary-button primary-button--yellow"
          type="submit"
          value="Make your reservation"
          aria-label="submit reservation button"
        />
      </form>
    </section>
  );
}

export default BookingForm;
