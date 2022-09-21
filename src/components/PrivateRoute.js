import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import history from '../helpers/history';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const { user: authUser } = useSelector((state) => state.auth);

  if (!authUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  // authorized so return child components
  return children;
}

export default PrivateRoute;
