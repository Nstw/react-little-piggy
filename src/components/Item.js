import './Item.css';

const Item = () => {
  const name = 'Transportation';
  const amount = -700;
  return (
    <li className="item">
      {name} <span>{amount}</span>
    </li>
  );
};

export default Item;
