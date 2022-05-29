import { useEffect, useState, useReducer } from 'react';
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
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((item) => item.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, num) => total + num, 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, num) => total + num, 0) * -1;

    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  const [showReport, setShowReport] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SHOW':
        return setShowReport(true);
      case 'HIDE':
        return setShowReport(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <Title />
        {showReport && <ReportComponent />}
        <FormComponent onAddItem={onAddNewItem} />
        <Transaction items={items} />
        <button onClick={() => dispatch({ type: 'SHOW' })}>SHOW</button>
        <button onClick={() => dispatch({ type: 'HIDE' })}>HIDE</button>
      </div>
    </DataContext.Provider>
  );
}

export default App;
