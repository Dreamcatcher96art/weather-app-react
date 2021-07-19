import React from "react";

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
        <div className="Forecast-day">{day()}</div>
        <div className="Forecast-temperatures">
        <span className="Forecast-temperature-max">{maxTemp()}/</span>
        <span className="Forecast-temperature-min">{minTemp()}</span>
        </div>
    </div>
)
}