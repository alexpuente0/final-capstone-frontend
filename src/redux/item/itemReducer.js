import { fetchWrapper } from '../../helpers/fetch-wrapper';

const baseUrl = `${process.env.REACT_APP_API_URL}/items`;

const GET_ITEMS = 'Items/GET_ITEMS';
const GET_ITEM_DETAILS = 'Items/GET_ITEM_DETAILS';
const ADD_ITEM = 'Items/ADD_ITEM';
const REMOVE_ITEM = 'Items/REMOVE_ITEM';

export const getItems = () => async (dispatch) => {
  const payload = {
    items: await fetchWrapper.get(`${baseUrl}/`),
    error: null,
  };

  dispatch({ type: GET_ITEMS, payload });
};

export const getItemDetails = (id) => async (dispatch) => {
  const payload = {
    itemDetails: await fetchWrapper.get(`${baseUrl}/${id}`),
    error: null,
  };
  dispatch({ type: GET_ITEM_DETAILS, payload });
};

export const addItem = (item) => async (dispatch) => {
  const payload = {
    items: await fetchWrapper.post(`${baseUrl}/`, item),
    error: null,
  };
  dispatch({ type: ADD_ITEM, payload });
};

export const removeItem = (id) => async (dispatch) => {
  const payload = {
    items: await fetchWrapper.post(`${baseUrl}/${id}/toggle_active`),
    error: null,
  };
  dispatch({ type: REMOVE_ITEM, payload });
};

const initialState = () => ({
  items: [],
  error: null,
});

export const itemReducer = (state = initialState(), action) => {
  switch (action.type) {
    case GET_ITEMS: {
      return action.payload;
    }

    case GET_ITEM_DETAILS: {
      return action.payload;
    }

    case ADD_ITEM: {
      return action.payload;
    }

    case REMOVE_ITEM: {
      return action.payload;
    }

    default:
      return state;
  }
};
