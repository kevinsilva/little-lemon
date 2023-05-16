import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('Booking Form', () => {
  it('renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Make reservation');
    expect(headingElement).toBeInTheDocument();
  });
});
