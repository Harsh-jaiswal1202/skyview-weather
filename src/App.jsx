import React, { useEffect, useState } from 'react';
import SearchBar from './components/searchBar';
import WeatherCard from './components/WeatherCard';
import { fetchWeather, fetchWeatherByCoords } from './services/weatherService';
import './App.css';

export default function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch {
      alert("City not found");
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const data = await fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
      setWeather(data);
    });
  }, []);

  return (
    <div className="app">
      <h1>SkyView Weather</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
