import React from "react";
import "./Weather.css";
import search_icon from "../assets/images/search.png";
import clear_icon from "../assets/images/clear.png";
import cloud_icon from "../assets/images/clouds.png";
import drizzle_icon from "../assets/images/drizzle.png";
import rain_icon from "../assets/images/rain.png";
import snow_icon from "../assets/images/snow.png";
import wind_icon from "../assets/images/wind.png";
import humidity_icon from "../assets/images/humidity.png";

const Weather = () => {
  return (
    <div className="weather">
      <div className="searchbar">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="" />
      </div>

      <img src={clear_icon} alt="" />
      <p>16°C</p>
      <p>London</p>
    </div>
  );
};

export default Weather;
