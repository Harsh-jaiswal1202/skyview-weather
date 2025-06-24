import React from 'react';
import './Forecast.css';

function Forecast({ forecast }) {
  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-grid">
        {forecast.map(day => (
          <div key={day.date} className="forecast-card">
            <p><strong>{day.date}</strong></p>
            <img src={day.day.condition.icon} alt="icon" />
            <p>{day.day.condition.text}</p>
            <p>{day.day.avgtemp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
