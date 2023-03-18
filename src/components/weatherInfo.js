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
  temperature.id = "temperatureDisplay";
  unitChangeBtn.classList.add("weatherInfo-unitChangeBtn");
  unitChangeBtn.classList.add("sweepToRight");
  icon.classList.add("weatherInfo-icon");

  description.textContent = "Broken Clouds";
  temperature.textContent = "21 °C";
  unitChangeBtn.textContent = "Display °F";
  unitChangeBtn.type = "button";
  unitChangeBtn.id = "unitChangeBtn";
  unitChangeBtn.addEventListener("click", () => {
    const temperatureDisplays = document.querySelectorAll(
      "#temperatureDisplay"
    );
    const unitChangeBtn = document.getElementById("unitChangeBtn");
    if (unitChangeBtn.textContent === "Display °F") {
      temperatureDisplays.forEach((temperatureDisplay) => {
        const temperature = temperatureDisplay.textContent.split(" ")[0];
        temperatureDisplay.textContent = `${Math.round(
          (temperature * 9) / 5 + 32
        )} °F`;
        unitChangeBtn.textContent = "Display °C";
      });
    } else {
      temperatureDisplays.forEach((temperatureDisplay) => {
        const temperature = temperatureDisplay.textContent.split(" ")[0];
        temperatureDisplay.textContent = `${Math.round(
          ((temperature - 32) * 5) / 9
        )} °C`;
        unitChangeBtn.textContent = "Display °F";
      });
    }
  });
  icon.src = "https://openweathermap.org/img/w/04d.png";
  icon.alt = "Broken Clouds";

  weatherInfo.appendChild(description);
  weatherInfo.appendChild(temperature);
  weatherInfo.appendChild(unitChangeBtn);
  weatherInfo.appendChild(icon);

  return weatherInfo;
}
