import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './FormComponent.css';

const FormComponent = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle('');
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>Add a transaction</label>
          <input
            type="text"
            placeholder="Write a note"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Input an amount"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
