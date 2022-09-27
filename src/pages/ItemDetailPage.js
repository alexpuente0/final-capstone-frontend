import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getItemDetails, removeItem } from '../redux/item/itemReducer';
import './ItemDetailPage.css';

function ItemDetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemDetails(id));
  }, [dispatch, id]);

  const authUser = useSelector((state) => state.auth.user);
  const item = useSelector((state) => state.items.current, shallowEqual);

  const showOn = (condition) => ((condition) ? 'sbutton' : 'sbutton hidden');

  const deleteItem = (id) => dispatch(removeItem(id)).then(() => navigate('/'));

  return (
    !!item && (
      <>
        <div className="formcontainer">
          <h1 className="itemname">{item.name}</h1>
          <img className="carpic" src={item.photo} alt={item.name} />
          <div className="txtcontainer">
            <p>{item.description}</p>
            <p>
              Range:
              {item.range}
              {item.active}
            </p>
          </div>
          <div className="btncontainer">
            <button
              className="sbutton"
              type="button"
              onClick={() => navigate(`/reservations/add/${item.id}`)}
            >
              Reserve this Car
            </button>
            <button
              type="button"
              className={`${showOn(authUser)}`}
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    )
  );
}

export default ItemDetailPage;
