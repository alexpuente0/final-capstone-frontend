import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getItemDetails, removeItem } from '../redux/item/itemReducer';

function ItemDetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemDetails(id));
  }, [dispatch, id]);

  const authUser = useSelector((state) => state.auth.user);
  const item = useSelector((state) => state.items.current, shallowEqual);

  const showOn = (condition) => ((condition) ? '' : 'hidden');

  const addReservation = () => navigate(`/reservations/add/${item.id}`);
  const deleteItem = (id) => dispatch(removeItem(id)).then(() => navigate('/'));

  return (
    <>
      <h1 className={`${showOn(!item)}`}>No Items</h1>
      <span className={`${showOn(item)}`}>
        <h1>{item.name}</h1>
        <img src={item.photo} alt={item.name} />
        <p>
          Description:
          <br />
          {item.description}
        </p>
        <p>
          Range:
          {item.range}
          {item.active}
        </p>

        <div>
          <button type="button" onClick={addReservation}>
            Reserve this Car
          </button>
          <button type="button" className={`${showOn(authUser)}`} onClick={deleteItem(item.id)}>
            Delete
          </button>
        </div>
      </span>
    </>
  );
}

export default ItemDetailPage;
