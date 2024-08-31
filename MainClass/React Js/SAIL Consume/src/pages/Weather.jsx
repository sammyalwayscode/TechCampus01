import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [myWeather, setWeathe] = useState(null);
  const [cityName, setCityName] = useState("");
  // const [query, setQuery] = useState("London");

  // console.log(cityName);
  const getWeatherData = async () => {
    const apiKey = "da3cca3227d2cc39fe84cbc348e6da09";
    const myURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    await axios.get(myURL).then((res) => setWeathe(res.data));
  };

  // useEffect(() => {
  // getWeatherData();
  // }, [query]);

  console.log(myWeather);

  // const handleSubmmit = (e) => {
  //   e.preventDefault();
  //   setQuery(cityName);
  // };

  return (
    <div className=" p-5">
      <h1 className=" text-xl font-bold ">
        Enter You City to know your wrather
      </h1>
      <input
        className=" bg-gray-200 h-10 w-80 pl-3"
        type="search"
        placeholder="Enter your city"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button
        onClick={getWeatherData}
        className=" h-10 w-32 bg-blue-700 text-white"
      >
        Search
      </button>

      <h2 className=" text-xl mt-6"> {myWeather.weather[0].description} </h2>
      <h1 className=" text-7xl font-bold">
        {" "}
        {(myWeather.main.temp - 273.15).toFixed(1)} °
      </h1>
    </div>
  );
};

export default Weather;
