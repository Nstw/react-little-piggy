import { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
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
      title: title,
      amount: Number(amount),
    };
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
