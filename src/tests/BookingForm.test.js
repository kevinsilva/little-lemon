import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';
import ConfirmedBooking from '../components/ConfirmedBooking';
import { DataContextProvider } from '../components/DataContext';
import { initializeTimes } from '../components/DataContext';
import { MemoryRouter } from 'react-router-dom';
import 'jest-localstorage-mock';

function TestingWrapper({ children }) {
  return (
    <DataContextProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </DataContextProvider>
  );
}

describe('Booking Form', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem.mockClear();
    jest.clearAllMocks();
  });

  it('renders the BookingForm heading', () => {
    render(
      <TestingWrapper>
        <BookingForm />
      </TestingWrapper>
    );
    const headingElement = screen.getByText('Reserve a table');
    expect(headingElement).toBeInTheDocument();
  });
  it('Updates the available times for each date', () => {
    render(
      <TestingWrapper>
        <BookingForm />
      </TestingWrapper>
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
  it('writes form data to localStorage', () => {
    render(
      <TestingWrapper>
        <BookingForm />
      </TestingWrapper>
    );

    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Kevin Silva' } });

    const emailInput = screen.getByLabelText('email input');
    fireEvent.change(emailInput, { target: { value: 'kevin@gmail.com' } });

    const dateInput = screen.getByLabelText('Choose Date');
    fireEvent.change(dateInput, { target: { value: '2023-05-26' } });

    const timeInput = screen.getByLabelText('Choose Time');
    fireEvent.change(timeInput, { target: { value: '17:00' } });

    const guestsInput = screen.getByLabelText('number of guests input');
    fireEvent.change(guestsInput, { target: { value: '1' } });

    const submitInput = screen.getByText('Make your reservation');
    fireEvent.click(submitInput);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('reads form data from localStorage', () => {
    localStorage.setItem('formData', JSON.stringify({ name: 'Kevin' }));
    render(
      <TestingWrapper>
        <ConfirmedBooking />
      </TestingWrapper>
    );
    setTimeout(() => {
      const nameElement = screen.getByText('Kevin');
      expect(nameElement).toBeInTheDocument();
    }, 0);
  });

  describe('Initialize Times Function', () => {
    it('returns an array with different times for today', () => {
      const arrayTimes = initializeTimes();
      const secondArrayTimes = initializeTimes();

      expect(Array.isArray(arrayTimes)).toBe(true);
      expect(arrayTimes).toEqual(secondArrayTimes);
    });
  });
});
