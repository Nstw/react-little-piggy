import Item from './Item';
import './Transaction.css';
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const data = [
    { title: 'Hospital', amount: '2000' },
    { title: 'Transportation', amount: '700' },
    { title: 'Education', amount: '1500' },
    { title: 'Food', amount: '999' },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        // return <Item title={element.title} amount={element.amount} />;
        return <Item {...element} key={uuidv4()} />;
      })}
    </ul>
  );
};

export default Transaction;
