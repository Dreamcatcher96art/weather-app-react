import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity = "Gdynia"/>
        <footer>
          Coded by Asia Płaska{" "}
          and {" "}
          <a
            href="https://github.com/Dreamcatcher96art/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}
