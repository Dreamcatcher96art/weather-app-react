import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {

    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return(`${temperature}°`)
    }

    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return(`${temperature}°`)
    }

    function day(){
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

         let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
    }

return(
    <div>
        <div className="Forecast-day"><span className ="day">{day()}</span></div>
        <Icon code={props.data.weather[0].icon} size={36} />
        <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">{maxTemp()}/</span>
        <span className="Forecast-temperature-min"><small className="min">{minTemp()}</small></span>
        </div>
    </div>
)
}