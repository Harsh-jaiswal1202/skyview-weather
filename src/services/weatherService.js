const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;

export const fetchWeather = async (city) => {
  const res = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=yes`);
  if (!res.ok) throw new Error("City not found");
  return res.json();
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const res = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=yes`);
  return res.json();
};
