import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import { DataContextProvider } from '../components/DataContext';
import { initializeTimes } from '../components/DataContext';

describe('Booking Form', () => {
  it('renders the BookingForm heading', () => {
    render(
      <DataContextProvider>
        <BookingForm />
      </DataContextProvider>
    );
    const headingElement = screen.getByText('Reserve a table');
    expect(headingElement).toBeInTheDocument();
  });
  it('Updates the available times for each date', () => {
    render(
      <DataContextProvider>
        <BookingForm />
      </DataContextProvider>
    );

    const firstDateInput = screen.getByLabelText(/Choose Date/);
    fireEvent.change(firstDateInput, { target: { value: '2023-05-25' } });
    const firstTimeInput = screen.getByLabelText(/Choose Time/);
    const firstAvailableTimes = Array.from(firstTimeInput.options).map(
      (option) => option.value
    );

    const secondDateInput = screen.getByLabelText(/Choose Date/);
    fireEvent.change(secondDateInput, { target: { value: '2023-05-26' } });
    const secondTimeInput = screen.getByLabelText(/Choose Time/);
    const secondAvailableTimes = Array.from(secondTimeInput.options).map(
      (option) => option.value
    );

    expect(firstAvailableTimes).not.toEqual(secondAvailableTimes);
  });

  describe('Initialize Times Function', () => {
    it('returns an array with different times for today', () => {
      const arrayTimes = initializeTimes();
      expect(Array.isArray(arrayTimes)).toBe(true);
    });
  });
});
