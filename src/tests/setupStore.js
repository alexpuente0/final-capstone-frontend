import { configureStore } from '@reduxjs/toolkit';
import { setStore } from '../helpers/fetch-wrapper';
import { authActions, authReducer } from '../redux/auth/auth';
import { itemReducer } from '../redux/item/itemReducer';
import { reservReducer } from '../redux/reserv/reserv';

const setupStore = () => {
  const preloadedState = {
    auth: {
      user: {
        id: 1,
        name: 'Roberto',
        email: 'roberto@mail.com',
        token:
          'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNjY0Mjk5NDQzLCJleHAiOjE2NjU1OTU0NDMsImp0aSI6ImRmYTM5YjY4LTE4NjEtNGRjOC04MmZhLTc3M2YyZjY0ZThkZSJ9.ASUgkGQpU3ObGE2gy-vnNPy2WS1fZb4b0NsyP7KAiIc',
      },
      error: null,
    },
    reservations: {
      reservations: [
        {
          carname: 'BMW i4',
          city: 'Monterrey',
          date: '2022-01-01',
          id: 1,
          item_id: 1,
          user_id: 1,
        },
      ],
      loading: false,
    },
    items: {
      current: {
        active: true,
        description:
          'BMW’s new i4 electric car will go on sale in November, priced from £51,905. The four-door coupe will occupy the same space as the 4 Series Gran Coupe and is set to rival the Tesla Model 3.',
        id: 1,
        name: 'BMW i4',
        photo: '',
        range: 'up to 367 miles',
      },
      items: [{
        active: true,
        description:
          'BMW’s new i4 electric car will go on sale in November, priced from £51,905. The four-door coupe will occupy the same space as the 4 Series Gran Coupe and is set to rival the Tesla Model 3.',
        id: 1,
        name: 'BMW i4',
        photo: '',
        range: 'up to 367 miles',
      }],
      error: null,
    },
  };

  return configureStore({
    preloadedState,
    reducer: {
      auth: authReducer,
      reservations: reservReducer,
      items: itemReducer,
    },
  });
};

const store = setupStore();
setStore(store, authActions);

export default setupStore;
