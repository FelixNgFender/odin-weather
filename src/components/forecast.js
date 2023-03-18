/**
 * @fileoverview The forecast component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the forecast component.
 * @return {HTMLElement} Forecast component
 * @exports
 */
export default function forecastComponent() {
  const forecast = document.createElement("section");
  const forecastDailyBtn = document.createElement("input");
  const forecastDailyLabel = document.createElement("label");
  const forecastHourlyBtn = document.createElement("input");
  const forecastHourlyLabel = document.createElement("label");

  forecast.id = "forecast";
  forecast.classList.add("forecast");
  forecast.classList.add("frostedGlass");
  forecastDailyBtn.id = "forecast-dailyBtn";
  forecastDailyBtn.classList.add("forecast-btn");
  forecastDailyBtn.type = "radio";
  forecastDailyBtn.name = "forecast";
  forecastDailyBtn.value = "daily";
  forecastDailyBtn.checked = true;
  forecastDailyLabel.classList.add("forecast-label");
  forecastDailyLabel.classList.add("sweepToRight");
  forecastDailyLabel.htmlFor = "forecast-dailyBtn";
  forecastHourlyBtn.id = "forecast-hourlyBtn";
  forecastHourlyBtn.classList.add("forecast-btn");
  forecastHourlyBtn.type = "radio";
  forecastHourlyBtn.name = "forecast";
  forecastHourlyBtn.value = "hourly";
  forecastHourlyLabel.classList.add("forecast-label");
  forecastHourlyLabel.classList.add("sweepToRight");
  forecastHourlyLabel.htmlFor = "forecast-hourlyBtn";

  forecastDailyLabel.textContent = "Daily";
  forecastHourlyLabel.textContent = "Hourly";

  forecast.appendChild(forecastDailyBtn);
  forecast.appendChild(forecastDailyLabel);
  forecast.appendChild(forecastHourlyBtn);
  forecast.appendChild(forecastHourlyLabel);
  forecast.appendChild(dailyForecastList());
  forecast.appendChild(navigationDots(8));

  return forecast;
}

/**
 * Create the daily forecast list.
 * @return {HTMLElement} Daily forecast list
 */
function dailyForecastList() {
  const dailyForecastList = document.createElement("ul");
  dailyForecastList.classList.add("forecast-daily");
  dailyForecastList.id = "current-forecast";

  for (let i = 0; i < 7; i++) {
    const dailyForecastItem = document.createElement("li");
    const dailyForecastItemDate = document.createElement("div");
    const dailyForecastItemTempHi = document.createElement("div");
    const dailyForecastItemTempLo = document.createElement("div");
    const dailyForecastItemIcon = document.createElement("img");

    dailyForecastItem.classList.add("forecast-daily-item");
    dailyForecastItemDate.classList.add("forecast-daily-item-date");
    dailyForecastItemTempHi.classList.add("forecast-daily-item-tempHi");
    dailyForecastItemTempLo.classList.add("forecast-daily-item-tempLo");
    dailyForecastItemIcon.classList.add("forecast-daily-item-icon");

    dailyForecastItemDate.textContent = "Mon";
    dailyForecastItemTempHi.textContent = "10 °C";
    dailyForecastItemTempLo.textContent = "4 °C";
    dailyForecastItemIcon.src = "https://openweathermap.org/img/w/04d.png";
    dailyForecastItemIcon.alt = "Clear Sky";

    dailyForecastItem.appendChild(dailyForecastItemDate);
    dailyForecastItem.appendChild(dailyForecastItemTempHi);
    dailyForecastItem.appendChild(dailyForecastItemTempLo);
    dailyForecastItem.appendChild(dailyForecastItemIcon);

    dailyForecastList.appendChild(dailyForecastItem);
  }

  return dailyForecastList;
}

/**
 * Create the navigation dots based on the current forecast tab.
 * @param {number} numTabs Number of tabs active
 * @return {HTMLElement} Navigation dots
 */
function navigationDots(numTabs) {
  const navigationDots = document.createElement("ul");
  const numDots = (numTabs <= 7 ? 1 : 3);

  navigationDots.classList.add("forecast-navigationDots");
  for (let i = 0; i < numDots; i++) {
    const navigationDot = document.createElement("li");
    navigationDot.classList.add("forecast-navigationDot");
    navigationDot.classList.add("sweepToRight");
    if (i === 0) {
      navigationDot.classList.add("active");
    }
    navigationDots.appendChild(navigationDot);
  }

  return navigationDots;
}
