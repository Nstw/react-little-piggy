import Item from './Item';
import './Transaction.css';
import DataContext from '../data/DataContext';

const Transaction = (props) => {
  const { items } = props;
  return (
    <>
      <ul className="item-list">
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
      <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer>
    </>
  );
};

export default Transaction;
