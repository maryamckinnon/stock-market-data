import { useState, useEffect } from 'react';
import EODStockForm from './EODStockForm';
import EODStockData from './EODStockData';

export default function StockMarket() {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);
  
  function handleSymbolSubmit(newSymbol) {
    setSymbol(newSymbol)
  }

  const fetchData = async (symbol) => {
    const baseUrl = 'http://api.marketstack.com/v1/eod';
    const API_KEY = process.env.STOCK_MARKET_API_KEY;
    try {
      const response = await fetch(`${baseUrl}?access_key=${API_KEY}&symbols=${symbol}`);
      const result = await response.json();
      console.log(result);
      localStorage.setItem(`EOD_${symbol}`, JSON.stringify(result.data));
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    const savedData = localStorage.getItem(`EOD_${symbol}`);
    if (!savedData && symbol) {
      fetchData(symbol);
    } else {
      setData(JSON.parse(savedData));
    }
  }, [symbol]);

  return (
    <>
      <EODStockForm onSymbolSubmit={handleSymbolSubmit} />
      <EODStockData data={data} />
    </>
  );
}
