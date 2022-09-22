import { fetchWrapper } from '../../helpers/fetch-wrapper';

const baseUrl = `${process.env.REACT_APP_API_URL}`;

export const addReservation = (item, city, date) => async (dispatch) => {
  const response = await fetchWrapper.post(`${baseUrl}/reservations/`, { reservation: { item, city, date } });
  if (response.id) {
    const payload = {
      id: response.id,
      city: response.city,
      date: response.date,
      created_at: response.created_at,
      updated_at: response.updated_at,
      user_id: response.user_id,
      item_id: response.item_id,
      carname: item,
    };
    dispatch({ type: 'NEW_RESERV', payload });
  }
};

export const getReserv = () => async (dispatch) => {
  const payload = {
    reservations: await fetchWrapper.get(`${baseUrl}/reservations`),
    loading: true,
  };

  dispatch({ type: 'GET_RESERV', payload });
};

const initialState = {
  reservations: [],
  loading: false,
};

export const reservReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESERV': {
      return action.payload;
    }

    case 'NEW_RESERV': {
      // eslint-disable-next-line max-len
      const newstate = { ...state, reservations: [...state.reservations, action.payload] };
      return newstate;
    }

    default:
      return state;
  }
};
