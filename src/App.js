import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';

const Title = () => (
  <h1 style={{ color: 'red', textAlign: 'center', fontSize: '1.5rem' }}>
    My Little Piggy
  </h1>
);

function App() {
  return (
    <div className="container">
      <Title />
      <FormComponent />
      <Transaction />
    </div>
  );
}

export default App;
