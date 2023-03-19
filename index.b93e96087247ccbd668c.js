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
  return `http://api.openweathermap.org/geo/1.0/direct?q=${sanitizedCityName}&limit=1&appid=20f7632ffc2c022654e4093c6947b4f4`;
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #f9d342; /* yellow */\n  --secondary-color: #ff7c60; /* orange-red */\n  --tertiary-color: #7cff6a; /* green */\n  --accent-color: #6a7cff; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #ffffff; /* white */\n  --text-color: #d1d1d1; /* light gray */\n  --link-color: #ff7c60; /* same as secondary-color */\n  --hover-color: #7cff6a; /* same as tertiary-color */\n  --transparent: transparent;\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 250px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: var(--transparent);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: var(--transparent);\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: var(--transparent);\n  color: var(--text-color);\n}\n\n.searchBox-error {\n  display: none;\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n}\n\n.searchBox-error.active {\n  display: block;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forecast-btnWrapper {\n  width: 100%;\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: none;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.forecast-daily.active {\n  display: grid;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-hourly {\n  display: none;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.forecast-hourly.active {\n  display: grid;\n}\n\n.forecast-hourly-item {\n  display: none;\n}\n\n.forecast-hourly-item.active {\n  display: block;\n}\n\n.forecast-hourly-item-time {\n  font-size: 2rem;\n}\n\n.forecast-hourly-item-temp {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-navigationDots {\n  /* margin-top as much as possible without displacing other elements */\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDotBtn {\n  display: none;\n}\n\n.forecast-navigationDotLabel {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-navigationDotBtn:checked + .forecast-navigationDotLabel {\n  background-color: var(--hover-color);\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg)\n    brightness(113%) contrast(108%);\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB,EAAE,WAAW;EACrC,0BAA0B,EAAE,eAAe;EAC3C,yBAAyB,EAAE,UAAU;EACrC,uBAAuB,EAAE,SAAS;EAClC,8BAA8B,EAAE,UAAU;EAC1C,2BAA2B,EAAE,UAAU;EACvC,qBAAqB,EAAE,eAAe;EACtC,qBAAqB,EAAE,4BAA4B;EACnD,sBAAsB,EAAE,2BAA2B;EACnD,0BAA0B;EAC1B,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,wBAAwB;EACxB,oBAAoB;EACpB,yCAAyC;EACzC,sCAAsC;AACxC;;AAEA,WAAW;AACX;EACE,wBAAwB;EACxB,4CAAgD;AAClD;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B,oCAAoC;EACpC,iBAAiB;EACjB,yDAAwD;EACxD,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,iCAAiC;EACjC,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,4BAA4B;EAC5B,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,kEAAkE;AACpE;;AAEA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,wBAAwB;EACxB,gCAAgC;EAChC,wBAAwB;EACxB,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,8BAA8B;EAC9B,4BAA4B;EAC5B,oBAAoB;EACpB,+BAA+B;EAC/B,uBAAuB;EACvB,sCAAsC;EACtC,8BAA8B;EAC9B,kCAAkC;EAClC,0BAA0B;AAC5B;;AAEA;EACE,4BAA4B;EAC5B,oBAAoB;AACtB;;AAEA;EACE,8CAA8C;EAC9C,0CAA0C;AAC5C;;AAEA;EACE;IACE,mCAAmC;IACnC,2BAA2B;EAC7B;AACF;;AAEA,iBAAiB;AACjB;EACE,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,wBAAwB;EACxB,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,cAAc;AAChB;;AAEA,eAAe;AACf;EACE,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mCAAmC;EACnC,qBAAqB;EACrB,oCAAoC;EACpC,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,oCAAoC;EACpC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA,oBAAoB;AACpB;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA,aAAa;AACb;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;EACrB,+BAA+B;EAC/B,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,qEAAqE;EACrE,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,2BAA2B;EAC3B,qBAAqB;EACrB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA,WAAW;AACX;EACE,4BAA4B;EAC5B,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,sCAAsC;EACtC;mCACiC;AACnC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":[":root {\n  --primary-color: #f9d342; /* yellow */\n  --secondary-color: #ff7c60; /* orange-red */\n  --tertiary-color: #7cff6a; /* green */\n  --accent-color: #6a7cff; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #ffffff; /* white */\n  --text-color: #d1d1d1; /* light gray */\n  --link-color: #ff7c60; /* same as secondary-color */\n  --hover-color: #7cff6a; /* same as tertiary-color */\n  --transparent: transparent;\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 250px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(\"../assets/fonts/CuteFont-Regular.ttf\");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-image: url(\"../assets/images/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: var(--transparent);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: var(--transparent);\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: var(--transparent);\n  color: var(--text-color);\n}\n\n.searchBox-error {\n  display: none;\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n}\n\n.searchBox-error.active {\n  display: block;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forecast-btnWrapper {\n  width: 100%;\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: none;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.forecast-daily.active {\n  display: grid;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-hourly {\n  display: none;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.forecast-hourly.active {\n  display: grid;\n}\n\n.forecast-hourly-item {\n  display: none;\n}\n\n.forecast-hourly-item.active {\n  display: block;\n}\n\n.forecast-hourly-item-time {\n  font-size: 2rem;\n}\n\n.forecast-hourly-item-temp {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-navigationDots {\n  /* margin-top as much as possible without displacing other elements */\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDotBtn {\n  display: none;\n}\n\n.forecast-navigationDotLabel {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-navigationDotBtn:checked + .forecast-navigationDotLabel {\n  background-color: var(--hover-color);\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg)\n    brightness(113%) contrast(108%);\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVB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RXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2ZBLGtCQUFrQixpQkFBaUIsa0JBQWtCLFNBQVMsc0JBQXNCLEtBQUssNENBQTRDLDBCQUEwQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3NlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzP2EwMjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvYXNzZXRzL2Zhdmljb24vYnJvd3NlcmNvbmZpZy54bWwiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEZldGNoIGFwcCBkYXRhIGZyb20gQVBJc1xuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogR2V0IGxvY2F0aW9uIGZyb20gdGhlIHNlYXJjaCBib3ggZm9ybVxuICogQHJldHVybiB7U3RyaW5nfSBVc2VyIGlucHV0IG9mIHRoZSBsb2NhdGlvblxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uRnJvbUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJveC1mb3JtXCIpO1xuICByZXR1cm4gZm9ybS5jaXR5LnZhbHVlO1xufVxuXG4vKipcbiAqIFNhbml0aXplIHVzZXIgaW5wdXQuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVXNlciBpbnB1dFxuICogQHJldHVybiB7U3RyaW5nfSBTYW5pdGl6ZWQgaW5wdXRcbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVJbnB1dChpbnB1dCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIGlucHV0XG4gICAgLnJlcGxhY2UoLyhcXHMrJHxeXFxzKykvZywgXCJcIikgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbSBiZWdpbmluZyBhbmQgZW5kIG9mIHN0cmluZ1xuICAgIC5yZXBsYWNlKC8oLFxccyspL2csIFwiLFwiKSAvLyByZW1vdmUgYW55IHdoaXRlIHNwYWNlIHRoYXQgZm9sbG93cyBhIGNvbW1hXG4gICAgLnJlcGxhY2UoLyhcXHMrLCkvZywgXCIsXCIpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBwcmVjZWVkcyBhIGNvbW1hXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIrXCIpOyAvLyByZXBsYWNlIGFueSByZW1haW5pbmcgd2hpdGUgc3BhY2Ugd2l0aCArLCBzbyBpdCB3b3JrcyBpbiBhcGkgY2FsbFxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBBUEkgZW5kcG9pbnQgdG8gZmV0Y2ggY29vcmRpbmF0ZXMgZnJvbS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjaXR5TmFtZSBDaXR5IG5hbWVcbiAqIEByZXR1cm4ge1N0cmluZ30gQVBJIGVuZHBvaW50IHRvIGZldGNoIGNvb3JkaW5hdGVzIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29vcmRzVXJsKGNpdHlOYW1lKSB7XG4gIGNvbnN0IHNhbml0aXplZENpdHlOYW1lID0gc2FuaXRpemVJbnB1dChjaXR5TmFtZSk7XG4gIHJldHVybiBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3Nhbml0aXplZENpdHlOYW1lfSZsaW1pdD0xJmFwcGlkPTIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0YDtcbn1cblxuLyoqXG4gKiBCdWlsZCB0aGUgQVBJIGVuZHBvaW50IHRvIGZldGNoIHdlYXRoZXIgaW5mb3JtYXRpb24gZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb29yZGluYXRlcyBDb29yZGluYXRlcyBpbmZvcm1hdGlvbiAobGF0LCBsb24sIG5hbWUsIGNvdW50cnkpXG4gKiBAcGFyYW0ge1N0cmluZ30gdW5pdHMgVW5pdHMgdG8gZGlzcGxheSAoXCJpbXBlcmlhbFwiL1wibWV0cmljXCIpXG4gKiBAcmV0dXJuIHtTdHJpbmd9IEFQSSBlbmRwb2ludCB0byBmZXRjaCB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkV2VhdGhlclVybChjb29yZGluYXRlcywgdW5pdHMpIHtcbiAgcmV0dXJuIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjb29yZGluYXRlcy5sYXR9Jmxvbj0ke2Nvb3JkaW5hdGVzLmxvbn0mZXhjbHVkZT1taW51dGVseSxhbGVydHMmdW5pdHM9JHt1bml0c30mYXBwaWQ9MjBmNzYzMmZmYzJjMDIyNjU0ZTQwOTNjNjk0N2I0ZjRgO1xufVxuXG4vKipcbiAqIEdldCBjb29yZGluYXRlcyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBPcGVuV2VhdGhlck1hcCBBUEkuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIEFQSSBlbmRwb2ludCB0byBmZXRjaCBkYXRhIGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gQ29vcmRpbmF0ZXMgaW5mb3JtYXRpb24gKGxhdCwgbG9uLCBuYW1lLCBjb3VudHJ5KVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzKHVybCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGNvb3Jkc0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHsgbGF0LCBsb24sIG5hbWUsIGNvdW50cnkgfSA9IGNvb3Jkc0RhdGFbMF07XG4gIGNvbnN0IGNvb3JkID0geyBsYXQsIGxvbiwgbmFtZSwgY291bnRyeSB9O1xuICByZXR1cm4gY29vcmQ7XG59XG5cbi8qKlxuICogR2V0IHdlYXRoZXIgaW5mb3JtYXRpb24gZnJvbSB0aGUgT3BlbldlYXRoZXJNYXAgQVBJLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBBUEkgZW5kcG9pbnQgdG8gZmV0Y2ggZGF0YSBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IFdlYXRoZXIgaW5mb3JtYXRpb25cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIodXJsKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSBmb3JlY2FzdCBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb252ZXJ0VW5peFRpbWVzdGFtcCB9IGZyb20gXCIuLlwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgZm9yZWNhc3QgY29tcG9uZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGRhaWx5Rm9yZWNhc3REYXRhIC0gRGFpbHkgZm9yZWNhc3QgZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IGhvdXJseUZvcmVjYXN0RGF0YSAtIEhvdXJseSBmb3JlY2FzdCBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gdW5pdHMgLSBVbml0cyB0byBkaXNwbGF5XG4gKiBAcGFyYW0ge09iamVjdH0gdGltZXpvbmUgLSBUaW1lem9uZSBvZiB0aGUgbG9jYXRpb25cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBGb3JlY2FzdCBjb21wb25lbnRcbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcmVjYXN0Q29tcG9uZW50KFxuICBkYWlseUZvcmVjYXN0RGF0YSxcbiAgaG91cmx5Rm9yZWNhc3REYXRhLFxuICB1bml0cyxcbiAgdGltZXpvbmVcbikge1xuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBmb3JlY2FzdEJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb3JlY2FzdERhaWx5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBmb3JlY2FzdERhaWx5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBmb3JlY2FzdEhvdXJseUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkYWlseUZvcmVjYXN0Q29tcG9uZW50ID0gZGFpbHlGb3JlY2FzdExpc3QoXG4gICAgZGFpbHlGb3JlY2FzdERhdGEsXG4gICAgdW5pdHMsXG4gICAgdGltZXpvbmVcbiAgKTtcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RDb21wb25lbnQgPSBob3VybHlGb3JlY2FzdExpc3QoXG4gICAgaG91cmx5Rm9yZWNhc3REYXRhLFxuICAgIHVuaXRzLFxuICAgIHRpbWV6b25lXG4gICk7XG4gIGNvbnN0IG5hdmlnYXRpb24gPSBuYXZpZ2F0aW9uRG90cyg3LCAwKTtcblxuICBmb3JlY2FzdC5pZCA9IFwiZm9yZWNhc3RcIjtcbiAgZm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0XCIsIFwiZnJvc3RlZEdsYXNzXCIpO1xuICBmb3JlY2FzdEJ0bldyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWJ0bldyYXBwZXJcIik7XG4gIGZvcmVjYXN0RGFpbHlCdG4uaWQgPSBcImZvcmVjYXN0LWRhaWx5QnRuXCI7XG4gIGZvcmVjYXN0RGFpbHlCdG4uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWJ0blwiKTtcbiAgZm9yZWNhc3REYWlseUJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICBmb3JlY2FzdERhaWx5QnRuLm5hbWUgPSBcImZvcmVjYXN0XCI7XG4gIGZvcmVjYXN0RGFpbHlCdG4udmFsdWUgPSBcImRhaWx5XCI7XG4gIGZvcmVjYXN0RGFpbHlCdG4uY2hlY2tlZCA9IHRydWU7XG4gIGZvcmVjYXN0RGFpbHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtbGFiZWxcIiwgXCJzd2VlcFRvUmlnaHRcIik7XG4gIGZvcmVjYXN0RGFpbHlMYWJlbC5odG1sRm9yID0gXCJmb3JlY2FzdC1kYWlseUJ0blwiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi5pZCA9IFwiZm9yZWNhc3QtaG91cmx5QnRuXCI7XG4gIGZvcmVjYXN0SG91cmx5QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1idG5cIik7XG4gIGZvcmVjYXN0SG91cmx5QnRuLnR5cGUgPSBcInJhZGlvXCI7XG4gIGZvcmVjYXN0SG91cmx5QnRuLm5hbWUgPSBcImZvcmVjYXN0XCI7XG4gIGZvcmVjYXN0SG91cmx5QnRuLnZhbHVlID0gXCJob3VybHlcIjtcbiAgZm9yZWNhc3RIb3VybHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtbGFiZWxcIiwgXCJzd2VlcFRvUmlnaHRcIik7XG4gIGZvcmVjYXN0SG91cmx5TGFiZWwuaHRtbEZvciA9IFwiZm9yZWNhc3QtaG91cmx5QnRuXCI7XG5cbiAgZm9yZWNhc3REYWlseUxhYmVsLnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuICBmb3JlY2FzdEhvdXJseUxhYmVsLnRleHRDb250ZW50ID0gXCJIb3VybHlcIjtcblxuICBmb3JlY2FzdERhaWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCBmb3JlY2FzdERhaWx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdC1kYWlseVwiKTtcbiAgICBjb25zdCBmb3JlY2FzdEhvdXJseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3QtaG91cmx5XCIpO1xuICAgIGZvcmVjYXN0RGFpbHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBmb3JlY2FzdEhvdXJseS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHJlUmVuZGVyTmF2aWdhdGlvbkRvdHMoNywgMCk7XG4gIH0pO1xuXG4gIGZvcmVjYXN0SG91cmx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICBjb25zdCBmb3JlY2FzdERhaWx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdC1kYWlseVwiKTtcbiAgICBjb25zdCBmb3JlY2FzdEhvdXJseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3QtaG91cmx5XCIpO1xuICAgIGNvbnN0IGZpcnN0QWN0aXZlRm9yZWNhc3RJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5mb3JlY2FzdC1ob3VybHktaXRlbS5hY3RpdmVcIlxuICAgICkuZGF0YXNldC5pbmRleDtcbiAgICBmb3JlY2FzdERhaWx5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZm9yZWNhc3RIb3VybHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICByZVJlbmRlck5hdmlnYXRpb25Eb3RzKDI0LCBNYXRoLmZsb29yKGZpcnN0QWN0aXZlRm9yZWNhc3RJbmRleCAvIDgpKTtcbiAgfSk7XG5cbiAgZm9yZWNhc3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0RGFpbHlCdG4pO1xuICBmb3JlY2FzdEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYWlseUxhYmVsKTtcbiAgZm9yZWNhc3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SG91cmx5QnRuKTtcbiAgZm9yZWNhc3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SG91cmx5TGFiZWwpO1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdEJ0bldyYXBwZXIpO1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0Q29tcG9uZW50KTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RDb21wb25lbnQpO1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uKTtcblxuICByZXR1cm4gZm9yZWNhc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBkYWlseSBmb3JlY2FzdCBsaXN0LlxuICogQHBhcmFtIHtPYmplY3R9IGRhaWx5Rm9yZWNhc3REYXRhIC0gRGFpbHkgZm9yZWNhc3QgZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IHVuaXRzIC0gVW5pdHMgdG8gZGlzcGxheVxuICogQHBhcmFtIHtPYmplY3R9IHRpbWV6b25lIC0gVGltZXpvbmUgb2YgdGhlIGxvY2F0aW9uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRGFpbHkgZm9yZWNhc3QgbGlzdFxuICovXG5mdW5jdGlvbiBkYWlseUZvcmVjYXN0TGlzdChkYWlseUZvcmVjYXN0RGF0YSwgdW5pdHMsIHRpbWV6b25lKSB7XG4gIGNvbnN0IGRhaWx5Rm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBkYWlseUZvcmVjYXN0TGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHlcIiwgXCJhY3RpdmVcIik7XG4gIGRhaWx5Rm9yZWNhc3RMaXN0LmlkID0gXCJmb3JlY2FzdC1kYWlseVwiO1xuXG4gIGxldCB0ZW1wZXJhdHVyZURpc3BsYXlVbml0O1xuICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikge1xuICAgIHRlbXBlcmF0dXJlRGlzcGxheVVuaXQgPSBcIiDCsEZcIjtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBDXCI7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wSGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJdGVtVGVtcExvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgZGFpbHlGb3JlY2FzdEl0ZW0uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRhaWx5LWl0ZW1cIik7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1EYXRlLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtLWRhdGVcIik7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wSGkuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcEhpXCIpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpLmlkID0gXCJ0ZW1wZXJhdHVyZURpc3BsYXlcIjtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBMby5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wTG9cIik7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wTG8uaWQgPSBcInRlbXBlcmF0dXJlRGlzcGxheVwiO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHktaXRlbS1pY29uXCIpO1xuXG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1EYXRlLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUaW1lc3RhbXAoXG4gICAgICBkYWlseUZvcmVjYXN0RGF0YVtpXS5kdFxuICAgICkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7IHdlZWtkYXk6IFwic2hvcnRcIiwgdGltZVpvbmU6IHRpbWV6b25lIH0pO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpLnRleHRDb250ZW50ID0gYCR7ZGFpbHlGb3JlY2FzdERhdGFbXG4gICAgICBpXG4gICAgXS50ZW1wLm1heC50b0ZpeGVkKDEpfSR7dGVtcGVyYXR1cmVEaXNwbGF5VW5pdH1gO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcExvLnRleHRDb250ZW50ID0gYCR7ZGFpbHlGb3JlY2FzdERhdGFbXG4gICAgICBpXG4gICAgXS50ZW1wLm1pbi50b0ZpeGVkKDEpfSR7dGVtcGVyYXR1cmVEaXNwbGF5VW5pdH1gO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtSWNvbi5zcmMgPVxuICAgICAgXCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy9cIiArXG4gICAgICBkYWlseUZvcmVjYXN0RGF0YVtpXS53ZWF0aGVyWzBdLmljb24gK1xuICAgICAgXCIucG5nXCI7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1JY29uLmFsdCA9IGRhaWx5Rm9yZWNhc3REYXRhW2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgICAuam9pbihcIiBcIik7XG5cbiAgICBkYWlseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SXRlbURhdGUpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SXRlbVRlbXBMbyk7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdEl0ZW1JY29uKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RMaXN0LmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RJdGVtKTtcbiAgfVxuXG4gIHJldHVybiBkYWlseUZvcmVjYXN0TGlzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGhvdXJseSBmb3JlY2FzdCBsaXN0LlxuICogQHBhcmFtIHtPYmplY3R9IGhvdXJseUZvcmVjYXN0RGF0YSAtIEhvdXJseSBmb3JlY2FzdCBkYXRhXG4gKiBAcGFyYW0ge1N0cmluZ30gdW5pdHMgLSBVbml0cyB0byBkaXNwbGF5XG4gKiBAcGFyYW0ge1N0cmluZ30gdGltZXpvbmUgLSBUaW1lem9uZSBvZiB0aGUgbG9jYXRpb25cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBIb3VybHkgZm9yZWNhc3QgbGlzdFxuICovXG5mdW5jdGlvbiBob3VybHlGb3JlY2FzdExpc3QoaG91cmx5Rm9yZWNhc3REYXRhLCB1bml0cywgdGltZXpvbmUpIHtcbiAgY29uc3QgaG91cmx5Rm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBob3VybHlGb3JlY2FzdExpc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWhvdXJseVwiKTtcbiAgaG91cmx5Rm9yZWNhc3RMaXN0LmlkID0gXCJmb3JlY2FzdC1ob3VybHlcIjtcblxuICBsZXQgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdDtcbiAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBGXCI7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdCA9IFwiIMKwQ1wiO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgY29uc3QgaG91cmx5Rm9yZWNhc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0SXRlbVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0SXRlbVRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0SXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1ob3VybHktaXRlbVwiKTtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1UaW1lLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1ob3VybHktaXRlbS10aW1lXCIpO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbVRlbXAuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWhvdXJseS1pdGVtLXRlbXBcIik7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtVGVtcC5pZCA9IFwidGVtcGVyYXR1cmVEaXNwbGF5XCI7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaG91cmx5LWl0ZW0taWNvblwiKTtcblxuICAgIGhvdXJseUZvcmVjYXN0SXRlbS5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1UaW1lLnRleHRDb250ZW50ID0gY29udmVydFVuaXhUaW1lc3RhbXAoXG4gICAgICBob3VybHlGb3JlY2FzdERhdGFbaV0uZHRcbiAgICApLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgICBob3VyMTI6IHRydWUsXG4gICAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgfSk7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtVGVtcC50ZXh0Q29udGVudCA9IGAke2hvdXJseUZvcmVjYXN0RGF0YVtpXS50ZW1wLnRvRml4ZWQoXG4gICAgICAxXG4gICAgKX0ke3RlbXBlcmF0dXJlRGlzcGxheVVuaXR9YDtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1JY29uLnNyYyA9XG4gICAgICBcImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93L1wiICtcbiAgICAgIGhvdXJseUZvcmVjYXN0RGF0YVtpXS53ZWF0aGVyWzBdLmljb24gK1xuICAgICAgXCIucG5nXCI7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtSWNvbi5hbHQgPSBob3VybHlGb3JlY2FzdERhdGFbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvblxuICAgICAgLnNwbGl0KFwiIFwiKVxuICAgICAgLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAgIC5qb2luKFwiIFwiKTtcblxuICAgIGhvdXJseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEl0ZW1UaW1lKTtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJdGVtVGVtcCk7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SXRlbUljb24pO1xuICAgIGhvdXJseUZvcmVjYXN0TGlzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEl0ZW0pO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICBob3VybHlGb3JlY2FzdExpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHJldHVybiBob3VybHlGb3JlY2FzdExpc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBuYXZpZ2F0aW9uIGRvdHMgYmFzZWQgb24gdGhlIGN1cnJlbnQgZm9yZWNhc3QgdGFiLlxuICogQHBhcmFtIHtudW1iZXJ9IG51bVRhYnMgTnVtYmVyIG9mIHRhYnMgYWN0aXZlXG4gKiBAcGFyYW0ge251bWJlcn0gYWN0aXZlRG90SW5kZXggSW5kZXggb2YgdGhlIGFjdGl2ZSBkb3RcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBOYXZpZ2F0aW9uIGRvdHNcbiAqL1xuZnVuY3Rpb24gbmF2aWdhdGlvbkRvdHMobnVtVGFicywgYWN0aXZlRG90SW5kZXgpIHtcbiAgY29uc3QgbmF2aWdhdGlvbkRvdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBudW1Eb3RzID0gbnVtVGFicyA8PSA3ID8gMSA6IDM7XG5cbiAgbmF2aWdhdGlvbkRvdHMuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzXCIpO1xuICBuYXZpZ2F0aW9uRG90cy5pZCA9IFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdHNcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Eb3RzOyBpKyspIHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uRG90QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IG5hdmlnYXRpb25Eb3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYXZpZ2F0aW9uRG90QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1uYXZpZ2F0aW9uRG90QnRuXCIpO1xuICAgIG5hdmlnYXRpb25Eb3RCdG4uaWQgPSBcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3QtXCIgKyBpO1xuICAgIG5hdmlnYXRpb25Eb3RCdG4udHlwZSA9IFwicmFkaW9cIjtcbiAgICBuYXZpZ2F0aW9uRG90QnRuLm5hbWUgPSBcIm5hdmlnYXRpb25cIjtcbiAgICBuYXZpZ2F0aW9uRG90QnRuLnZhbHVlID0gaTtcbiAgICBuYXZpZ2F0aW9uRG90TGFiZWwuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdExhYmVsXCIsXG4gICAgICBcInN3ZWVwVG9SaWdodFwiXG4gICAgKTtcbiAgICBuYXZpZ2F0aW9uRG90TGFiZWwuaHRtbEZvciA9IFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdC1cIiArIGk7XG5cbiAgICBpZiAobnVtRG90cyA+IDEpIHtcbiAgICAgIG5hdmlnYXRpb25Eb3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBuYXZJbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RIb3VybHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0LWhvdXJseVwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdEhvdXJseS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvcmVjYXN0SG91cmx5LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgICBmb3JlY2FzdEhvdXJseS5jaGlsZHJlbltpICsgbmF2SW5kZXggKiA4XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0aW9uRG90cy5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uRG90QnRuKTtcbiAgICBuYXZpZ2F0aW9uRG90cy5hcHBlbmRDaGlsZChuYXZpZ2F0aW9uRG90TGFiZWwpO1xuICB9XG4gIG5hdmlnYXRpb25Eb3RzLmNoaWxkcmVuW2FjdGl2ZURvdEluZGV4ICogMl0uY2hlY2tlZCA9IHRydWU7XG5cbiAgcmV0dXJuIG5hdmlnYXRpb25Eb3RzO1xufVxuXG4vKipcbiAqIFJlLXJlbmRlciB0aGUgbmF2aWdhdGlvbiBkb3RzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGZvcmVjYXN0IHRhYi5cbiAqIEBwYXJhbSB7TnVtYmVyfSBudW1UYWJzIE51bWJlciBvZiB0YWJzIGFjdGl2ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGl2ZURvdEluZGV4IEluZGV4IG9mIHRoZSBhY3RpdmUgZG90XG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiByZVJlbmRlck5hdmlnYXRpb25Eb3RzKG51bVRhYnMsIGFjdGl2ZURvdEluZGV4KSB7XG4gIGNvbnN0IHByZXZpb3VzTmF2aWdhdGlvbkRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzXCJcbiAgKTtcbiAgY29uc3QgbmV3TmF2aWdhdGlvbkRvdHMgPSBuYXZpZ2F0aW9uRG90cyhudW1UYWJzLCBhY3RpdmVEb3RJbmRleCk7XG4gIHByZXZpb3VzTmF2aWdhdGlvbkRvdHMucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoXG4gICAgbmV3TmF2aWdhdGlvbkRvdHMsXG4gICAgcHJldmlvdXNOYXZpZ2F0aW9uRG90c1xuICApO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEluaXRpYWxpemUgcGFnZSBsb2FkXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdlYXRoZXJJbmZvQ29tcG9uZW50IGZyb20gXCIuL3dlYXRoZXJJbmZvXCI7XG5pbXBvcnQgd2VhdGhlckRldGFpbHNDb21wb25lbnQgZnJvbSBcIi4vd2VhdGhlckRldGFpbHNcIjtcbmltcG9ydCBzZWFyY2hCb3hDb21wb25lbnQgZnJvbSBcIi4vc2VhcmNoQm94XCI7XG5pbXBvcnQgZm9yZWNhc3RDb21wb25lbnQgZnJvbSBcIi4vZm9yZWNhc3RcIjtcblxuaW1wb3J0IGFwcGxlVG91Y2hJY29uSHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIjtcbmltcG9ydCBmYXZpY29uMzJIcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiO1xuaW1wb3J0IGZhdmljb24xNkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nXCI7XG5pbXBvcnQgbWFuaWZlc3RIcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCI7XG5pbXBvcnQgbWFza0ljb25IcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIjtcbi8vIGltcG9ydCBzaG9ydGN1dEljb25IcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9mYXZpY29uLmljb1wiO1xuaW1wb3J0IG1zQ29uZmlnSHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vYnJvd3NlcmNvbmZpZy54bWxcIjtcblxuLyoqXG4gKiBBZGQgZmF2aWNvbnMgdG8gdGhlIHBhZ2UuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBsb2FkRmF2aWNvbnMoKSB7XG4gIGNvbnN0IGFwcGxlVG91Y2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IGZhdmljb24zMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBmYXZpY29uMTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgbWFuaWZlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgLy8gY29uc3Qgc2hvcnRjdXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IG1hc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IG1zVGlsZUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG4gIGNvbnN0IG1zQ29uZmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG4gIGNvbnN0IHRoZW1lQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcbiAgYXBwbGVUb3VjaEljb24ucmVsID0gXCJhcHBsZS10b3VjaC1pY29uXCI7XG4gIGFwcGxlVG91Y2hJY29uLnNpemVzID0gXCIxODB4MTgwXCI7XG4gIGFwcGxlVG91Y2hJY29uLmhyZWYgPSBhcHBsZVRvdWNoSWNvbkhyZWY7XG4gIGZhdmljb24zMi5yZWwgPSBcImljb25cIjtcbiAgZmF2aWNvbjMyLnR5cGUgPSBcImltYWdlL3BuZ1wiO1xuICBmYXZpY29uMzIuc2l6ZXMgPSBcIjMyeDMyXCI7XG4gIGZhdmljb24zMi5ocmVmID0gZmF2aWNvbjMySHJlZjtcbiAgZmF2aWNvbjE2LnJlbCA9IFwiaWNvblwiO1xuICBmYXZpY29uMTYudHlwZSA9IFwiaW1hZ2UvcG5nXCI7XG4gIGZhdmljb24xNi5zaXplcyA9IFwiMTZ4MTZcIjtcbiAgZmF2aWNvbjE2LmhyZWYgPSBmYXZpY29uMTZIcmVmO1xuICBtYW5pZmVzdC5yZWwgPSBcIm1hbmlmZXN0XCI7XG4gIG1hbmlmZXN0LmhyZWYgPSBtYW5pZmVzdEhyZWY7XG4gIC8vIHNob3J0Y3V0SWNvbi5yZWwgPSBcInNob3J0Y3V0IGljb25cIjtcbiAgLy8gc2hvcnRjdXRJY29uLmhyZWYgPSBzaG9ydGN1dEljb25IcmVmO1xuICBtYXNrSWNvbi5yZWwgPSBcIm1hc2staWNvblwiO1xuICBtYXNrSWNvbi5ocmVmID0gbWFza0ljb25IcmVmO1xuICBtYXNrSWNvbi5jb2xvciA9IFwiIzViYmFkNVwiO1xuICBtc1RpbGVDb2xvci5uYW1lID0gXCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiO1xuICBtc1RpbGVDb2xvci5jb250ZW50ID0gXCIjOWYwMGE3XCI7XG4gIG1zQ29uZmlnLm5hbWUgPSBcIm1zYXBwbGljYXRpb24tY29uZmlnXCI7XG4gIG1zQ29uZmlnLmNvbnRlbnQgPSBtc0NvbmZpZ0hyZWY7XG4gIHRoZW1lQ29sb3IubmFtZSA9IFwidGhlbWUtY29sb3JcIjtcbiAgdGhlbWVDb2xvci5jb250ZW50ID0gXCIjZmZmZmZmXCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYXBwbGVUb3VjaEljb24pO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhdmljb24zMik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbjE2KTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYW5pZmVzdCk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWFza0ljb24pO1xuICAvLyBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNob3J0Y3V0SWNvbik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobXNUaWxlQ29sb3IpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1zQ29uZmlnKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0aGVtZUNvbG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1haW4gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE1haW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIndpZGVTY3JlZW5XcmFwcGVyXCIpO1xuICBtYWluLmlkID0gXCJ3aWRlU2NyZWVuV3JhcHBlclwiO1xuICByZXR1cm4gbWFpbjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGZvb3RlciBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRm9vdGVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBsb2FkS2l0KCk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiQ29weXJpZ2h0IMKpIFwiICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgXCIgRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9GZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgZm9vdGVyTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbi8qKlxuICogTG9hZCB0aGUgZm9udGF3ZXNvbWUga2l0LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gbG9hZEtpdCgpIHtcbiAgY29uc3QgZm9udGF3ZXNvbWVLaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBmb250YXdlc29tZUtpdC5zcmMgPSBcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9iNmI0MGEzOTAyLmpzXCI7XG4gIGZvbnRhd2Vzb21lS2l0LmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmb250YXdlc29tZUtpdCk7XG59XG5cbi8qKlxuICogTG9hZCBHb29nbGUgRm9udHMgaWNvbnMuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBsb2FkR29vZ2xlSWNvbnMoKSB7XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGljb25zLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcIjtcbiAgaWNvbnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbnMpO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgcGFnZSBsb2FkLlxuICogQHBhcmFtIHtPYmplY3R9IGNvb3Jkc0RhdGEgQ29vcmRpbmF0ZXMgZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IHdlYXRoZXJEYXRhIFdlYXRoZXIgZGF0YVxuICogQHBhcmFtIHtzdHJpbmd9IHVuaXRzIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTG9hZChjb29yZHNEYXRhLCB3ZWF0aGVyRGF0YSwgdW5pdHMpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3Qgd2lkZVNjcmVlbldyYXBwZXIgPSBtYWluKCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2lkZVNjcmVlbldyYXBwZXIpO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICB3ZWF0aGVySW5mb0NvbXBvbmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cylcbiAgKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgc2VhcmNoQm94Q29tcG9uZW50KGNvb3Jkc0RhdGEsIHdlYXRoZXJEYXRhLmN1cnJlbnQuZHQsIHdlYXRoZXJEYXRhLnRpbWV6b25lKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICB3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cylcbiAgKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgZm9yZWNhc3RDb21wb25lbnQoXG4gICAgICB3ZWF0aGVyRGF0YS5kYWlseSxcbiAgICAgIHdlYXRoZXJEYXRhLmhvdXJseSxcbiAgICAgIHVuaXRzLFxuICAgICAgd2VhdGhlckRhdGEudGltZXpvbmVcbiAgICApXG4gICk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuICBsb2FkRmF2aWNvbnMoKTtcbiAgbG9hZEdvb2dsZUljb25zKCk7XG59XG5cbi8qKlxuICogUmUtcmVuZGVyIHRoZSBtYWluIGNvbXBvbmVudCB3aXRoIHVwZGF0ZWQgZGF0YS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb29yZHNEYXRhIENvb3JkaW5hdGVzIGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyRGF0YSBXZWF0aGVyIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSB1bml0cyBVbml0cyB0byBkaXNwbGF5XG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlUmVuZGVyTWFpbihjb29yZHNEYXRhLCB3ZWF0aGVyRGF0YSwgdW5pdHMpIHtcbiAgY29uc3Qgd2lkZVNjcmVlbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpZGVTY3JlZW5XcmFwcGVyXCIpO1xuICB3aWRlU2NyZWVuV3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICB3ZWF0aGVySW5mb0NvbXBvbmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cylcbiAgKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgc2VhcmNoQm94Q29tcG9uZW50KGNvb3Jkc0RhdGEsIHdlYXRoZXJEYXRhLmN1cnJlbnQuZHQsIHdlYXRoZXJEYXRhLnRpbWV6b25lKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICB3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cylcbiAgKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgZm9yZWNhc3RDb21wb25lbnQoXG4gICAgICB3ZWF0aGVyRGF0YS5kYWlseSxcbiAgICAgIHdlYXRoZXJEYXRhLmhvdXJseSxcbiAgICAgIHVuaXRzLFxuICAgICAgd2VhdGhlckRhdGEudGltZXpvbmVcbiAgICApXG4gICk7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHNlYXJjaCBib3ggY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udmVydFVuaXhUaW1lc3RhbXAsIHVwZGF0ZU1haW4gfSBmcm9tIFwiLi5cIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHNlYXJjaCBib3ggY29tcG9uZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGNvb3Jkc0RhdGEgLSBDb29yZGluYXRlcyBkYXRhXG4gKiBAcGFyYW0ge051bWJlcn0gY3VycmVudFVuaXhUaW1lc3RhbXAgLSBDdXJyZW50IHVuaXggdGltZXN0YW1wXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZXpvbmUgLSBUaW1lem9uZSBvZiB0aGUgbG9jYXRpb25cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBTZWFyY2ggYm94IGNvbXBvbmVudFxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoQm94Q29tcG9uZW50KFxuICBjb29yZHNEYXRhLFxuICBjdXJyZW50VW5peFRpbWVzdGFtcCxcbiAgdGltZXpvbmVcbikge1xuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94XCIpO1xuICBzZWFyY2hCb3guY2xhc3NMaXN0LmFkZChcImZyb3N0ZWRHbGFzc1wiKTtcbiAgc2VhcmNoRm9ybS5pZCA9IFwic2VhcmNoQm94LWZvcm1cIjtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWZvcm1cIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiwgXCJzZWFyY2hCb3gtaWNvblwiLCBcInNpemUtMjBcIik7XG4gIGljb24uaHRtbEZvciA9IFwic2VhcmNoQm94LWlucHV0LWNpdHlcIjtcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1pbnB1dFwiKTtcbiAgc2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaEJveC1pbnB1dC1jaXR5XCI7XG4gIHNlYXJjaElucHV0Lm5hbWUgPSBcImNpdHlcIjtcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGNpdHlcIjtcbiAgc2VhcmNoSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBzZWFyY2hJbnB1dC5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHNlYXJjaElucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gIGVycm9yLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtZXJyb3JcIik7XG4gIGVycm9yLmlkID0gXCJzZWFyY2hCb3gtZXJyb3JcIjtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1sb2NhdGlvblwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWRhdGVUaW1lXCIpO1xuICBsb2NhbFRpbWUuY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1sb2NhbFRpbWVcIik7XG5cbiAgaWNvbi50ZXh0Q29udGVudCA9IFwic2VhcmNoXCI7XG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB1cGRhdGVNYWluKCk7XG4gIH0pO1xuICBlcnJvci50ZXh0Q29udGVudCA9IFwiSW52YWxpZCBjaXR5IG5hbWUuIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7Y29vcmRzRGF0YS5uYW1lfSwgJHtjb29yZHNEYXRhLmNvdW50cnl9YDtcbiAgY29uc3QgY3VycmVudERhdGVUaW1lID0gY29udmVydFVuaXhUaW1lc3RhbXAoY3VycmVudFVuaXhUaW1lc3RhbXAsIHRpbWV6b25lKTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnREYXRlVGltZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgd2Vla2RheTogXCJsb25nXCIsXG4gIH0pfSwgJHtjdXJyZW50RGF0ZVRpbWUuZ2V0RGF0ZSgpfSAke2N1cnJlbnREYXRlVGltZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgbW9udGg6IFwibG9uZ1wiLFxuICB9KX0gJHtjdXJyZW50RGF0ZVRpbWUuZ2V0RnVsbFllYXIoKX1gO1xuICBsb2NhbFRpbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RGF0ZVRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgfSl9YDtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGN1cnJlbnREYXRlVGltZS5zZXRTZWNvbmRzKGN1cnJlbnREYXRlVGltZS5nZXRTZWNvbmRzKCkgKyAxKTtcbiAgICBsb2NhbFRpbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50RGF0ZVRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIH0pfWA7XG4gIH0sIDEwMDApO1xuXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChlcnJvcik7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGxvY2FsVGltZSk7XG5cbiAgcmV0dXJuIHNlYXJjaEJveDtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGUgd2VhdGhlciBkZXRhaWxzIGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSB3ZWF0aGVyIGRldGFpbHMgY29tcG9uZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGN1cnJlbnRXZWF0aGVyRGF0YSAtIEN1cnJlbnQgd2VhdGhlciBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gdW5pdHMgLSBVbml0cyB0byBkaXNwbGF5XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gV2VhdGhlciBkZXRhaWxzIGNvbXBvbmVudFxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VhdGhlckRldGFpbHMoY3VycmVudFdlYXRoZXJEYXRhLCB1bml0cykge1xuICBjb25zdCB3ZWF0aGVyRGV0YWlsc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgd2VhdGhlckRldGFpbHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyRGV0YWlsc1wiKTtcbiAgd2VhdGhlckRldGFpbHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJmcm9zdGVkR2xhc3NcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzSXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0l0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzSXRlbVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEZXRhaWxzLWl0ZW1cIik7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIsXG4gICAgICBcIndlYXRoZXJEZXRhaWxzLWljb25cIixcbiAgICAgIFwic2l6ZS0yMFwiXG4gICAgKTtcbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgd2VhdGhlckRldGFpbHNJdGVtVmFsdWUuaWQgPSBcInRlbXBlcmF0dXJlRGlzcGxheVwiO1xuICAgIH1cbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1MYWJlbC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHMtbGFiZWxcIik7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtVmFsdWUuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEZXRhaWxzLXZhbHVlXCIpO1xuXG4gICAgd2VhdGhlckRldGFpbHNJdGVtVmFsdWUudGV4dENvbnRlbnQgPSBcIjEwMCVcIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNJdGVtSWNvbik7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtLmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzSXRlbUxhYmVsKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNJdGVtVmFsdWUpO1xuICAgIHdlYXRoZXJEZXRhaWxzTGlzdC5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0l0ZW0pO1xuICB9XG5cbiAgY29uc3Qgd2VhdGhlckRldGFpbHNJY29ucyA9IHdlYXRoZXJEZXRhaWxzTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLndlYXRoZXJEZXRhaWxzLWljb25cIlxuICApO1xuICB3ZWF0aGVyRGV0YWlsc0ljb25zWzBdLnRleHRDb250ZW50ID0gXCJ0aGVybW9zdGF0XCI7XG4gIHdlYXRoZXJEZXRhaWxzSWNvbnNbMV0udGV4dENvbnRlbnQgPSBcImh1bWlkaXR5X3BlcmNlbnRhZ2VcIjtcbiAgd2VhdGhlckRldGFpbHNJY29uc1syXS50ZXh0Q29udGVudCA9IFwiY2xvdWR5XCI7XG4gIHdlYXRoZXJEZXRhaWxzSWNvbnNbM10udGV4dENvbnRlbnQgPSBcImFpclwiO1xuXG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzTGFiZWxzID0gd2VhdGhlckRldGFpbHNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIud2VhdGhlckRldGFpbHMtbGFiZWxcIlxuICApO1xuICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1swXS50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZVwiO1xuICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1sxXS50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHlcIjtcbiAgd2VhdGhlckRldGFpbHNMYWJlbHNbMl0udGV4dENvbnRlbnQgPSBcIkNsb3Vkc1wiO1xuICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1szXS50ZXh0Q29udGVudCA9IFwiV2luZCBTcGVlZFwiO1xuXG4gIGxldCB0ZW1wZXJhdHVyZURpc3BsYXlVbml0O1xuICBsZXQgd2luZFNwZWVkRGlzcGxheVVuaXQ7XG4gIGlmICh1bml0cyA9PT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdCA9IFwiIMKwRlwiO1xuICAgIHdpbmRTcGVlZERpc3BsYXlVbml0ID0gXCIgbXBoXCI7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdCA9IFwiIMKwQ1wiO1xuICAgIHdpbmRTcGVlZERpc3BsYXlVbml0ID0gXCIga20vaFwiO1xuICB9XG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzVmFsdWVzID0gd2VhdGhlckRldGFpbHNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIud2VhdGhlckRldGFpbHMtdmFsdWVcIlxuICApO1xuICB3ZWF0aGVyRGV0YWlsc1ZhbHVlc1swXS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS5mZWVsc19saWtlLnRvRml4ZWQoXG4gICAgMVxuICApfSR7dGVtcGVyYXR1cmVEaXNwbGF5VW5pdH1gO1xuICB3ZWF0aGVyRGV0YWlsc1ZhbHVlc1sxXS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS5odW1pZGl0eX0lYDtcbiAgd2VhdGhlckRldGFpbHNWYWx1ZXNbMl0udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlckRhdGEuY2xvdWRzfSVgO1xuICB3ZWF0aGVyRGV0YWlsc1ZhbHVlc1szXS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS53aW5kX3NwZWVkLnRvRml4ZWQoXG4gICAgMVxuICApfSR7d2luZFNwZWVkRGlzcGxheVVuaXR9YDtcbiAgd2VhdGhlckRldGFpbHNWYWx1ZXNbM10uaWQgPSBcIndpbmRTcGVlZERpc3BsYXlcIjtcblxuICByZXR1cm4gd2VhdGhlckRldGFpbHNMaXN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSB3ZWF0aGVyIGluZm8gY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHdlYXRoZXIgaW5mbyBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gY3VycmVudFdlYXRoZXJEYXRhIC0gVGhlIGN1cnJlbnQgd2VhdGhlciBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gdW5pdHMgLSBVbml0cyB0byBkaXNwbGF5XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gV2VhdGhlciBpbmZvIGNvbXBvbmVudFxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VhdGhlckluZm8oY3VycmVudFdlYXRoZXJEYXRhLCB1bml0cykge1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdW5pdENoYW5nZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIHdlYXRoZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb1wiKTtcbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZChcImZyb3N0ZWRHbGFzc1wiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvLWRlc2NyaXB0aW9uXCIpO1xuICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8tdGVtcGVyYXR1cmVcIik7XG4gIHRlbXBlcmF0dXJlLmlkID0gXCJ0ZW1wZXJhdHVyZURpc3BsYXlcIjtcbiAgdW5pdENoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8tdW5pdENoYW5nZUJ0blwiKTtcbiAgdW5pdENoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwic3dlZXBUb1JpZ2h0XCIpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mby1pY29uXCIpO1xuXG4gIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGN1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgLnNwbGl0KFwiIFwiKVxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgLmpvaW4oXCIgXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEZXNjcmlwdGlvbjtcbiAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS50ZW1wLnRvRml4ZWQoMSl9IMKwRmA7XG4gICAgdW5pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsENcIjtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS50ZW1wLnRvRml4ZWQoMSl9IMKwQ2A7XG4gICAgdW5pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsEZcIjtcbiAgfVxuICB1bml0Q2hhbmdlQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICB1bml0Q2hhbmdlQnRuLmlkID0gXCJ1bml0Q2hhbmdlQnRuXCI7XG4gIHVuaXRDaGFuZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0ZW1wZXJhdHVyZURpc3BsYXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiI3RlbXBlcmF0dXJlRGlzcGxheVwiXG4gICAgKTtcbiAgICBjb25zdCB3aW5kU3BlZWREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kU3BlZWREaXNwbGF5XCIpO1xuICAgIGNvbnN0IHVuaXRDaGFuZ2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRDaGFuZ2VCdG5cIik7XG4gICAgaWYgKHVuaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPT09IFwiRGlzcGxheSDCsEZcIikge1xuICAgICAgdGVtcGVyYXR1cmVEaXNwbGF5cy5mb3JFYWNoKCh0ZW1wZXJhdHVyZURpc3BsYXkpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZURpc3BsYXkudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgICB0ZW1wZXJhdHVyZURpc3BsYXkudGV4dENvbnRlbnQgPSBgJHsoXG4gICAgICAgICAgKHRlbXBlcmF0dXJlICogOSkgLyA1ICtcbiAgICAgICAgICAzMlxuICAgICAgICApLnRvRml4ZWQoMSl9IMKwRmA7XG4gICAgICB9KTtcbiAgICAgIHdpbmRTcGVlZERpc3BsYXkudGV4dENvbnRlbnQgPSBgJHsoXG4gICAgICAgIHdpbmRTcGVlZERpc3BsYXkudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzBdICogMi4yMzdcbiAgICAgICkudG9GaXhlZCgxKX0gbXBoYDtcbiAgICAgIHVuaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPSBcIkRpc3BsYXkgwrBDXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRlbXBlcmF0dXJlRGlzcGxheXMuZm9yRWFjaCgodGVtcGVyYXR1cmVEaXNwbGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmVEaXNwbGF5LnRleHRDb250ZW50LnNwbGl0KFwiIFwiKVswXTtcbiAgICAgICAgdGVtcGVyYXR1cmVEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7KFxuICAgICAgICAgICh0ZW1wZXJhdHVyZSAtIDMyKSAqXG4gICAgICAgICAgKDUgLyA5KVxuICAgICAgICApLnRvRml4ZWQoMSl9IMKwQ2A7XG4gICAgICB9KTtcbiAgICAgIHdpbmRTcGVlZERpc3BsYXkudGV4dENvbnRlbnQgPSBgJHsoXG4gICAgICAgIHdpbmRTcGVlZERpc3BsYXkudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzBdIC8gMi4yMzdcbiAgICAgICkudG9GaXhlZCgxKX0ga20vaGA7XG4gICAgICB1bml0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJEaXNwbGF5IMKwRlwiO1xuICAgIH1cbiAgfSk7XG4gIGljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2N1cnJlbnRXZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG4gIGljb24uYWx0ID0gd2VhdGhlckRlc2NyaXB0aW9uO1xuXG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmUpO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZCh1bml0Q2hhbmdlQnRuKTtcbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIHdlYXRoZXJJbmZvO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFdlYXRoZXIgYXBwXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHBhZ2VMb2FkLCB7IHJlUmVuZGVyTWFpbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFnZUxvYWRcIjtcbmltcG9ydCB7XG4gIGJ1aWxkQ29vcmRzVXJsLFxuICBidWlsZFdlYXRoZXJVcmwsXG4gIGdldFdlYXRoZXIsXG4gIGdldENvb3Jkcyxcbn0gZnJvbSBcIi4vY29tcG9uZW50cy9mZXRjaERhdGFcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy1yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgZGVmYXVsdExvY2F0aW9uID0gXCJCb3N0b25cIjtcbmNvbnN0IGRlZmF1bHRVbml0cyA9IFwibWV0cmljXCI7XG5cbi8qKlxuICogQ29udmVydCBVbml4IHRpbWVzdGFtcCB0byBEYXRlIG9iamVjdFxuICogQHBhcmFtIHtOdW1iZXJ9IHVuaXhUaW1lc3RhbXAgLSBVbml4IHRpbWVzdGFtcFxuICogQHJldHVybiB7RGF0ZX0gRGF0ZSBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRVbml4VGltZXN0YW1wKHVuaXhUaW1lc3RhbXApIHtcbiAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKHVuaXhUaW1lc3RhbXAgKiAxMDAwKTtcbiAgcmV0dXJuIGRhdGVPYmo7XG59XG5cbi8qKlxuICogRmV0Y2ggZGVmYXVsdCB3ZWF0aGVyIGRhdGEuXG4gKiBAcmV0dXJuIHtPYmplY3R9IERlZmF1bHQgd2VhdGhlciBkYXRhXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRGVmYXVsdERhdGEoKSB7XG4gIGNvbnN0IGRlZmF1bHRDb29yZHNVcmwgPSBidWlsZENvb3Jkc1VybChkZWZhdWx0TG9jYXRpb24pO1xuICBjb25zdCBkZWZhdWx0Q29vcmRzID0gYXdhaXQgZ2V0Q29vcmRzKGRlZmF1bHRDb29yZHNVcmwpO1xuICBjb25zdCBkZWZhdWx0V2VhdGhlclVybCA9IGJ1aWxkV2VhdGhlclVybChkZWZhdWx0Q29vcmRzLCBkZWZhdWx0VW5pdHMpO1xuICBjb25zdCBkZWZhdWx0V2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGRlZmF1bHRXZWF0aGVyVXJsKTtcbiAgcmV0dXJuIHsgY29vcmRzOiBkZWZhdWx0Q29vcmRzLCB3ZWF0aGVyRGF0YTogZGVmYXVsdFdlYXRoZXJEYXRhIH07XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuYXN5bmMgZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5pZCA9IFwiY29udGVudFwiO1xuICB0cnkge1xuICAgIGNvbnN0IHsgY29vcmRzLCB3ZWF0aGVyRGF0YSB9ID0gYXdhaXQgZmV0Y2hEZWZhdWx0RGF0YSgpO1xuICAgIHBhZ2VMb2FkKGNvb3Jkcywgd2VhdGhlckRhdGEsIGRlZmF1bHRVbml0cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbi8qKlxuICogRmV0Y2ggbmV3IHdlYXRoZXIgZGF0YS5cbiAqIEByZXR1cm4ge09iamVjdH0gQ29vcmRpbmF0ZXMgYW5kIHdlYXRoZXIgZGF0YVxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaE5ld0RhdGEoKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJveC1mb3JtXCIpO1xuICBjb25zdCBsb2NhdGlvbiA9IGZvcm0uY2l0eS52YWx1ZTtcbiAgY29uc3QgY29vcmRzVXJsID0gYnVpbGRDb29yZHNVcmwobG9jYXRpb24pO1xuICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoY29vcmRzVXJsKTtcbiAgY29uc3Qgd2VhdGhlclVybCA9IGJ1aWxkV2VhdGhlclVybChjb29yZHMsIGRlZmF1bHRVbml0cyk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcih3ZWF0aGVyVXJsKTtcbiAgcmV0dXJuIHsgY29vcmRzLCB3ZWF0aGVyRGF0YSB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgbWFpbiBjb250ZW50IHdoZW4gdXNlciBzdWJtaXRzIHRoZSBzZWFyY2ggYm94IGZvcm0uXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZU1haW4oKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjb29yZHMsIHdlYXRoZXJEYXRhIH0gPSBhd2FpdCBmZXRjaE5ld0RhdGEoKTtcbiAgICByZVJlbmRlck1haW4oY29vcmRzLCB3ZWF0aGVyRGF0YSwgZGVmYXVsdFVuaXRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQm94LWZvcm1cIik7XG4gICAgY29uc3Qgc2VhcmNoQm94RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJveC1lcnJvclwiKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgc2VhcmNoQm94RXJyb3IuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5zdGFydEFwcCgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQ3V0ZUZvbnQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI2Y5ZDM0MjsgLyogeWVsbG93ICovXFxuICAtLXNlY29uZGFyeS1jb2xvcjogI2ZmN2M2MDsgLyogb3JhbmdlLXJlZCAqL1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogIzdjZmY2YTsgLyogZ3JlZW4gKi9cXG4gIC0tYWNjZW50LWNvbG9yOiAjNmE3Y2ZmOyAvKiBibHVlICovXFxuICAtLWJhY2tncm91bmQtY29sb3I6IDI1LCAyNSwgMjU7IC8qIGJsYWNrICovXFxuICAtLWZvcmVncm91bmQtY29sb3I6ICNmZmZmZmY7IC8qIHdoaXRlICovXFxuICAtLXRleHQtY29sb3I6ICNkMWQxZDE7IC8qIGxpZ2h0IGdyYXkgKi9cXG4gIC0tbGluay1jb2xvcjogI2ZmN2M2MDsgLyogc2FtZSBhcyBzZWNvbmRhcnktY29sb3IgKi9cXG4gIC0taG92ZXItY29sb3I6ICM3Y2ZmNmE7IC8qIHNhbWUgYXMgdGVydGlhcnktY29sb3IgKi9cXG4gIC0tdHJhbnNwYXJlbnQ6IHRyYW5zcGFyZW50O1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XFxuICAtLXNwYWNpbmcteHM6IDVweDtcXG4gIC0tc3BhY2luZy1zbTogMTBweDtcXG4gIC0tc3BhY2luZy1tZDogMTVweDtcXG4gIC0tc3BhY2luZy1sZzogMjBweDtcXG4gIC0tc3BhY2luZy14bDogNDBweDtcXG4gIC0tY29udGFpbmVyLXdpZHRoOiAxMjAwcHg7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxuICAtLWJ0bi13aWR0aDogMTAwcHg7XFxuICAtLXNlYXJjaC1iYXItaGVpZ2h0OiA0NHB4O1xcbiAgLS1mb3JlY2FzdC1oZWlnaHQ6IDI1MHB4O1xcbiAgLS1uYXYtZG90LXNpemU6IDEwcHg7XFxuICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXG4gIC0tYm9yZGVyOiAycHggc29saWQgdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4vKiBHTE9CQUwgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3V0ZSBGb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIkN1dGUgRm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLndpZGVTY3JlZW5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMCwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiA0ODtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5zd2VlcFRvUmlnaHQ6aG92ZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLmZyb3N0ZWRHbGFzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAwLjYpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDEwcHgpO1xcbn1cXG5cXG5Ac3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSB7XFxuICAuZnJvc3RlZEdsYXNzIHtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIH1cXG59XFxuXFxuLyogV0VBVEhFUiBJTkZPICovXFxuLndlYXRoZXJJbmZvIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi53ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMSk7XFxufVxcblxcbi53ZWF0aGVySW5mby1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBTRUFSQ0ggQk9YICovXFxuLnNlYXJjaEJveCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5zZWFyY2hCb3gtZm9ybSB7XFxuICBoZWlnaHQ6IHZhcigtLXNlYXJjaC1iYXItaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcXG59XFxuXFxuLnNlYXJjaEJveC1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hCb3gtaWNvbi5zaXplLTIwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiT1BTWlxcXCIgMjA7XFxufVxcblxcbi5zZWFyY2hCb3gtaW5wdXQge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWVycm9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWVycm9yLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogV0VBVEhFUiBERVRBSUxTICovXFxuLndlYXRoZXJEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbiB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbi5zaXplLTIwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiT1BTWlxcXCIgMjA7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy12YWx1ZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4vKiBGT1JFQ0FTVCAqL1xcbi5mb3JlY2FzdCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb3JlY2FzdC1oZWlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0bldyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JlY2FzdC1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1idG4td2lkdGgpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWw6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbGFiZWwge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LWl0ZW0tZGF0ZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBIaSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcExvIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLXRpbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGVtcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzIHtcXG4gIC8qIG1hcmdpbi10b3AgYXMgbXVjaCBhcyBwb3NzaWJsZSB3aXRob3V0IGRpc3BsYWNpbmcgb3RoZXIgZWxlbWVudHMgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90QnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90TGFiZWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IHZhcigtLW5hdi1kb3Qtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1kb3Qtc2l6ZSk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90QnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbmF2aWdhdGlvbkRvdExhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDY0JSkgaHVlLXJvdGF0ZSgyNzhkZWcpXFxuICAgIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoMTA4JSk7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBd0IsRUFBRSxXQUFXO0VBQ3JDLDBCQUEwQixFQUFFLGVBQWU7RUFDM0MseUJBQXlCLEVBQUUsVUFBVTtFQUNyQyx1QkFBdUIsRUFBRSxTQUFTO0VBQ2xDLDhCQUE4QixFQUFFLFVBQVU7RUFDMUMsMkJBQTJCLEVBQUUsVUFBVTtFQUN2QyxxQkFBcUIsRUFBRSxlQUFlO0VBQ3RDLHFCQUFxQixFQUFFLDRCQUE0QjtFQUNuRCxzQkFBc0IsRUFBRSwyQkFBMkI7RUFDbkQsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHlD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O0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNmOWQzNDI7IC8qIHllbGxvdyAqL1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmZjdjNjA7IC8qIG9yYW5nZS1yZWQgKi9cXG4gIC0tdGVydGlhcnktY29sb3I6ICM3Y2ZmNmE7IC8qIGdyZWVuICovXFxuICAtLWFjY2VudC1jb2xvcjogIzZhN2NmZjsgLyogYmx1ZSAqL1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAyNSwgMjUsIDI1OyAvKiBibGFjayAqL1xcbiAgLS1mb3JlZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiB3aGl0ZSAqL1xcbiAgLS10ZXh0LWNvbG9yOiAjZDFkMWQxOyAvKiBsaWdodCBncmF5ICovXFxuICAtLWxpbmstY29sb3I6ICNmZjdjNjA7IC8qIHNhbWUgYXMgc2Vjb25kYXJ5LWNvbG9yICovXFxuICAtLWhvdmVyLWNvbG9yOiAjN2NmZjZhOyAvKiBzYW1lIGFzIHRlcnRpYXJ5LWNvbG9yICovXFxuICAtLXRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgLS1zcGFjaW5nLXhzOiA1cHg7XFxuICAtLXNwYWNpbmctc206IDEwcHg7XFxuICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxuICAtLXNwYWNpbmctbGc6IDIwcHg7XFxuICAtLXNwYWNpbmcteGw6IDQwcHg7XFxuICAtLWNvbnRhaW5lci13aWR0aDogMTIwMHB4O1xcbiAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgLS1idG4td2lkdGg6IDEwMHB4O1xcbiAgLS1zZWFyY2gtYmFyLWhlaWdodDogNDRweDtcXG4gIC0tZm9yZWNhc3QtaGVpZ2h0OiAyNTBweDtcXG4gIC0tbmF2LWRvdC1zaXplOiAxMHB4O1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxuICAtLWJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLyogR0xPQkFMICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkN1dGUgRm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi4vYXNzZXRzL2ZvbnRzL0N1dGVGb250LVJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDdXRlIEZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4ud2lkZVNjcmVlbldyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJGSUxMXFxcIiAwLCBcXFwid2dodFxcXCIgNDAwLCBcXFwiR1JBRFxcXCIgMCwgXFxcIm9wc3pcXFwiIDQ4O1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAxMDAwbXM7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAxMDAwbXM7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5zd2VlcFRvUmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodDpob3ZlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4uZnJvc3RlZEdsYXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDAuNik7XFxuICBiYWNrZHJvcC1maWx0ZXI6IHNhdHVyYXRlKDE4MCUpIGJsdXIoMTBweCk7XFxufVxcblxcbkBzdXBwb3J0cyAoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmUpIG9yIChiYWNrZHJvcC1maWx0ZXI6IG5vbmUpIHtcXG4gIC5mcm9zdGVkR2xhc3Mge1xcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgfVxcbn1cXG5cXG4vKiBXRUFUSEVSIElORk8gKi9cXG4ud2VhdGhlckluZm8ge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi53ZWF0aGVySW5mby10ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXVuaXRDaGFuZ2VCdG4ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHdpZHRoOiB2YXIoLS1idG4td2lkdGgpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAxKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFNFQVJDSCBCT1ggKi9cXG4uc2VhcmNoQm94IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLnNlYXJjaEJveC1mb3JtIHtcXG4gIGhlaWdodDogdmFyKC0tc2VhcmNoLWJhci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJPUFNaXFxcIiAyMDtcXG59XFxuXFxuLnNlYXJjaEJveC1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hCb3gtZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hCb3gtZXJyb3IuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBXRUFUSEVSIERFVEFJTFMgKi9cXG4ud2VhdGhlckRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJPUFNaXFxcIiAyMDtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi8qIEZPUkVDQVNUICovXFxuLmZvcmVjYXN0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBoZWlnaHQ6IHZhcigtLWZvcmVjYXN0LWhlaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxufVxcblxcbi5mb3JlY2FzdC1sYWJlbDpob3ZlciB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMSk7XFxufVxcblxcbi5mb3JlY2FzdC1idG46Y2hlY2tlZCArIC5mb3JlY2FzdC1sYWJlbCB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHktaXRlbS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcEhpIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wTG8ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHktaXRlbSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0uYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGltZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHktaXRlbS10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdHMge1xcbiAgLyogbWFyZ2luLXRvcCBhcyBtdWNoIGFzIHBvc3NpYmxlIHdpdGhvdXQgZGlzcGxhY2luZyBvdGhlciBlbGVtZW50cyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1kb3Qtc2l6ZSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RCdG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RMYWJlbCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogdmFyKC0tbmF2LWRvdC1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tbmF2LWRvdC1zaXplKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RCdG46Y2hlY2tlZCArIC5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90TGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NjQlKSBodWUtcm90YXRlKDI3OGRlZylcXG4gICAgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCgxMDglKTtcXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMtcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMtcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJicm93c2VyY29uZmlnXCI6e1wibXNhcHBsaWNhdGlvblwiOlt7XCJ0aWxlXCI6W3tcInNxdWFyZTE1MHgxNTBsb2dvXCI6W3tcIiRcIjp7XCJzcmNcIjpcIi9hc3NldHMvZmF2aWNvbi9tc3RpbGUtMTUweDE1MC5wbmdcIn19XSxcIlRpbGVDb2xvclwiOltcIiM5ZjAwYTdcIl19XX1dfX0iXSwibmFtZXMiOlsiZ2V0TG9jYXRpb25Gcm9tRm9ybSIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2l0eSIsInZhbHVlIiwic2FuaXRpemVJbnB1dCIsImlucHV0IiwicmVwbGFjZSIsImJ1aWxkQ29vcmRzVXJsIiwiY2l0eU5hbWUiLCJzYW5pdGl6ZWRDaXR5TmFtZSIsImJ1aWxkV2VhdGhlclVybCIsImNvb3JkaW5hdGVzIiwidW5pdHMiLCJsYXQiLCJsb24iLCJnZXRDb29yZHMiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiY29vcmRzRGF0YSIsImpzb24iLCJuYW1lIiwiY291bnRyeSIsImNvb3JkIiwiZ2V0V2VhdGhlciIsIndlYXRoZXJEYXRhIiwiY29udmVydFVuaXhUaW1lc3RhbXAiLCJmb3JlY2FzdENvbXBvbmVudCIsImRhaWx5Rm9yZWNhc3REYXRhIiwiaG91cmx5Rm9yZWNhc3REYXRhIiwidGltZXpvbmUiLCJmb3JlY2FzdCIsImNyZWF0ZUVsZW1lbnQiLCJmb3JlY2FzdEJ0bldyYXBwZXIiLCJmb3JlY2FzdERhaWx5QnRuIiwiZm9yZWNhc3REYWlseUxhYmVsIiwiZm9yZWNhc3RIb3VybHlCdG4iLCJmb3JlY2FzdEhvdXJseUxhYmVsIiwiZGFpbHlGb3JlY2FzdENvbXBvbmVudCIsImRhaWx5Rm9yZWNhc3RMaXN0IiwiaG91cmx5Rm9yZWNhc3RDb21wb25lbnQiLCJob3VybHlGb3JlY2FzdExpc3QiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkRvdHMiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInR5cGUiLCJjaGVja2VkIiwiaHRtbEZvciIsInRleHRDb250ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb3JlY2FzdERhaWx5IiwiZm9yZWNhc3RIb3VybHkiLCJyZW1vdmUiLCJyZVJlbmRlck5hdmlnYXRpb25Eb3RzIiwiZmlyc3RBY3RpdmVGb3JlY2FzdEluZGV4IiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsImFwcGVuZENoaWxkIiwidGVtcGVyYXR1cmVEaXNwbGF5VW5pdCIsImkiLCJkYWlseUZvcmVjYXN0SXRlbSIsImRhaWx5Rm9yZWNhc3RJdGVtRGF0ZSIsImRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpIiwiZGFpbHlGb3JlY2FzdEl0ZW1UZW1wTG8iLCJkYWlseUZvcmVjYXN0SXRlbUljb24iLCJkdCIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsInRpbWVab25lIiwidGVtcCIsIm1heCIsInRvRml4ZWQiLCJtaW4iLCJzcmMiLCJ3ZWF0aGVyIiwiaWNvbiIsImFsdCIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJob3VybHlGb3JlY2FzdEl0ZW0iLCJob3VybHlGb3JlY2FzdEl0ZW1UaW1lIiwiaG91cmx5Rm9yZWNhc3RJdGVtVGVtcCIsImhvdXJseUZvcmVjYXN0SXRlbUljb24iLCJob3VyIiwiaG91cjEyIiwiY2hpbGRyZW4iLCJudW1UYWJzIiwiYWN0aXZlRG90SW5kZXgiLCJudW1Eb3RzIiwibmF2aWdhdGlvbkRvdEJ0biIsIm5hdmlnYXRpb25Eb3RMYWJlbCIsIm5hdkluZGV4IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJsZW5ndGgiLCJwcmV2aW91c05hdmlnYXRpb25Eb3RzIiwibmV3TmF2aWdhdGlvbkRvdHMiLCJwYXJlbnROb2RlIiwicmVwbGFjZUNoaWxkIiwid2VhdGhlckluZm9Db21wb25lbnQiLCJ3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCIsInNlYXJjaEJveENvbXBvbmVudCIsImFwcGxlVG91Y2hJY29uSHJlZiIsImZhdmljb24zMkhyZWYiLCJmYXZpY29uMTZIcmVmIiwibWFuaWZlc3RIcmVmIiwibWFza0ljb25IcmVmIiwibXNDb25maWdIcmVmIiwibG9hZEZhdmljb25zIiwiYXBwbGVUb3VjaEljb24iLCJmYXZpY29uMzIiLCJmYXZpY29uMTYiLCJtYW5pZmVzdCIsIm1hc2tJY29uIiwibXNUaWxlQ29sb3IiLCJtc0NvbmZpZyIsInRoZW1lQ29sb3IiLCJyZWwiLCJzaXplcyIsImhyZWYiLCJjb2xvciIsImNvbnRlbnQiLCJoZWFkIiwibWFpbiIsImZvb3RlciIsImxvYWRLaXQiLCJmb290ZXJUZXh0IiwiZm9vdGVyTGluayIsImZvb3Rlckljb24iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJmb250YXdlc29tZUtpdCIsImNyb3NzT3JpZ2luIiwibG9hZEdvb2dsZUljb25zIiwiaWNvbnMiLCJwYWdlTG9hZCIsIndpZGVTY3JlZW5XcmFwcGVyIiwiY3VycmVudCIsImRhaWx5IiwiaG91cmx5IiwicmVSZW5kZXJNYWluIiwiaW5uZXJIVE1MIiwidXBkYXRlTWFpbiIsImN1cnJlbnRVbml4VGltZXN0YW1wIiwic2VhcmNoQm94Iiwic2VhcmNoRm9ybSIsInNlYXJjaElucHV0IiwiZXJyb3IiLCJsb2NhdGlvbiIsImRhdGUiLCJsb2NhbFRpbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic3BlbGxjaGVjayIsImF1dG9jb21wbGV0ZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudERhdGVUaW1lIiwiZ2V0RGF0ZSIsIm1vbnRoIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwic2V0SW50ZXJ2YWwiLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyIsIndlYXRoZXJEZXRhaWxzIiwiY3VycmVudFdlYXRoZXJEYXRhIiwid2VhdGhlckRldGFpbHNMaXN0Iiwid2VhdGhlckRldGFpbHNJdGVtIiwid2VhdGhlckRldGFpbHNJdGVtSWNvbiIsIndlYXRoZXJEZXRhaWxzSXRlbUxhYmVsIiwid2VhdGhlckRldGFpbHNJdGVtVmFsdWUiLCJ3ZWF0aGVyRGV0YWlsc0ljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIndlYXRoZXJEZXRhaWxzTGFiZWxzIiwid2luZFNwZWVkRGlzcGxheVVuaXQiLCJ3ZWF0aGVyRGV0YWlsc1ZhbHVlcyIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsImNsb3VkcyIsIndpbmRfc3BlZWQiLCJ3ZWF0aGVySW5mbyIsInRlbXBlcmF0dXJlIiwidW5pdENoYW5nZUJ0biIsIndlYXRoZXJEZXNjcmlwdGlvbiIsInRlbXBlcmF0dXJlRGlzcGxheXMiLCJ3aW5kU3BlZWREaXNwbGF5IiwiZm9yRWFjaCIsInRlbXBlcmF0dXJlRGlzcGxheSIsImRlZmF1bHRMb2NhdGlvbiIsImRlZmF1bHRVbml0cyIsInVuaXhUaW1lc3RhbXAiLCJkYXRlT2JqIiwiZmV0Y2hEZWZhdWx0RGF0YSIsImRlZmF1bHRDb29yZHNVcmwiLCJkZWZhdWx0Q29vcmRzIiwiZGVmYXVsdFdlYXRoZXJVcmwiLCJkZWZhdWx0V2VhdGhlckRhdGEiLCJjb29yZHMiLCJzdGFydEFwcCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hOZXdEYXRhIiwiY29vcmRzVXJsIiwid2VhdGhlclVybCIsInNlYXJjaEJveEVycm9yIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9