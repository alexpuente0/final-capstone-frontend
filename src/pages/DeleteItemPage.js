/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, removeItem } from '../redux/item/itemReducer';

function DeleteItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const cars = useSelector(
    (state) => state.items.items,
  ) || [];

  const { register, handleSubmit } = useForm();

  function onSubmit({ item }) {
    return dispatch(removeItem(item));
  }

  function MySelect() {
    return (
      <select
        className="formitem"
        id="item"
        {...register('item')}
        name="item"
        placeholder="Car"
        required
      >
        {cars.map((car) => (
          <option key={car.name} value={car.id}>
            {car.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <>
      <div>
        <h1>Delete a Green</h1>
        <div className="centered">
          <form className="myform2" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">{MySelect()}</div>
            <div className="button-wrapper">
            &nbsp;
              <button className="sbutton" type="submit">
                Submit
              </button>
            &nbsp;
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeleteItem;
