/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/reserv/reserv';
import './addReserv.css';

function ReservationsAddPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  function onSubmit({ item, city, date }) {
    return dispatch(addReservation(item, city, date));
  }

  return (
    <div className="addreservpage">
      <h1>Add Reservation</h1>
      <div className="centered">
        <form className="myform" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input className="formitem" type="text" {...register('item')} id="item" name="item" placeholder="Email" required minLength="2" maxLength="30" />
          </div>
          <div className="form-group">
            <input className="formitem" type="text" {...register('city')} id="city" name="city" placeholder="City" required minLength="2" maxLength="30" />
          </div>
          <div className="form-group">
            <input className="formitem" type="date" {...register('date')} id="date" name="date" placeholder="Date" required />
          </div>
          <div className="button-wrapper">
            &nbsp;
            <button className="sbutton" type="submit">Submit</button>
            &nbsp;
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReservationsAddPage;
