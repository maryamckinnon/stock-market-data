import { useEffect, useState } from 'react';
import IntakeForm from './components/IntakeForm';
import DataTable from './components/DataTable';

function App() {
  const [date, setDate] = useState('');
  const [data, setData] = useState(null);

  function handleDateSubmit(newDate) {
    setDate(newDate)
  }

  const fetchData = async (date) => {
    const baseUrl = 'http://api.marketstack.com/v1/eod';
    const API_KEY = process.env.STOCK_MARKET_API_KEY;
    try {
      const response = await fetch(`${baseUrl}?access_key=${API_KEY}&symbols=AAPL`);
      const result = await response.json();
      localStorage.setItem('tableData', JSON.stringify(result.data));
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    if (date) {
      fetchData(date);
    }
  }, [date]);

  useEffect(() => {
    const savedData = localStorage.getItem('tableData');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // YYYY-MM-DD
  return (
    <div className="App">
      <IntakeForm onDateSubmit={handleDateSubmit}/>
      <DataTable data={data}/>
    </div>
  );
}

export default App;
