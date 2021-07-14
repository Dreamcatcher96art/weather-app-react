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
                    <input type="Submit" value="Search" className="btn btn-primary"/>
                </div>
            </div>
        </form>
        <h1 className="city">City<span className="country"><small>Country</small></span></h1>
        <ul>
            <li className="date" id="date">
                Date
            </li>
            <li className="description" id="description">
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