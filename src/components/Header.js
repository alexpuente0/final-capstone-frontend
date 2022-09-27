import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { currentUser, logout } from '../redux/auth/auth';
import store from '../redux/configureStore';
import '../App.css';

const doCurrent = () => {
  store.dispatch(currentUser());
};

const doLogout = () => {
  store.dispatch(logout());
};

const Header = () => {
  const authUser = useSelector((state) => state.auth.user);
  const [navbar, setNavbar] = React.useState('invisible');

  const handleHamburgerClick = () => {
    setNavbar(navbar === 'invisible' ? '' : 'invisible');
  };

  return (
    <header>
      <div
        className="hamburger"
        id="hamburger"
        role="presentation"
        onClick={handleHamburgerClick}
      >
        <div className="slice" />

        <div className="slice" />

        <div className="slice" />
      </div>
      <nav className={navbar}>
        <ul className="navigator">
          <li>
            <NavLink onClick={doCurrent} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleHamburgerClick} to="/reservations">
              My Reservations
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleHamburgerClick} to="/reservations/add">
              Reserve Green
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleHamburgerClick} to="/new">
              New Green
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleHamburgerClick} to="/delete">
              Delete Green
            </NavLink>
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
                <NavLink onClick={handleHamburgerClick} to="/login">
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleHamburgerClick} to="/signup">
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
