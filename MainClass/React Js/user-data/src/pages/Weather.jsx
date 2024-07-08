import axios from "axios";
import { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [wetherData, setWetherData] = useState(null);
  const [query, setQuery] = useState("London");

  const apiKey = "da3cca3227d2cc39fe84cbc348e6da09";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const fetchData = async () => {
    await axios.get(URL).then((res) => {
      setWetherData(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  console.log("My Weather", wetherData);

  return (
    <div>
      <h2>Weather Api</h2>
      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Make a search</button>

      <div>
        <h3>City Name</h3>
        <h5>Weather</h5>
      </div>
    </div>
  );
};

export default Weather;
