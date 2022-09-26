import { Provider } from 'react-redux';
import {
  cleanup, render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {
  MemoryRouter, Route, Routes,
} from 'react-router-dom';
import configureStore from '../redux/configureStore';
import LoginPage from '../pages/LoginPage';
import ReservationsPage from '../pages/ReservationsPage';
import ReservationsAddPage from '../pages/ReservationsAddPage';
import App from '../App';

describe('Navigation', () => {
  test('login and reserve', async () => {
    render(
      <Provider store={configureStore}>
        <MemoryRouter initialEntries={['/reservations/add']}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByRole('heading')).toHaveTextContent('Login');
    const email = screen.getByPlaceholderText('Email');
    await userEvent.type(email, 'aldo@mail.com');
    const password = screen.getByPlaceholderText('Password');
    await userEvent.type(password, 'valido');
    act(() => {
      fireEvent.click(screen.getByText('Submit'));
    });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Add Reservation');
    }, { options: { timeout: 2000 } });

    const car = screen.getByTestId('item');
    await fireEvent.change(car, { target: { value: 'Genesis GV60' } });
    const city = screen.getByPlaceholderText('City');
    await userEvent.type(city, 'Monte Chingolo');
    const date = screen.getByPlaceholderText('Date');
    await userEvent.type(date, '01/02/2026');
    act(() => {
      fireEvent.click(screen.getByText('Submit'));
    });
    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Reservations Page');
    }, { options: { timeout: 2000 } });
    await waitFor(() => {
      expect(document.getElementsByClassName('listitem')).toHaveLength(7);
    }, { options: { timeout: 2000 } });
  });
});
