// import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getReserv } from '../redux/reserv/reserv';
import store from '../redux/configureStore';

function ReservationsPage() {
// const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getReserv());
  // }, [dispatch]);

  const user = useSelector((state) => state.auth.user, shallowEqual);
  let reservations = useSelector((state) => state.reservations.reservations, shallowEqual);
  if (user == null || user.name === undefined) {
    return <Navigate replace to="/login" />;
  }
  if (reservations === undefined) store.dispatch(getReserv());
  reservations = reservations || [];
  return (
    <>
      <h1>Reservations Page</h1>
      <ul className="reservtable">
        <li className="listitem">
          <span>Car</span>
          <span>City</span>
          <span>Date</span>
        </li>
        {reservations.map((reservation) => (
          <li key={reservation.id} className="listitem">
            <span>{reservation.item_id}</span>
            <span>{reservation.city}</span>
            <span>{reservation.date}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReservationsPage;
