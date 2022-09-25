import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line no-unused-vars
import { toHaveClass } from '@testing-library/jest-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import configureStore from '../redux/configureStore';
import LoginPage from '../pages/LoginPage';

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
    expect(screen.getByRole('heading')).toHaveTextContent('Hello, Aldo!')
  });
});
