import React from "react";
import Time from "./weatherTime"
import Icon from "./Icon";
import "./Weather.css";

export default function WeatherInfo(props){
    return(
        <div className="weatherInfo">
      <h1 className="city">{props.data.city}<span className="country"><small>({props.data.country})</small></span></h1>
        <ul>
            <li className="date" id="date">
                <Time date={props.data.date}/>
            </li>
            <li className="text-capitalize" id="description">
                {props.data.descriptione}
            </li>
        </ul>
        <div className="row">
            <div className="col-6 temp">
                <Icon code={props.data.icon} size={52} /> {Math.round(props.data.temperature)}°C
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Pressure: {props.data.pressure}%
                    </li>
                    <li>
                        Humidity: {props.data.hummidity}%
                    </li>
                    <li>
                        Wind Speed: {Math.round(props.data.wind)} k/h
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}