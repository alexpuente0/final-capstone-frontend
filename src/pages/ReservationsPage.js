import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getReserv } from '../redux/reserv/reserv';
import './ReservationsPage.css';

function ReservationsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReserv());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.reservations, shallowEqual) || [];
  const myreserv = reservations.map((reservation) => {
    const d = new Date(reservation.date);
    const reserv = { ...reservation, date: d.toLocaleDateString() };
    return reserv;
  });

  return (
    <>
      <h1>Reservations Page</h1>
      <div className="tablewrapper">
        <ul className="reservtable">
          <li className="listitem">
            <span className="fixedwidth">Car</span>
            <span className="spancentered">City</span>
            <span className="spancentered">Date</span>
          </li>
          {myreserv.map((reservation) => (
            <li key={reservation.id} className="listitem">
              <span className="fixedwidth">{reservation.carname}</span>
              <span className="spancentered">{reservation.city}</span>
              <span className="spancentered smallfont">{reservation.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ReservationsPage;
