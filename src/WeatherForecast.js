import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

    useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
      setForecast(response.data.daily);
      setReady(true)
  }

  if(ready){
  return (
    <div className="WeatherForecast">
      <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
            return null; 
          })}
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