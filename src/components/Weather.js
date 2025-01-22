import React, { useEffect, useState } from 'react';
import WeatherData from './WeatherData';
import WeatherForm from './WeatherForm';

export default function Weather() {
  const [location, setLocation] = useState('');
  const [weatherForecast, setWeatherForecast] = useState(null);

  const baseUrl = 'http://api.weatherapi.com/v1/'
  const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

  const fetchWeatherData = async (location) => {
    try {
      const weatherForecastUrl = `${baseUrl}/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=7`;

      const response = await fetch(weatherForecastUrl);

      const weatherForecast = await response.json();
      localStorage.setItem(`${location}_forecast`, JSON.stringify(weatherForecast));
      console.log(weatherForecast);
      setWeatherForecast(weatherForecast);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  useEffect(() => {
    if (location && !localStorage.getItem(`${location}_current`)) {
      fetchWeatherData(location);
    } else {
      const savedWeatherForecast = localStorage.getItem(`${location}_forecast`);
      setWeatherForecast(JSON.parse(savedWeatherForecast));
    }
  }, [location]);

  function handleLocationSubmit(location) {
    setLocation(location);
  };

  return (
    <div className='weather-container'>
      <WeatherForm onLocationSubmit={handleLocationSubmit}/>
      <WeatherData weatherForecast={weatherForecast} />
    </div>
  );
}
