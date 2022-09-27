import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from '../App';
import setupStore from './setupStore';

describe('Test the App.test components', () => {
  it('renders the App correctly', () => {
    const store = setupStore();
    const app = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    expect(app).toMatchSnapshot();
  });

  it('shows the HomePage when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('My Reservations'));
    fireEvent.click(screen.getByText('Home'));
    expect(
      container.getElementsByClassName('react-multi-carousel-list'),
    ).toHaveLength(1);
  });

  it('shows the ReservationsPage when clicking the navbar link', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('My Reservations'));
    expect(screen.getByRole('heading')).toHaveTextContent('My Reservations');
  });

  it('shows the Add Reservations when clicking the navbar link', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Reserve Green'));
    expect(screen.getByRole('heading')).toHaveTextContent('Add Reservation');
  });

  it('shows the New Item when clicking the navbar link', () => {
    const store = setupStore(false);
    const { container } = render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('New Green'));
    expect(
      container.getElementsByClassName('MuiFormControl-root'),
    ).toHaveLength(1);
  });

  it('shows the Delete Items when clicking the navbar link', () => {
    const store = setupStore(false);
    render(
      <Provider store={store}>
        <Router>
          <App url="/" />
        </Router>
      </Provider>,
    );
    fireEvent.click(screen.getByText('Delete Green'));
    expect(screen.getByRole('heading')).toHaveTextContent('Delete a Green');
  });
});
