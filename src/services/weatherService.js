const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_WEATHER_API_BASE_URL;

export const fetchWeather = async (city) => {
  const res = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`);
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return await res.json();
};

export const fetchWeatherByCoords = async (lat, lon) => {
  const res = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5`);
  if (!res.ok) throw new Error("Failed to fetch forecast");
  return await res.json();
};
