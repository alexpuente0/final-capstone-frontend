import { useSelector, shallowEqual } from 'react-redux';

function ItemDetailPage() {
  const item = useSelector((state) => state.items.itemDetails, shallowEqual);
  console.log(item);
  let codefragment = null;
  if (item === undefined || item === []) {
    codefragment = (
      <h1>No Items</h1>
    );
  } else {
    codefragment = (
      <>
        <h1>Specific Item Page</h1>
        <ul className="itemtable">
          <li className="listitem">
            <span>Item</span>
            <span>Description</span>
            <span>Photo</span>
            <span>Range</span>
          </li>
          <li key={item.id} className="listitem">
            <span>{item.name}</span>
            <span>{item.description}</span>
            <span>{item.photo}</span>
            <span>{item.range}</span>
          </li>
        </ul>
      </>
    );
  }
  return codefragment;
}

export default ItemDetailPage;
