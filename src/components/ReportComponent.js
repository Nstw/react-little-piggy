import { useContext } from 'react';
import DataContext from '../data/DataContext';

const ReportComponent = () => {
  const name = useContext(DataContext);
  return <div>{name}</div>;
};

export default ReportComponent;
