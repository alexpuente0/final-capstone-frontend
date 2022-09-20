import { useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ItemDetailPage() {
  const navigate = useNavigate();

  const item = useSelector((state) => state.items.itemDetails, shallowEqual);
  console.log(item);
  let codefragment = null;
  codefragment = item === undefined || item === [] ? (
    <h1>No Items</h1>
  ) : (
    <>
      <h1>Specific Item Page</h1>
      <img src={item.photo} alt={item.name} />
      <h2>{item.name}</h2>
      <br />
      <p>
        Description:
        <br />
        {item.description}
      </p>
      <p>
        Range:
        {item.range}
      </p>

      <button type="button" onClick={() => navigate('/reservations')}>Reserve this Car</button>

      <button type="button">Delete</button>
    </>
  );
  return codefragment;
}

export default ItemDetailPage;
