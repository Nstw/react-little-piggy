import { useState } from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';

const Title = () => (
  <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}>
    My Little Piggy
  </h1>
);

function App() {
  const [items, setItems] = useState([]);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  return (
    <div className="container">
      <Title />
      <FormComponent onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
