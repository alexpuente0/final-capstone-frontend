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
        <h2>This is the header</h2>
        <br />
        <NavLink onClick={doCurrent} to="/">
          Home
        </NavLink>
        &nbsp;
        <NavLink to="/reservations">Reservations</NavLink>
        &nbsp;
        <NavLink to="/reservations/add">New Reservation</NavLink>
        &nbsp;
        <NavLink to="/delete">Delete a Green</NavLink>
        &nbsp;
        <NavLink to="/new">Add a New Car</NavLink>
        &nbsp;
        {authUser ? (
          <NavLink onClick={doLogout} to="/">
            Logout
          </NavLink>

        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            &nbsp; &nbsp;
            <NavLink to="/signup">Sign Up</NavLink>
          </>
        )}
        <br />
        <br />
        <hr />
        <br />
      </nav>
    </header>
  );
};

export default Header;
