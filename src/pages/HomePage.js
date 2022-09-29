import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CarList from '../components/CarList';
import { getItems } from '../redux/item/itemReducer';
import '../App.css';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const cars = useSelector((state) => state.items.items, shallowEqual) || [];
  const authUser = useSelector((state) => state.auth.user);

  return (
    <div className="top-margin bground">
      {authUser ? (
        <h1 className="header">
          Hello,
          {' '}
          {authUser.name}
          !
          {' '}
        </h1>
      ) : (
        <h1 className="header"> Welcome to Rent a Green! </h1>
      )}
      <CarList cars={cars} />
    </div>
  );
}

export default HomePage;
