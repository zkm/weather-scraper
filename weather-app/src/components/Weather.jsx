import React, { useState } from 'react';
import axios from 'axios';

// Determine API base URL: prefer env variable (configured at build time)
// Fallback to relative path (useful if reverse proxy) then localhost for dev.
const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

const Weather = () => {
  const [zip, setZip] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      if (!zip) {
        setError('Please enter a ZIP code');
        return;
      }
      setError(null);
      const url = `${API_BASE}/weather?zip=${encodeURIComponent(zip)}`.replace(/([^:]?)\/\//g, '$1/');
      const response = await axios.get(url, { timeout: 15000 });
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
      setError('Error fetching weather data');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter ZIP Code:
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
        </label>
        <button type="submit">Get Weather</button>
      </form>
      {error && <div>{error}</div>}
      {weather && (
        <div>
          <h1>Weather in {weather.city}</h1>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>
          <p>Wind: {weather.wind}</p>
          <p>Humidity: {weather.humidity}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
