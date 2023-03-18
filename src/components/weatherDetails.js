/**
 * @fileoverview The weather details component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the weather details component.
 * @return {HTMLElement} Weather details component
 * @exports
 */
export default function weatherDetails() {
  const weatherDetailsList = document.createElement("ul");

  weatherDetailsList.classList.add("weatherDetails");
  weatherDetailsList.classList.add("frostedGlass");
  for (let i = 0; i < 4; i++) {
    const weatherDetailsItem = document.createElement("li");
    const weatherDetailsItemIcon = document.createElement("span");
    const weatherDetailsItemLabel = document.createElement("span");
    const weatherDetailsItemValue = document.createElement("span");

    weatherDetailsItem.classList.add("weatherDetails-item");
    weatherDetailsItemIcon.classList.add(
      "material-symbols-outlined",
      "weatherDetails-icon",
      "size-20"
    );
    weatherDetailsItemLabel.classList.add("weatherDetails-label");
    weatherDetailsItemValue.classList.add("weatherDetails-value");

    weatherDetailsItemValue.textContent = "100%";
    weatherDetailsItem.appendChild(weatherDetailsItemIcon);
    weatherDetailsItem.appendChild(weatherDetailsItemLabel);
    weatherDetailsItem.appendChild(weatherDetailsItemValue);
    weatherDetailsList.appendChild(weatherDetailsItem);
  }

  const weatherDetailsIcons = weatherDetailsList.querySelectorAll(".weatherDetails-icon");
    weatherDetailsIcons[0].textContent = "thermostat";
    weatherDetailsIcons[1].textContent = "humidity_percentage";
    weatherDetailsIcons[2].textContent = "rainy";
    weatherDetailsIcons[3].textContent = "air";

    const weatherDetailsLabels = weatherDetailsList.querySelectorAll(".weatherDetails-label");
    weatherDetailsLabels[0].textContent = "Feels Like";
    weatherDetailsLabels[1].textContent = "Humidity";
    weatherDetailsLabels[2].textContent = "Chance of Rain";
    weatherDetailsLabels[3].textContent = "Wind Speed";


  return weatherDetailsList;
}
