import axios from "axios";
import { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("lagos");
  const [weather, setWeather] = useState(null);

  const getweather = async () => {
    const apiKey = "da3cca3227d2cc39fe84cbc348e6da09";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    await axios.get(URL).then((res) => setWeather(res.data));
  };

  // &units=metric

  console.log(weather);

  return (
    <div>
      <input
        type="search"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Your city"
      />
      <button onClick={getweather}>Search</button>
      {(weather.main.temp - 273.15).toFixed(2)} ℃
    </div>
  );
};

export default Weather;
