import '@testing-library/jest-dom';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../App';
import setupStore from './setupStore';

describe('Test the ItemDetail page', () => {
  it('renders the Item Detail page correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <Router initialEntries={['/items/1']}>
          <App />
        </Router>
      </Provider>,
    );
    expect(screen.queryAllByText('BMW i4')).toHaveLength(1);
  });

  it('shows the ReservationsPage when clicking the "Reserve this Car" button', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router initialEntries={['/items/1']}>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Reserve this Car'));
    expect(screen.getByRole('heading')).toHaveTextContent('Add Reservation');
  });

  it('Goes to the homepage after clicking the "Delete" button', async () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router initialEntries={['/items/1']}>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Delete'));
    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Hello, Roberto');
    }, { options: { timeout: 2000 } });
  });
});
