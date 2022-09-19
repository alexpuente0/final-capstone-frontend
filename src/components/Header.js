import { NavLink } from 'react-router-dom';
import { currentUser, login, logout } from '../redux/auth/auth';
import getReserv from '../redux/reserv/reserv';
import store from '../redux/configureStore';

const doCurrent = () => {
  store.dispatch(currentUser());
};

const doLogin = () => {
  const email = 'roberto@mail.com';
  const password = 'valido';
  store.dispatch(login(email, password));
};

const doLogout = () => {
  store.dispatch(logout());
};

const Header = () => (
  <header>
    <nav>
      <h2>This is the header</h2>
      <br />
      <NavLink onClick={doLogin} to="/">Login</NavLink>
      &nbsp;
      <NavLink onClick={doCurrent} to="/">Current User</NavLink>
      &nbsp;
      <NavLink onClick={doLogout} to="/">Logout</NavLink>
      &nbsp;
      <NavLink onClick={store.dispatch(getReserv())} to="/Reservations">Reservations</NavLink>
      <br />
      <br />
      <hr />
      <br />
    </nav>
  </header>
);

export default Header;
