export default function StockForm({ symbol, handleSymbolChange, handleSubmit }) {

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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='symbol'>
          Select an option:
          <select
            name='symbol'
            value={symbol}
            onChange={handleSymbolChange}
          >
            <option value=''>Please select</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
