import { useState } from 'react';

export default function WeatherForm({ onLocationSubmit }) {
  const [location, setLocation] = useState('');

  function handleFormSubmit(e) {
    e.preventDefault();
    onLocationSubmit(location);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='city'>
        City
        <input
          placeholder='Enter a city'
          name='city'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type='submit'>Submit</button>
    </form>
  );
}
