import React, { useState } from "react";
import "./Weather.css";
import Date from "./date";
import axios from "axios";



export default function Weather(){
const[ready, setReady] = useState(false)
const [weather, setWeather] = useState({});
function handleResponse(response){
console.log(response.data)
setWeather({
    temperature:response.data.main.temp,
    wind:response.data.wind.speed,
    pressure:response.data.main.pressure,
    hummidity:response.data.main.humidity,
    city:response.data.name,
    country:response.data.sys.country,
    icon:response.data.weather[0].icon,
    descriptione:response.data.weather[0].description,
    date:new Date(response.data.dt*1000)
})
setReady(true)
}

if(ready){
return(
    <div className="Weather">
        
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="Submit" value="Search" className="btn btn-primary"/>
                </div>
            </div>
        </form>
        <h1 className="city">{weather.city}<span className="country"><small>({weather.country})</small></span></h1>
        <ul>
            <li className="date" id="date">
               <Date date={weather.data.dt*1000}/>
            </li>
            <li className="text-capitalize" id="description">
                {weather.descriptione}
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src={weather.icon} alt=""/> {Math.round(weather.temperature)}C
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Pressure: {weather.pressure}%
                    </li>
                    <li>
                        Humidity: {weather.hummidity}%
                    </li>
                    <li>
                        Wind Speed: {Math.round(weather.wind)}k/h
                    </li>
                </ul>
            </div>
        </div>
    </div>
)}else{
    const apiKey = "97a9745b0c3a1f932357060a2331ab49";
    let city = "Gdynia"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return"Loading..."
}
}