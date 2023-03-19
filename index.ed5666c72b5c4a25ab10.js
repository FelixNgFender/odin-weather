(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["index"],{

/***/ 399:
/*!*************************************!*\
  !*** ./src/components/fetchData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildCoordsUrl": () => (/* binding */ buildCoordsUrl),
/* harmony export */   "buildWeatherUrl": () => (/* binding */ buildWeatherUrl),
/* harmony export */   "getCoords": () => (/* binding */ getCoords),
/* harmony export */   "getLocationFromForm": () => (/* binding */ getLocationFromForm),
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/**
 * @fileoverview Fetch app data from APIs
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/**
 * Get location from the search box form
 * @return {String} User input of the location
 * @exports
 */
function getLocationFromForm() {
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
  return input.replace(/(\s+$|^\s+)/g, "") // remove whitespace from begining and end of string
  .replace(/(,\s+)/g, ",") // remove any white space that follows a comma
  .replace(/(\s+,)/g, ",") // remove any white space that preceeds a comma
  .replace(/\s+/g, "+"); // replace any remaining white space with +, so it works in api call
}

/**
 * Build the API endpoint to fetch coordinates from.
 * @param {String} cityName City name
 * @return {String} API endpoint to fetch coordinates from
 */
function buildCoordsUrl(cityName) {
  const sanitizedCityName = sanitizeInput(cityName);
  return `https://api.openweathermap.org/geo/1.0/direct?q=${sanitizedCityName}&limit=1&appid=20f7632ffc2c022654e4093c6947b4f4`;
}

/**
 * Build the API endpoint to fetch weather information from.
 * @param {Object} coordinates Coordinates information (lat, lon, name, country)
 * @param {String} units Units to display ("imperial"/"metric")
 * @return {String} API endpoint to fetch weather information from
 */
function buildWeatherUrl(coordinates, units) {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,alerts&units=${units}&appid=20f7632ffc2c022654e4093c6947b4f4`;
}

/**
 * Get coordinates information from the OpenWeatherMap API.
 * @param {String} url API endpoint to fetch data from
 * @return {Object} Coordinates information (lat, lon, name, country)
 */
async function getCoords(url) {
  const response = await fetch(url);
  const coordsData = await response.json();
  const {
    lat,
    lon,
    name,
    country
  } = coordsData[0];
  const coord = {
    lat,
    lon,
    name,
    country
  };
  return coord;
}

/**
 * Get weather information from the OpenWeatherMap API.
 * @param {String} url API endpoint to fetch data from
 * @return {Object} Weather information
 */
async function getWeather(url) {
  const response = await fetch(url);
  const weatherData = await response.json();
  return weatherData;
}

/***/ }),

/***/ 131:
/*!************************************!*\
  !*** ./src/components/forecast.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ forecastComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 352);
/**
 * @fileoverview The forecast component
 * @author Thinh Nguyen
 * @version 1.0.0
 */





/**
 * Create the forecast component.
 * @param {Object} dailyForecastData - Daily forecast data
 * @param {Object} hourlyForecastData - Hourly forecast data
 * @param {Object} units - Units to display
 * @param {Object} timezone - Timezone of the location
 * @return {HTMLElement} Forecast component
 * @exports
 */
function forecastComponent(dailyForecastData, hourlyForecastData, units, timezone) {
  const forecast = document.createElement("section");
  const forecastBtnWrapper = document.createElement("div");
  const forecastDailyBtn = document.createElement("input");
  const forecastDailyLabel = document.createElement("label");
  const forecastHourlyBtn = document.createElement("input");
  const forecastHourlyLabel = document.createElement("label");
  const dailyForecastComponent = dailyForecastList(dailyForecastData, units, timezone);
  const hourlyForecastComponent = hourlyForecastList(hourlyForecastData, units, timezone);
  const navigation = navigationDots(7, 0);
  forecast.id = "forecast";
  forecast.classList.add("forecast", "frostedGlass");
  forecastBtnWrapper.classList.add("forecast-btnWrapper");
  forecastDailyBtn.id = "forecast-dailyBtn";
  forecastDailyBtn.classList.add("forecast-btn");
  forecastDailyBtn.type = "radio";
  forecastDailyBtn.name = "forecast";
  forecastDailyBtn.value = "daily";
  forecastDailyBtn.checked = true;
  forecastDailyLabel.classList.add("forecast-label", "sweepToRight");
  forecastDailyLabel.htmlFor = "forecast-dailyBtn";
  forecastHourlyBtn.id = "forecast-hourlyBtn";
  forecastHourlyBtn.classList.add("forecast-btn");
  forecastHourlyBtn.type = "radio";
  forecastHourlyBtn.name = "forecast";
  forecastHourlyBtn.value = "hourly";
  forecastHourlyLabel.classList.add("forecast-label", "sweepToRight");
  forecastHourlyLabel.htmlFor = "forecast-hourlyBtn";
  forecastDailyLabel.textContent = "Daily";
  forecastHourlyLabel.textContent = "Hourly";
  forecastDailyBtn.addEventListener("change", e => {
    const forecastDaily = document.getElementById("forecast-daily");
    const forecastHourly = document.getElementById("forecast-hourly");
    forecastDaily.classList.add("active");
    forecastHourly.classList.remove("active");
    reRenderNavigationDots(7, 0);
  });
  forecastHourlyBtn.addEventListener("change", e => {
    const forecastDaily = document.getElementById("forecast-daily");
    const forecastHourly = document.getElementById("forecast-hourly");
    const firstActiveForecastIndex = document.querySelector(".forecast-hourly-item.active").dataset.index;
    forecastDaily.classList.remove("active");
    forecastHourly.classList.add("active");
    reRenderNavigationDots(24, Math.floor(firstActiveForecastIndex / 8));
  });
  forecastBtnWrapper.appendChild(forecastDailyBtn);
  forecastBtnWrapper.appendChild(forecastDailyLabel);
  forecastBtnWrapper.appendChild(forecastHourlyBtn);
  forecastBtnWrapper.appendChild(forecastHourlyLabel);
  forecast.appendChild(forecastBtnWrapper);
  forecast.appendChild(dailyForecastComponent);
  forecast.appendChild(hourlyForecastComponent);
  forecast.appendChild(navigation);
  return forecast;
}

/**
 * Create the daily forecast list.
 * @param {Object} dailyForecastData - Daily forecast data
 * @param {Object} units - Units to display
 * @param {Object} timezone - Timezone of the location
 * @return {HTMLElement} Daily forecast list
 */
function dailyForecastList(dailyForecastData, units, timezone) {
  const dailyForecastList = document.createElement("ul");
  dailyForecastList.classList.add("forecast-daily", "active");
  dailyForecastList.id = "forecast-daily";
  let temperatureDisplayUnit;
  if (units === "imperial") {
    temperatureDisplayUnit = " °F";
  } else {
    temperatureDisplayUnit = " °C";
  }
  for (let i = 0; i < 7; i++) {
    const dailyForecastItem = document.createElement("li");
    const dailyForecastItemDate = document.createElement("div");
    const dailyForecastItemTempHi = document.createElement("div");
    const dailyForecastItemTempLo = document.createElement("div");
    const dailyForecastItemIcon = document.createElement("img");
    dailyForecastItem.classList.add("forecast-daily-item");
    dailyForecastItemDate.classList.add("forecast-daily-item-date");
    dailyForecastItemTempHi.classList.add("forecast-daily-item-tempHi");
    dailyForecastItemTempHi.id = "temperatureDisplay";
    dailyForecastItemTempLo.classList.add("forecast-daily-item-tempLo");
    dailyForecastItemTempLo.id = "temperatureDisplay";
    dailyForecastItemIcon.classList.add("forecast-daily-item-icon");
    dailyForecastItemDate.textContent = (0,___WEBPACK_IMPORTED_MODULE_0__.convertUnixTimestamp)(dailyForecastData[i].dt).toLocaleString("en-US", {
      weekday: "short",
      timeZone: timezone
    });
    dailyForecastItemTempHi.textContent = `${dailyForecastData[i].temp.max.toFixed(1)}${temperatureDisplayUnit}`;
    dailyForecastItemTempLo.textContent = `${dailyForecastData[i].temp.min.toFixed(1)}${temperatureDisplayUnit}`;
    dailyForecastItemIcon.src = "https://openweathermap.org/img/w/" + dailyForecastData[i].weather[0].icon + ".png";
    dailyForecastItemIcon.alt = dailyForecastData[i].weather[0].description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    dailyForecastItem.appendChild(dailyForecastItemDate);
    dailyForecastItem.appendChild(dailyForecastItemTempHi);
    dailyForecastItem.appendChild(dailyForecastItemTempLo);
    dailyForecastItem.appendChild(dailyForecastItemIcon);
    dailyForecastList.appendChild(dailyForecastItem);
  }
  return dailyForecastList;
}

/**
 * Create the hourly forecast list.
 * @param {Object} hourlyForecastData - Hourly forecast data
 * @param {String} units - Units to display
 * @param {String} timezone - Timezone of the location
 * @return {HTMLElement} Hourly forecast list
 */
function hourlyForecastList(hourlyForecastData, units, timezone) {
  const hourlyForecastList = document.createElement("ul");
  hourlyForecastList.classList.add("forecast-hourly");
  hourlyForecastList.id = "forecast-hourly";
  let temperatureDisplayUnit;
  if (units === "imperial") {
    temperatureDisplayUnit = " °F";
  } else {
    temperatureDisplayUnit = " °C";
  }
  for (let i = 0; i < 24; i++) {
    const hourlyForecastItem = document.createElement("li");
    const hourlyForecastItemTime = document.createElement("div");
    const hourlyForecastItemTemp = document.createElement("div");
    const hourlyForecastItemIcon = document.createElement("img");
    hourlyForecastItem.classList.add("forecast-hourly-item");
    hourlyForecastItemTime.classList.add("forecast-hourly-item-time");
    hourlyForecastItemTemp.classList.add("forecast-hourly-item-temp");
    hourlyForecastItemTemp.id = "temperatureDisplay";
    hourlyForecastItemIcon.classList.add("forecast-hourly-item-icon");
    hourlyForecastItem.dataset.index = i;
    hourlyForecastItemTime.textContent = (0,___WEBPACK_IMPORTED_MODULE_0__.convertUnixTimestamp)(hourlyForecastData[i].dt).toLocaleString("en-US", {
      hour: "numeric",
      hour12: true,
      timeZone: timezone
    });
    hourlyForecastItemTemp.textContent = `${hourlyForecastData[i].temp.toFixed(1)}${temperatureDisplayUnit}`;
    hourlyForecastItemIcon.src = "https://openweathermap.org/img/w/" + hourlyForecastData[i].weather[0].icon + ".png";
    hourlyForecastItemIcon.alt = hourlyForecastData[i].weather[0].description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    hourlyForecastItem.appendChild(hourlyForecastItemTime);
    hourlyForecastItem.appendChild(hourlyForecastItemTemp);
    hourlyForecastItem.appendChild(hourlyForecastItemIcon);
    hourlyForecastList.appendChild(hourlyForecastItem);
  }
  for (let i = 0; i < 8; i++) {
    hourlyForecastList.children[i].classList.add("active");
  }
  return hourlyForecastList;
}

/**
 * Create the navigation dots based on the current forecast tab.
 * @param {number} numTabs Number of tabs active
 * @param {number} activeDotIndex Index of the active dot
 * @return {HTMLElement} Navigation dots
 */
function navigationDots(numTabs, activeDotIndex) {
  const navigationDots = document.createElement("div");
  const numDots = numTabs <= 7 ? 1 : 3;
  navigationDots.classList.add("forecast-navigationDots");
  navigationDots.id = "forecast-navigationDots";
  for (let i = 0; i < numDots; i++) {
    const navigationDotBtn = document.createElement("input");
    const navigationDotLabel = document.createElement("label");
    navigationDotBtn.classList.add("forecast-navigationDotBtn");
    navigationDotBtn.id = "forecast-navigationDot-" + i;
    navigationDotBtn.type = "radio";
    navigationDotBtn.name = "navigation";
    navigationDotBtn.value = i;
    navigationDotLabel.classList.add("forecast-navigationDotLabel", "sweepToRight");
    navigationDotLabel.htmlFor = "forecast-navigationDot-" + i;
    if (numDots > 1) {
      navigationDotBtn.addEventListener("change", e => {
        const navIndex = parseInt(e.target.value);
        const forecastHourly = document.getElementById("forecast-hourly");
        for (let i = 0; i < forecastHourly.children.length; i++) {
          forecastHourly.children[i].classList.remove("active");
        }
        for (let i = 0; i < 8; i++) {
          forecastHourly.children[i + navIndex * 8].classList.add("active");
        }
      });
    }
    navigationDots.appendChild(navigationDotBtn);
    navigationDots.appendChild(navigationDotLabel);
  }
  navigationDots.children[activeDotIndex * 2].checked = true;
  return navigationDots;
}

/**
 * Re-render the navigation dots based on the current forecast tab.
 * @param {Number} numTabs Number of tabs active
 * @param {Number} activeDotIndex Index of the active dot
 * @return {void}
 */
function reRenderNavigationDots(numTabs, activeDotIndex) {
  const previousNavigationDots = document.getElementById("forecast-navigationDots");
  const newNavigationDots = navigationDots(numTabs, activeDotIndex);
  previousNavigationDots.parentNode.replaceChild(newNavigationDots, previousNavigationDots);
}

/***/ }),

/***/ 256:
/*!************************************!*\
  !*** ./src/components/pageLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad),
/* harmony export */   "reRenderMain": () => (/* binding */ reRenderMain)
/* harmony export */ });
/* harmony import */ var _weatherInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherInfo */ 436);
/* harmony import */ var _weatherDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherDetails */ 3);
/* harmony import */ var _searchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchBox */ 587);
/* harmony import */ var _forecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast */ 131);
/* harmony import */ var _assets_favicon_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/favicon/apple-touch-icon.png */ 281);
/* harmony import */ var _assets_favicon_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/favicon/favicon-32x32.png */ 750);
/* harmony import */ var _assets_favicon_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/favicon/favicon-16x16.png */ 231);
/* harmony import */ var _assets_favicon_site_webmanifest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/favicon/site.webmanifest */ 734);
/* harmony import */ var _assets_favicon_safari_pinned_tab_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/favicon/safari-pinned-tab.svg */ 969);
/* harmony import */ var _assets_favicon_browserconfig_xml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/favicon/browserconfig.xml */ 162);
/* harmony import */ var _assets_favicon_browserconfig_xml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_favicon_browserconfig_xml__WEBPACK_IMPORTED_MODULE_9__);
/**
 * @fileoverview Initialize page load
 * @author Thinh Nguyen
 * @version 1.0.0
 */












// import shortcutIconHref from "../assets/favicon/favicon.ico";


/**
 * Add favicons to the page.
 * @return {void}
 */
function loadFavicons() {
  const appleTouchIcon = document.createElement("link");
  const favicon32 = document.createElement("link");
  const favicon16 = document.createElement("link");
  const manifest = document.createElement("link");
  // const shortcutIcon = document.createElement("link");
  const maskIcon = document.createElement("link");
  const msTileColor = document.createElement("meta");
  const msConfig = document.createElement("meta");
  const themeColor = document.createElement("meta");
  appleTouchIcon.rel = "apple-touch-icon";
  appleTouchIcon.sizes = "180x180";
  appleTouchIcon.href = _assets_favicon_apple_touch_icon_png__WEBPACK_IMPORTED_MODULE_4__;
  favicon32.rel = "icon";
  favicon32.type = "image/png";
  favicon32.sizes = "32x32";
  favicon32.href = _assets_favicon_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_5__;
  favicon16.rel = "icon";
  favicon16.type = "image/png";
  favicon16.sizes = "16x16";
  favicon16.href = _assets_favicon_favicon_16x16_png__WEBPACK_IMPORTED_MODULE_6__;
  manifest.rel = "manifest";
  manifest.href = _assets_favicon_site_webmanifest__WEBPACK_IMPORTED_MODULE_7__;
  // shortcutIcon.rel = "shortcut icon";
  // shortcutIcon.href = shortcutIconHref;
  maskIcon.rel = "mask-icon";
  maskIcon.href = _assets_favicon_safari_pinned_tab_svg__WEBPACK_IMPORTED_MODULE_8__;
  maskIcon.color = "#5bbad5";
  msTileColor.name = "msapplication-TileColor";
  msTileColor.content = "#9f00a7";
  msConfig.name = "msapplication-config";
  msConfig.content = (_assets_favicon_browserconfig_xml__WEBPACK_IMPORTED_MODULE_9___default());
  themeColor.name = "theme-color";
  themeColor.content = "#ffffff";
  document.head.appendChild(appleTouchIcon);
  document.head.appendChild(favicon32);
  document.head.appendChild(favicon16);
  document.head.appendChild(manifest);
  document.head.appendChild(maskIcon);
  // document.head.appendChild(shortcutIcon);
  document.head.appendChild(msTileColor);
  document.head.appendChild(msConfig);
  document.head.appendChild(themeColor);
}

/**
 * Create the main component.
 * @return {HTMLElement} Main element
 */
function main() {
  const main = document.createElement("main");
  main.classList.add("wideScreenWrapper");
  main.id = "wideScreenWrapper";
  return main;
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
  footerText.textContent = "Copyright © " + new Date().getFullYear() + " FelixNgFender";
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
 * Load Google Fonts icons.
 * @return {void}
 */
function loadGoogleIcons() {
  const icons = document.createElement("link");
  icons.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
  icons.rel = "stylesheet";
  document.head.appendChild(icons);
}

/**
 * Initialize page load.
 * @param {Object} coordsData Coordinates data
 * @param {Object} weatherData Weather data
 * @param {string} units Units to display
 * @return {void}
 * @exports
 */
function pageLoad(coordsData, weatherData, units) {
  const content = document.getElementById("content");
  const wideScreenWrapper = main();
  content.appendChild(wideScreenWrapper);
  wideScreenWrapper.appendChild((0,_weatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData.current, units));
  wideScreenWrapper.appendChild((0,_searchBox__WEBPACK_IMPORTED_MODULE_2__["default"])(coordsData, weatherData.current.dt, weatherData.timezone));
  wideScreenWrapper.appendChild((0,_weatherDetails__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData.current, units));
  wideScreenWrapper.appendChild((0,_forecast__WEBPACK_IMPORTED_MODULE_3__["default"])(weatherData.daily, weatherData.hourly, units, weatherData.timezone));
  content.appendChild(footer());
  loadFavicons();
  loadGoogleIcons();
}

/**
 * Re-render the main component with updated data.
 * @param {Object} coordsData Coordinates data
 * @param {Object} weatherData Weather data
 * @param {string} units Units to display
 * @return {void}
 * @exports
 */
function reRenderMain(coordsData, weatherData, units) {
  const wideScreenWrapper = document.getElementById("wideScreenWrapper");
  wideScreenWrapper.innerHTML = "";
  wideScreenWrapper.appendChild((0,_weatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData.current, units));
  wideScreenWrapper.appendChild((0,_searchBox__WEBPACK_IMPORTED_MODULE_2__["default"])(coordsData, weatherData.current.dt, weatherData.timezone));
  wideScreenWrapper.appendChild((0,_weatherDetails__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData.current, units));
  wideScreenWrapper.appendChild((0,_forecast__WEBPACK_IMPORTED_MODULE_3__["default"])(weatherData.daily, weatherData.hourly, units, weatherData.timezone));
}

/***/ }),

/***/ 587:
/*!*************************************!*\
  !*** ./src/components/searchBox.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchBoxComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ 352);
/**
 * @fileoverview The search box component
 * @author Thinh Nguyen
 * @version 1.0.0
 */





/**
 * Create the search box component.
 * @param {Object} coordsData - Coordinates data
 * @param {Number} currentUnixTimestamp - Current unix timestamp
 * @param {string} timezone - Timezone of the location
 * @return {HTMLElement} Search box component
 * @exports
 */
function searchBoxComponent(coordsData, currentUnixTimestamp, timezone) {
  const searchBox = document.createElement("section");
  const searchForm = document.createElement("form");
  const icon = document.createElement("label");
  const searchInput = document.createElement("input");
  const error = document.createElement("div");
  const location = document.createElement("div");
  const date = document.createElement("div");
  const localTime = document.createElement("div");
  searchBox.classList.add("searchBox");
  searchBox.classList.add("frostedGlass");
  searchForm.id = "searchBox-form";
  searchForm.classList.add("searchBox-form");
  icon.classList.add("material-symbols-outlined", "searchBox-icon", "size-20");
  icon.htmlFor = "searchBox-input-city";
  searchInput.classList.add("searchBox-input");
  searchInput.id = "searchBox-input-city";
  searchInput.name = "city";
  searchInput.type = "text";
  searchInput.placeholder = "Search for a city";
  searchInput.required = true;
  searchInput.spellcheck = false;
  searchInput.autocomplete = "off";
  error.classList.add("searchBox-error");
  error.id = "searchBox-error";
  location.classList.add("searchBox-location");
  date.classList.add("searchBox-dateTime");
  localTime.classList.add("searchBox-localTime");
  icon.textContent = "search";
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    (0,___WEBPACK_IMPORTED_MODULE_0__.updateMain)();
  });
  error.textContent = "Invalid city name. Please try again.";
  location.textContent = `${coordsData.name}, ${coordsData.country}`;
  const currentDateTime = (0,___WEBPACK_IMPORTED_MODULE_0__.convertUnixTimestamp)(currentUnixTimestamp, timezone);
  date.textContent = `${currentDateTime.toLocaleString("en-US", {
    timeZone: timezone,
    weekday: "long"
  })}, ${currentDateTime.getDate()} ${currentDateTime.toLocaleString("en-US", {
    timeZone: timezone,
    month: "long"
  })} ${currentDateTime.getFullYear()}`;
  localTime.textContent = `${currentDateTime.toLocaleTimeString("en-US", {
    timeZone: timezone
  })}`;
  setInterval(() => {
    currentDateTime.setSeconds(currentDateTime.getSeconds() + 1);
    localTime.textContent = `${currentDateTime.toLocaleTimeString("en-US", {
      timeZone: timezone
    })}`;
  }, 1000);
  searchForm.appendChild(icon);
  searchForm.appendChild(searchInput);
  searchBox.appendChild(searchForm);
  searchBox.appendChild(error);
  searchBox.appendChild(location);
  searchBox.appendChild(date);
  searchBox.appendChild(localTime);
  return searchBox;
}

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** ./src/components/weatherDetails.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherDetails)
/* harmony export */ });
/**
 * @fileoverview The weather details component
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/**
 * Create the weather details component.
 * @param {Object} currentWeatherData - Current weather data
 * @param {string} units - Units to display
 * @return {HTMLElement} Weather details component
 * @exports
 */
function weatherDetails(currentWeatherData, units) {
  const weatherDetailsList = document.createElement("ul");
  weatherDetailsList.classList.add("weatherDetails");
  weatherDetailsList.classList.add("frostedGlass");
  for (let i = 0; i < 4; i++) {
    const weatherDetailsItem = document.createElement("li");
    const weatherDetailsItemIcon = document.createElement("span");
    const weatherDetailsItemLabel = document.createElement("span");
    const weatherDetailsItemValue = document.createElement("span");
    weatherDetailsItem.classList.add("weatherDetails-item");
    weatherDetailsItemIcon.classList.add("material-symbols-outlined", "weatherDetails-icon", "size-20");
    if (i === 0) {
      weatherDetailsItemValue.id = "temperatureDisplay";
    }
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
  weatherDetailsIcons[2].textContent = "cloudy";
  weatherDetailsIcons[3].textContent = "air";
  const weatherDetailsLabels = weatherDetailsList.querySelectorAll(".weatherDetails-label");
  weatherDetailsLabels[0].textContent = "Feels Like";
  weatherDetailsLabels[1].textContent = "Humidity";
  weatherDetailsLabels[2].textContent = "Clouds";
  weatherDetailsLabels[3].textContent = "Wind Speed";
  let temperatureDisplayUnit;
  let windSpeedDisplayUnit;
  if (units === "imperial") {
    temperatureDisplayUnit = " °F";
    windSpeedDisplayUnit = " mph";
  } else {
    temperatureDisplayUnit = " °C";
    windSpeedDisplayUnit = " km/h";
  }
  const weatherDetailsValues = weatherDetailsList.querySelectorAll(".weatherDetails-value");
  weatherDetailsValues[0].textContent = `${currentWeatherData.feels_like.toFixed(1)}${temperatureDisplayUnit}`;
  weatherDetailsValues[1].textContent = `${currentWeatherData.humidity}%`;
  weatherDetailsValues[2].textContent = `${currentWeatherData.clouds}%`;
  weatherDetailsValues[3].textContent = `${currentWeatherData.wind_speed.toFixed(1)}${windSpeedDisplayUnit}`;
  weatherDetailsValues[3].id = "windSpeedDisplay";
  return weatherDetailsList;
}

/***/ }),

/***/ 436:
/*!***************************************!*\
  !*** ./src/components/weatherInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weatherInfo)
/* harmony export */ });
/**
 * @fileoverview The weather info component
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/**
 * Create the weather info component.
 * @param {Object} currentWeatherData - The current weather data
 * @param {string} units - Units to display
 * @return {HTMLElement} Weather info component
 * @exports
 */
function weatherInfo(currentWeatherData, units) {
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
  const weatherDescription = currentWeatherData.weather[0].description.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  description.textContent = weatherDescription;
  if (units === "imperial") {
    temperature.textContent = `${currentWeatherData.temp.toFixed(1)} °F`;
    unitChangeBtn.textContent = "Display °C";
  } else {
    temperature.textContent = `${currentWeatherData.temp.toFixed(1)} °C`;
    unitChangeBtn.textContent = "Display °F";
  }
  unitChangeBtn.type = "button";
  unitChangeBtn.id = "unitChangeBtn";
  unitChangeBtn.addEventListener("click", () => {
    const temperatureDisplays = document.querySelectorAll("#temperatureDisplay");
    const windSpeedDisplay = document.getElementById("windSpeedDisplay");
    const unitChangeBtn = document.getElementById("unitChangeBtn");
    if (unitChangeBtn.textContent === "Display °F") {
      temperatureDisplays.forEach(temperatureDisplay => {
        const temperature = temperatureDisplay.textContent.split(" ")[0];
        temperatureDisplay.textContent = `${(temperature * 9 / 5 + 32).toFixed(1)} °F`;
      });
      windSpeedDisplay.textContent = `${(windSpeedDisplay.textContent.split(" ")[0] * 2.237).toFixed(1)} mph`;
      unitChangeBtn.textContent = "Display °C";
    } else {
      temperatureDisplays.forEach(temperatureDisplay => {
        const temperature = temperatureDisplay.textContent.split(" ")[0];
        temperatureDisplay.textContent = `${((temperature - 32) * (5 / 9)).toFixed(1)} °C`;
      });
      windSpeedDisplay.textContent = `${(windSpeedDisplay.textContent.split(" ")[0] / 2.237).toFixed(1)} km/h`;
      unitChangeBtn.textContent = "Display °F";
    }
  });
  icon.src = `https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}.png`;
  icon.alt = weatherDescription;
  weatherInfo.appendChild(description);
  weatherInfo.appendChild(temperature);
  weatherInfo.appendChild(unitChangeBtn);
  weatherInfo.appendChild(icon);
  return weatherInfo;
}

/***/ }),

/***/ 352:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertUnixTimestamp": () => (/* binding */ convertUnixTimestamp),
/* harmony export */   "updateMain": () => (/* binding */ updateMain)
/* harmony export */ });
/* harmony import */ var _components_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pageLoad */ 256);
/* harmony import */ var _components_fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/fetchData */ 399);
/* harmony import */ var _styles_styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles-reset.css */ 69);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.css */ 441);
/**
 * @fileoverview Weather app
 * @author Thinh Nguyen
 * @version 1.0.0
 */







const defaultLocation = "Boston";
const defaultUnits = "metric";

/**
 * Convert Unix timestamp to Date object
 * @param {Number} unixTimestamp - Unix timestamp
 * @return {Date} Date object
 */
function convertUnixTimestamp(unixTimestamp) {
  const dateObj = new Date(unixTimestamp * 1000);
  return dateObj;
}

/**
 * Fetch default weather data.
 * @return {Object} Default weather data
 */
async function fetchDefaultData() {
  const defaultCoordsUrl = (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.buildCoordsUrl)(defaultLocation);
  const defaultCoords = await (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.getCoords)(defaultCoordsUrl);
  const defaultWeatherUrl = (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.buildWeatherUrl)(defaultCoords, defaultUnits);
  const defaultWeatherData = await (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.getWeather)(defaultWeatherUrl);
  return {
    coords: defaultCoords,
    weatherData: defaultWeatherData
  };
}

/**
 * Initialize the app.
 * @return {void}
 */
async function startApp() {
  const body = document.querySelector("body");
  body.id = "content";
  try {
    const {
      coords,
      weatherData
    } = await fetchDefaultData();
    (0,_components_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])(coords, weatherData, defaultUnits);
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
  const coordsUrl = (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.buildCoordsUrl)(location);
  const coords = await (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.getCoords)(coordsUrl);
  const weatherUrl = (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.buildWeatherUrl)(coords, defaultUnits);
  const weatherData = await (0,_components_fetchData__WEBPACK_IMPORTED_MODULE_1__.getWeather)(weatherUrl);
  return {
    coords,
    weatherData
  };
}

/**
 * Update the main content when user submits the search box form.
 * @return {void}
 * @exports
 */
async function updateMain() {
  try {
    const {
      coords,
      weatherData
    } = await fetchNewData();
    (0,_components_pageLoad__WEBPACK_IMPORTED_MODULE_0__.reRenderMain)(coords, weatherData, defaultUnits);
  } catch (error) {
    console.log(error);
    const form = document.getElementById("searchBox-form");
    const searchBoxError = document.getElementById("searchBox-error");
    form.reset();
    searchBoxError.classList.add("active");
  }
}
startApp();

/***/ }),

/***/ 186:
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles-reset.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/styles-reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 772:
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ 667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/CuteFont-Regular.ttf */ 950), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background.jpg */ 265), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #f9d342; /* yellow */\n  --secondary-color: #ff7c60; /* orange-red */\n  --tertiary-color: #7cff6a; /* green */\n  --accent-color: #6a7cff; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #ffffff; /* white */\n  --text-color: #d1d1d1; /* light gray */\n  --link-color: #ff7c60; /* same as secondary-color */\n  --hover-color: #7cff6a; /* same as tertiary-color */\n  --transparent: transparent;\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 250px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n  --sm-breakpoint: 768px;\n  --forecast-height-sm: 550px;\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  \n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: var(--transparent);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  padding: var(--spacing-xs) var(--spacing-sm);\n  outline: none;\n  cursor: pointer;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: var(--transparent);\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: var(--transparent);\n  color: var(--text-color);\n}\n\n.searchBox-error {\n  display: none;\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n}\n\n.searchBox-error.active {\n  display: block;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forecast-btnWrapper {\n  width: 100%;\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: none;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.forecast-daily.active {\n  display: grid;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-hourly {\n  display: none;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.forecast-hourly.active {\n  display: grid;\n}\n\n.forecast-hourly-item {\n  display: none;\n}\n\n.forecast-hourly-item.active {\n  display: block;\n}\n\n.forecast-hourly-item-time {\n  font-size: 2rem;\n}\n\n.forecast-hourly-item-temp {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-navigationDots {\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDotBtn {\n  display: none;\n}\n\n.forecast-navigationDotLabel {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-navigationDotBtn:checked + .forecast-navigationDotLabel {\n  background-color: var(--hover-color);\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg)\n    brightness(113%) contrast(108%);\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n/* for screens smaller than 768px */\n@media screen and (max-width: 768px) {\n  body {\n    font-size: 1.5rem;\n  }\n  .wideScreenWrapper {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .weatherInfo-unitChangeBtn {\n    font-size: 1rem;\n  }\n  .weatherInfo-temperature {\n    font-size: 1.5rem;\n  }\n  .searchBox-input {\n    font-size: 1.5rem;\n  }\n  .weatherDetails {\n    font-size: 1rem;\n  }\n  .weatherDetails-value {\n    font-size: 1.5rem;\n  }\n  .forecast {\n    height: var(--forecast-height-sm);\n  }\n  .forecast-label {\n    font-size: 1rem;\n  }\n  .forecast-daily {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-hourly {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-daily-item-date {\n    font-size: 1.5rem;\n  }\n  .forecast-daily-item-tempHi {\n    font-size: 1rem;\n  }\n  .forecast-daily-item-tempLo {\n    font-size: 0.9rem;\n  }\n  .forecast-hourly-item-time {\n    font-size: 1.5rem;\n  }\n  .forecast-hourly-item-temp {\n    font-size: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-color: #f9d342; /* yellow */\n  --secondary-color: #ff7c60; /* orange-red */\n  --tertiary-color: #7cff6a; /* green */\n  --accent-color: #6a7cff; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #ffffff; /* white */\n  --text-color: #d1d1d1; /* light gray */\n  --link-color: #ff7c60; /* same as secondary-color */\n  --hover-color: #7cff6a; /* same as tertiary-color */\n  --transparent: transparent;\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 250px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n  --sm-breakpoint: 768px;\n  --forecast-height-sm: 550px;\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(\"../assets/fonts/CuteFont-Regular.ttf\");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-image: url(\"../assets/images/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  \n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: var(--transparent);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  padding: var(--spacing-xs) var(--spacing-sm);\n  outline: none;\n  cursor: pointer;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: var(--transparent);\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: var(--transparent);\n  color: var(--text-color);\n}\n\n.searchBox-error {\n  display: none;\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n}\n\n.searchBox-error.active {\n  display: block;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forecast-btnWrapper {\n  width: 100%;\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: none;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.forecast-daily.active {\n  display: grid;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-hourly {\n  display: none;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.forecast-hourly.active {\n  display: grid;\n}\n\n.forecast-hourly-item {\n  display: none;\n}\n\n.forecast-hourly-item.active {\n  display: block;\n}\n\n.forecast-hourly-item-time {\n  font-size: 2rem;\n}\n\n.forecast-hourly-item-temp {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-navigationDots {\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDotBtn {\n  display: none;\n}\n\n.forecast-navigationDotLabel {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-navigationDotBtn:checked + .forecast-navigationDotLabel {\n  background-color: var(--hover-color);\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg)\n    brightness(113%) contrast(108%);\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n/* for screens smaller than 768px */\n@media screen and (max-width: 768px) {\n  body {\n    font-size: 1.5rem;\n  }\n  .wideScreenWrapper {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .weatherInfo-unitChangeBtn {\n    font-size: 1rem;\n  }\n  .weatherInfo-temperature {\n    font-size: 1.5rem;\n  }\n  .searchBox-input {\n    font-size: 1.5rem;\n  }\n  .weatherDetails {\n    font-size: 1rem;\n  }\n  .weatherDetails-value {\n    font-size: 1.5rem;\n  }\n  .forecast {\n    height: var(--forecast-height-sm);\n  }\n  .forecast-label {\n    font-size: 1rem;\n  }\n  .forecast-daily {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-hourly {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-daily-item-date {\n    font-size: 1.5rem;\n  }\n  .forecast-daily-item-tempHi {\n    font-size: 1rem;\n  }\n  .forecast-daily-item-tempLo {\n    font-size: 0.9rem;\n  }\n  .forecast-hourly-item-time {\n    font-size: 1.5rem;\n  }\n  .forecast-hourly-item-temp {\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 537:
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 69:
/*!*************************************!*\
  !*** ./src/styles/styles-reset.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles-reset.css */ 186);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 441:
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ 772);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 379:
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 162:
/*!**********************************************!*\
  !*** ./src/assets/favicon/browserconfig.xml ***!
  \**********************************************/
/***/ ((module) => {

module.exports = {"browserconfig":{"msapplication":[{"tile":[{"square150x150logo":[{"$":{"src":"/assets/favicon/mstile-150x150.png"}}],"TileColor":["#9f00a7"]}]}]}}

/***/ }),

/***/ 734:
/*!*********************************************!*\
  !*** ./src/assets/favicon/site.webmanifest ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7823ed35acd4e1fc9723.webmanifest";

/***/ }),

/***/ 281:
/*!*************************************************!*\
  !*** ./src/assets/favicon/apple-touch-icon.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bc14349188238c043bd6.png";

/***/ }),

/***/ 231:
/*!**********************************************!*\
  !*** ./src/assets/favicon/favicon-16x16.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "50a16a8dd1e4e66d2a49.png";

/***/ }),

/***/ 750:
/*!**********************************************!*\
  !*** ./src/assets/favicon/favicon-32x32.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c2654f4f6b661041dc4.png";

/***/ }),

/***/ 969:
/*!**************************************************!*\
  !*** ./src/assets/favicon/safari-pinned-tab.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "990e34271c5236356ac3.svg";

/***/ }),

/***/ 950:
/*!***********************************************!*\
  !*** ./src/assets/fonts/CuteFont-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e1d48bd56aaa550cadce.ttf";

/***/ }),

/***/ 265:
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6edbef4f5a8ee6f1ac3a.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(352));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxN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dGhlci8uL3NyYy9jb21wb25lbnRzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckluZm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzcz9hMDIzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2Fzc2V0cy9mYXZpY29uL2Jyb3dzZXJjb25maWcueG1sIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBGZXRjaCBhcHAgZGF0YSBmcm9tIEFQSXNcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEdldCBsb2NhdGlvbiBmcm9tIHRoZSBzZWFyY2ggYm94IGZvcm1cbiAqIEByZXR1cm4ge1N0cmluZ30gVXNlciBpbnB1dCBvZiB0aGUgbG9jYXRpb25cbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbkZyb21Gb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCb3gtZm9ybVwiKTtcbiAgcmV0dXJuIGZvcm0uY2l0eS52YWx1ZTtcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZSB1c2VyIGlucHV0LlxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFVzZXIgaW5wdXRcbiAqIEByZXR1cm4ge1N0cmluZ30gU2FuaXRpemVkIGlucHV0XG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplSW5wdXQoaW5wdXQpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJldHVybiBpbnB1dFxuICAgIC5yZXBsYWNlKC8oXFxzKyR8XlxccyspL2csIFwiXCIpIC8vIHJlbW92ZSB3aGl0ZXNwYWNlIGZyb20gYmVnaW5pbmcgYW5kIGVuZCBvZiBzdHJpbmdcbiAgICAucmVwbGFjZSgvKCxcXHMrKS9nLCBcIixcIikgLy8gcmVtb3ZlIGFueSB3aGl0ZSBzcGFjZSB0aGF0IGZvbGxvd3MgYSBjb21tYVxuICAgIC5yZXBsYWNlKC8oXFxzKywpL2csIFwiLFwiKSAvLyByZW1vdmUgYW55IHdoaXRlIHNwYWNlIHRoYXQgcHJlY2VlZHMgYSBjb21tYVxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiK1wiKTsgLy8gcmVwbGFjZSBhbnkgcmVtYWluaW5nIHdoaXRlIHNwYWNlIHdpdGggKywgc28gaXQgd29ya3MgaW4gYXBpIGNhbGxcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgQVBJIGVuZHBvaW50IHRvIGZldGNoIGNvb3JkaW5hdGVzIGZyb20uXG4gKiBAcGFyYW0ge1N0cmluZ30gY2l0eU5hbWUgQ2l0eSBuYW1lXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEFQSSBlbmRwb2ludCB0byBmZXRjaCBjb29yZGluYXRlcyBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENvb3Jkc1VybChjaXR5TmFtZSkge1xuICBjb25zdCBzYW5pdGl6ZWRDaXR5TmFtZSA9IHNhbml0aXplSW5wdXQoY2l0eU5hbWUpO1xuICByZXR1cm4gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7c2FuaXRpemVkQ2l0eU5hbWV9JmxpbWl0PTEmYXBwaWQ9MjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRgO1xufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBBUEkgZW5kcG9pbnQgdG8gZmV0Y2ggd2VhdGhlciBpbmZvcm1hdGlvbiBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IGNvb3JkaW5hdGVzIENvb3JkaW5hdGVzIGluZm9ybWF0aW9uIChsYXQsIGxvbiwgbmFtZSwgY291bnRyeSlcbiAqIEBwYXJhbSB7U3RyaW5nfSB1bml0cyBVbml0cyB0byBkaXNwbGF5IChcImltcGVyaWFsXCIvXCJtZXRyaWNcIilcbiAqIEByZXR1cm4ge1N0cmluZ30gQVBJIGVuZHBvaW50IHRvIGZldGNoIHdlYXRoZXIgaW5mb3JtYXRpb24gZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRXZWF0aGVyVXJsKGNvb3JkaW5hdGVzLCB1bml0cykge1xuICByZXR1cm4gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2Nvb3JkaW5hdGVzLmxhdH0mbG9uPSR7Y29vcmRpbmF0ZXMubG9ufSZleGNsdWRlPW1pbnV0ZWx5LGFsZXJ0cyZ1bml0cz0ke3VuaXRzfSZhcHBpZD0yMGY3NjMyZmZjMmMwMjI2NTRlNDA5M2M2OTQ3YjRmNGA7XG59XG5cbi8qKlxuICogR2V0IGNvb3JkaW5hdGVzIGluZm9ybWF0aW9uIGZyb20gdGhlIE9wZW5XZWF0aGVyTWFwIEFQSS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgQVBJIGVuZHBvaW50IHRvIGZldGNoIGRhdGEgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBDb29yZGluYXRlcyBpbmZvcm1hdGlvbiAobGF0LCBsb24sIG5hbWUsIGNvdW50cnkpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHModXJsKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgY29vcmRzRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgeyBsYXQsIGxvbiwgbmFtZSwgY291bnRyeSB9ID0gY29vcmRzRGF0YVswXTtcbiAgY29uc3QgY29vcmQgPSB7IGxhdCwgbG9uLCBuYW1lLCBjb3VudHJ5IH07XG4gIHJldHVybiBjb29yZDtcbn1cblxuLyoqXG4gKiBHZXQgd2VhdGhlciBpbmZvcm1hdGlvbiBmcm9tIHRoZSBPcGVuV2VhdGhlck1hcCBBUEkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIEFQSSBlbmRwb2ludCB0byBmZXRjaCBkYXRhIGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gV2VhdGhlciBpbmZvcm1hdGlvblxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcih1cmwpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIGZvcmVjYXN0IGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbnZlcnRVbml4VGltZXN0YW1wIH0gZnJvbSBcIi4uXCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBmb3JlY2FzdCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gZGFpbHlGb3JlY2FzdERhdGEgLSBEYWlseSBmb3JlY2FzdCBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gaG91cmx5Rm9yZWNhc3REYXRhIC0gSG91cmx5IGZvcmVjYXN0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSB1bml0cyAtIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aW1lem9uZSAtIFRpbWV6b25lIG9mIHRoZSBsb2NhdGlvblxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEZvcmVjYXN0IGNvbXBvbmVudFxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9yZWNhc3RDb21wb25lbnQoXG4gIGRhaWx5Rm9yZWNhc3REYXRhLFxuICBob3VybHlGb3JlY2FzdERhdGEsXG4gIHVuaXRzLFxuICB0aW1lem9uZVxuKSB7XG4gIGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGZvcmVjYXN0QnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvcmVjYXN0RGFpbHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGZvcmVjYXN0RGFpbHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZm9yZWNhc3RIb3VybHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRhaWx5Rm9yZWNhc3RDb21wb25lbnQgPSBkYWlseUZvcmVjYXN0TGlzdChcbiAgICBkYWlseUZvcmVjYXN0RGF0YSxcbiAgICB1bml0cyxcbiAgICB0aW1lem9uZVxuICApO1xuICBjb25zdCBob3VybHlGb3JlY2FzdENvbXBvbmVudCA9IGhvdXJseUZvcmVjYXN0TGlzdChcbiAgICBob3VybHlGb3JlY2FzdERhdGEsXG4gICAgdW5pdHMsXG4gICAgdGltZXpvbmVcbiAgKTtcbiAgY29uc3QgbmF2aWdhdGlvbiA9IG5hdmlnYXRpb25Eb3RzKDcsIDApO1xuXG4gIGZvcmVjYXN0LmlkID0gXCJmb3JlY2FzdFwiO1xuICBmb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RcIiwgXCJmcm9zdGVkR2xhc3NcIik7XG4gIGZvcmVjYXN0QnRuV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtYnRuV3JhcHBlclwiKTtcbiAgZm9yZWNhc3REYWlseUJ0bi5pZCA9IFwiZm9yZWNhc3QtZGFpbHlCdG5cIjtcbiAgZm9yZWNhc3REYWlseUJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtYnRuXCIpO1xuICBmb3JlY2FzdERhaWx5QnRuLnR5cGUgPSBcInJhZGlvXCI7XG4gIGZvcmVjYXN0RGFpbHlCdG4ubmFtZSA9IFwiZm9yZWNhc3RcIjtcbiAgZm9yZWNhc3REYWlseUJ0bi52YWx1ZSA9IFwiZGFpbHlcIjtcbiAgZm9yZWNhc3REYWlseUJ0bi5jaGVja2VkID0gdHJ1ZTtcbiAgZm9yZWNhc3REYWlseUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1sYWJlbFwiLCBcInN3ZWVwVG9SaWdodFwiKTtcbiAgZm9yZWNhc3REYWlseUxhYmVsLmh0bWxGb3IgPSBcImZvcmVjYXN0LWRhaWx5QnRuXCI7XG4gIGZvcmVjYXN0SG91cmx5QnRuLmlkID0gXCJmb3JlY2FzdC1ob3VybHlCdG5cIjtcbiAgZm9yZWNhc3RIb3VybHlCdG4uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWJ0blwiKTtcbiAgZm9yZWNhc3RIb3VybHlCdG4udHlwZSA9IFwicmFkaW9cIjtcbiAgZm9yZWNhc3RIb3VybHlCdG4ubmFtZSA9IFwiZm9yZWNhc3RcIjtcbiAgZm9yZWNhc3RIb3VybHlCdG4udmFsdWUgPSBcImhvdXJseVwiO1xuICBmb3JlY2FzdEhvdXJseUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1sYWJlbFwiLCBcInN3ZWVwVG9SaWdodFwiKTtcbiAgZm9yZWNhc3RIb3VybHlMYWJlbC5odG1sRm9yID0gXCJmb3JlY2FzdC1ob3VybHlCdG5cIjtcblxuICBmb3JlY2FzdERhaWx5TGFiZWwudGV4dENvbnRlbnQgPSBcIkRhaWx5XCI7XG4gIGZvcmVjYXN0SG91cmx5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhvdXJseVwiO1xuXG4gIGZvcmVjYXN0RGFpbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0RGFpbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0LWRhaWx5XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdC1ob3VybHlcIik7XG4gICAgZm9yZWNhc3REYWlseS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGZvcmVjYXN0SG91cmx5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgcmVSZW5kZXJOYXZpZ2F0aW9uRG90cyg3LCAwKTtcbiAgfSk7XG5cbiAgZm9yZWNhc3RIb3VybHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGZvcmVjYXN0RGFpbHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0LWRhaWx5XCIpO1xuICAgIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdC1ob3VybHlcIik7XG4gICAgY29uc3QgZmlyc3RBY3RpdmVGb3JlY2FzdEluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmZvcmVjYXN0LWhvdXJseS1pdGVtLmFjdGl2ZVwiXG4gICAgKS5kYXRhc2V0LmluZGV4O1xuICAgIGZvcmVjYXN0RGFpbHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBmb3JlY2FzdEhvdXJseS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHJlUmVuZGVyTmF2aWdhdGlvbkRvdHMoMjQsIE1hdGguZmxvb3IoZmlyc3RBY3RpdmVGb3JlY2FzdEluZGV4IC8gOCkpO1xuICB9KTtcblxuICBmb3JlY2FzdEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYWlseUJ0bik7XG4gIGZvcmVjYXN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdERhaWx5TGFiZWwpO1xuICBmb3JlY2FzdEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RIb3VybHlCdG4pO1xuICBmb3JlY2FzdEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RIb3VybHlMYWJlbCk7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKGZvcmVjYXN0QnRuV3JhcHBlcik7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RDb21wb25lbnQpO1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdENvbXBvbmVudCk7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKG5hdmlnYXRpb24pO1xuXG4gIHJldHVybiBmb3JlY2FzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGRhaWx5IGZvcmVjYXN0IGxpc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gZGFpbHlGb3JlY2FzdERhdGEgLSBEYWlseSBmb3JlY2FzdCBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gdW5pdHMgLSBVbml0cyB0byBkaXNwbGF5XG4gKiBAcGFyYW0ge09iamVjdH0gdGltZXpvbmUgLSBUaW1lem9uZSBvZiB0aGUgbG9jYXRpb25cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBEYWlseSBmb3JlY2FzdCBsaXN0XG4gKi9cbmZ1bmN0aW9uIGRhaWx5Rm9yZWNhc3RMaXN0KGRhaWx5Rm9yZWNhc3REYXRhLCB1bml0cywgdGltZXpvbmUpIHtcbiAgY29uc3QgZGFpbHlGb3JlY2FzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGRhaWx5Rm9yZWNhc3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseVwiLCBcImFjdGl2ZVwiKTtcbiAgZGFpbHlGb3JlY2FzdExpc3QuaWQgPSBcImZvcmVjYXN0LWRhaWx5XCI7XG5cbiAgbGV0IHRlbXBlcmF0dXJlRGlzcGxheVVuaXQ7XG4gIGlmICh1bml0cyA9PT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdCA9IFwiIMKwRlwiO1xuICB9IGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlRGlzcGxheVVuaXQgPSBcIiDCsENcIjtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdEl0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbVRlbXBIaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wTG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBkYWlseUZvcmVjYXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHktaXRlbVwiKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbURhdGUuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRhaWx5LWl0ZW0tZGF0ZVwiKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBIaS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wSGlcIik7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wSGkuaWQgPSBcInRlbXBlcmF0dXJlRGlzcGxheVwiO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcExvLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBMb1wiKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBMby5pZCA9IFwidGVtcGVyYXR1cmVEaXNwbGF5XCI7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtLWljb25cIik7XG5cbiAgICBkYWlseUZvcmVjYXN0SXRlbURhdGUudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRpbWVzdGFtcChcbiAgICAgIGRhaWx5Rm9yZWNhc3REYXRhW2ldLmR0XG4gICAgKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJzaG9ydFwiLCB0aW1lWm9uZTogdGltZXpvbmUgfSk7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wSGkudGV4dENvbnRlbnQgPSBgJHtkYWlseUZvcmVjYXN0RGF0YVtcbiAgICAgIGlcbiAgICBdLnRlbXAubWF4LnRvRml4ZWQoMSl9JHt0ZW1wZXJhdHVyZURpc3BsYXlVbml0fWA7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wTG8udGV4dENvbnRlbnQgPSBgJHtkYWlseUZvcmVjYXN0RGF0YVtcbiAgICAgIGlcbiAgICBdLnRlbXAubWluLnRvRml4ZWQoMSl9JHt0ZW1wZXJhdHVyZURpc3BsYXlVbml0fWA7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1JY29uLnNyYyA9XG4gICAgICBcImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93L1wiICtcbiAgICAgIGRhaWx5Rm9yZWNhc3REYXRhW2ldLndlYXRoZXJbMF0uaWNvbiArXG4gICAgICBcIi5wbmdcIjtcbiAgICBkYWlseUZvcmVjYXN0SXRlbUljb24uYWx0ID0gZGFpbHlGb3JlY2FzdERhdGFbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAgIC5qb2luKFwiIFwiKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RJdGVtRGF0ZSk7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdEl0ZW1UZW1wSGkpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RJdGVtVGVtcExvKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SXRlbUljb24pO1xuXG4gICAgZGFpbHlGb3JlY2FzdExpc3QuYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdEl0ZW0pO1xuICB9XG5cbiAgcmV0dXJuIGRhaWx5Rm9yZWNhc3RMaXN0O1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgaG91cmx5IGZvcmVjYXN0IGxpc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gaG91cmx5Rm9yZWNhc3REYXRhIC0gSG91cmx5IGZvcmVjYXN0IGRhdGFcbiAqIEBwYXJhbSB7U3RyaW5nfSB1bml0cyAtIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB0aW1lem9uZSAtIFRpbWV6b25lIG9mIHRoZSBsb2NhdGlvblxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEhvdXJseSBmb3JlY2FzdCBsaXN0XG4gKi9cbmZ1bmN0aW9uIGhvdXJseUZvcmVjYXN0TGlzdChob3VybHlGb3JlY2FzdERhdGEsIHVuaXRzLCB0aW1lem9uZSkge1xuICBjb25zdCBob3VybHlGb3JlY2FzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGhvdXJseUZvcmVjYXN0TGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaG91cmx5XCIpO1xuICBob3VybHlGb3JlY2FzdExpc3QuaWQgPSBcImZvcmVjYXN0LWhvdXJseVwiO1xuXG4gIGxldCB0ZW1wZXJhdHVyZURpc3BsYXlVbml0O1xuICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikge1xuICAgIHRlbXBlcmF0dXJlRGlzcGxheVVuaXQgPSBcIiDCsEZcIjtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBDXCI7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3RJdGVtVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3RJdGVtVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3RJdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICBob3VybHlGb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWhvdXJseS1pdGVtXCIpO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbVRpbWUuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWhvdXJseS1pdGVtLXRpbWVcIik7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtVGVtcC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGVtcFwiKTtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1UZW1wLmlkID0gXCJ0ZW1wZXJhdHVyZURpc3BsYXlcIjtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1ob3VybHktaXRlbS1pY29uXCIpO1xuXG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbVRpbWUudGV4dENvbnRlbnQgPSBjb252ZXJ0VW5peFRpbWVzdGFtcChcbiAgICAgIGhvdXJseUZvcmVjYXN0RGF0YVtpXS5kdFxuICAgICkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgIGhvdXIxMjogdHJ1ZSxcbiAgICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICB9KTtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1UZW1wLnRleHRDb250ZW50ID0gYCR7aG91cmx5Rm9yZWNhc3REYXRhW2ldLnRlbXAudG9GaXhlZChcbiAgICAgIDFcbiAgICApfSR7dGVtcGVyYXR1cmVEaXNwbGF5VW5pdH1gO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbUljb24uc3JjID1cbiAgICAgIFwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvXCIgK1xuICAgICAgaG91cmx5Rm9yZWNhc3REYXRhW2ldLndlYXRoZXJbMF0uaWNvbiArXG4gICAgICBcIi5wbmdcIjtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1JY29uLmFsdCA9IGhvdXJseUZvcmVjYXN0RGF0YVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuXG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SXRlbVRpbWUpO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEl0ZW1UZW1wKTtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJdGVtSWNvbik7XG4gICAgaG91cmx5Rm9yZWNhc3RMaXN0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SXRlbSk7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgIGhvdXJseUZvcmVjYXN0TGlzdC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJseUZvcmVjYXN0TGlzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG5hdmlnYXRpb24gZG90cyBiYXNlZCBvbiB0aGUgY3VycmVudCBmb3JlY2FzdCB0YWIuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtVGFicyBOdW1iZXIgb2YgdGFicyBhY3RpdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBhY3RpdmVEb3RJbmRleCBJbmRleCBvZiB0aGUgYWN0aXZlIGRvdFxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE5hdmlnYXRpb24gZG90c1xuICovXG5mdW5jdGlvbiBuYXZpZ2F0aW9uRG90cyhudW1UYWJzLCBhY3RpdmVEb3RJbmRleCkge1xuICBjb25zdCBuYXZpZ2F0aW9uRG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG51bURvdHMgPSBudW1UYWJzIDw9IDcgPyAxIDogMztcblxuICBuYXZpZ2F0aW9uRG90cy5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdHNcIik7XG4gIG5hdmlnYXRpb25Eb3RzLmlkID0gXCJmb3JlY2FzdC1uYXZpZ2F0aW9uRG90c1wiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURvdHM7IGkrKykge1xuICAgIGNvbnN0IG5hdmlnYXRpb25Eb3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgbmF2aWdhdGlvbkRvdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hdmlnYXRpb25Eb3RCdG4uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3RCdG5cIik7XG4gICAgbmF2aWdhdGlvbkRvdEJ0bi5pZCA9IFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdC1cIiArIGk7XG4gICAgbmF2aWdhdGlvbkRvdEJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICAgIG5hdmlnYXRpb25Eb3RCdG4ubmFtZSA9IFwibmF2aWdhdGlvblwiO1xuICAgIG5hdmlnYXRpb25Eb3RCdG4udmFsdWUgPSBpO1xuICAgIG5hdmlnYXRpb25Eb3RMYWJlbC5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJmb3JlY2FzdC1uYXZpZ2F0aW9uRG90TGFiZWxcIixcbiAgICAgIFwic3dlZXBUb1JpZ2h0XCJcbiAgICApO1xuICAgIG5hdmlnYXRpb25Eb3RMYWJlbC5odG1sRm9yID0gXCJmb3JlY2FzdC1uYXZpZ2F0aW9uRG90LVwiICsgaTtcblxuICAgIGlmIChudW1Eb3RzID4gMSkge1xuICAgICAgbmF2aWdhdGlvbkRvdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdkluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdEhvdXJseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3QtaG91cmx5XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0SG91cmx5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yZWNhc3RIb3VybHkuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgIGZvcmVjYXN0SG91cmx5LmNoaWxkcmVuW2kgKyBuYXZJbmRleCAqIDhdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG5hdmlnYXRpb25Eb3RzLmFwcGVuZENoaWxkKG5hdmlnYXRpb25Eb3RCdG4pO1xuICAgIG5hdmlnYXRpb25Eb3RzLmFwcGVuZENoaWxkKG5hdmlnYXRpb25Eb3RMYWJlbCk7XG4gIH1cbiAgbmF2aWdhdGlvbkRvdHMuY2hpbGRyZW5bYWN0aXZlRG90SW5kZXggKiAyXS5jaGVja2VkID0gdHJ1ZTtcblxuICByZXR1cm4gbmF2aWdhdGlvbkRvdHM7XG59XG5cbi8qKlxuICogUmUtcmVuZGVyIHRoZSBuYXZpZ2F0aW9uIGRvdHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgZm9yZWNhc3QgdGFiLlxuICogQHBhcmFtIHtOdW1iZXJ9IG51bVRhYnMgTnVtYmVyIG9mIHRhYnMgYWN0aXZlXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aXZlRG90SW5kZXggSW5kZXggb2YgdGhlIGFjdGl2ZSBkb3RcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHJlUmVuZGVyTmF2aWdhdGlvbkRvdHMobnVtVGFicywgYWN0aXZlRG90SW5kZXgpIHtcbiAgY29uc3QgcHJldmlvdXNOYXZpZ2F0aW9uRG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdHNcIlxuICApO1xuICBjb25zdCBuZXdOYXZpZ2F0aW9uRG90cyA9IG5hdmlnYXRpb25Eb3RzKG51bVRhYnMsIGFjdGl2ZURvdEluZGV4KTtcbiAgcHJldmlvdXNOYXZpZ2F0aW9uRG90cy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChcbiAgICBuZXdOYXZpZ2F0aW9uRG90cyxcbiAgICBwcmV2aW91c05hdmlnYXRpb25Eb3RzXG4gICk7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5pdGlhbGl6ZSBwYWdlIGxvYWRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2VhdGhlckluZm9Db21wb25lbnQgZnJvbSBcIi4vd2VhdGhlckluZm9cIjtcbmltcG9ydCB3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCBmcm9tIFwiLi93ZWF0aGVyRGV0YWlsc1wiO1xuaW1wb3J0IHNlYXJjaEJveENvbXBvbmVudCBmcm9tIFwiLi9zZWFyY2hCb3hcIjtcbmltcG9ydCBmb3JlY2FzdENvbXBvbmVudCBmcm9tIFwiLi9mb3JlY2FzdFwiO1xuXG5pbXBvcnQgYXBwbGVUb3VjaEljb25IcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiO1xuaW1wb3J0IGZhdmljb24zMkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5pbXBvcnQgZmF2aWNvbjE2SHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIjtcbmltcG9ydCBtYW5pZmVzdEhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIjtcbmltcG9ydCBtYXNrSWNvbkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiO1xuLy8gaW1wb3J0IHNob3J0Y3V0SWNvbkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2Zhdmljb24uaWNvXCI7XG5pbXBvcnQgbXNDb25maWdIcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9icm93c2VyY29uZmlnLnhtbFwiO1xuXG4vKipcbiAqIEFkZCBmYXZpY29ucyB0byB0aGUgcGFnZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGxvYWRGYXZpY29ucygpIHtcbiAgY29uc3QgYXBwbGVUb3VjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgZmF2aWNvbjMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IGZhdmljb24xNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBtYW5pZmVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAvLyBjb25zdCBzaG9ydGN1dEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgbWFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgbXNUaWxlQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcbiAgY29uc3QgbXNDb25maWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcbiAgY29uc3QgdGhlbWVDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xuICBhcHBsZVRvdWNoSWNvbi5yZWwgPSBcImFwcGxlLXRvdWNoLWljb25cIjtcbiAgYXBwbGVUb3VjaEljb24uc2l6ZXMgPSBcIjE4MHgxODBcIjtcbiAgYXBwbGVUb3VjaEljb24uaHJlZiA9IGFwcGxlVG91Y2hJY29uSHJlZjtcbiAgZmF2aWNvbjMyLnJlbCA9IFwiaWNvblwiO1xuICBmYXZpY29uMzIudHlwZSA9IFwiaW1hZ2UvcG5nXCI7XG4gIGZhdmljb24zMi5zaXplcyA9IFwiMzJ4MzJcIjtcbiAgZmF2aWNvbjMyLmhyZWYgPSBmYXZpY29uMzJIcmVmO1xuICBmYXZpY29uMTYucmVsID0gXCJpY29uXCI7XG4gIGZhdmljb24xNi50eXBlID0gXCJpbWFnZS9wbmdcIjtcbiAgZmF2aWNvbjE2LnNpemVzID0gXCIxNngxNlwiO1xuICBmYXZpY29uMTYuaHJlZiA9IGZhdmljb24xNkhyZWY7XG4gIG1hbmlmZXN0LnJlbCA9IFwibWFuaWZlc3RcIjtcbiAgbWFuaWZlc3QuaHJlZiA9IG1hbmlmZXN0SHJlZjtcbiAgLy8gc2hvcnRjdXRJY29uLnJlbCA9IFwic2hvcnRjdXQgaWNvblwiO1xuICAvLyBzaG9ydGN1dEljb24uaHJlZiA9IHNob3J0Y3V0SWNvbkhyZWY7XG4gIG1hc2tJY29uLnJlbCA9IFwibWFzay1pY29uXCI7XG4gIG1hc2tJY29uLmhyZWYgPSBtYXNrSWNvbkhyZWY7XG4gIG1hc2tJY29uLmNvbG9yID0gXCIjNWJiYWQ1XCI7XG4gIG1zVGlsZUNvbG9yLm5hbWUgPSBcIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCI7XG4gIG1zVGlsZUNvbG9yLmNvbnRlbnQgPSBcIiM5ZjAwYTdcIjtcbiAgbXNDb25maWcubmFtZSA9IFwibXNhcHBsaWNhdGlvbi1jb25maWdcIjtcbiAgbXNDb25maWcuY29udGVudCA9IG1zQ29uZmlnSHJlZjtcbiAgdGhlbWVDb2xvci5uYW1lID0gXCJ0aGVtZS1jb2xvclwiO1xuICB0aGVtZUNvbG9yLmNvbnRlbnQgPSBcIiNmZmZmZmZcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChhcHBsZVRvdWNoSWNvbik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbjMyKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uMTYpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1hbmlmZXN0KTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYXNrSWNvbik7XG4gIC8vIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2hvcnRjdXRJY29uKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtc1RpbGVDb2xvcik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobXNDb25maWcpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoZW1lQ29sb3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWFpbiBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTWFpbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwid2lkZVNjcmVlbldyYXBwZXJcIik7XG4gIG1haW4uaWQgPSBcIndpZGVTY3JlZW5XcmFwcGVyXCI7XG4gIHJldHVybiBtYWluO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZm9vdGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBGb290ZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gIGxvYWRLaXQoKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGZvb3Rlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlckljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiLCBcImZhLWdpdGh1YlwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJDb3B5cmlnaHQgwqkgXCIgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIiBGZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBmb290ZXJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3Rlckljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuLyoqXG4gKiBMb2FkIHRoZSBmb250YXdlc29tZSBraXQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBsb2FkS2l0KCkge1xuICBjb25zdCBmb250YXdlc29tZUtpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGZvbnRhd2Vzb21lS2l0LnNyYyA9IFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2I2YjQwYTM5MDIuanNcIjtcbiAgZm9udGF3ZXNvbWVLaXQuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRhd2Vzb21lS2l0KTtcbn1cblxuLyoqXG4gKiBMb2FkIEdvb2dsZSBGb250cyBpY29ucy5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGxvYWRHb29nbGVJY29ucygpIHtcbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgaWNvbnMuaHJlZiA9XG4gICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiO1xuICBpY29ucy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpY29ucyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBwYWdlIGxvYWQuXG4gKiBAcGFyYW0ge09iamVjdH0gY29vcmRzRGF0YSBDb29yZGluYXRlcyBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gd2VhdGhlckRhdGEgV2VhdGhlciBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gdW5pdHMgVW5pdHMgdG8gZGlzcGxheVxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKGNvb3Jkc0RhdGEsIHdlYXRoZXJEYXRhLCB1bml0cykge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCB3aWRlU2NyZWVuV3JhcHBlciA9IG1haW4oKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3aWRlU2NyZWVuV3JhcHBlcik7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIHdlYXRoZXJJbmZvQ29tcG9uZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBzZWFyY2hCb3hDb21wb25lbnQoY29vcmRzRGF0YSwgd2VhdGhlckRhdGEuY3VycmVudC5kdCwgd2VhdGhlckRhdGEudGltZXpvbmUpXG4gICk7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIHdlYXRoZXJEZXRhaWxzQ29tcG9uZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBmb3JlY2FzdENvbXBvbmVudChcbiAgICAgIHdlYXRoZXJEYXRhLmRhaWx5LFxuICAgICAgd2VhdGhlckRhdGEuaG91cmx5LFxuICAgICAgdW5pdHMsXG4gICAgICB3ZWF0aGVyRGF0YS50aW1lem9uZVxuICAgIClcbiAgKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gIGxvYWRGYXZpY29ucygpO1xuICBsb2FkR29vZ2xlSWNvbnMoKTtcbn1cblxuLyoqXG4gKiBSZS1yZW5kZXIgdGhlIG1haW4gY29tcG9uZW50IHdpdGggdXBkYXRlZCBkYXRhLlxuICogQHBhcmFtIHtPYmplY3R9IGNvb3Jkc0RhdGEgQ29vcmRpbmF0ZXMgZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJEYXRhIFdlYXRoZXIgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IHVuaXRzIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVSZW5kZXJNYWluKGNvb3Jkc0RhdGEsIHdlYXRoZXJEYXRhLCB1bml0cykge1xuICBjb25zdCB3aWRlU2NyZWVuV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lkZVNjcmVlbldyYXBwZXJcIik7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIHdlYXRoZXJJbmZvQ29tcG9uZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBzZWFyY2hCb3hDb21wb25lbnQoY29vcmRzRGF0YSwgd2VhdGhlckRhdGEuY3VycmVudC5kdCwgd2VhdGhlckRhdGEudGltZXpvbmUpXG4gICk7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIHdlYXRoZXJEZXRhaWxzQ29tcG9uZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBmb3JlY2FzdENvbXBvbmVudChcbiAgICAgIHdlYXRoZXJEYXRhLmRhaWx5LFxuICAgICAgd2VhdGhlckRhdGEuaG91cmx5LFxuICAgICAgdW5pdHMsXG4gICAgICB3ZWF0aGVyRGF0YS50aW1lem9uZVxuICAgIClcbiAgKTtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGUgc2VhcmNoIGJveCBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb252ZXJ0VW5peFRpbWVzdGFtcCwgdXBkYXRlTWFpbiB9IGZyb20gXCIuLlwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgc2VhcmNoIGJveCBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gY29vcmRzRGF0YSAtIENvb3JkaW5hdGVzIGRhdGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBjdXJyZW50VW5peFRpbWVzdGFtcCAtIEN1cnJlbnQgdW5peCB0aW1lc3RhbXBcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lem9uZSAtIFRpbWV6b25lIG9mIHRoZSBsb2NhdGlvblxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFNlYXJjaCBib3ggY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hCb3hDb21wb25lbnQoXG4gIGNvb3Jkc0RhdGEsXG4gIGN1cnJlbnRVbml4VGltZXN0YW1wLFxuICB0aW1lem9uZVxuKSB7XG4gIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBlcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgc2VhcmNoQm94LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3hcIik7XG4gIHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKFwiZnJvc3RlZEdsYXNzXCIpO1xuICBzZWFyY2hGb3JtLmlkID0gXCJzZWFyY2hCb3gtZm9ybVwiO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtZm9ybVwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiLCBcInNlYXJjaEJveC1pY29uXCIsIFwic2l6ZS0yMFwiKTtcbiAgaWNvbi5odG1sRm9yID0gXCJzZWFyY2hCb3gtaW5wdXQtY2l0eVwiO1xuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoQm94LWlucHV0LWNpdHlcIjtcbiAgc2VhcmNoSW5wdXQubmFtZSA9IFwiY2l0eVwiO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggZm9yIGEgY2l0eVwiO1xuICBzZWFyY2hJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHNlYXJjaElucHV0LnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgc2VhcmNoSW5wdXQuYXV0b2NvbXBsZXRlID0gXCJvZmZcIjtcbiAgZXJyb3IuY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1lcnJvclwiKTtcbiAgZXJyb3IuaWQgPSBcInNlYXJjaEJveC1lcnJvclwiO1xuICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWxvY2F0aW9uXCIpO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtZGF0ZVRpbWVcIik7XG4gIGxvY2FsVGltZS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWxvY2FsVGltZVwiKTtcblxuICBpY29uLnRleHRDb250ZW50ID0gXCJzZWFyY2hcIjtcbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHVwZGF0ZU1haW4oKTtcbiAgfSk7XG4gIGVycm9yLnRleHRDb250ZW50ID0gXCJJbnZhbGlkIGNpdHkgbmFtZS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBgJHtjb29yZHNEYXRhLm5hbWV9LCAke2Nvb3Jkc0RhdGEuY291bnRyeX1gO1xuICBjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBjb252ZXJ0VW5peFRpbWVzdGFtcChjdXJyZW50VW5peFRpbWVzdGFtcCwgdGltZXpvbmUpO1xuICBkYXRlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgfSl9LCAke2N1cnJlbnREYXRlVGltZS5nZXREYXRlKCl9ICR7Y3VycmVudERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICBtb250aDogXCJsb25nXCIsXG4gIH0pfSAke2N1cnJlbnREYXRlVGltZS5nZXRGdWxsWWVhcigpfWA7XG4gIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnREYXRlVGltZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICB9KX1gO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY3VycmVudERhdGVUaW1lLnNldFNlY29uZHMoY3VycmVudERhdGVUaW1lLmdldFNlY29uZHMoKSArIDEpO1xuICAgIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnREYXRlVGltZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgfSl9YDtcbiAgfSwgMTAwMCk7XG5cbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChpY29uKTtcbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcbiAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGVycm9yKTtcbiAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGRhdGUpO1xuICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQobG9jYWxUaW1lKTtcblxuICByZXR1cm4gc2VhcmNoQm94O1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSB3ZWF0aGVyIGRldGFpbHMgY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHdlYXRoZXIgZGV0YWlscyBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gY3VycmVudFdlYXRoZXJEYXRhIC0gQ3VycmVudCB3ZWF0aGVyIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSB1bml0cyAtIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBXZWF0aGVyIGRldGFpbHMgY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyRGV0YWlscyhjdXJyZW50V2VhdGhlckRhdGEsIHVuaXRzKSB7XG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICB3ZWF0aGVyRGV0YWlsc0xpc3QuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEZXRhaWxzXCIpO1xuICB3ZWF0aGVyRGV0YWlsc0xpc3QuY2xhc3NMaXN0LmFkZChcImZyb3N0ZWRHbGFzc1wiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNJdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzSXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNJdGVtVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHdlYXRoZXJEZXRhaWxzSXRlbS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHMtaXRlbVwiKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1JY29uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIixcbiAgICAgIFwid2VhdGhlckRldGFpbHMtaWNvblwiLFxuICAgICAgXCJzaXplLTIwXCJcbiAgICApO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZS5pZCA9IFwidGVtcGVyYXR1cmVEaXNwbGF5XCI7XG4gICAgfVxuICAgIHdlYXRoZXJEZXRhaWxzSXRlbUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyRGV0YWlscy1sYWJlbFwiKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHMtdmFsdWVcIik7XG5cbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZS50ZXh0Q29udGVudCA9IFwiMTAwJVwiO1xuICAgIHdlYXRoZXJEZXRhaWxzSXRlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0l0ZW1JY29uKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNJdGVtTGFiZWwpO1xuICAgIHdlYXRoZXJEZXRhaWxzSXRlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZSk7XG4gICAgd2VhdGhlckRldGFpbHNMaXN0LmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzSXRlbSk7XG4gIH1cblxuICBjb25zdCB3ZWF0aGVyRGV0YWlsc0ljb25zID0gd2VhdGhlckRldGFpbHNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIud2VhdGhlckRldGFpbHMtaWNvblwiXG4gICk7XG4gIHdlYXRoZXJEZXRhaWxzSWNvbnNbMF0udGV4dENvbnRlbnQgPSBcInRoZXJtb3N0YXRcIjtcbiAgd2VhdGhlckRldGFpbHNJY29uc1sxXS50ZXh0Q29udGVudCA9IFwiaHVtaWRpdHlfcGVyY2VudGFnZVwiO1xuICB3ZWF0aGVyRGV0YWlsc0ljb25zWzJdLnRleHRDb250ZW50ID0gXCJjbG91ZHlcIjtcbiAgd2VhdGhlckRldGFpbHNJY29uc1szXS50ZXh0Q29udGVudCA9IFwiYWlyXCI7XG5cbiAgY29uc3Qgd2VhdGhlckRldGFpbHNMYWJlbHMgPSB3ZWF0aGVyRGV0YWlsc0xpc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi53ZWF0aGVyRGV0YWlscy1sYWJlbFwiXG4gICk7XG4gIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzBdLnRleHRDb250ZW50ID0gXCJGZWVscyBMaWtlXCI7XG4gIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzFdLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eVwiO1xuICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1syXS50ZXh0Q29udGVudCA9IFwiQ2xvdWRzXCI7XG4gIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzNdLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkXCI7XG5cbiAgbGV0IHRlbXBlcmF0dXJlRGlzcGxheVVuaXQ7XG4gIGxldCB3aW5kU3BlZWREaXNwbGF5VW5pdDtcbiAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBGXCI7XG4gICAgd2luZFNwZWVkRGlzcGxheVVuaXQgPSBcIiBtcGhcIjtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBDXCI7XG4gICAgd2luZFNwZWVkRGlzcGxheVVuaXQgPSBcIiBrbS9oXCI7XG4gIH1cbiAgY29uc3Qgd2VhdGhlckRldGFpbHNWYWx1ZXMgPSB3ZWF0aGVyRGV0YWlsc0xpc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi53ZWF0aGVyRGV0YWlscy12YWx1ZVwiXG4gICk7XG4gIHdlYXRoZXJEZXRhaWxzVmFsdWVzWzBdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmZlZWxzX2xpa2UudG9GaXhlZChcbiAgICAxXG4gICl9JHt0ZW1wZXJhdHVyZURpc3BsYXlVbml0fWA7XG4gIHdlYXRoZXJEZXRhaWxzVmFsdWVzWzFdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmh1bWlkaXR5fSVgO1xuICB3ZWF0aGVyRGV0YWlsc1ZhbHVlc1syXS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS5jbG91ZHN9JWA7XG4gIHdlYXRoZXJEZXRhaWxzVmFsdWVzWzNdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLndpbmRfc3BlZWQudG9GaXhlZChcbiAgICAxXG4gICl9JHt3aW5kU3BlZWREaXNwbGF5VW5pdH1gO1xuICB3ZWF0aGVyRGV0YWlsc1ZhbHVlc1szXS5pZCA9IFwid2luZFNwZWVkRGlzcGxheVwiO1xuXG4gIHJldHVybiB3ZWF0aGVyRGV0YWlsc0xpc3Q7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHdlYXRoZXIgaW5mbyBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgd2VhdGhlciBpbmZvIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdXJyZW50V2VhdGhlckRhdGEgLSBUaGUgY3VycmVudCB3ZWF0aGVyIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSB1bml0cyAtIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBXZWF0aGVyIGluZm8gY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVySW5mbyhjdXJyZW50V2VhdGhlckRhdGEsIHVuaXRzKSB7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1bml0Q2hhbmdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvXCIpO1xuICB3ZWF0aGVySW5mby5jbGFzc0xpc3QuYWRkKFwiZnJvc3RlZEdsYXNzXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8tZGVzY3JpcHRpb25cIik7XG4gIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mby10ZW1wZXJhdHVyZVwiKTtcbiAgdGVtcGVyYXR1cmUuaWQgPSBcInRlbXBlcmF0dXJlRGlzcGxheVwiO1xuICB1bml0Q2hhbmdlQnRuLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuXCIpO1xuICB1bml0Q2hhbmdlQnRuLmNsYXNzTGlzdC5hZGQoXCJzd2VlcFRvUmlnaHRcIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvLWljb25cIik7XG5cbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAuam9pbihcIiBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRlc2NyaXB0aW9uO1xuICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikge1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLnRlbXAudG9GaXhlZCgxKX0gwrBGYDtcbiAgICB1bml0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJEaXNwbGF5IMKwQ1wiO1xuICB9IGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLnRlbXAudG9GaXhlZCgxKX0gwrBDYDtcbiAgICB1bml0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJEaXNwbGF5IMKwRlwiO1xuICB9XG4gIHVuaXRDaGFuZ2VCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHVuaXRDaGFuZ2VCdG4uaWQgPSBcInVuaXRDaGFuZ2VCdG5cIjtcbiAgdW5pdENoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlRGlzcGxheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIjdGVtcGVyYXR1cmVEaXNwbGF5XCJcbiAgICApO1xuICAgIGNvbnN0IHdpbmRTcGVlZERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRTcGVlZERpc3BsYXlcIik7XG4gICAgY29uc3QgdW5pdENoYW5nZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdENoYW5nZUJ0blwiKTtcbiAgICBpZiAodW5pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9PT0gXCJEaXNwbGF5IMKwRlwiKSB7XG4gICAgICB0ZW1wZXJhdHVyZURpc3BsYXlzLmZvckVhY2goKHRlbXBlcmF0dXJlRGlzcGxheSkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlRGlzcGxheS50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF07XG4gICAgICAgIHRlbXBlcmF0dXJlRGlzcGxheS50ZXh0Q29udGVudCA9IGAkeyhcbiAgICAgICAgICAodGVtcGVyYXR1cmUgKiA5KSAvIDUgK1xuICAgICAgICAgIDMyXG4gICAgICAgICkudG9GaXhlZCgxKX0gwrBGYDtcbiAgICAgIH0pO1xuICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudCA9IGAkeyhcbiAgICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0gKiAyLjIzN1xuICAgICAgKS50b0ZpeGVkKDEpfSBtcGhgO1xuICAgICAgdW5pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsENcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcGVyYXR1cmVEaXNwbGF5cy5mb3JFYWNoKCh0ZW1wZXJhdHVyZURpc3BsYXkpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZURpc3BsYXkudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgICB0ZW1wZXJhdHVyZURpc3BsYXkudGV4dENvbnRlbnQgPSBgJHsoXG4gICAgICAgICAgKHRlbXBlcmF0dXJlIC0gMzIpICpcbiAgICAgICAgICAoNSAvIDkpXG4gICAgICAgICkudG9GaXhlZCgxKX0gwrBDYDtcbiAgICAgIH0pO1xuICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudCA9IGAkeyhcbiAgICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0gLyAyLjIzN1xuICAgICAgKS50b0ZpeGVkKDEpfSBrbS9oYDtcbiAgICAgIHVuaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPSBcIkRpc3BsYXkgwrBGXCI7XG4gICAgfVxuICB9KTtcbiAgaWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbiAgaWNvbi5hbHQgPSB3ZWF0aGVyRGVzY3JpcHRpb247XG5cbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKHVuaXRDaGFuZ2VCdG4pO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gd2VhdGhlckluZm87XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgV2VhdGhlciBhcHBcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGFnZUxvYWQsIHsgcmVSZW5kZXJNYWluIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlTG9hZFwiO1xuaW1wb3J0IHtcbiAgYnVpbGRDb29yZHNVcmwsXG4gIGJ1aWxkV2VhdGhlclVybCxcbiAgZ2V0V2VhdGhlcixcbiAgZ2V0Q29vcmRzLFxufSBmcm9tIFwiLi9jb21wb25lbnRzL2ZldGNoRGF0YVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBkZWZhdWx0TG9jYXRpb24gPSBcIkJvc3RvblwiO1xuY29uc3QgZGVmYXVsdFVuaXRzID0gXCJtZXRyaWNcIjtcblxuLyoqXG4gKiBDb252ZXJ0IFVuaXggdGltZXN0YW1wIHRvIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWVzdGFtcCAtIFVuaXggdGltZXN0YW1wXG4gKiBAcmV0dXJuIHtEYXRlfSBEYXRlIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFVuaXhUaW1lc3RhbXAodW5peFRpbWVzdGFtcCkge1xuICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApO1xuICByZXR1cm4gZGF0ZU9iajtcbn1cblxuLyoqXG4gKiBGZXRjaCBkZWZhdWx0IHdlYXRoZXIgZGF0YS5cbiAqIEByZXR1cm4ge09iamVjdH0gRGVmYXVsdCB3ZWF0aGVyIGRhdGFcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEZWZhdWx0RGF0YSgpIHtcbiAgY29uc3QgZGVmYXVsdENvb3Jkc1VybCA9IGJ1aWxkQ29vcmRzVXJsKGRlZmF1bHRMb2NhdGlvbik7XG4gIGNvbnN0IGRlZmF1bHRDb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoZGVmYXVsdENvb3Jkc1VybCk7XG4gIGNvbnN0IGRlZmF1bHRXZWF0aGVyVXJsID0gYnVpbGRXZWF0aGVyVXJsKGRlZmF1bHRDb29yZHMsIGRlZmF1bHRVbml0cyk7XG4gIGNvbnN0IGRlZmF1bHRXZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoZGVmYXVsdFdlYXRoZXJVcmwpO1xuICByZXR1cm4geyBjb29yZHM6IGRlZmF1bHRDb29yZHMsIHdlYXRoZXJEYXRhOiBkZWZhdWx0V2VhdGhlckRhdGEgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5hc3luYyBmdW5jdGlvbiBzdGFydEFwcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmlkID0gXCJjb250ZW50XCI7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjb29yZHMsIHdlYXRoZXJEYXRhIH0gPSBhd2FpdCBmZXRjaERlZmF1bHREYXRhKCk7XG4gICAgcGFnZUxvYWQoY29vcmRzLCB3ZWF0aGVyRGF0YSwgZGVmYXVsdFVuaXRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBGZXRjaCBuZXcgd2VhdGhlciBkYXRhLlxuICogQHJldHVybiB7T2JqZWN0fSBDb29yZGluYXRlcyBhbmQgd2VhdGhlciBkYXRhXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTmV3RGF0YSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQm94LWZvcm1cIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gZm9ybS5jaXR5LnZhbHVlO1xuICBjb25zdCBjb29yZHNVcmwgPSBidWlsZENvb3Jkc1VybChsb2NhdGlvbik7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldENvb3Jkcyhjb29yZHNVcmwpO1xuICBjb25zdCB3ZWF0aGVyVXJsID0gYnVpbGRXZWF0aGVyVXJsKGNvb3JkcywgZGVmYXVsdFVuaXRzKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHdlYXRoZXJVcmwpO1xuICByZXR1cm4geyBjb29yZHMsIHdlYXRoZXJEYXRhIH07XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBtYWluIGNvbnRlbnQgd2hlbiB1c2VyIHN1Ym1pdHMgdGhlIHNlYXJjaCBib3ggZm9ybS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWFpbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvb3Jkcywgd2VhdGhlckRhdGEgfSA9IGF3YWl0IGZldGNoTmV3RGF0YSgpO1xuICAgIHJlUmVuZGVyTWFpbihjb29yZHMsIHdlYXRoZXJEYXRhLCBkZWZhdWx0VW5pdHMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCb3gtZm9ybVwiKTtcbiAgICBjb25zdCBzZWFyY2hCb3hFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQm94LWVycm9yXCIpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBzZWFyY2hCb3hFcnJvci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbnN0YXJ0QXBwKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9mb250cy9DdXRlRm9udC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZjlkMzQyOyAvKiB5ZWxsb3cgKi9cXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmY3YzYwOyAvKiBvcmFuZ2UtcmVkICovXFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjN2NmZjZhOyAvKiBncmVlbiAqL1xcbiAgLS1hY2NlbnQtY29sb3I6ICM2YTdjZmY7IC8qIGJsdWUgKi9cXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogMjUsIDI1LCAyNTsgLyogYmxhY2sgKi9cXG4gIC0tZm9yZWdyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogd2hpdGUgKi9cXG4gIC0tdGV4dC1jb2xvcjogI2QxZDFkMTsgLyogbGlnaHQgZ3JheSAqL1xcbiAgLS1saW5rLWNvbG9yOiAjZmY3YzYwOyAvKiBzYW1lIGFzIHNlY29uZGFyeS1jb2xvciAqL1xcbiAgLS1ob3Zlci1jb2xvcjogIzdjZmY2YTsgLyogc2FtZSBhcyB0ZXJ0aWFyeS1jb2xvciAqL1xcbiAgLS10cmFuc3BhcmVudDogdHJhbnNwYXJlbnQ7XFxuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcXG4gIC0tc3BhY2luZy14czogNXB4O1xcbiAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcbiAgLS1zcGFjaW5nLW1kOiAxNXB4O1xcbiAgLS1zcGFjaW5nLWxnOiAyMHB4O1xcbiAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcbiAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXG4gIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG4gIC0tYnRuLXdpZHRoOiAxMDBweDtcXG4gIC0tc2VhcmNoLWJhci1oZWlnaHQ6IDQ0cHg7XFxuICAtLWZvcmVjYXN0LWhlaWdodDogMjUwcHg7XFxuICAtLW5hdi1kb3Qtc2l6ZTogMTBweDtcXG4gIC0tc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcbiAgLS1ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAtLXNtLWJyZWFrcG9pbnQ6IDc2OHB4O1xcbiAgLS1mb3JlY2FzdC1oZWlnaHQtc206IDU1MHB4O1xcbn1cXG5cXG4vKiBHTE9CQUwgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3V0ZSBGb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIkN1dGUgRm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLndpZGVTY3JlZW5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMCwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiA0ODtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5zd2VlcFRvUmlnaHQ6aG92ZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLmZyb3N0ZWRHbGFzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAwLjYpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDEwcHgpO1xcbn1cXG5cXG5Ac3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSB7XFxuICAuZnJvc3RlZEdsYXNzIHtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIH1cXG59XFxuXFxuLyogV0VBVEhFUiBJTkZPICovXFxuLndlYXRoZXJJbmZvIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi53ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctc20pO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXVuaXRDaGFuZ2VCdG46aG92ZXIge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8taWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogU0VBUkNIIEJPWCAqL1xcbi5zZWFyY2hCb3gge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWZvcm0ge1xcbiAgaGVpZ2h0OiB2YXIoLS1zZWFyY2gtYmFyLWhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxufVxcblxcbi5zZWFyY2hCb3gtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb24uc2l6ZS0yMCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIk9QU1pcXFwiIDIwO1xcbn1cXG5cXG4uc2VhcmNoQm94LWlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1lcnJvciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1lcnJvci5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFdFQVRIRVIgREVUQUlMUyAqL1xcbi53ZWF0aGVyRGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLWljb24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLWljb24uc2l6ZS0yMCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIk9QU1pcXFwiIDIwO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtdmFsdWUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLyogRk9SRUNBU1QgKi9cXG4uZm9yZWNhc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGhlaWdodDogdmFyKC0tZm9yZWNhc3QtaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JlY2FzdC1idG5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cykgdmFyKC0tc3BhY2luZy1zbSk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWw6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbGFiZWwge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LWl0ZW0tZGF0ZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBIaSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcExvIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLXRpbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGVtcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90QnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90TGFiZWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IHZhcigtLW5hdi1kb3Qtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1kb3Qtc2l6ZSk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90QnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbmF2aWdhdGlvbkRvdExhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDY0JSkgaHVlLXJvdGF0ZSgyNzhkZWcpXFxuICAgIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoMTA4JSk7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuLyogZm9yIHNjcmVlbnMgc21hbGxlciB0aGFuIDc2OHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC53aWRlU2NyZWVuV3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICB9XFxuICAud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC53ZWF0aGVySW5mby10ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLnNlYXJjaEJveC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLndlYXRoZXJEZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLndlYXRoZXJEZXRhaWxzLXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuZm9yZWNhc3Qge1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvcmVjYXN0LWhlaWdodC1zbSk7XFxuICB9XFxuICAuZm9yZWNhc3QtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVhcGVhdCg0LCAxZnIpO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWhvdXJseSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZWFwZWF0KDQsIDFmcik7XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHktaXRlbS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wSGkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wTG8ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG4gIC5mb3JlY2FzdC1ob3VybHktaXRlbS10aW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCLEVBQUUsV0FBVztFQUNyQywwQkFBMEIsRUFBRSxlQUFlO0VBQzNDLHlCQUF5QixFQUFFLFVBQVU7RUFDckMsdUJBQXVCLEVBQUUsU0FBUztFQUNsQyw4QkFBOEIsRUFBRSxVQUFVO0VBQzFDLDJCQUEyQixFQUFFLFVBQVU7RUFDdkMscUJBQXFCLEVBQUUsZUFBZTtFQUN0QyxxQkFBcUIsRUFBRSw0QkFBNEI7RUFDbkQsc0JBQXNCLEVBQUUsMkJBQTJCO0VBQ25ELDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQix5Q0FBeUM7RUFDekMsc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUEsV0FBVztBQUNYO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIseURBQXdEO0VBQ3hELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtFQUFr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O0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZjlkMzQyOyAvKiB5ZWxsb3cgKi9cXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmY3YzYwOyAvKiBvcmFuZ2UtcmVkICovXFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjN2NmZjZhOyAvKiBncmVlbiAqL1xcbiAgLS1hY2NlbnQtY29sb3I6ICM2YTdjZmY7IC8qIGJsdWUgKi9cXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogMjUsIDI1LCAyNTsgLyogYmxhY2sgKi9cXG4gIC0tZm9yZWdyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogd2hpdGUgKi9cXG4gIC0tdGV4dC1jb2xvcjogI2QxZDFkMTsgLyogbGlnaHQgZ3JheSAqL1xcbiAgLS1saW5rLWNvbG9yOiAjZmY3YzYwOyAvKiBzYW1lIGFzIHNlY29uZGFyeS1jb2xvciAqL1xcbiAgLS1ob3Zlci1jb2xvcjogIzdjZmY2YTsgLyogc2FtZSBhcyB0ZXJ0aWFyeS1jb2xvciAqL1xcbiAgLS10cmFuc3BhcmVudDogdHJhbnNwYXJlbnQ7XFxuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcXG4gIC0tc3BhY2luZy14czogNXB4O1xcbiAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcbiAgLS1zcGFjaW5nLW1kOiAxNXB4O1xcbiAgLS1zcGFjaW5nLWxnOiAyMHB4O1xcbiAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcbiAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXG4gIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG4gIC0tYnRuLXdpZHRoOiAxMDBweDtcXG4gIC0tc2VhcmNoLWJhci1oZWlnaHQ6IDQ0cHg7XFxuICAtLWZvcmVjYXN0LWhlaWdodDogMjUwcHg7XFxuICAtLW5hdi1kb3Qtc2l6ZTogMTBweDtcXG4gIC0tc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcbiAgLS1ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAtLXNtLWJyZWFrcG9pbnQ6IDc2OHB4O1xcbiAgLS1mb3JlY2FzdC1oZWlnaHQtc206IDU1MHB4O1xcbn1cXG5cXG4vKiBHTE9CQUwgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3V0ZSBGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvQ3V0ZUZvbnQtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIkN1dGUgRm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi53aWRlU2NyZWVuV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDAsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgNDg7XFxufVxcblxcbi5zd2VlcFRvUmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0OmhvdmVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5mcm9zdGVkR2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMC42KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxMHB4KTtcXG59XFxuXFxuQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xcbiAgLmZyb3N0ZWRHbGFzcyB7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICB9XFxufVxcblxcbi8qIFdFQVRIRVIgSU5GTyAqL1xcbi53ZWF0aGVySW5mbyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKSB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAxKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFNFQVJDSCBCT1ggKi9cXG4uc2VhcmNoQm94IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLnNlYXJjaEJveC1mb3JtIHtcXG4gIGhlaWdodDogdmFyKC0tc2VhcmNoLWJhci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJPUFNaXFxcIiAyMDtcXG59XFxuXFxuLnNlYXJjaEJveC1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hCb3gtZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hCb3gtZXJyb3IuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBXRUFUSEVSIERFVEFJTFMgKi9cXG4ud2VhdGhlckRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJPUFNaXFxcIiAyMDtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi8qIEZPUkVDQVNUICovXFxuLmZvcmVjYXN0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBoZWlnaHQ6IHZhcigtLWZvcmVjYXN0LWhlaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctc20pO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG59XFxuXFxuLmZvcmVjYXN0LWxhYmVsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAxKTtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0bjpjaGVja2VkICsgLmZvcmVjYXN0LWxhYmVsIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLWRhdGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wSGkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBMbyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHktaXRlbS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHktaXRlbS10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLXRlbXAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tbmF2LWRvdC1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdEJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdExhYmVsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdEJ0bjpjaGVja2VkICsgLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RMYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ2NCUpIGh1ZS1yb3RhdGUoMjc4ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDEwOCUpO1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbi8qIGZvciBzY3JlZW5zIHNtYWxsZXIgdGhhbiA3NjhweCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAud2lkZVNjcmVlbldyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgfVxcbiAgLndlYXRoZXJJbmZvLXVuaXRDaGFuZ2VCdG4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAud2VhdGhlckluZm8tdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5zZWFyY2hCb3gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC53ZWF0aGVyRGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC53ZWF0aGVyRGV0YWlscy12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb3JlY2FzdC1oZWlnaHQtc20pO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlYXBlYXQoNCwgMWZyKTtcXG4gIH1cXG4gIC5mb3JlY2FzdC1ob3VybHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVhcGVhdCg0LCAxZnIpO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5LWl0ZW0tZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcEhpIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcExvIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWhvdXJseS1pdGVtLXRlbXAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMtcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMtcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJicm93c2VyY29uZmlnXCI6e1wibXNhcHBsaWNhdGlvblwiOlt7XCJ0aWxlXCI6W3tcInNxdWFyZTE1MHgxNTBsb2dvXCI6W3tcIiRcIjp7XCJzcmNcIjpcIi9hc3NldHMvZmF2aWNvbi9tc3RpbGUtMTUweDE1MC5wbmdcIn19XSxcIlRpbGVDb2xvclwiOltcIiM5ZjAwYTdcIl19XX1dfX0iXSwibmFtZXMiOlsiZ2V0TG9jYXRpb25Gcm9tRm9ybSIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2l0eSIsInZhbHVlIiwic2FuaXRpemVJbnB1dCIsImlucHV0IiwicmVwbGFjZSIsImJ1aWxkQ29vcmRzVXJsIiwiY2l0eU5hbWUiLCJzYW5pdGl6ZWRDaXR5TmFtZSIsImJ1aWxkV2VhdGhlclVybCIsImNvb3JkaW5hdGVzIiwidW5pdHMiLCJsYXQiLCJsb24iLCJnZXRDb29yZHMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiY29vcmRzRGF0YSIsImpzb24iLCJuYW1lIiwiY291bnRyeSIsImNvb3JkIiwiZ2V0V2VhdGhlciIsIndlYXRoZXJEYXRhIiwiY29udmVydFVuaXhUaW1lc3RhbXAiLCJmb3JlY2FzdENvbXBvbmVudCIsImRhaWx5Rm9yZWNhc3REYXRhIiwiaG91cmx5Rm9yZWNhc3REYXRhIiwidGltZXpvbmUiLCJmb3JlY2FzdCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JlY2FzdEJ0bldyYXBwZXIiLCJmb3JlY2FzdERhaWx5QnRuIiwiZm9yZWNhc3REYWlseUxhYmVsIiwiZm9yZWNhc3RIb3VybHlCdG4iLCJmb3JlY2FzdEhvdXJseUxhYmVsIiwiZGFpbHlGb3JlY2FzdENvbXBvbmVudCIsImRhaWx5Rm9yZWNhc3RMaXN0IiwiaG91cmx5Rm9yZWNhc3RDb21wb25lbnQiLCJob3VybHlGb3JlY2FzdExpc3QiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkRvdHMiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInR5cGUiLCJjaGVja2VkIiwiaHRtbEZvciIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb3JlY2FzdERhaWx5IiwiZm9yZWNhc3RIb3VybHkiLCJyZW1vdmUiLCJyZVJlbmRlck5hdmlnYXRpb25Eb3RzIiwiZmlyc3RBY3RpdmVGb3JlY2FzdEluZGV4IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsImFwcGVuZENoaWxkIiwidGVtcGVyYXR1cmVEaXNwbGF5VW5pdCIsImkiLCJkYWlseUZvcmVjYXN0SXRlbSIsImRhaWx5Rm9yZWNhc3RJdGVtRGF0ZSIsImRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpIiwiZGFpbHlGb3JlY2FzdEl0ZW1UZW1wTG8iLCJkYWlseUZvcmVjYXN0SXRlbUljb24iLCJkdCIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsInRpbWVab25lIiwidGVtcCIsIm1heCIsInRvRml4ZWQiLCJtaW4iLCJzcmMiLCJ3ZWF0aGVyIiwiaWNvbiIsImFsdCIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJob3VybHlGb3JlY2FzdEl0ZW0iLCJob3VybHlGb3JlY2FzdEl0ZW1UaW1lIiwiaG91cmx5Rm9yZWNhc3RJdGVtVGVtcCIsImhvdXJseUZvcmVjYXN0SXRlbUljb24iLCJob3VyIiwiaG91cjEyIiwiY2hpbGRyZW4iLCJudW1UYWJzIiwiYWN0aXZlRG90SW5kZXgiLCJudW1Eb3RzIiwibmF2aWdhdGlvbkRvdEJ0biIsIm5hdmlnYXRpb25Eb3RMYWJlbCIsIm5hdkluZGV4IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJsZW5ndGgiLCJwcmV2aW91c05hdmlnYXRpb25Eb3RzIiwibmV3TmF2aWdhdGlvbkRvdHMiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwid2VhdGhlckluZm9Db21wb25lbnQiLCJ3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCIsInNlYXJjaEJveENvbXBvbmVudCIsImFwcGxlVG91Y2hJY29uSHJlZiIsImZhdmljb24zMkhyZWYiLCJmYXZpY29uMTZIcmVmIiwibWFuaWZlc3RIcmVmIiwibWFza0ljb25IcmVmIiwibXNDb25maWdIcmVmIiwibG9hZEZhdmljb25zIiwiYXBwbGVUb3VjaEljb24iLCJmYXZpY29uMzIiLCJmYXZpY29uMTYiLCJtYW5pZmVzdCIsIm1hc2tJY29uIiwibXNUaWxlQ29sb3IiLCJtc0NvbmZpZyIsInRoZW1lQ29sb3IiLCJyZWwiLCJzaXplcyIsImhyZWYiLCJjb2xvciIsImNvbnRlbnQiLCJoZWFkIiwibWFpbiIsImZvb3RlciIsImxvYWRLaXQiLCJmb290ZXJUZXh0IiwiZm9vdGVyTGluayIsImZvb3Rlckljb24iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmb250YXdlc29tZUtpdCIsImNyb3NzT3JpZ2luIiwibG9hZEdvb2dsZUljb25zIiwiaWNvbnMiLCJwYWdlTG9hZCIsIndpZGVTY3JlZW5XcmFwcGVyIiwiY3VycmVudCIsImRhaWx5IiwiaG91cmx5IiwicmVSZW5kZXJNYWluIiwiaW5uZXJIVE1MIiwidXBkYXRlTWFpbiIsImN1cnJlbnRVbml4VGltZXN0YW1wIiwic2VhcmNoQm94Iiwic2VhcmNoRm9ybSIsInNlYXJjaElucHV0IiwiZXJyb3IiLCJsb2NhdGlvbiIsImRhdGUiLCJsb2NhbFRpbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic3BlbGxjaGVjayIsImF1dG9jb21wbGV0ZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudERhdGVUaW1lIiwiZ2V0RGF0ZSIsIm1vbnRoIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwic2V0SW50ZXJ2YWwiLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIndlYXRoZXJEZXRhaWxzIiwiY3VycmVudFdlYXRoZXJEYXRhIiwid2VhdGhlckRldGFpbHNMaXN0Iiwid2VhdGhlckRldGFpbHNJdGVtIiwid2VhdGhlckRldGFpbHNJdGVtSWNvbiIsIndlYXRoZXJEZXRhaWxzSXRlbUxhYmVsIiwid2VhdGhlckRldGFpbHNJdGVtVmFsdWUiLCJ3ZWF0aGVyRGV0YWlsc0ljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIndlYXRoZXJEZXRhaWxzTGFiZWxzIiwid2luZFNwZWVkRGlzcGxheVVuaXQiLCJ3ZWF0aGVyRGV0YWlsc1ZhbHVlcyIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsImNsb3VkcyIsIndpbmRfc3BlZWQiLCJ3ZWF0aGVySW5mbyIsInRlbXBlcmF0dXJlIiwidW5pdENoYW5nZUJ0biIsIndlYXRoZXJEZXNjcmlwdGlvbiIsInRlbXBlcmF0dXJlRGlzcGxheXMiLCJ3aW5kU3BlZWREaXNwbGF5IiwiZm9yRWFjaCIsInRlbXBlcmF0dXJlRGlzcGxheSIsImRlZmF1bHRMb2NhdGlvbiIsImRlZmF1bHRVbml0cyIsInVuaXhUaW1lc3RhbXAiLCJkYXRlT2JqIiwiZmV0Y2hEZWZhdWx0RGF0YSIsImRlZmF1bHRDb29yZHNVcmwiLCJkZWZhdWx0Q29vcmRzIiwiZGVmYXVsdFdlYXRoZXJVcmwiLCJkZWZhdWx0V2VhdGhlckRhdGEiLCJjb29yZHMiLCJzdGFydEFwcCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hOZXdEYXRhIiwiY29vcmRzVXJsIiwid2VhdGhlclVybCIsInNlYXJjaEJveEVycm9yIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9