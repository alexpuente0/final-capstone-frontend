import '@testing-library/jest-dom';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import App from '../App';
import setupStore from './setupStore';

describe('Test the ItemDelete page', () => {
  it('renders the Item Delete page correctly', () => {
    const store = setupStore();
    render(
      <Provider store={store}>
        <Router initialEntries={['/delete']}>
          <App />
        </Router>
      </Provider>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('Delete a Green');
  });

  it('shows the ReservationsPage when clicking the "Reserve this Car" button', async () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router initialEntries={['/delete']}>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Delete a Green');
    });
  });
});
