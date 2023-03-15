/**
 * @fileoverview Initialize page load
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import searchBoxComponent from "./searchBox";
import forecastComponent from "./forecast";

import appleTouchIconHref from "../assets/favicon/apple-touch-icon.png";
import favicon32Href from "../assets/favicon/favicon-32x32.png";
import favicon16Href from "../assets/favicon/favicon-16x16.png";
import manifestHref from "../assets/favicon/site.webmanifest";
import maskIconHref from "../assets/favicon/safari-pinned-tab.svg";

/**
 * Add favicons to the page.
 * @return {void}
 */
function addFavicons() {
  const appleTouchIcon = document.createElement("link");
  const favicon32 = document.createElement("link");
  const favicon16 = document.createElement("link");
  const manifest = document.createElement("link");
  const maskIcon = document.createElement("link");
  const msTileColor = document.createElement("meta");
  const themeColor = document.createElement("meta");
  appleTouchIcon.rel = "apple-touch-icon";
  appleTouchIcon.sizes = "180x180";
  appleTouchIcon.href = appleTouchIconHref;
  favicon32.rel = "icon";
  favicon32.type = "image/png";
  favicon32.sizes = "32x32";
  favicon32.href = favicon32Href;
  favicon16.rel = "icon";
  favicon16.type = "image/png";
  favicon16.sizes = "16x16";
  favicon16.href = favicon16Href;
  manifest.rel = "manifest";
  manifest.href = manifestHref;
  maskIcon.rel = "mask-icon";
  maskIcon.href = maskIconHref;
  maskIcon.color = "#5bbad5";
  msTileColor.name = "msapplication-TileColor";
  msTileColor.content = "#da532c";
  themeColor.name = "theme-color";
  themeColor.content = "#ffffff";
  document.head.appendChild(appleTouchIcon);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon16);
  document.head.appendChild(manifest);
  document.head.appendChild(maskIcon);
  document.head.appendChild(msTileColor);
  document.head.appendChild(themeColor);
}

/**
 * Create the weather info component.
 * @return {HTMLElement} Weather info component
 */
function weatherInfo() {
  const weatherInfo = document.createElement("section");
  const description = document.createElement("div");
  const temperature = document.createElement("div");
  const unitChangeBtn = document.createElement("button");
  const icon = document.createElement("svg");
  const iconTitle = document.createElement("title");
  const iconPath = document.createElement("path");

  weatherInfo.classList.add("weatherInfo");
  description.classList.add("weatherInfo-description");
  temperature.classList.add("weatherInfo-temperature");
  unitChangeBtn.classList.add("weatherInfo-unitChangeBtn");
  icon.classList.add("weatherInfo-icon");
  iconTitle.classList.add("weatherInfo-iconTitle");
  iconPath.classList.add("weatherInfo-iconPath");

  description.textContent = "Lorem Ipsum";
  temperature.textContent = "21 °C";
  unitChangeBtn.textContent = "Display °F";
  icon.viewBox = "0 0 32 32";
  icon.role = "img";
  icon.focusable = false;
  iconTitle.textContent = "Cloudy with a chance of meatballs";
  iconPath.d =
    "M13 4c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM20.777 6.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM1 14h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM22 13c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM5.221 6.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM25 16c-0.332 0-0.66 0.023-0.987 0.070-1.048-1.43-2.445-2.521-4.029-3.219-0.081-3.789-3.176-6.852-6.984-6.852-3.859 0-7 3.141-7 7 0 1.090 0.271 2.109 0.719 3.027-3.727 0.152-6.719 3.211-6.719 6.973 0 3.859 3.141 7 7 7 0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM13 8c2.488 0 4.535 1.823 4.919 4.203-0.626-0.125-1.266-0.203-1.919-0.203-2.871 0-5.531 1.238-7.398 3.328-0.371-0.698-0.602-1.482-0.602-2.328 0-2.762 2.238-5 5-5zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.484 0 0.941 0.091 1.383 0.221 0.176 0.049 0.354 0.089 0.52 0.158 0.273-0.535 0.617-1.025 0.999-1.484 1.461-1.758 3.634-2.895 6.099-2.895 0.633 0 1.24 0.091 1.828 0.232 0.66 0.156 1.284 0.393 1.865 0.706 1.456 0.773 2.651 1.971 3.404 3.441 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z";

  weatherInfo.appendChild(description);
  weatherInfo.appendChild(temperature);
  weatherInfo.appendChild(unitChangeBtn);
  weatherInfo.appendChild(icon);
  icon.appendChild(iconTitle);
  icon.appendChild(iconPath);

  return weatherInfo;
}

/**
 * Create the weather details component.
 * @return {HTMLElement} Weather details component
 */
function weatherDetails() {
  const weatherDetails = document.createElement("section");

  weatherDetails.classList.add("weatherDetails");

  return weatherDetails;
}

/**
 * Create the footer component.
 * @return {HTMLElement} Footer element
 */
function footer() {
  loadKit();
  const footer = document.createElement("footer");
  const footerText = document.createElement("p");
  const footerLink = document.createElement("a");
  const footerIcon = document.createElement("i");
  footer.classList.add("footer");
  footerIcon.classList.add("fab", "fa-github");
  footerText.textContent =
    "Copyright © " + new Date().getFullYear() + " FelixNgFender";
  footerLink.href = "https://github.com/FelixNgFender";
  footerLink.target = "_blank";
  footerLink.rel = "noopener noreferrer";
  footerLink.appendChild(footerIcon);
  footer.appendChild(footerText);
  footer.appendChild(footerLink);
  return footer;
}

/**
 * Load the fontawesome kit.
 * @return {void}
 */
function loadKit() {
  const fontawesomeKit = document.createElement("script");
  fontawesomeKit.src = "https://kit.fontawesome.com/b6b40a3902.js";
  fontawesomeKit.crossOrigin = "anonymous";
  document.head.appendChild(fontawesomeKit);
}

/**
 * Initialize page load.
 * @return {void}
 * @export
 */
export default function pageLoad() {
  addFavicons();
  const content = document.getElementById("content");
  const wideScreenWrapper = document.createElement("main");
  wideScreenWrapper.classList.add("wideScreenWrapper");
  content.appendChild(wideScreenWrapper);
  wideScreenWrapper.appendChild(weatherInfo());
  wideScreenWrapper.appendChild(searchBoxComponent());
  wideScreenWrapper.appendChild(weatherDetails());
  wideScreenWrapper.appendChild(forecastComponent());
  content.appendChild(footer());
}
