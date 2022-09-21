import { fetchWrapper } from '../../helpers/fetch-wrapper';
import history from '../../helpers/history';

const LOGIN = 'drive-a-green/auth/login';
const CURRENT = 'drive-a-green/auth/current';
const LOGOUT = 'drive-a-green/auth/logout';

const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

export const currentUser = () => async (dispatch) => {
  const payload = {
    user: await fetchWrapper.get(`${baseUrl}/current`),
    error: null,
  };

  dispatch({ type: CURRENT, payload });
};

export const login = (email, password) => async (dispatch) => {
  const payload = {
    user: await fetchWrapper.post(`${baseUrl}/login`, { user: { email, password } }),
    error: null,
  };

  localStorage.setItem('user', JSON.stringify(payload.user));
  dispatch({ type: LOGIN, payload });
};

export const logout = () => async (dispatch) => {
  await fetchWrapper.delete(`${baseUrl}/logout`);
  localStorage.removeItem('user');
  const payload = {
    user: null,
    error: null,
  };

  dispatch({ type: LOGOUT, payload });
};

const initialState = () => ({
  // initialize state from local storage to enable user to stay logged in
  user: JSON.parse(localStorage.getItem('user')),
  error: null,
});

export const authActions = { currentUser, login, logout };

export const authReducer = (state = initialState(), action) => {
  switch (action.type) {
    case LOGIN: {
      return action.payload;
    }

    case CURRENT: {
      const user = { ...state.user, ...action.payload.user };
      return { ...action.payload, user };
    }

    case LOGOUT:
      history.navigate('/login');
      return action.payload;

    default:
      return state;
  }
};
