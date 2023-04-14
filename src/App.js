import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보임
// 2. 날씨 정보에는 도시, 섭씨 날씨 상태
// 3. 하단에 버튼(1개는 현재위치, 나머지는 도시 날씨)
// 4. 도시 버튼을 누르면 도시별 날씨가 보임
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나옴.
// 6. 데이터를 불러오는 동안 로딩 스피너가 돈다.
function App() {
  const API_KEY = `75d2dea395ad5c122548fc0614d3c261`;
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByLocation(lat, lon);
    });
  };

  const getWeatherByLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=75d2dea395ad5c122548fc0614d3c261`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div>
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
