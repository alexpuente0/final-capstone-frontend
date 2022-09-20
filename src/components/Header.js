import { NavLink } from 'react-router-dom';
import { currentUser, login, logout } from '../redux/auth/auth';
import store from '../redux/configureStore';
import { getItemDetails } from '../redux/item/ItemReducer';

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


const doGetItemDets = () => {
  store.dispatch(getItemDetails(2)); // 2 harcoded for the id of the item
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
      <NavLink to="/reservations">Reservations</NavLink>
      &nbsp;
      <NavLink onClick={doGetItemDets} to="/items/2">Items</NavLink>
      <br />
      <br />
      <hr />
      <br />
    </nav>
  </header>
);

export default Header;
