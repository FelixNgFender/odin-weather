/**
 * @fileoverview The forecast component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the forecast component.
 * @return {HTMLElement} Forecast component
 * @export
 */
export default function forecastComponent() {
  const forecast = document.createElement("section");

  forecast.id = "forecast";
  forecast.classList.add("forecast");

  return forecast;
}