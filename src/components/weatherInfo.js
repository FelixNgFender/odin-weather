/**
 * @fileoverview The weather info component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the weather info component.
 * @return {HTMLElement} Weather info component
 * @exports
 */
export default function weatherInfo() {
  const weatherInfo = document.createElement("section");
  const description = document.createElement("div");
  const temperature = document.createElement("div");
  const unitChangeBtn = document.createElement("button");
  const icon = document.createElement("img");

  weatherInfo.classList.add("weatherInfo");
  weatherInfo.classList.add("frostedGlass");
  description.classList.add("weatherInfo-description");
  temperature.classList.add("weatherInfo-temperature");
  unitChangeBtn.classList.add("weatherInfo-unitChangeBtn");
  unitChangeBtn.classList.add("sweepToRight");
  icon.classList.add("weatherInfo-icon");

  description.textContent = "Broken Clouds";
  temperature.textContent = "21 °C";
  unitChangeBtn.textContent = "Display °F";
  unitChangeBtn.type = "button";  
  icon.src = "https://openweathermap.org/img/w/04d.png";
  icon.alt = "Broken Clouds";

  weatherInfo.appendChild(description);
  weatherInfo.appendChild(temperature);
  weatherInfo.appendChild(unitChangeBtn);
  weatherInfo.appendChild(icon);

  return weatherInfo;
}
