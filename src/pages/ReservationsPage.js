import { useSelector, shallowEqual } from 'react-redux';

function ReservationsPage() {
  const reservations = useSelector((state) => state.reservations.reservations, shallowEqual);
  console.log(reservations);
  let codefragment = null;
  if (reservations === undefined || reservations === []) {
    codefragment = (
      <>
        <h1>Reservations Page</h1>
        <ul className="reservtable">
          <li className="listitem">
            <span>Car</span>
            <span>City</span>
            <span>Date</span>
          </li>
        </ul>
      </>
    );
  } else {
    codefragment = (
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
  return (
    codefragment
  );
}

export default ReservationsPage;
