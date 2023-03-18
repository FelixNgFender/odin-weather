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
  const slider = sliderComponent()

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
  forecast.appendChild(slider);

  return forecast;
}

/**
 * Create the slider component.
 * @return {HTMLElement} Slider component
 */
function sliderComponent() {
  const slider = document.createElement("div");
  const leftArrow = document.createElement("span");
  const leftArrowSvg = document.createElement("svg");
  const leftArrowTitle = document.createElement("title");
  const leftArrowPath = document.createElement("path");
  const rightArrow = document.createElement("span");
  const rightArrowSvg = document.createElement("svg");
  const rightArrowTitle = document.createElement("title");
  const rightArrowPath = document.createElement("path");
  const dot1 = document.createElement("span");
  const dot2 = document.createElement("span");
  const dot3 = document.createElement("span");

  slider.classList.add("forecast-slider");
  leftArrow.classList.add("forecast-slider-left");
  leftArrowSvg.xmlns = "http://www.w3.org/2000/svg";
  leftArrowSvg.version = "1.1";
  leftArrowSvg.viewBox = "8.02 6 7.41 12";
  leftArrowSvg.fill = "#f5f5f5";
  leftArrowTitle.textContent = "arrow_left";
  leftArrowPath.d = "M15.422 16.594l-1.406 1.406-6-6 6-6 1.406 1.406-4.594 4.594z";
  rightArrow.classList.add("forecast-slider-right");
  rightArrowSvg.xmlns = "http://www.w3.org/2000/svg";
  rightArrowSvg.version = "1.1";
  rightArrowSvg.viewBox = "8.58 6 7.41 12";
  rightArrowSvg.fill = "#f5f5f5";
  rightArrowTitle.textContent = "arrow_right";
  rightArrowPath.d = "M8.422 6.594l1.406 1.406 4.594-4.594-4.594-4.594-1.406 1.406 6 6z";
  dot1.classList.add("forecast-slider-dot", "forecast-slider-dot1");
  dot2.classList.add("forecast-slider-dot", "forecast-slider-dot2");
  dot3.classList.add("forecast-slider-dot", "forecast-slider-dot3");

  leftArrowSvg.appendChild(leftArrowTitle);
  leftArrowSvg.appendChild(leftArrowPath);
  leftArrow.appendChild(leftArrowSvg);
  rightArrowSvg.appendChild(rightArrowTitle);
  rightArrowSvg.appendChild(rightArrowPath);
  rightArrow.appendChild(rightArrowSvg);
  slider.appendChild(leftArrow);
  slider.appendChild(dot1);
  slider.appendChild(dot2);
  slider.appendChild(dot3);
  slider.appendChild(rightArrow);

  return slider;
}
