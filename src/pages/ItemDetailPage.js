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
  const item = useSelector((state) => state.items.itemDetails, shallowEqual);
  let codefragment = null;
  let buttonfragment = null;

  function onDelete(id) {
    return dispatch(removeItem(id))
      .then(() => navigate('/'));
  }

  buttonfragment = !authUser ? (
    <div>
      <button type="button" onClick={() => navigate('/reservations')}>
        Reserve this Car
      </button>
    </div>
  ) : (
    <div>
      <button type="button" onClick={() => navigate('/reservations')}>
        Reserve this Car
      </button>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </div>
  );

  codefragment = item === undefined || item === [] ? (
    <h1>No Items</h1>
  ) : (
    <>
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
      {buttonfragment}
    </>
  );
  return codefragment;
}

export default ItemDetailPage;
