import React from "react";
import "./Weather.css";

export default function Weather(){
return(
    <div className="Weather">
        
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="Submit" value="search" className="btn btn-primary"/>
                </div>
            </div>
        </form>
        <h1>City</h1>
        <ul>
            <li>
                Date
            </li>
            <li>
                Weather
            </li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="" alt=""/> 6C
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 15%
                    </li>
                    <li>
                        Humidity: 80%
                    </li>
                    <li>
                        Wind Speed: 80 k/h
                    </li>
                </ul>
            </div>
        </div>
    </div>
    

)
}