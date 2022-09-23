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
  const authUser = useSelector((state) => state.auth.user);

  return (
    <>
      {authUser ? (
        <h1>
          {' '}
          Hello,
          {' '}
          {authUser.name}
          !
          {' '}
        </h1>
      ) : (
        <h1> Welcome to Rent a Green! </h1>
      )}
      <CarList cars={cars} />
    </>
  );
}

export default HomePage;
