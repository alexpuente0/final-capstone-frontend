import { NavLink } from 'react-router-dom';
import { currentUser, logout } from '../redux/auth/auth';
import store from '../redux/configureStore';
import { getItemDetails } from '../redux/item/itemReducer';

const doCurrent = () => {
  store.dispatch(currentUser());
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
      <NavLink onClick={doCurrent} to="/">Current User</NavLink>
      &nbsp;
      <NavLink onClick={doLogout} to="/">
        Logout
      </NavLink>
      &nbsp;
      <NavLink to="/reservations">Reservations</NavLink>
      &nbsp;
      <NavLink onClick={doGetItemDets} to="/items/2">
        Items
      </NavLink>
      &nbsp;
      <NavLink to="/new">
        Add a New Car
      </NavLink>
      <br />
      <br />
      <hr />
      <br />
    </nav>
  </header>
);

export default Header;
