import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <Title />
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Account Info</Link>
              </li>
              <li>
                <Link to="/add">Make a transaction</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ReportComponent />}></Route>
              <Route
                path="/add"
                element={[
                  <FormComponent onAddItem={onAddNewItem} />,
                  <Transaction items={items} />,
                ]}
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
