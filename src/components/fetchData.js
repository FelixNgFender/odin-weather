/**
 * @fileoverview Fetch app data from APIs
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Get location from the search box form
 * @return {String} User input of the location
 * @exports
 */
export function getLocationFromForm() {
  const form = document.getElementById("searchBox-form");
  return form.city.value;
}

/**
 * Sanitize user input.
 * @param {String} input User input
 * @return {String} Sanitized input
 */
function sanitizeInput(input) {
  if (!input) {
    return "";
  }
  return input
    .replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
    .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
    .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
    .replace(/\s+/g, "+"); // replace any remaining white space with +, so it works in api call
}

/**
 * Build the API endpoint to fetch coordinates from.
 * @param {String} cityName City name
 * @return {String} API endpoint to fetch coordinates from
 */
export function buildCoordsUrl(cityName) {
  const sanitizedCityName = sanitizeInput(cityName);
  return `http://api.openweathermap.org/geo/1.0/direct?q=${sanitizedCityName}&limit=1&appid=20f7632ffc2c022654e4093c6947b4f4`;
}

/**
 * Build the API endpoint to fetch weather information from.
 * @param {Object} coordinates Coordinates information (lat, lon, name, country)
 * @param {String} units Units to display ("imperial"/"metric")
 * @return {String} API endpoint to fetch weather information from
 */
export function buildWeatherUrl(coordinates, units) {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`;
}

/**
 * Get coordinates information from the OpenWeatherMap API.
 * @param {String} url API endpoint to fetch data from
 * @return {Object} Coordinates information (lat, lon, name, country)
 */
export async function getCoords(url) {
  const response = await fetch(url);
  const coordsData = await response.json();
  const { lat, lon, name, country } = coordsData[0];
  const coord = { lat, lon, name, country };
  return coord;
}

/**
 * Get weather information from the OpenWeatherMap API.
 * @param {String} url API endpoint to fetch data from
 * @return {Object} Weather information
 */
export async function getWeather(url) {
  const response = await fetch(url);
  const weatherData = await response.json();

  return weatherData;
}
