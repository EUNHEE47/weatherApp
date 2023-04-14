import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>
      <Button variant="warning">New york</Button>
      <Button variant="warning">Tokyo</Button>
      <Button variant="warning">Hanoi</Button>
      <Button variant="warning">Denpasar</Button>
    </div>
  );
};

export default WeatherButton;
