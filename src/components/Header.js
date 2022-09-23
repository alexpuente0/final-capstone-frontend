import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentUser, logout } from '../redux/auth/auth';
import store from '../redux/configureStore';

const doCurrent = () => {
  store.dispatch(currentUser());
};

const doLogout = () => {
  store.dispatch(logout());
};

const Header = () => {
  const authUser = useSelector((state) => state.auth.user);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink onClick={doCurrent} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations">My Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/reservations/add">New Reservation</NavLink>
          </li>
          <li>
            <NavLink to="/delete">Delete Green</NavLink>
          </li>
          <li>
            <NavLink to="/new">New Green</NavLink>
          </li>
          {authUser ? (
            <li>
              <NavLink onClick={doLogout} to="/">
                Log Out
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
