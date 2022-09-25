import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
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
  test('login process', async () => {
    render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    const email = screen.getByPlaceholderText('Email');
    await userEvent.type(email, 'aldo@mail.com');
    const password = screen.getByPlaceholderText('Password');
    await userEvent.type(password, '123456');
    fireEvent.click(screen.getByText('Submit'));
    await new Promise((r) => setTimeout(r, 2000));
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, Aldo!');
  });
});

describe('Navigation', () => {
  test('add reservation', async () => {
    render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute><ReservationsAddPage /></PrivateRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    const car = screen.getByPlaceholderText('Car');
    await userEvent.type(car, 'Genesis GV60');
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
