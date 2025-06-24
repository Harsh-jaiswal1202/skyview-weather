import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import Forecast from './components/Forecast';
import AnimatedLogo from './components/AnimatedLogo';
import { fetchWeather, fetchWeatherByCoords } from './services/weatherService';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('light');

  // 🌤️ Get background color based on weather condition
  const getBackgroundByCondition = (condition) => {
    if (!condition) return '#ADEED9';
    condition = condition.toLowerCase();
    if (condition.includes('rain')) return '#a3bfc9';
    if (condition.includes('clear') || condition.includes('sunny')) return '#fceabb';
    if (condition.includes('cloud')) return '#d3d3d3';
    if (condition.includes('snow')) return '#eaf6ff';
    return '#ADEED9';
  };

  // 🌓 Toggle between dark/light theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  // 🔍 Handle manual search
  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      alert('City not found!');
    }
    setLoading(false);
  };

  // 📍 Auto-detect location on first load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLoading(true);
        const data = await fetchWeatherByCoords(latitude, longitude);
        setWeather(data);
        setLoading(false);
      },
      async () => {
        const data = await fetchWeather("Delhi");
        setWeather(data);
      }
    );
  }, []);

  // 🎨 Change background when weather updates
  useEffect(() => {
    if (weather) {
      document.body.style.backgroundColor = getBackgroundByCondition(
        weather.current.condition.text
      );
    }
  }, [weather]);

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <AnimatedLogo />
        <div className="theme-toggle">
          <button className="theme-icon" onClick={toggleTheme}>
  {theme === 'light' ? '🌙' : '☀️'}
</button>

        </div>
      </div>

      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}

      {weather && weather.forecast && weather.forecast.forecastday && (
        <>
          <WeatherCard data={weather} />
          <Forecast forecast={weather.forecast.forecastday} />
        </>
      )}
    </div>
  );
}

export default App;
