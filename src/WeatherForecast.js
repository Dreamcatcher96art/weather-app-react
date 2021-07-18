import React, { useState } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
      setForecast(response.data.daily);
      setReady(true)
  }

  if(ready){
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
            <ForecastDay data={forecast[0]} />
        </div>
        <div className="col">
            <ForecastDay data={forecast[1]} />
        </div>
        <div className="col">
            <ForecastDay data={forecast[2]} />
        </div>
        <div className="col">
            <ForecastDay data={forecast[3]} />
        </div>
        <div className="col">
            <ForecastDay data={forecast[4]} />
        </div>
      </div>
    </div>
 );
  }else{
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null;
  }
}