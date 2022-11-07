import React, { useEffect, useState } from "react";

import axios from "axios";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;

const Country = ({
  data: {
    name: { common },
    capital,
    area,
    languages,
    flags: { png },
  },
}) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`,
      );

      setWeather(response.data.current);
    };
    fetchWeather();
    return () => setWeather({});
  }, [capital]);

  return (
    <div>
      <h2>{common}</h2>
      <p>{`Capital: ${capital}`}</p>
      <p>{`Capital: ${area} KM`}</p>

      <ul>
        {Object.keys(languages).map((key, index) => (
          <li key={key}>{languages[key]}</li>
        ))}
      </ul>
      <img src={png} alt={`${common} Flag`} style={{ width: 170 }} />
      <div className="weather-section">
        <h2>{`Weather in ${capital}`}</h2>
        <p>{`Temperature: ${weather.temperature}º Celsius`}</p>
        {console.log(weather)}
        <img
          src={weather.weather_icons}
          alt={weather.weather_descriptions}
          title={weather.weather_descriptions}
        />
        <p>{`Wind: ${weather.wind_speed} M/s`}</p>
      </div>
    </div>
  );
};

export default Country;
