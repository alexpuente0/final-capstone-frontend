import { fetchWrapper } from '../../helpers/fetch-wrapper';

const baseUrl = `${process.env.REACT_APP_API_URL}`;

export const getReserv = () => async (dispatch) => {
  const payload = {
    reservations: await fetchWrapper.get(`${baseUrl}/reservations`),
    error: null,
  };

  dispatch({ type: 'GET_RESERV', payload });
};

const initialState = () => ({
  reservations: [],
  error: null,
});

export const reservReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESERV': {
      return action.payload;
    }

    default:
      return state;
  }
};
