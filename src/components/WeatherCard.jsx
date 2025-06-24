import React from 'react';
import InfoBox from './InfoBox';

export default function WeatherCard({ data }) {
  const { location, current } = data;

  return (
    <div className="weather-card">
      <h2>{location.name}, {location.country}</h2>
      <p>{location.localtime}</p>

      <div className="weather-main">
        <img src={current.condition.icon} alt={current.condition.text} />
        <h1>{current.temp_c}°C</h1>
        <p>{current.condition.text}</p>
      </div>

      <div className="grid-box">
        <InfoBox label="Humidity" value={`${current.humidity}%`} />
        <InfoBox label="Wind Speed" value={`${current.wind_kph} kph`} />
        <InfoBox label="Pressure" value={`${current.pressure_mb} mb`} />
        <InfoBox label="Feels Like" value={`${current.feelslike_c} °C`} />
        <InfoBox label="Visibility" value={`${current.vis_km} km`} />
        <InfoBox label="Cloud Cover" value={`${current.cloud}%`} />
        <InfoBox label="UV Index" value={current.uv} />
        <InfoBox label="Air Quality" value={current.air_quality.pm2_5?.toFixed(2)} />
      </div>
    </div>
  );
}
