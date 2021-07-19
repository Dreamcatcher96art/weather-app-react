import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";



export default function Weather(props){
const [city, setCity] = useState(props.defaultCity);
const [weather, setWeather] = useState({ready: false });


function handleResponse(response){
    console.log(response.data)
setWeather({
    ready: true,
    temperature:response.data.main.temp,
    wind:response.data.wind.speed,
    pressure:response.data.main.pressure,
    hummidity:response.data.main.humidity,
    city:response.data.name,
    country:response.data.sys.country,
    icon:response.data.weather[0].icon,
    descriptione:response.data.weather[0].description,
    date:new Date(response.data.dt*1000),
    coordinates: response.data.coord,
})
}

function search(){
    const apiKey = "97a9745b0c3a1f932357060a2331ab49";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

  function handleCityChange(event) {
    setCity(event.target.value);
  }

if(weather.ready){
return(
    <div className="Weather">
        
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search" className="form-control" autoFocus="on" onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary" />
                </div>
            </div>
        </form>
        <WeatherInfo data={weather}/>
        <WeatherForecast coordinates={weather.coordinates} />
    </div>
)}else{
    search(city);
    return"Loading..."
}
}