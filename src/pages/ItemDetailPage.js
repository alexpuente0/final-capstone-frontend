import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getItemDetails } from '../redux/item/itemReducer';

function ItemDetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemDetails(id));
  }, [dispatch, id]);

  const item = useSelector((state) => state.items.itemDetails, shallowEqual);
  let codefragment = null;
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
      </p>

      <button type="button" onClick={() => navigate('/reservations')}>
        Reserve this Car
      </button>

      <button type="button">Delete</button>
    </>
  );
  return codefragment;
}

export default ItemDetailPage;
