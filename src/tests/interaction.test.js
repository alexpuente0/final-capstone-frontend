import { Provider } from 'react-redux';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line no-unused-vars
import { toHaveClass } from '@testing-library/jest-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import configureStore from '../redux/configureStore';
import LoginPage from '../pages/LoginPage';
import ReservationsPage from '../pages/ReservationsPage';
import ReservationsAddPage from '../pages/ReservationsAddPage';
import PrivateRoute from '../components/PrivateRoute';

describe('Navigation', () => {
  test('add reservation', async () => {
    render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReservationsAddPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
          </Routes>
        </BrowserRouter>
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

    await waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent('Add Reservation'));

    const car = screen.getByTestId('item');
    await fireEvent.change(car, { target: { value: 'Genesis GV60' } });
    const city = screen.getByPlaceholderText('City');
    await userEvent.type(city, 'Monte Chingolo');
    const date = screen.getByPlaceholderText('Date');
    await userEvent.type(date, '01/02/2026');
    act(() => {
      fireEvent.click(screen.getByText('Submit'));
    });
    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByRole('heading')).toHaveTextContent('Reservations Page');
    expect(screen.getAllByText('Genesis GV60')).toHaveLength(1);
  });
});
