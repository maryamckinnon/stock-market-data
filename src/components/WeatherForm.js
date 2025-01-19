import { useState } from 'react';

export default function WeatherForm({ onLocationSubmit }) {
  const [location, setLocation] = useState('');


  function handleFormSubmit(e) {
    e.preventDefault();
    onLocationSubmit(location);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        City
        <input
          placeholder='Enter a city'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}
