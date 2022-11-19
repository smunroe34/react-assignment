import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"
import "./Weather.css"

export default function Weather (props){
  const [weatherData, setWeatherData] = useState ({ ready:false });
  const [city,setCity] = useState (props.defaultCity);


function handleResponse (response) {
setWeatherData ({
  ready:true,
  humidity: response.data.temperature.humidity,
  temperature: response.data.temperature.current,
  date: new Date(response.data.time * 1000),
  city: response.data.city,
  wind: response.data.wind.speed,
  description: response.data.condition.description,
  icon: response.data.condition.icon,

});


}

function search() {
const apiKey = "153t54243oee883fca4309ebdcb14bbd";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiURL).then(handleResponse); 
}

function handleSubmit(event) {
event.preventDefault();
search();
}

function handleCityChange (event) {
setCity(event.target.value);
}

if (weatherData.ready) {
  return (
<div className ="Weather">
    <form onSubmit={handleSubmit}>
      <div className ="row">
        <div className ="col-9">
      <input type="search" placeholder="Enter a city.." className ="form-control" autoFocus="on" onChange={handleCityChange}/>
      </div>
      <div className ="col-3">
      <input type ="submit" value ="search" className ="btn btn-primary w-100" />
      </div>
      </div>
    </form>
    <WeatherInfo data={weatherData}/>
  </div>
);
}
else {
search()
return "loading..."}
}




