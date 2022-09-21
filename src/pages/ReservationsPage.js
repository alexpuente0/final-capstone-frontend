import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getReserv } from '../redux/reserv/reserv';

function ReservationsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserv());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.reservations, shallowEqual) || [];

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
            <span>{reservation.carname}</span>
            <span>{reservation.city}</span>
            <span>{reservation.date}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReservationsPage;
