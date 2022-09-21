import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CarList from '../components/CarList';
import { getItems } from '../redux/item/itemReducer';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const cars = useSelector((state) => state.items.items, shallowEqual) || [];

  return (
    <>
      <h1>Home Page</h1>
      <CarList cars={cars} />
    </>
  );
}

export default HomePage;
