import { useState } from 'react';
import StockForm from './StockForm';
import StockTable from './StockTable';
import { fetchStockData } from '../utils/fetchStockData.js';

export default function Stock() {
  const [data, setData] = useState([]);
  const [symbol, setSymbol] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (symbol) {
      fetchStockData(symbol, setData);
    } else {
      alert('Please choose a symbol');
    }
  }

  function handleSymbolChange(e) {
    setSymbol(e.target.value);
  }

  return (
    <>
      <StockForm
        handleSubmit={handleSubmit}
        handleSymbolChange={handleSymbolChange}
        symbol={symbol}
      />
      <StockTable data={data}/>
    </>
  );
}








































// import { useState } from 'react';
// import StockForm from './StockForm';
// import StockTable from './StockTable';

// export default function Stock() {
//   const [data, setData] = useState([]);
//   const [symbol, setSymbol] = useState('');

//   async function fetchData() {
//     const baseUrl = 'http://api.marketstack.com/v1/eod';
//     const API_KEY = '86a1caf237e07002a3af63c854b097fa';
//     try {
//       const response = await fetch(`${baseUrl}?access_key=${API_KEY}&symbols=${symbol}`);
//       const result = await response.json();
//       setData(result.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   function handleSymbolChange(e) {
//     setSymbol(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     console.log(e.target.value);
//     e.preventDefault();
//     if (symbol) {
//       fetchData();
//     } else {
//       alert('Please select a symbol');
//     }
//   }


//   return (
//     <>
//       <StockForm symbol={symbol} handleSymbolChange={handleSymbolChange} handleSubmit={handleSubmit}/>
//       <StockTable 
//         data={data}
//       />
//     </>
//   );
// }
