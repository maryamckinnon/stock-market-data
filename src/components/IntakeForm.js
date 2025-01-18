import { useState } from 'react';

export default function IntakeForm({ onDateSubmit }) {
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onDateSubmit(date);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>End of Day Stock Market Data</h1>
      <label>
        <span>Date: </span>
        <input
          placeholder='Enter a date'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button type='submit'>
        Submit
      </button>
    </form>
  )
}
