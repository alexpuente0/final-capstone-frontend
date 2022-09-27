import '@testing-library/jest-dom';
import {
    fireEvent, render, screen, waitFor
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../App';
import setupStore from './setupStore';

describe('Test the AddReservations page', () => {
  it('renders the AddReservations page correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <Router initialEntries={['/reservations/add']}>
          <App />
        </Router>
      </Provider>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Add Reservation');
  });

  it('creates one reservation in the reservations table', async () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router initialEntries={['/reservations/add']}>
          <App url="/" />
        </Router>
      </Provider>,
    );
    const car = screen.getByTestId('item');
    await fireEvent.change(car, { target: { value: 'BMW i4' } });
    const city = screen.getByPlaceholderText('City');
    await fireEvent.change(city, { target: { value: 'Monte Chingolo' } });
    const date = screen.getByPlaceholderText('Date');
    await fireEvent.change(date, { target: { value: '2022-01-01' } });
    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent(
        'My Reservations',
      );
    });
    await waitFor(() => {
      expect(screen.getAllByText('Monte Chingolo').length).toBeGreaterThan(0);
    }, { options: { timeout: 1000 } });
  });
});
