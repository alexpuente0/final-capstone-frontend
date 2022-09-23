/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getItems } from '../redux/item/itemReducer';
import { addReservation } from '../redux/reserv/reserv';
import history from '../helpers/history';
import './addReserv.css';

function ReservationsAddPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    // redirect to reservations after successful submit
    if (redirect) {
      history.navigate('/reservations');
    }
  }, [redirect]);

  const cars = useSelector(
    (state) => state.items.items.filter((item) => (!id || item.id.toString() === id)), shallowEqual,
  ) || [];

  const { register, handleSubmit } = useForm();

  function onSubmit({ item, city, date }) {
    setRedirect(true);
    return dispatch(addReservation(item, city, date));
  }

  function MySelect() {
    return (
      <select className="formitem" id="item" {...register('item')} name="item" placeholder="Car" required>
        {cars.map((car) => (
          <option key={car.name} value={car.name}>{car.name}</option>
        ))}
      </select>
    );
  }

  return (
    <div className="addreservpage">
      <h1>Add Reservation</h1>
      <div className="centered">
        <form className="myform2" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            {MySelect()}
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
