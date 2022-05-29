import { useState } from 'react';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import ReportComponent from './components/ReportComponent';
import DataContext from './data/DataContext';

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
    <DataContext.Provider value={'test'}>
      <div className="container">
        <Title />
        <ReportComponent />
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
      </div>
    </DataContext.Provider>
  );
}

export default App;
