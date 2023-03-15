/**
 * @fileoverview Weather app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import pageLoad from "./components/pageLoad";
import "./styles/styles-reset.css";
import "./styles/styles.css";

/**
 * Initialize the app
 * @return {void}
 */
function startApp() {
  const body = document.querySelector("body");
  body.id = "content";
  pageLoad();
}

startApp();

/**
 * Get weather data from OpenWeatherMap API asynchronously.
 * @param {String} city
 * @return {Promise} Promise object represents the weather data
 */
// async function getWeatherData(city) {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04fe0f098090ea64733afd05fc283ec2&units=metric`
//   );
//   const data = await response.json();
//   return data;
// }

// Test the getWeatherData function
// getWeatherData("Worcester").then((data) => {
//   console.log(data);
// });

const exampleResponse = {
  coord: {
    lon: -71.8328,
    lat: 42.3334,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: -1.1,
    feels_like: -1.1,
    temp_min: -3.1,
    temp_max: 0.84,
    pressure: 1017,
    humidity: 87,
  },
  visibility: 10000,
  wind: {
    speed: 0.67,
    deg: 122,
    gust: 1.07,
  },
  clouds: {
    all: 100,
  },
  dt: 1678679081,
  sys: {
    type: 2,
    id: 2031296,
    country: "US",
    sunrise: 1678619100,
    sunset: 1678661368,
  },
  timezone: -14400,
  id: 4956199,
  name: "Worcester",
  cod: 200,
};

console.log(exampleResponse);