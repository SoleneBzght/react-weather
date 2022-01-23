import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`Weather in ${response.data.name} is ${response.data.main.temp}°C`);
  }
  let apiKey = "aeb2d1365a9d92cf49c896584716146c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <h1>Hello from weather</h1>
    </div>
  );
}
