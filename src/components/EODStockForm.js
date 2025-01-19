import { useState } from 'react';

export default function EODStockMarketForm({ onSymbolSubmit }) {
  const [selectedSymbol, setSelectedSymbol] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSymbolSubmit(selectedSymbol);
  }

  const handleChange = (e) => {
    setSelectedSymbol(e.target.value);
  }

  const options = [
    {value: 'MSFT', label: 'Microsoft Corporation'},
    {value: 'AAPL', label: 'Apple Inc'},
    {value: 'AMZN', label: 'Amazon.com Inc'},
    {value: 'GOOG', label: 'Alphabet Inc - Class C'},
    {value: 'GOOGL', label: 'Alphabet Inc - Class A'},
    {value: 'BABA', label: 'Alibaba Group Holding Ltd'},
    {value: 'FB', label: 'Meta Platforms Inc - Class A'},
    {value: 'VOD', label: 'Vodafone Group Plc'},
    {value: 'V', label: 'Visa Inc - Class A'},
    {value: 'JPM', label: 'JPMorgan Chase & Company'},
    {value: 'JNJ', label: 'Johnson & Johnson'},
    {value: 'WMT', label: 'Walmart Inc'},
    {value: 'MA', label: 'Mastercard'},
    {value: 'PG', label: 'Proctor & Gamble'}
  ]

  return (
    <form onSubmit={handleSubmit}>
      <h1>End of Day Stock Market Data</h1>
        <label htmlFor='dropdown'>Select an option:</label>
        <select id='dropdown' value={selectedSymbol} onChange={handleChange}>
          <option value=''>Please select</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      <button type='submit'>
        Submit
      </button>
    </form>
  )
}
