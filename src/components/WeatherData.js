import React from 'react';

function WeatherData({ weatherForecast }) {
  function formatTimeTo12Hour(timeString) {
    const [datePart, timePart] = timeString.split(" ");
    const date = new Date(`${datePart}T${timePart}`);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  function formatDate(dateStr) {
    const [year, month, day] = dateStr.split('-');
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  return (
    <div className='weather-data'>
      {weatherForecast ? (
        <div>
          <h2>Weather for {weatherForecast?.location?.name}, {weatherForecast?.location?.region}, {weatherForecast?.location?.country} </h2>
          <h3>Current conditions</h3>
            <div
              className='current-weather-card'
              style={{
                backgroundColor: weatherForecast?.current?.is_day ? 'white' : 'black',
                color: weatherForecast?.current?.is_day ? 'black' : 'white'
              }}
            >
              <p><b>Last updated:</b> {formatTimeTo12Hour(weatherForecast?.location.localtime)}</p>
              <p>
                {weatherForecast?.current.condition.text}
                <img src={weatherForecast?.current?.condition.icon} />
              </p>
              <p><b>True temp:</b> {weatherForecast?.current?.temp_f} F</p>
              <p><b>Feels like:</b> {weatherForecast?.current?.feelslike_f} F</p>
              <p><b>Humidity:</b> {weatherForecast?.current?.humidity}%</p>
              <p><b>Wind:</b> {weatherForecast?.current?.wind_mph} mph {weatherForecast?.current?.wind_dir}</p>
              <p><b>UV:</b> {weatherForecast?.current?.uv}</p>
            </div>
          <h3 className='weather-forecast-heading'>Weather Forecast</h3>
            <div className='weather-forecast-table'>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Condition</th>
                    <th>Lo</th>
                    <th>Hi</th>
                    <th>Chance of Precipitation</th>
                 </tr>
                </thead>
                <tbody>
                  {weatherForecast.forecast.forecastday.map((day, index) => 
                    <tr key={index}>
                      <td>{formatDate(day.date)}</td>
                      <td>
                        <span>{day.day.condition.text}</span>
                        <img src={day.day.condition.icon} alt={day.day.condition.text}/>
                      </td>
                      <td>{day.day.mintemp_f} F</td>
                      <td>{day.day.maxtemp_f} F</td>
                      <td>{day.day.daily_chance_of_rain}%</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
        </div>
      ) : (<p>Please enter a city to get the weather data.</p>)}
    </div>
  );
}

export default WeatherData;
