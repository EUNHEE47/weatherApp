import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, selectedCity, handleCityChange }) => {
  return (
    <div className="button-box">
      <div className="current-btn-box">
        <button
          className={selectedCity === null ? "activeBtn" : "button"}
          onClick={() => handleCityChange("current")}
        >
          Current Location
        </button>
      </div>
      <div className="city-btn-box">
        {cities.map((city) => (
          <button
            className={selectedCity === city ? "activeBtn" : "button"}
            onClick={() => handleCityChange(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherButton;
