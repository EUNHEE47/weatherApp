import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="weather-box text-center">
      <div>{weather && weather.name}</div>
      <div>
        <h1>{weather && weather.main.temp}℃</h1>
      </div>
      <div>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>
  );
};

export default WeatherBox;
