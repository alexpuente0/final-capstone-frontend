let store;
let authActions;

export const setStore = (pStore, pAuthActions) => {
  store = pStore;
  authActions = pAuthActions;
};

// helper functions
const authToken = () => store.getState().auth.user?.token;

const authHeader = (url) => {
  // return auth header with jwt if user is logged in and request is to the api url
  const token = authToken();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
};

const handleResponse = async (res) => {
  if (!res.ok) {
    if ([401, 403].includes(res.status) && authToken()) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      const logout = () => store.dispatch(authActions.logout());
      logout();
    }

    const data = await res.text();
    const error = `${res.statusText}:  ${data}`;
    return Promise.reject(error);
  }

  const json = await res.json();
  if (json.status?.message?.includes('Logged in sucessfully')
      || json.status?.message?.includes('Signed up sucessfully')) {
    const { user } = json;
    user.token = res.headers.get('Authorization').slice(7);
    return user;
  }

  return json;
};

const request = (method) => async (url, body) => {
  const requestOptions = {
    method,
    headers: authHeader(url),
  };
  if (body) {
    requestOptions.headers['Content-Type'] = 'application/json';
    requestOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, requestOptions);
  return handleResponse(res);
};

export const fetchWrapper = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE'),
};
