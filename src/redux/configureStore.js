import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { setStore } from '../helpers/fetch-wrapper';
import { authActions, authReducer } from './auth/auth';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk, logger],
});

setStore(store, authActions);

export default store;
