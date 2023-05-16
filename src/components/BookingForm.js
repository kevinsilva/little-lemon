import { useState } from 'react';
import { useDataContext } from './DataContext';
import { occasions } from '../utils/utilities';

function BookingForm() {
  const { availableTimes, dispatch } = useDataContext();
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [bookingOccasion, setBookingOccasion] = useState(occasions[0]);
  const [numberOfGuests, setNumberOfGuests] = useState('1');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('form submitted');
    console.log(date, time, bookingOccasion, numberOfGuests, availableTimes);
  }

  function handleDateChange(e) {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="res-date">Choose Date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
            name="res-date"
            aria-label="date selection"
          />
        </div>
        <div className="input-container">
          <label htmlFor="res-time">Choose Time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
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
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
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
            value={bookingOccasion}
            onChange={(e) => setBookingOccasion(e.target.value)}
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
          type="submit"
          value="Make your reservation"
          aria-label="submit reservation button"
        />
      </form>
    </>
  );
}

export default BookingForm;
