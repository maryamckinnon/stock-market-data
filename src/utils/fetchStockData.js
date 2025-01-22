export async function fetchStockData(symbol, setData) {
  const baseUrl = 'http://api.marketstack.com/v1/eod';
  const API_KEY = process.env.STOCK_MARKET_API_KEY;
  try {
    const response = await fetch(`${baseUrl}?access_key=${API_KEY}&symbols=${symbol}`);
    const result = await response.json();
    setData(result.data);
  } catch (error) {
    console.error(error);
  }
}
