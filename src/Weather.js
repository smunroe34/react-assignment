import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"

export default function Weather (){
  const [weatherData, setWeatherData] = useState ({ ready:false });

function handleResponse (response) {
  console.log(response.data)
setWeatherData ({
  ready:true,
  humidity: response.data.temperature.humidity,
  temperature: response.data.temperature.current,
  city: response.data.city,
  wind: response.data.wind.speed,
  description: response.data.condition.description,
  iconURL: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
  date: "Wednesday 07:00",

});

}

if (weatherData.ready) {
  return (
<div className ="Weather">
    <form>
      <div className ="row">
        <div className ="col-9">
      <input type="search" placeholder="Enter a city.." className ="form-control" autoFocus="on"/>
      </div>
      <div className ="col-3">
      <input type ="submit" value ="search" className ="btn btn-primary w-100" />
      </div>
      </div>
    </form>
    <h1>{weatherData.city}</h1>
    <ul className="list">
      <li>
        {weatherData.date}
      </li>
      <li className="text-capitalize">
      {weatherData.description}
      </li>
    </ul>
    <div className ="row mt-3">
      <div className ="col-6">
        <div className= "clearfix">
      <img src= {weatherData.iconURL} alt={weatherData.description} className="float-left" />
      <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
      </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
          Humidity:{weatherData.humidity}%
          </li>
          <li>
          Wind: {Math.round(weatherData.wind)} km/h
          </li>
        </ul>
      </div>
    </div>
  </div>
);
}
else  {
const apiKey = "153t54243oee883fca4309ebdcb14bbd";
let city = "Toronto";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiURL).then(handleResponse); 
return "loading..."}
}




