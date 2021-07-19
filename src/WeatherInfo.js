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
                        Pressure: <span className="bold">{props.data.pressure}%</span>
                    </li>
                    <li>
                        Humidity: <span className="bold">{props.data.hummidity}%</span>
                    </li>
                    <li>
                        Wind Speed: <span className="bold">{Math.round(props.data.wind)} k/h</span>
                    </li>
                </ul>
            </div>
        </div>
        <hr/>
    </div>
    )
}