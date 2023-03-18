/**
 * @fileoverview Weather app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import pageLoad, { reRenderMain } from "./components/pageLoad";
import {
  buildCoordsUrl,
  buildWeatherUrl,
  getWeather,
  getCoords,
} from "./components/fetchData";
import "./styles/styles-reset.css";
import "./styles/styles.css";

const defaultLocation = "Boston";
const defaultUnits = "metric";

/**
 * Convert Unix timestamp to Date object
 * @param {Number} unixTimestamp - Unix timestamp
 * @return {Date} Date object
 */
export function convertUnixTimestamp(unixTimestamp) {
  const dateObj = new Date((unixTimestamp) * 1000);
  return dateObj;
}

/**
 * Fetch default weather data.
 * @return {Object} Default weather data
 */
async function fetchDefaultData() {
  const defaultCoordsUrl = buildCoordsUrl(defaultLocation);
  const defaultCoords = await getCoords(defaultCoordsUrl);
  const defaultWeatherUrl = buildWeatherUrl(defaultCoords, defaultUnits);
  const defaultWeatherData = await getWeather(defaultWeatherUrl);
  return { coords: defaultCoords, weatherData: defaultWeatherData };
}

/**
 * Initialize the app.
 * @return {void}
 */
async function startApp() {
  const body = document.querySelector("body");
  body.id = "content";
  try {
    const { coords, weatherData } = await fetchDefaultData();
    pageLoad(coords, weatherData, defaultUnits);
  } catch (error) {
    console.log(error);
  }
}

/**
 * Fetch new weather data.
 * @return {Object} Coordinates and weather data
 */
async function fetchNewData() {
  const form = document.getElementById("searchBox-form");
  const location = form.city.value;
  const coordsUrl = buildCoordsUrl(location);
  const coords = await getCoords(coordsUrl);
  const weatherUrl = buildWeatherUrl(coords, defaultUnits);
  const weatherData = await getWeather(weatherUrl);
  return { coords, weatherData };
}

/**
 * Update the main content when user submits the search box form.
 * @return {void}
 * @exports
 */
export async function updateMain() {
  try {
    const { coords, weatherData } = await fetchNewData();
    reRenderMain(coords, weatherData, defaultUnits);
  } catch (error) {
    console.log(error);
    const form = document.getElementById("searchBox-form");
    const searchBoxError = document.getElementById("searchBox-error");
    form.reset();
    searchBoxError.classList.add("active");
  }
}

startApp();
