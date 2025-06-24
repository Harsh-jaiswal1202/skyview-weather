import React from 'react';
import InfoBox from './InfoBox';

export default function WeatherCard({ data }) {
  const { location, current } = data;

  // Safely extract air quality values with fallbacks
  const pm25 = current.air_quality?.pm2_5 !== undefined
    ? current.air_quality.pm2_5.toFixed(2)
    : 'N/A';

  const no2 = current.air_quality?.no2 !== undefined
    ? current.air_quality.no2.toFixed(2)
    : 'N/A';

  const co = current.air_quality?.co !== undefined
    ? current.air_quality.co.toFixed(2)
    : 'N/A';

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
        <InfoBox label="PM2.5" value={pm25} />
        <InfoBox label="NO₂" value={no2} />
        <InfoBox label="CO" value={co} />
      </div>
    </div>
  );
}
