import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../App';
import setupStore from './setupStore';

describe('Test the MyReservations page', () => {
  it('renders the MyReservations page correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <Router initialEntries={['/reservations']}>
          <App />
        </Router>
      </Provider>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('My Reservations');
  });

  it('shows one reservation in the reservations table', async () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <Router initialEntries={['/reservations']}>
          <App url="/" />
        </Router>
      </Provider>,
    );
    expect(container.getElementsByClassName('listitem')).toHaveLength(2);
  });
});
