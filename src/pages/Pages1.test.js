import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import LoginPage from './LoginPage';
import ReservationsPage from './ReservationsPage';
import ReservationsAddPage from './ReservationsAddPage';
import payload from './__mocks__/reserv_mock';

test('LoginPage renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('ReservationsAddPage renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <ReservationsAddPage />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('ReservationsPage renders correctly for mock data', () => {
  store.dispatch({ type: 'GET_RESERV', payload });
  const tree = renderer
    .create(
      <Provider store={store}>
        <MemoryRouter>
          <ReservationsPage />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
