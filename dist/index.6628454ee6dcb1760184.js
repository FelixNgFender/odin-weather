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
 * Load Google Fonts.
 * @return {void}
 */
function loadGoogleFonts() {
  const googleFonts = document.createElement("link");
  googleFonts.rel = "preconnect";
  googleFonts.href = "https://fonts.googleapis.com";
  const googleFonts2 = document.createElement("link");
  googleFonts2.rel = "preconnect";
  googleFonts2.href = "https://fonts.gstatic.com";
  googleFonts2.crossOrigin = "anonymous";
  const googleFonts3 = document.createElement("link");
  googleFonts3.href = "https://fonts.googleapis.com/css2?family=Cute+Font&display=swap";
  googleFonts3.rel = "stylesheet";
  document.head.appendChild(googleFonts);
  document.head.appendChild(googleFonts2);
  document.head.appendChild(googleFonts3);
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
  loadGoogleFonts();
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
  const currentDateTime = (0,___WEBPACK_IMPORTED_MODULE_0__.convertUnixTimestamp)(currentUnixTimestamp);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background.jpg */ 265), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #f9d342; /* yellow */\n  --secondary-color: #ff7c60; /* orange-red */\n  --tertiary-color: #7cff6a; /* green */\n  --accent-color: #6a7cff; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #ffffff; /* white */\n  --text-color: #d1d1d1; /* light gray */\n  --link-color: #ff7c60; /* same as secondary-color */\n  --hover-color: #7cff6a; /* same as tertiary-color */\n  --transparent: transparent;\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 250px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n  --sm-breakpoint: 768px;\n  --forecast-height-sm: 550px;\n}\n\n/* GLOBAL */\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", cursive;\n  font-size: 2.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  \n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: var(--transparent);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  padding: var(--spacing-xs) var(--spacing-sm);\n  outline: none;\n  cursor: pointer;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: var(--transparent);\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: var(--transparent);\n  color: var(--text-color);\n}\n\n.searchBox-error {\n  display: none;\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n}\n\n.searchBox-error.active {\n  display: block;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forecast-btnWrapper {\n  width: 100%;\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: none;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.forecast-daily.active {\n  display: grid;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-hourly {\n  display: none;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.forecast-hourly.active {\n  display: grid;\n}\n\n.forecast-hourly-item {\n  display: none;\n}\n\n.forecast-hourly-item.active {\n  display: block;\n}\n\n.forecast-hourly-item-time {\n  font-size: 2rem;\n}\n\n.forecast-hourly-item-temp {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-navigationDots {\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDotBtn {\n  display: none;\n}\n\n.forecast-navigationDotLabel {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-navigationDotBtn:checked + .forecast-navigationDotLabel {\n  background-color: var(--hover-color);\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg)\n    brightness(113%) contrast(108%);\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n/* for screens smaller than 768px */\n@media screen and (max-width: 768px) {\n  body {\n    font-size: 1.5rem;\n  }\n  .wideScreenWrapper {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .weatherInfo-unitChangeBtn {\n    font-size: 1rem;\n  }\n  .weatherInfo-temperature {\n    font-size: 1.5rem;\n  }\n  .searchBox-input {\n    font-size: 1.5rem;\n  }\n  .weatherDetails {\n    font-size: 1rem;\n  }\n  .weatherDetails-value {\n    font-size: 1.5rem;\n  }\n  .forecast {\n    height: var(--forecast-height-sm);\n  }\n  .forecast-label {\n    font-size: 1rem;\n  }\n  .forecast-daily {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-hourly {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-daily-item-date {\n    font-size: 1.5rem;\n  }\n  .forecast-daily-item-tempHi {\n    font-size: 1rem;\n  }\n  .forecast-daily-item-tempLo {\n    font-size: 0.9rem;\n  }\n  .forecast-hourly-item-time {\n    font-size: 1.5rem;\n  }\n  .forecast-hourly-item-temp {\n    font-size: 1rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-color: #f9d342; /* yellow */\n  --secondary-color: #ff7c60; /* orange-red */\n  --tertiary-color: #7cff6a; /* green */\n  --accent-color: #6a7cff; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #ffffff; /* white */\n  --text-color: #d1d1d1; /* light gray */\n  --link-color: #ff7c60; /* same as secondary-color */\n  --hover-color: #7cff6a; /* same as tertiary-color */\n  --transparent: transparent;\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 250px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n  --sm-breakpoint: 768px;\n  --forecast-height-sm: 550px;\n}\n\n/* GLOBAL */\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", cursive;\n  font-size: 2.5rem;\n  background-image: url(\"../assets/images/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  \n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 48;\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: var(--transparent);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  padding: var(--spacing-xs) var(--spacing-sm);\n  outline: none;\n  cursor: pointer;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: var(--transparent);\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: var(--transparent);\n  color: var(--text-color);\n}\n\n.searchBox-error {\n  display: none;\n  font-size: 1.5rem;\n  color: var(--secondary-color);\n}\n\n.searchBox-error.active {\n  display: block;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: \"OPSZ\" 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forecast-btnWrapper {\n  width: 100%;\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: none;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.forecast-daily.active {\n  display: grid;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-hourly {\n  display: none;\n  grid-template-columns: repeat(8, 1fr);\n}\n\n.forecast-hourly.active {\n  display: grid;\n}\n\n.forecast-hourly-item {\n  display: none;\n}\n\n.forecast-hourly-item.active {\n  display: block;\n}\n\n.forecast-hourly-item-time {\n  font-size: 2rem;\n}\n\n.forecast-hourly-item-temp {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-navigationDots {\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDotBtn {\n  display: none;\n}\n\n.forecast-navigationDotLabel {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n  background-color: var(--transparent);\n}\n\n.forecast-navigationDotBtn:checked + .forecast-navigationDotLabel {\n  background-color: var(--hover-color);\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg)\n    brightness(113%) contrast(108%);\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n/* for screens smaller than 768px */\n@media screen and (max-width: 768px) {\n  body {\n    font-size: 1.5rem;\n  }\n  .wideScreenWrapper {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .weatherInfo-unitChangeBtn {\n    font-size: 1rem;\n  }\n  .weatherInfo-temperature {\n    font-size: 1.5rem;\n  }\n  .searchBox-input {\n    font-size: 1.5rem;\n  }\n  .weatherDetails {\n    font-size: 1rem;\n  }\n  .weatherDetails-value {\n    font-size: 1.5rem;\n  }\n  .forecast {\n    height: var(--forecast-height-sm);\n  }\n  .forecast-label {\n    font-size: 1rem;\n  }\n  .forecast-daily {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-hourly {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: reapeat(4, 1fr);\n  }\n  .forecast-daily-item-date {\n    font-size: 1.5rem;\n  }\n  .forecast-daily-item-tempHi {\n    font-size: 1rem;\n  }\n  .forecast-daily-item-tempLo {\n    font-size: 0.9rem;\n  }\n  .forecast-hourly-item-time {\n    font-size: 1.5rem;\n  }\n  .forecast-hourly-item-temp {\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFh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O0FBRUE7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2ZBLGtCQUFrQixpQkFBaUIsa0JBQWtCLFNBQVMsc0JBQXNCLEtBQUssNENBQTRDLDBCQUEwQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL2ZvcmVjYXN0LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3NlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVySW5mby5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzP2EwMjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvYXNzZXRzL2Zhdmljb24vYnJvd3NlcmNvbmZpZy54bWwiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEZldGNoIGFwcCBkYXRhIGZyb20gQVBJc1xuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogR2V0IGxvY2F0aW9uIGZyb20gdGhlIHNlYXJjaCBib3ggZm9ybVxuICogQHJldHVybiB7U3RyaW5nfSBVc2VyIGlucHV0IG9mIHRoZSBsb2NhdGlvblxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uRnJvbUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJveC1mb3JtXCIpO1xuICByZXR1cm4gZm9ybS5jaXR5LnZhbHVlO1xufVxuXG4vKipcbiAqIFNhbml0aXplIHVzZXIgaW5wdXQuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVXNlciBpbnB1dFxuICogQHJldHVybiB7U3RyaW5nfSBTYW5pdGl6ZWQgaW5wdXRcbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVJbnB1dChpbnB1dCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIGlucHV0XG4gICAgLnJlcGxhY2UoLyhcXHMrJHxeXFxzKykvZywgXCJcIikgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbSBiZWdpbmluZyBhbmQgZW5kIG9mIHN0cmluZ1xuICAgIC5yZXBsYWNlKC8oLFxccyspL2csIFwiLFwiKSAvLyByZW1vdmUgYW55IHdoaXRlIHNwYWNlIHRoYXQgZm9sbG93cyBhIGNvbW1hXG4gICAgLnJlcGxhY2UoLyhcXHMrLCkvZywgXCIsXCIpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBwcmVjZWVkcyBhIGNvbW1hXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCIrXCIpOyAvLyByZXBsYWNlIGFueSByZW1haW5pbmcgd2hpdGUgc3BhY2Ugd2l0aCArLCBzbyBpdCB3b3JrcyBpbiBhcGkgY2FsbFxufVxuXG4vKipcbiAqIEJ1aWxkIHRoZSBBUEkgZW5kcG9pbnQgdG8gZmV0Y2ggY29vcmRpbmF0ZXMgZnJvbS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjaXR5TmFtZSBDaXR5IG5hbWVcbiAqIEByZXR1cm4ge1N0cmluZ30gQVBJIGVuZHBvaW50IHRvIGZldGNoIGNvb3JkaW5hdGVzIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ29vcmRzVXJsKGNpdHlOYW1lKSB7XG4gIGNvbnN0IHNhbml0aXplZENpdHlOYW1lID0gc2FuaXRpemVJbnB1dChjaXR5TmFtZSk7XG4gIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtzYW5pdGl6ZWRDaXR5TmFtZX0mbGltaXQ9MSZhcHBpZD0yMGY3NjMyZmZjMmMwMjI2NTRlNDA5M2M2OTQ3YjRmNGA7XG59XG5cbi8qKlxuICogQnVpbGQgdGhlIEFQSSBlbmRwb2ludCB0byBmZXRjaCB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gY29vcmRpbmF0ZXMgQ29vcmRpbmF0ZXMgaW5mb3JtYXRpb24gKGxhdCwgbG9uLCBuYW1lLCBjb3VudHJ5KVxuICogQHBhcmFtIHtTdHJpbmd9IHVuaXRzIFVuaXRzIHRvIGRpc3BsYXkgKFwiaW1wZXJpYWxcIi9cIm1ldHJpY1wiKVxuICogQHJldHVybiB7U3RyaW5nfSBBUEkgZW5kcG9pbnQgdG8gZmV0Y2ggd2VhdGhlciBpbmZvcm1hdGlvbiBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFdlYXRoZXJVcmwoY29vcmRpbmF0ZXMsIHVuaXRzKSB7XG4gIHJldHVybiBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7Y29vcmRpbmF0ZXMubGF0fSZsb249JHtjb29yZGluYXRlcy5sb259JmV4Y2x1ZGU9bWludXRlbHksYWxlcnRzJnVuaXRzPSR7dW5pdHN9JmFwcGlkPTIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0YDtcbn1cblxuLyoqXG4gKiBHZXQgY29vcmRpbmF0ZXMgaW5mb3JtYXRpb24gZnJvbSB0aGUgT3BlbldlYXRoZXJNYXAgQVBJLlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCBBUEkgZW5kcG9pbnQgdG8gZmV0Y2ggZGF0YSBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IENvb3JkaW5hdGVzIGluZm9ybWF0aW9uIChsYXQsIGxvbiwgbmFtZSwgY291bnRyeSlcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvb3Jkcyh1cmwpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBjb29yZHNEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCB7IGxhdCwgbG9uLCBuYW1lLCBjb3VudHJ5IH0gPSBjb29yZHNEYXRhWzBdO1xuICBjb25zdCBjb29yZCA9IHsgbGF0LCBsb24sIG5hbWUsIGNvdW50cnkgfTtcbiAgcmV0dXJuIGNvb3JkO1xufVxuXG4vKipcbiAqIEdldCB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20gdGhlIE9wZW5XZWF0aGVyTWFwIEFQSS5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgQVBJIGVuZHBvaW50IHRvIGZldGNoIGRhdGEgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBXZWF0aGVyIGluZm9ybWF0aW9uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHVybCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB3ZWF0aGVyRGF0YTtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGUgZm9yZWNhc3QgY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udmVydFVuaXhUaW1lc3RhbXAgfSBmcm9tIFwiLi5cIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGZvcmVjYXN0IGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYWlseUZvcmVjYXN0RGF0YSAtIERhaWx5IGZvcmVjYXN0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBob3VybHlGb3JlY2FzdERhdGEgLSBIb3VybHkgZm9yZWNhc3QgZGF0YVxuICogQHBhcmFtIHtPYmplY3R9IHVuaXRzIC0gVW5pdHMgdG8gZGlzcGxheVxuICogQHBhcmFtIHtPYmplY3R9IHRpbWV6b25lIC0gVGltZXpvbmUgb2YgdGhlIGxvY2F0aW9uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRm9yZWNhc3QgY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JlY2FzdENvbXBvbmVudChcbiAgZGFpbHlGb3JlY2FzdERhdGEsXG4gIGhvdXJseUZvcmVjYXN0RGF0YSxcbiAgdW5pdHMsXG4gIHRpbWV6b25lXG4pIHtcbiAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgZm9yZWNhc3RCdG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9yZWNhc3REYWlseUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZm9yZWNhc3REYWlseUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBmb3JlY2FzdEhvdXJseUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZm9yZWNhc3RIb3VybHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGFpbHlGb3JlY2FzdENvbXBvbmVudCA9IGRhaWx5Rm9yZWNhc3RMaXN0KFxuICAgIGRhaWx5Rm9yZWNhc3REYXRhLFxuICAgIHVuaXRzLFxuICAgIHRpbWV6b25lXG4gICk7XG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0Q29tcG9uZW50ID0gaG91cmx5Rm9yZWNhc3RMaXN0KFxuICAgIGhvdXJseUZvcmVjYXN0RGF0YSxcbiAgICB1bml0cyxcbiAgICB0aW1lem9uZVxuICApO1xuICBjb25zdCBuYXZpZ2F0aW9uID0gbmF2aWdhdGlvbkRvdHMoNywgMCk7XG5cbiAgZm9yZWNhc3QuaWQgPSBcImZvcmVjYXN0XCI7XG4gIGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdFwiLCBcImZyb3N0ZWRHbGFzc1wiKTtcbiAgZm9yZWNhc3RCdG5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1idG5XcmFwcGVyXCIpO1xuICBmb3JlY2FzdERhaWx5QnRuLmlkID0gXCJmb3JlY2FzdC1kYWlseUJ0blwiO1xuICBmb3JlY2FzdERhaWx5QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1idG5cIik7XG4gIGZvcmVjYXN0RGFpbHlCdG4udHlwZSA9IFwicmFkaW9cIjtcbiAgZm9yZWNhc3REYWlseUJ0bi5uYW1lID0gXCJmb3JlY2FzdFwiO1xuICBmb3JlY2FzdERhaWx5QnRuLnZhbHVlID0gXCJkYWlseVwiO1xuICBmb3JlY2FzdERhaWx5QnRuLmNoZWNrZWQgPSB0cnVlO1xuICBmb3JlY2FzdERhaWx5TGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWxhYmVsXCIsIFwic3dlZXBUb1JpZ2h0XCIpO1xuICBmb3JlY2FzdERhaWx5TGFiZWwuaHRtbEZvciA9IFwiZm9yZWNhc3QtZGFpbHlCdG5cIjtcbiAgZm9yZWNhc3RIb3VybHlCdG4uaWQgPSBcImZvcmVjYXN0LWhvdXJseUJ0blwiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtYnRuXCIpO1xuICBmb3JlY2FzdEhvdXJseUJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi5uYW1lID0gXCJmb3JlY2FzdFwiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi52YWx1ZSA9IFwiaG91cmx5XCI7XG4gIGZvcmVjYXN0SG91cmx5TGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWxhYmVsXCIsIFwic3dlZXBUb1JpZ2h0XCIpO1xuICBmb3JlY2FzdEhvdXJseUxhYmVsLmh0bWxGb3IgPSBcImZvcmVjYXN0LWhvdXJseUJ0blwiO1xuXG4gIGZvcmVjYXN0RGFpbHlMYWJlbC50ZXh0Q29udGVudCA9IFwiRGFpbHlcIjtcbiAgZm9yZWNhc3RIb3VybHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSG91cmx5XCI7XG5cbiAgZm9yZWNhc3REYWlseUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3REYWlseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3QtZGFpbHlcIik7XG4gICAgY29uc3QgZm9yZWNhc3RIb3VybHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0LWhvdXJseVwiKTtcbiAgICBmb3JlY2FzdERhaWx5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgZm9yZWNhc3RIb3VybHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICByZVJlbmRlck5hdmlnYXRpb25Eb3RzKDcsIDApO1xuICB9KTtcblxuICBmb3JlY2FzdEhvdXJseUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZm9yZWNhc3REYWlseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3QtZGFpbHlcIik7XG4gICAgY29uc3QgZm9yZWNhc3RIb3VybHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0LWhvdXJseVwiKTtcbiAgICBjb25zdCBmaXJzdEFjdGl2ZUZvcmVjYXN0SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuZm9yZWNhc3QtaG91cmx5LWl0ZW0uYWN0aXZlXCJcbiAgICApLmRhdGFzZXQuaW5kZXg7XG4gICAgZm9yZWNhc3REYWlseS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGZvcmVjYXN0SG91cmx5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgcmVSZW5kZXJOYXZpZ2F0aW9uRG90cygyNCwgTWF0aC5mbG9vcihmaXJzdEFjdGl2ZUZvcmVjYXN0SW5kZXggLyA4KSk7XG4gIH0pO1xuXG4gIGZvcmVjYXN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdERhaWx5QnRuKTtcbiAgZm9yZWNhc3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0RGFpbHlMYWJlbCk7XG4gIGZvcmVjYXN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdEhvdXJseUJ0bik7XG4gIGZvcmVjYXN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdEhvdXJseUxhYmVsKTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm9yZWNhc3RCdG5XcmFwcGVyKTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdENvbXBvbmVudCk7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0Q29tcG9uZW50KTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XG5cbiAgcmV0dXJuIGZvcmVjYXN0O1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZGFpbHkgZm9yZWNhc3QgbGlzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYWlseUZvcmVjYXN0RGF0YSAtIERhaWx5IGZvcmVjYXN0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSB1bml0cyAtIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aW1lem9uZSAtIFRpbWV6b25lIG9mIHRoZSBsb2NhdGlvblxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IERhaWx5IGZvcmVjYXN0IGxpc3RcbiAqL1xuZnVuY3Rpb24gZGFpbHlGb3JlY2FzdExpc3QoZGFpbHlGb3JlY2FzdERhdGEsIHVuaXRzLCB0aW1lem9uZSkge1xuICBjb25zdCBkYWlseUZvcmVjYXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZGFpbHlGb3JlY2FzdExpc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRhaWx5XCIsIFwiYWN0aXZlXCIpO1xuICBkYWlseUZvcmVjYXN0TGlzdC5pZCA9IFwiZm9yZWNhc3QtZGFpbHlcIjtcblxuICBsZXQgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdDtcbiAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBGXCI7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdCA9IFwiIMKwQ1wiO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbVRlbXBMbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdEl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtXCIpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHktaXRlbS1kYXRlXCIpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBIaVwiKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBIaS5pZCA9IFwidGVtcGVyYXR1cmVEaXNwbGF5XCI7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1UZW1wTG8uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcExvXCIpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcExvLmlkID0gXCJ0ZW1wZXJhdHVyZURpc3BsYXlcIjtcbiAgICBkYWlseUZvcmVjYXN0SXRlbUljb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWRhaWx5LWl0ZW0taWNvblwiKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RJdGVtRGF0ZS50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VGltZXN0YW1wKFxuICAgICAgZGFpbHlGb3JlY2FzdERhdGFbaV0uZHRcbiAgICApLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB3ZWVrZGF5OiBcInNob3J0XCIsIHRpbWVab25lOiB0aW1lem9uZSB9KTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBIaS50ZXh0Q29udGVudCA9IGAke2RhaWx5Rm9yZWNhc3REYXRhW1xuICAgICAgaVxuICAgIF0udGVtcC5tYXgudG9GaXhlZCgxKX0ke3RlbXBlcmF0dXJlRGlzcGxheVVuaXR9YDtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBMby50ZXh0Q29udGVudCA9IGAke2RhaWx5Rm9yZWNhc3REYXRhW1xuICAgICAgaVxuICAgIF0udGVtcC5taW4udG9GaXhlZCgxKX0ke3RlbXBlcmF0dXJlRGlzcGxheVVuaXR9YDtcbiAgICBkYWlseUZvcmVjYXN0SXRlbUljb24uc3JjID1cbiAgICAgIFwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvXCIgK1xuICAgICAgZGFpbHlGb3JlY2FzdERhdGFbaV0ud2VhdGhlclswXS5pY29uICtcbiAgICAgIFwiLnBuZ1wiO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtSWNvbi5hbHQgPSBkYWlseUZvcmVjYXN0RGF0YVtpXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgICAgLmpvaW4oXCIgXCIpO1xuXG4gICAgZGFpbHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdEl0ZW1EYXRlKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SXRlbVRlbXBIaSk7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdEl0ZW1UZW1wTG8pO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RJdGVtSWNvbik7XG5cbiAgICBkYWlseUZvcmVjYXN0TGlzdC5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SXRlbSk7XG4gIH1cblxuICByZXR1cm4gZGFpbHlGb3JlY2FzdExpc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBob3VybHkgZm9yZWNhc3QgbGlzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBob3VybHlGb3JlY2FzdERhdGEgLSBIb3VybHkgZm9yZWNhc3QgZGF0YVxuICogQHBhcmFtIHtTdHJpbmd9IHVuaXRzIC0gVW5pdHMgdG8gZGlzcGxheVxuICogQHBhcmFtIHtTdHJpbmd9IHRpbWV6b25lIC0gVGltZXpvbmUgb2YgdGhlIGxvY2F0aW9uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gSG91cmx5IGZvcmVjYXN0IGxpc3RcbiAqL1xuZnVuY3Rpb24gaG91cmx5Rm9yZWNhc3RMaXN0KGhvdXJseUZvcmVjYXN0RGF0YSwgdW5pdHMsIHRpbWV6b25lKSB7XG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgaG91cmx5Rm9yZWNhc3RMaXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1ob3VybHlcIik7XG4gIGhvdXJseUZvcmVjYXN0TGlzdC5pZCA9IFwiZm9yZWNhc3QtaG91cmx5XCI7XG5cbiAgbGV0IHRlbXBlcmF0dXJlRGlzcGxheVVuaXQ7XG4gIGlmICh1bml0cyA9PT0gXCJpbXBlcmlhbFwiKSB7XG4gICAgdGVtcGVyYXR1cmVEaXNwbGF5VW5pdCA9IFwiIMKwRlwiO1xuICB9IGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlRGlzcGxheVVuaXQgPSBcIiDCsENcIjtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdEl0ZW1UaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdEl0ZW1UZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdEl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGhvdXJseUZvcmVjYXN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaG91cmx5LWl0ZW1cIik7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtVGltZS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGltZVwiKTtcbiAgICBob3VybHlGb3JlY2FzdEl0ZW1UZW1wLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1ob3VybHktaXRlbS10ZW1wXCIpO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbVRlbXAuaWQgPSBcInRlbXBlcmF0dXJlRGlzcGxheVwiO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbUljb24uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWhvdXJseS1pdGVtLWljb25cIik7XG5cbiAgICBob3VybHlGb3JlY2FzdEl0ZW0uZGF0YXNldC5pbmRleCA9IGk7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtVGltZS50ZXh0Q29udGVudCA9IGNvbnZlcnRVbml4VGltZXN0YW1wKFxuICAgICAgaG91cmx5Rm9yZWNhc3REYXRhW2ldLmR0XG4gICAgKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIH0pO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbVRlbXAudGV4dENvbnRlbnQgPSBgJHtob3VybHlGb3JlY2FzdERhdGFbaV0udGVtcC50b0ZpeGVkKFxuICAgICAgMVxuICAgICl9JHt0ZW1wZXJhdHVyZURpc3BsYXlVbml0fWA7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtSWNvbi5zcmMgPVxuICAgICAgXCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy9cIiArXG4gICAgICBob3VybHlGb3JlY2FzdERhdGFbaV0ud2VhdGhlclswXS5pY29uICtcbiAgICAgIFwiLnBuZ1wiO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbUljb24uYWx0ID0gaG91cmx5Rm9yZWNhc3REYXRhW2ldLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgIC5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSkpXG4gICAgICAuam9pbihcIiBcIik7XG5cbiAgICBob3VybHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJdGVtVGltZSk7XG4gICAgaG91cmx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGhvdXJseUZvcmVjYXN0SXRlbVRlbXApO1xuICAgIGhvdXJseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdEl0ZW1JY29uKTtcbiAgICBob3VybHlGb3JlY2FzdExpc3QuYXBwZW5kQ2hpbGQoaG91cmx5Rm9yZWNhc3RJdGVtKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgaG91cmx5Rm9yZWNhc3RMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cblxuICByZXR1cm4gaG91cmx5Rm9yZWNhc3RMaXN0O1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbmF2aWdhdGlvbiBkb3RzIGJhc2VkIG9uIHRoZSBjdXJyZW50IGZvcmVjYXN0IHRhYi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1UYWJzIE51bWJlciBvZiB0YWJzIGFjdGl2ZVxuICogQHBhcmFtIHtudW1iZXJ9IGFjdGl2ZURvdEluZGV4IEluZGV4IG9mIHRoZSBhY3RpdmUgZG90XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTmF2aWdhdGlvbiBkb3RzXG4gKi9cbmZ1bmN0aW9uIG5hdmlnYXRpb25Eb3RzKG51bVRhYnMsIGFjdGl2ZURvdEluZGV4KSB7XG4gIGNvbnN0IG5hdmlnYXRpb25Eb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbnVtRG90cyA9IG51bVRhYnMgPD0gNyA/IDEgOiAzO1xuXG4gIG5hdmlnYXRpb25Eb3RzLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1uYXZpZ2F0aW9uRG90c1wiKTtcbiAgbmF2aWdhdGlvbkRvdHMuaWQgPSBcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRG90czsgaSsrKSB7XG4gICAgY29uc3QgbmF2aWdhdGlvbkRvdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBuYXZpZ2F0aW9uRG90TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmF2aWdhdGlvbkRvdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdEJ0blwiKTtcbiAgICBuYXZpZ2F0aW9uRG90QnRuLmlkID0gXCJmb3JlY2FzdC1uYXZpZ2F0aW9uRG90LVwiICsgaTtcbiAgICBuYXZpZ2F0aW9uRG90QnRuLnR5cGUgPSBcInJhZGlvXCI7XG4gICAgbmF2aWdhdGlvbkRvdEJ0bi5uYW1lID0gXCJuYXZpZ2F0aW9uXCI7XG4gICAgbmF2aWdhdGlvbkRvdEJ0bi52YWx1ZSA9IGk7XG4gICAgbmF2aWdhdGlvbkRvdExhYmVsLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3RMYWJlbFwiLFxuICAgICAgXCJzd2VlcFRvUmlnaHRcIlxuICAgICk7XG4gICAgbmF2aWdhdGlvbkRvdExhYmVsLmh0bWxGb3IgPSBcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3QtXCIgKyBpO1xuXG4gICAgaWYgKG51bURvdHMgPiAxKSB7XG4gICAgICBuYXZpZ2F0aW9uRG90QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbmF2SW5kZXggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0SG91cmx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdC1ob3VybHlcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RIb3VybHkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3JlY2FzdEhvdXJseS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgZm9yZWNhc3RIb3VybHkuY2hpbGRyZW5baSArIG5hdkluZGV4ICogOF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGlvbkRvdHMuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkRvdEJ0bik7XG4gICAgbmF2aWdhdGlvbkRvdHMuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkRvdExhYmVsKTtcbiAgfVxuICBuYXZpZ2F0aW9uRG90cy5jaGlsZHJlblthY3RpdmVEb3RJbmRleCAqIDJdLmNoZWNrZWQgPSB0cnVlO1xuXG4gIHJldHVybiBuYXZpZ2F0aW9uRG90cztcbn1cblxuLyoqXG4gKiBSZS1yZW5kZXIgdGhlIG5hdmlnYXRpb24gZG90cyBiYXNlZCBvbiB0aGUgY3VycmVudCBmb3JlY2FzdCB0YWIuXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtVGFicyBOdW1iZXIgb2YgdGFicyBhY3RpdmVcbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3RpdmVEb3RJbmRleCBJbmRleCBvZiB0aGUgYWN0aXZlIGRvdFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gcmVSZW5kZXJOYXZpZ2F0aW9uRG90cyhudW1UYWJzLCBhY3RpdmVEb3RJbmRleCkge1xuICBjb25zdCBwcmV2aW91c05hdmlnYXRpb25Eb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJmb3JlY2FzdC1uYXZpZ2F0aW9uRG90c1wiXG4gICk7XG4gIGNvbnN0IG5ld05hdmlnYXRpb25Eb3RzID0gbmF2aWdhdGlvbkRvdHMobnVtVGFicywgYWN0aXZlRG90SW5kZXgpO1xuICBwcmV2aW91c05hdmlnYXRpb25Eb3RzLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuICAgIG5ld05hdmlnYXRpb25Eb3RzLFxuICAgIHByZXZpb3VzTmF2aWdhdGlvbkRvdHNcbiAgKTtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBJbml0aWFsaXplIHBhZ2UgbG9hZFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3ZWF0aGVySW5mb0NvbXBvbmVudCBmcm9tIFwiLi93ZWF0aGVySW5mb1wiO1xuaW1wb3J0IHdlYXRoZXJEZXRhaWxzQ29tcG9uZW50IGZyb20gXCIuL3dlYXRoZXJEZXRhaWxzXCI7XG5pbXBvcnQgc2VhcmNoQm94Q29tcG9uZW50IGZyb20gXCIuL3NlYXJjaEJveFwiO1xuaW1wb3J0IGZvcmVjYXN0Q29tcG9uZW50IGZyb20gXCIuL2ZvcmVjYXN0XCI7XG5cbmltcG9ydCBhcHBsZVRvdWNoSWNvbkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCI7XG5pbXBvcnQgZmF2aWNvbjMySHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIjtcbmltcG9ydCBmYXZpY29uMTZIcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiO1xuaW1wb3J0IG1hbmlmZXN0SHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vc2l0ZS53ZWJtYW5pZmVzdFwiO1xuaW1wb3J0IG1hc2tJY29uSHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vc2FmYXJpLXBpbm5lZC10YWIuc3ZnXCI7XG4vLyBpbXBvcnQgc2hvcnRjdXRJY29uSHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vZmF2aWNvbi5pY29cIjtcbmltcG9ydCBtc0NvbmZpZ0hyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2Jyb3dzZXJjb25maWcueG1sXCI7XG5cbi8qKlxuICogQWRkIGZhdmljb25zIHRvIHRoZSBwYWdlLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gbG9hZEZhdmljb25zKCkge1xuICBjb25zdCBhcHBsZVRvdWNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBmYXZpY29uMzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgZmF2aWNvbjE2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IG1hbmlmZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIC8vIGNvbnN0IHNob3J0Y3V0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBtYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBtc1RpbGVDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xuICBjb25zdCBtc0NvbmZpZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xuICBjb25zdCB0aGVtZUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG4gIGFwcGxlVG91Y2hJY29uLnJlbCA9IFwiYXBwbGUtdG91Y2gtaWNvblwiO1xuICBhcHBsZVRvdWNoSWNvbi5zaXplcyA9IFwiMTgweDE4MFwiO1xuICBhcHBsZVRvdWNoSWNvbi5ocmVmID0gYXBwbGVUb3VjaEljb25IcmVmO1xuICBmYXZpY29uMzIucmVsID0gXCJpY29uXCI7XG4gIGZhdmljb24zMi50eXBlID0gXCJpbWFnZS9wbmdcIjtcbiAgZmF2aWNvbjMyLnNpemVzID0gXCIzMngzMlwiO1xuICBmYXZpY29uMzIuaHJlZiA9IGZhdmljb24zMkhyZWY7XG4gIGZhdmljb24xNi5yZWwgPSBcImljb25cIjtcbiAgZmF2aWNvbjE2LnR5cGUgPSBcImltYWdlL3BuZ1wiO1xuICBmYXZpY29uMTYuc2l6ZXMgPSBcIjE2eDE2XCI7XG4gIGZhdmljb24xNi5ocmVmID0gZmF2aWNvbjE2SHJlZjtcbiAgbWFuaWZlc3QucmVsID0gXCJtYW5pZmVzdFwiO1xuICBtYW5pZmVzdC5ocmVmID0gbWFuaWZlc3RIcmVmO1xuICAvLyBzaG9ydGN1dEljb24ucmVsID0gXCJzaG9ydGN1dCBpY29uXCI7XG4gIC8vIHNob3J0Y3V0SWNvbi5ocmVmID0gc2hvcnRjdXRJY29uSHJlZjtcbiAgbWFza0ljb24ucmVsID0gXCJtYXNrLWljb25cIjtcbiAgbWFza0ljb24uaHJlZiA9IG1hc2tJY29uSHJlZjtcbiAgbWFza0ljb24uY29sb3IgPSBcIiM1YmJhZDVcIjtcbiAgbXNUaWxlQ29sb3IubmFtZSA9IFwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIjtcbiAgbXNUaWxlQ29sb3IuY29udGVudCA9IFwiIzlmMDBhN1wiO1xuICBtc0NvbmZpZy5uYW1lID0gXCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiO1xuICBtc0NvbmZpZy5jb250ZW50ID0gbXNDb25maWdIcmVmO1xuICB0aGVtZUNvbG9yLm5hbWUgPSBcInRoZW1lLWNvbG9yXCI7XG4gIHRoZW1lQ29sb3IuY29udGVudCA9IFwiI2ZmZmZmZlwiO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGFwcGxlVG91Y2hJY29uKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uMzIpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhdmljb24xNik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWFuaWZlc3QpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1hc2tJY29uKTtcbiAgLy8gZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzaG9ydGN1dEljb24pO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1zVGlsZUNvbG9yKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtc0NvbmZpZyk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhlbWVDb2xvcik7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBtYWluIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBNYWluIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJ3aWRlU2NyZWVuV3JhcHBlclwiKTtcbiAgbWFpbi5pZCA9IFwid2lkZVNjcmVlbldyYXBwZXJcIjtcbiAgcmV0dXJuIG1haW47XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBmb290ZXIgY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEZvb3RlciBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgbG9hZEtpdCgpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgZm9vdGVySWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIsIFwiZmEtZ2l0aHViXCIpO1xuICBmb290ZXJUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkNvcHlyaWdodCDCqSBcIiArIG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSArIFwiIEZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGZvb3RlckxpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG4gIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9vdGVySWNvbik7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspO1xuICByZXR1cm4gZm9vdGVyO1xufVxuXG4vKipcbiAqIExvYWQgdGhlIGZvbnRhd2Vzb21lIGtpdC5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGxvYWRLaXQoKSB7XG4gIGNvbnN0IGZvbnRhd2Vzb21lS2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgZm9udGF3ZXNvbWVLaXQuc3JjID0gXCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vYjZiNDBhMzkwMi5qc1wiO1xuICBmb250YXdlc29tZUtpdC5jcm9zc09yaWdpbiA9IFwiYW5vbnltb3VzXCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZm9udGF3ZXNvbWVLaXQpO1xufVxuXG4vKipcbiAqIExvYWQgR29vZ2xlIEZvbnRzLlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gbG9hZEdvb2dsZUZvbnRzKCkge1xuICBjb25zdCBnb29nbGVGb250cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBnb29nbGVGb250cy5yZWwgPSBcInByZWNvbm5lY3RcIjtcbiAgZ29vZ2xlRm9udHMuaHJlZiA9IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiO1xuICBjb25zdCBnb29nbGVGb250czIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgZ29vZ2xlRm9udHMyLnJlbCA9IFwicHJlY29ubmVjdFwiO1xuICBnb29nbGVGb250czIuaHJlZiA9IFwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiO1xuICBnb29nbGVGb250czIuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICBjb25zdCBnb29nbGVGb250czMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgZ29vZ2xlRm9udHMzLmhyZWYgPSBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q3V0ZStGb250JmRpc3BsYXk9c3dhcFwiO1xuICBnb29nbGVGb250czMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZ29vZ2xlRm9udHMpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGdvb2dsZUZvbnRzMik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZ29vZ2xlRm9udHMzKTtcbn1cblxuLyoqXG4gKiBMb2FkIEdvb2dsZSBGb250cyBpY29ucy5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGxvYWRHb29nbGVJY29ucygpIHtcbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgaWNvbnMuaHJlZiA9XG4gICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiO1xuICBpY29ucy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpY29ucyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBwYWdlIGxvYWQuXG4gKiBAcGFyYW0ge09iamVjdH0gY29vcmRzRGF0YSBDb29yZGluYXRlcyBkYXRhXG4gKiBAcGFyYW0ge09iamVjdH0gd2VhdGhlckRhdGEgV2VhdGhlciBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gdW5pdHMgVW5pdHMgdG8gZGlzcGxheVxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKGNvb3Jkc0RhdGEsIHdlYXRoZXJEYXRhLCB1bml0cykge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCB3aWRlU2NyZWVuV3JhcHBlciA9IG1haW4oKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3aWRlU2NyZWVuV3JhcHBlcik7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIHdlYXRoZXJJbmZvQ29tcG9uZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBzZWFyY2hCb3hDb21wb25lbnQoY29vcmRzRGF0YSwgd2VhdGhlckRhdGEuY3VycmVudC5kdCwgd2VhdGhlckRhdGEudGltZXpvbmUpXG4gICk7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKFxuICAgIHdlYXRoZXJEZXRhaWxzQ29tcG9uZW50KHdlYXRoZXJEYXRhLmN1cnJlbnQsIHVuaXRzKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICBmb3JlY2FzdENvbXBvbmVudChcbiAgICAgIHdlYXRoZXJEYXRhLmRhaWx5LFxuICAgICAgd2VhdGhlckRhdGEuaG91cmx5LFxuICAgICAgdW5pdHMsXG4gICAgICB3ZWF0aGVyRGF0YS50aW1lem9uZVxuICAgIClcbiAgKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gIGxvYWRGYXZpY29ucygpO1xuICBsb2FkR29vZ2xlSWNvbnMoKTtcbiAgbG9hZEdvb2dsZUZvbnRzKCk7XG59XG5cbi8qKlxuICogUmUtcmVuZGVyIHRoZSBtYWluIGNvbXBvbmVudCB3aXRoIHVwZGF0ZWQgZGF0YS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb29yZHNEYXRhIENvb3JkaW5hdGVzIGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSB3ZWF0aGVyRGF0YSBXZWF0aGVyIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSB1bml0cyBVbml0cyB0byBkaXNwbGF5XG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlUmVuZGVyTWFpbihjb29yZHNEYXRhLCB3ZWF0aGVyRGF0YSwgdW5pdHMpIHtcbiAgY29uc3Qgd2lkZVNjcmVlbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpZGVTY3JlZW5XcmFwcGVyXCIpO1xuICB3aWRlU2NyZWVuV3JhcHBlci5pbm5lckhUTUwgPSBcIlwiO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICB3ZWF0aGVySW5mb0NvbXBvbmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cylcbiAgKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgc2VhcmNoQm94Q29tcG9uZW50KGNvb3Jkc0RhdGEsIHdlYXRoZXJEYXRhLmN1cnJlbnQuZHQsIHdlYXRoZXJEYXRhLnRpbWV6b25lKVxuICApO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChcbiAgICB3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCh3ZWF0aGVyRGF0YS5jdXJyZW50LCB1bml0cylcbiAgKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQoXG4gICAgZm9yZWNhc3RDb21wb25lbnQoXG4gICAgICB3ZWF0aGVyRGF0YS5kYWlseSxcbiAgICAgIHdlYXRoZXJEYXRhLmhvdXJseSxcbiAgICAgIHVuaXRzLFxuICAgICAgd2VhdGhlckRhdGEudGltZXpvbmVcbiAgICApXG4gICk7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHNlYXJjaCBib3ggY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29udmVydFVuaXhUaW1lc3RhbXAsIHVwZGF0ZU1haW4gfSBmcm9tIFwiLi5cIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHNlYXJjaCBib3ggY29tcG9uZW50LlxuICogQHBhcmFtIHtPYmplY3R9IGNvb3Jkc0RhdGEgLSBDb29yZGluYXRlcyBkYXRhXG4gKiBAcGFyYW0ge051bWJlcn0gY3VycmVudFVuaXhUaW1lc3RhbXAgLSBDdXJyZW50IHVuaXggdGltZXN0YW1wXG4gKiBAcGFyYW0ge3N0cmluZ30gdGltZXpvbmUgLSBUaW1lem9uZSBvZiB0aGUgbG9jYXRpb25cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBTZWFyY2ggYm94IGNvbXBvbmVudFxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoQm94Q29tcG9uZW50KFxuICBjb29yZHNEYXRhLFxuICBjdXJyZW50VW5peFRpbWVzdGFtcCxcbiAgdGltZXpvbmVcbikge1xuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94XCIpO1xuICBzZWFyY2hCb3guY2xhc3NMaXN0LmFkZChcImZyb3N0ZWRHbGFzc1wiKTtcbiAgc2VhcmNoRm9ybS5pZCA9IFwic2VhcmNoQm94LWZvcm1cIjtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWZvcm1cIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIiwgXCJzZWFyY2hCb3gtaWNvblwiLCBcInNpemUtMjBcIik7XG4gIGljb24uaHRtbEZvciA9IFwic2VhcmNoQm94LWlucHV0LWNpdHlcIjtcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1pbnB1dFwiKTtcbiAgc2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaEJveC1pbnB1dC1jaXR5XCI7XG4gIHNlYXJjaElucHV0Lm5hbWUgPSBcImNpdHlcIjtcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIGZvciBhIGNpdHlcIjtcbiAgc2VhcmNoSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBzZWFyY2hJbnB1dC5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHNlYXJjaElucHV0LmF1dG9jb21wbGV0ZSA9IFwib2ZmXCI7XG4gIGVycm9yLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtZXJyb3JcIik7XG4gIGVycm9yLmlkID0gXCJzZWFyY2hCb3gtZXJyb3JcIjtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1sb2NhdGlvblwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWRhdGVUaW1lXCIpO1xuICBsb2NhbFRpbWUuY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1sb2NhbFRpbWVcIik7XG5cbiAgaWNvbi50ZXh0Q29udGVudCA9IFwic2VhcmNoXCI7XG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB1cGRhdGVNYWluKCk7XG4gIH0pO1xuICBlcnJvci50ZXh0Q29udGVudCA9IFwiSW52YWxpZCBjaXR5IG5hbWUuIFBsZWFzZSB0cnkgYWdhaW4uXCI7XG4gIGxvY2F0aW9uLnRleHRDb250ZW50ID0gYCR7Y29vcmRzRGF0YS5uYW1lfSwgJHtjb29yZHNEYXRhLmNvdW50cnl9YDtcbiAgY29uc3QgY3VycmVudERhdGVUaW1lID0gY29udmVydFVuaXhUaW1lc3RhbXAoY3VycmVudFVuaXhUaW1lc3RhbXApO1xuICBkYXRlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgfSl9LCAke2N1cnJlbnREYXRlVGltZS5nZXREYXRlKCl9ICR7Y3VycmVudERhdGVUaW1lLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICBtb250aDogXCJsb25nXCIsXG4gIH0pfSAke2N1cnJlbnREYXRlVGltZS5nZXRGdWxsWWVhcigpfWA7XG4gIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnREYXRlVGltZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICB9KX1gO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgY3VycmVudERhdGVUaW1lLnNldFNlY29uZHMoY3VycmVudERhdGVUaW1lLmdldFNlY29uZHMoKSArIDEpO1xuICAgIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnREYXRlVGltZS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICB0aW1lWm9uZTogdGltZXpvbmUsXG4gICAgfSl9YDtcbiAgfSwgMTAwMCk7XG5cbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChpY29uKTtcbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcbiAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGVycm9yKTtcbiAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgc2VhcmNoQm94LmFwcGVuZENoaWxkKGRhdGUpO1xuICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQobG9jYWxUaW1lKTtcblxuICByZXR1cm4gc2VhcmNoQm94O1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSB3ZWF0aGVyIGRldGFpbHMgY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHdlYXRoZXIgZGV0YWlscyBjb21wb25lbnQuXG4gKiBAcGFyYW0ge09iamVjdH0gY3VycmVudFdlYXRoZXJEYXRhIC0gQ3VycmVudCB3ZWF0aGVyIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSB1bml0cyAtIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBXZWF0aGVyIGRldGFpbHMgY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyRGV0YWlscyhjdXJyZW50V2VhdGhlckRhdGEsIHVuaXRzKSB7XG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICB3ZWF0aGVyRGV0YWlsc0xpc3QuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEZXRhaWxzXCIpO1xuICB3ZWF0aGVyRGV0YWlsc0xpc3QuY2xhc3NMaXN0LmFkZChcImZyb3N0ZWRHbGFzc1wiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNJdGVtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzSXRlbUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNJdGVtVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHdlYXRoZXJEZXRhaWxzSXRlbS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHMtaXRlbVwiKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1JY29uLmNsYXNzTGlzdC5hZGQoXG4gICAgICBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIixcbiAgICAgIFwid2VhdGhlckRldGFpbHMtaWNvblwiLFxuICAgICAgXCJzaXplLTIwXCJcbiAgICApO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZS5pZCA9IFwidGVtcGVyYXR1cmVEaXNwbGF5XCI7XG4gICAgfVxuICAgIHdlYXRoZXJEZXRhaWxzSXRlbUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyRGV0YWlscy1sYWJlbFwiKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHMtdmFsdWVcIik7XG5cbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZS50ZXh0Q29udGVudCA9IFwiMTAwJVwiO1xuICAgIHdlYXRoZXJEZXRhaWxzSXRlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0l0ZW1JY29uKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNJdGVtTGFiZWwpO1xuICAgIHdlYXRoZXJEZXRhaWxzSXRlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZSk7XG4gICAgd2VhdGhlckRldGFpbHNMaXN0LmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzSXRlbSk7XG4gIH1cblxuICBjb25zdCB3ZWF0aGVyRGV0YWlsc0ljb25zID0gd2VhdGhlckRldGFpbHNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIud2VhdGhlckRldGFpbHMtaWNvblwiXG4gICk7XG4gIHdlYXRoZXJEZXRhaWxzSWNvbnNbMF0udGV4dENvbnRlbnQgPSBcInRoZXJtb3N0YXRcIjtcbiAgd2VhdGhlckRldGFpbHNJY29uc1sxXS50ZXh0Q29udGVudCA9IFwiaHVtaWRpdHlfcGVyY2VudGFnZVwiO1xuICB3ZWF0aGVyRGV0YWlsc0ljb25zWzJdLnRleHRDb250ZW50ID0gXCJjbG91ZHlcIjtcbiAgd2VhdGhlckRldGFpbHNJY29uc1szXS50ZXh0Q29udGVudCA9IFwiYWlyXCI7XG5cbiAgY29uc3Qgd2VhdGhlckRldGFpbHNMYWJlbHMgPSB3ZWF0aGVyRGV0YWlsc0xpc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi53ZWF0aGVyRGV0YWlscy1sYWJlbFwiXG4gICk7XG4gIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzBdLnRleHRDb250ZW50ID0gXCJGZWVscyBMaWtlXCI7XG4gIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzFdLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eVwiO1xuICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1syXS50ZXh0Q29udGVudCA9IFwiQ2xvdWRzXCI7XG4gIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzNdLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkXCI7XG5cbiAgbGV0IHRlbXBlcmF0dXJlRGlzcGxheVVuaXQ7XG4gIGxldCB3aW5kU3BlZWREaXNwbGF5VW5pdDtcbiAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBGXCI7XG4gICAgd2luZFNwZWVkRGlzcGxheVVuaXQgPSBcIiBtcGhcIjtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wZXJhdHVyZURpc3BsYXlVbml0ID0gXCIgwrBDXCI7XG4gICAgd2luZFNwZWVkRGlzcGxheVVuaXQgPSBcIiBrbS9oXCI7XG4gIH1cbiAgY29uc3Qgd2VhdGhlckRldGFpbHNWYWx1ZXMgPSB3ZWF0aGVyRGV0YWlsc0xpc3QucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi53ZWF0aGVyRGV0YWlscy12YWx1ZVwiXG4gICk7XG4gIHdlYXRoZXJEZXRhaWxzVmFsdWVzWzBdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmZlZWxzX2xpa2UudG9GaXhlZChcbiAgICAxXG4gICl9JHt0ZW1wZXJhdHVyZURpc3BsYXlVbml0fWA7XG4gIHdlYXRoZXJEZXRhaWxzVmFsdWVzWzFdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLmh1bWlkaXR5fSVgO1xuICB3ZWF0aGVyRGV0YWlsc1ZhbHVlc1syXS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyRGF0YS5jbG91ZHN9JWA7XG4gIHdlYXRoZXJEZXRhaWxzVmFsdWVzWzNdLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLndpbmRfc3BlZWQudG9GaXhlZChcbiAgICAxXG4gICl9JHt3aW5kU3BlZWREaXNwbGF5VW5pdH1gO1xuICB3ZWF0aGVyRGV0YWlsc1ZhbHVlc1szXS5pZCA9IFwid2luZFNwZWVkRGlzcGxheVwiO1xuXG4gIHJldHVybiB3ZWF0aGVyRGV0YWlsc0xpc3Q7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHdlYXRoZXIgaW5mbyBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgd2VhdGhlciBpbmZvIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdXJyZW50V2VhdGhlckRhdGEgLSBUaGUgY3VycmVudCB3ZWF0aGVyIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSB1bml0cyAtIFVuaXRzIHRvIGRpc3BsYXlcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBXZWF0aGVyIGluZm8gY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVySW5mbyhjdXJyZW50V2VhdGhlckRhdGEsIHVuaXRzKSB7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1bml0Q2hhbmdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvXCIpO1xuICB3ZWF0aGVySW5mby5jbGFzc0xpc3QuYWRkKFwiZnJvc3RlZEdsYXNzXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8tZGVzY3JpcHRpb25cIik7XG4gIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mby10ZW1wZXJhdHVyZVwiKTtcbiAgdGVtcGVyYXR1cmUuaWQgPSBcInRlbXBlcmF0dXJlRGlzcGxheVwiO1xuICB1bml0Q2hhbmdlQnRuLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuXCIpO1xuICB1bml0Q2hhbmdlQnRuLmNsYXNzTGlzdC5hZGQoXCJzd2VlcFRvUmlnaHRcIik7XG4gIGljb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvLWljb25cIik7XG5cbiAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gY3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAuc3BsaXQoXCIgXCIpXG4gICAgLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgICAuam9pbihcIiBcIik7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRlc2NyaXB0aW9uO1xuICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIikge1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLnRlbXAudG9GaXhlZCgxKX0gwrBGYDtcbiAgICB1bml0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJEaXNwbGF5IMKwQ1wiO1xuICB9IGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJEYXRhLnRlbXAudG9GaXhlZCgxKX0gwrBDYDtcbiAgICB1bml0Q2hhbmdlQnRuLnRleHRDb250ZW50ID0gXCJEaXNwbGF5IMKwRlwiO1xuICB9XG4gIHVuaXRDaGFuZ2VCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHVuaXRDaGFuZ2VCdG4uaWQgPSBcInVuaXRDaGFuZ2VCdG5cIjtcbiAgdW5pdENoYW5nZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlRGlzcGxheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIjdGVtcGVyYXR1cmVEaXNwbGF5XCJcbiAgICApO1xuICAgIGNvbnN0IHdpbmRTcGVlZERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRTcGVlZERpc3BsYXlcIik7XG4gICAgY29uc3QgdW5pdENoYW5nZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdENoYW5nZUJ0blwiKTtcbiAgICBpZiAodW5pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9PT0gXCJEaXNwbGF5IMKwRlwiKSB7XG4gICAgICB0ZW1wZXJhdHVyZURpc3BsYXlzLmZvckVhY2goKHRlbXBlcmF0dXJlRGlzcGxheSkgPT4ge1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlRGlzcGxheS50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF07XG4gICAgICAgIHRlbXBlcmF0dXJlRGlzcGxheS50ZXh0Q29udGVudCA9IGAkeyhcbiAgICAgICAgICAodGVtcGVyYXR1cmUgKiA5KSAvIDUgK1xuICAgICAgICAgIDMyXG4gICAgICAgICkudG9GaXhlZCgxKX0gwrBGYDtcbiAgICAgIH0pO1xuICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudCA9IGAkeyhcbiAgICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0gKiAyLjIzN1xuICAgICAgKS50b0ZpeGVkKDEpfSBtcGhgO1xuICAgICAgdW5pdENoYW5nZUJ0bi50ZXh0Q29udGVudCA9IFwiRGlzcGxheSDCsENcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcGVyYXR1cmVEaXNwbGF5cy5mb3JFYWNoKCh0ZW1wZXJhdHVyZURpc3BsYXkpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZURpc3BsYXkudGV4dENvbnRlbnQuc3BsaXQoXCIgXCIpWzBdO1xuICAgICAgICB0ZW1wZXJhdHVyZURpc3BsYXkudGV4dENvbnRlbnQgPSBgJHsoXG4gICAgICAgICAgKHRlbXBlcmF0dXJlIC0gMzIpICpcbiAgICAgICAgICAoNSAvIDkpXG4gICAgICAgICkudG9GaXhlZCgxKX0gwrBDYDtcbiAgICAgIH0pO1xuICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudCA9IGAkeyhcbiAgICAgICAgd2luZFNwZWVkRGlzcGxheS50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0gLyAyLjIzN1xuICAgICAgKS50b0ZpeGVkKDEpfSBrbS9oYDtcbiAgICAgIHVuaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPSBcIkRpc3BsYXkgwrBGXCI7XG4gICAgfVxuICB9KTtcbiAgaWNvbi5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudFdlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbiAgaWNvbi5hbHQgPSB3ZWF0aGVyRGVzY3JpcHRpb247XG5cbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKHVuaXRDaGFuZ2VCdG4pO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gd2VhdGhlckluZm87XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgV2VhdGhlciBhcHBcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGFnZUxvYWQsIHsgcmVSZW5kZXJNYWluIH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlTG9hZFwiO1xuaW1wb3J0IHtcbiAgYnVpbGRDb29yZHNVcmwsXG4gIGJ1aWxkV2VhdGhlclVybCxcbiAgZ2V0V2VhdGhlcixcbiAgZ2V0Q29vcmRzLFxufSBmcm9tIFwiLi9jb21wb25lbnRzL2ZldGNoRGF0YVwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBkZWZhdWx0TG9jYXRpb24gPSBcIkJvc3RvblwiO1xuY29uc3QgZGVmYXVsdFVuaXRzID0gXCJtZXRyaWNcIjtcblxuLyoqXG4gKiBDb252ZXJ0IFVuaXggdGltZXN0YW1wIHRvIERhdGUgb2JqZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWVzdGFtcCAtIFVuaXggdGltZXN0YW1wXG4gKiBAcmV0dXJuIHtEYXRlfSBEYXRlIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFVuaXhUaW1lc3RhbXAodW5peFRpbWVzdGFtcCkge1xuICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUodW5peFRpbWVzdGFtcCAqIDEwMDApO1xuICByZXR1cm4gZGF0ZU9iajtcbn1cblxuLyoqXG4gKiBGZXRjaCBkZWZhdWx0IHdlYXRoZXIgZGF0YS5cbiAqIEByZXR1cm4ge09iamVjdH0gRGVmYXVsdCB3ZWF0aGVyIGRhdGFcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEZWZhdWx0RGF0YSgpIHtcbiAgY29uc3QgZGVmYXVsdENvb3Jkc1VybCA9IGJ1aWxkQ29vcmRzVXJsKGRlZmF1bHRMb2NhdGlvbik7XG4gIGNvbnN0IGRlZmF1bHRDb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoZGVmYXVsdENvb3Jkc1VybCk7XG4gIGNvbnN0IGRlZmF1bHRXZWF0aGVyVXJsID0gYnVpbGRXZWF0aGVyVXJsKGRlZmF1bHRDb29yZHMsIGRlZmF1bHRVbml0cyk7XG4gIGNvbnN0IGRlZmF1bHRXZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoZGVmYXVsdFdlYXRoZXJVcmwpO1xuICByZXR1cm4geyBjb29yZHM6IGRlZmF1bHRDb29yZHMsIHdlYXRoZXJEYXRhOiBkZWZhdWx0V2VhdGhlckRhdGEgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBhcHAuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5hc3luYyBmdW5jdGlvbiBzdGFydEFwcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmlkID0gXCJjb250ZW50XCI7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBjb29yZHMsIHdlYXRoZXJEYXRhIH0gPSBhd2FpdCBmZXRjaERlZmF1bHREYXRhKCk7XG4gICAgcGFnZUxvYWQoY29vcmRzLCB3ZWF0aGVyRGF0YSwgZGVmYXVsdFVuaXRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBGZXRjaCBuZXcgd2VhdGhlciBkYXRhLlxuICogQHJldHVybiB7T2JqZWN0fSBDb29yZGluYXRlcyBhbmQgd2VhdGhlciBkYXRhXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTmV3RGF0YSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQm94LWZvcm1cIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gZm9ybS5jaXR5LnZhbHVlO1xuICBjb25zdCBjb29yZHNVcmwgPSBidWlsZENvb3Jkc1VybChsb2NhdGlvbik7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IGdldENvb3Jkcyhjb29yZHNVcmwpO1xuICBjb25zdCB3ZWF0aGVyVXJsID0gYnVpbGRXZWF0aGVyVXJsKGNvb3JkcywgZGVmYXVsdFVuaXRzKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHdlYXRoZXJVcmwpO1xuICByZXR1cm4geyBjb29yZHMsIHdlYXRoZXJEYXRhIH07XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBtYWluIGNvbnRlbnQgd2hlbiB1c2VyIHN1Ym1pdHMgdGhlIHNlYXJjaCBib3ggZm9ybS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlTWFpbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvb3Jkcywgd2VhdGhlckRhdGEgfSA9IGF3YWl0IGZldGNoTmV3RGF0YSgpO1xuICAgIHJlUmVuZGVyTWFpbihjb29yZHMsIHdlYXRoZXJEYXRhLCBkZWZhdWx0VW5pdHMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCb3gtZm9ybVwiKTtcbiAgICBjb25zdCBzZWFyY2hCb3hFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQm94LWVycm9yXCIpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBzZWFyY2hCb3hFcnJvci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbnN0YXJ0QXBwKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICNmOWQzNDI7IC8qIHllbGxvdyAqL1xcbiAgLS1zZWNvbmRhcnktY29sb3I6ICNmZjdjNjA7IC8qIG9yYW5nZS1yZWQgKi9cXG4gIC0tdGVydGlhcnktY29sb3I6ICM3Y2ZmNmE7IC8qIGdyZWVuICovXFxuICAtLWFjY2VudC1jb2xvcjogIzZhN2NmZjsgLyogYmx1ZSAqL1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAyNSwgMjUsIDI1OyAvKiBibGFjayAqL1xcbiAgLS1mb3JlZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiB3aGl0ZSAqL1xcbiAgLS10ZXh0LWNvbG9yOiAjZDFkMWQxOyAvKiBsaWdodCBncmF5ICovXFxuICAtLWxpbmstY29sb3I6ICNmZjdjNjA7IC8qIHNhbWUgYXMgc2Vjb25kYXJ5LWNvbG9yICovXFxuICAtLWhvdmVyLWNvbG9yOiAjN2NmZjZhOyAvKiBzYW1lIGFzIHRlcnRpYXJ5LWNvbG9yICovXFxuICAtLXRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcXG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgLS1zcGFjaW5nLXhzOiA1cHg7XFxuICAtLXNwYWNpbmctc206IDEwcHg7XFxuICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxuICAtLXNwYWNpbmctbGc6IDIwcHg7XFxuICAtLXNwYWNpbmcteGw6IDQwcHg7XFxuICAtLWNvbnRhaW5lci13aWR0aDogMTIwMHB4O1xcbiAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgLS1idG4td2lkdGg6IDEwMHB4O1xcbiAgLS1zZWFyY2gtYmFyLWhlaWdodDogNDRweDtcXG4gIC0tZm9yZWNhc3QtaGVpZ2h0OiAyNTBweDtcXG4gIC0tbmF2LWRvdC1zaXplOiAxMHB4O1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxuICAtLWJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gIC0tc20tYnJlYWtwb2ludDogNzY4cHg7XFxuICAtLWZvcmVjYXN0LWhlaWdodC1zbTogNTUwcHg7XFxufVxcblxcbi8qIEdMT0JBTCAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDdXRlIEZvbnRcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi53aWRlU2NyZWVuV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIkZJTExcXFwiIDAsIFxcXCJ3Z2h0XFxcIiA0MDAsIFxcXCJHUkFEXFxcIiAwLCBcXFwib3BzelxcXCIgNDg7XFxufVxcblxcbi5zd2VlcFRvUmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0OmhvdmVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5mcm9zdGVkR2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMC42KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxMHB4KTtcXG59XFxuXFxuQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xcbiAgLmZyb3N0ZWRHbGFzcyB7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICB9XFxufVxcblxcbi8qIFdFQVRIRVIgSU5GTyAqL1xcbi53ZWF0aGVySW5mbyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKSB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAxKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFNFQVJDSCBCT1ggKi9cXG4uc2VhcmNoQm94IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLnNlYXJjaEJveC1mb3JtIHtcXG4gIGhlaWdodDogdmFyKC0tc2VhcmNoLWJhci1oZWlnaHQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJPUFNaXFxcIiAyMDtcXG59XFxuXFxuLnNlYXJjaEJveC1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hCb3gtZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5zZWFyY2hCb3gtZXJyb3IuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBXRUFUSEVSIERFVEFJTFMgKi9cXG4ud2VhdGhlckRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IFxcXCJPUFNaXFxcIiAyMDtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi8qIEZPUkVDQVNUICovXFxuLmZvcmVjYXN0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBoZWlnaHQ6IHZhcigtLWZvcmVjYXN0LWhlaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctc20pO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG59XFxuXFxuLmZvcmVjYXN0LWxhYmVsOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAxKTtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0bjpjaGVja2VkICsgLmZvcmVjYXN0LWxhYmVsIHtcXG4gIGNvbG9yOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAxKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLWRhdGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wSGkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBMbyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHktaXRlbS5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5mb3JlY2FzdC1ob3VybHktaXRlbS10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLXRlbXAge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90cyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tbmF2LWRvdC1zaXplKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdEJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdExhYmVsIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdEJ0bjpjaGVja2VkICsgLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RMYWJlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi8qIEZPT1RFUiAqL1xcbi5mb290ZXIge1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5mYS1naXRodWIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXRvcDogNHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ2NCUpIGh1ZS1yb3RhdGUoMjc4ZGVnKVxcbiAgICBicmlnaHRuZXNzKDExMyUpIGNvbnRyYXN0KDEwOCUpO1xcbn1cXG5cXG4uZmEtZ2l0aHViOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XFxuXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbi8qIGZvciBzY3JlZW5zIHNtYWxsZXIgdGhhbiA3NjhweCAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAud2lkZVNjcmVlbldyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgfVxcbiAgLndlYXRoZXJJbmZvLXVuaXRDaGFuZ2VCdG4ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAud2VhdGhlckluZm8tdGVtcGVyYXR1cmUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5zZWFyY2hCb3gtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC53ZWF0aGVyRGV0YWlscyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC53ZWF0aGVyRGV0YWlscy12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0IHtcXG4gICAgaGVpZ2h0OiB2YXIoLS1mb3JlY2FzdC1oZWlnaHQtc20pO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlYXBlYXQoNCwgMWZyKTtcXG4gIH1cXG4gIC5mb3JlY2FzdC1ob3VybHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVhcGVhdCg0LCAxZnIpO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5LWl0ZW0tZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcEhpIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcExvIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGltZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWhvdXJseS1pdGVtLXRlbXAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QixFQUFFLFdBQVc7RUFDckMsMEJBQTBCLEVBQUUsZUFBZTtFQUMzQyx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLHVCQUF1QixFQUFFLFNBQVM7RUFDbEMsOEJBQThCLEVBQUUsVUFBVTtFQUMxQywyQkFBMkIsRUFBRSxVQUFVO0VBQ3ZDLHFCQUFxQixFQUFFLGVBQWU7RUFDdEMscUJBQXFCLEVBQUUsNEJBQTRCO0VBQ25ELHNCQUFzQixFQUFFLDJCQUEyQjtFQUNuRCwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIseURBQXdEO0VBQ3hELHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDRCQUE0Qjs7RUFFNUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHNC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O0VBQ25DO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZjlkMzQyOyAvKiB5ZWxsb3cgKi9cXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZmY3YzYwOyAvKiBvcmFuZ2UtcmVkICovXFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjN2NmZjZhOyAvKiBncmVlbiAqL1xcbiAgLS1hY2NlbnQtY29sb3I6ICM2YTdjZmY7IC8qIGJsdWUgKi9cXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogMjUsIDI1LCAyNTsgLyogYmxhY2sgKi9cXG4gIC0tZm9yZWdyb3VuZC1jb2xvcjogI2ZmZmZmZjsgLyogd2hpdGUgKi9cXG4gIC0tdGV4dC1jb2xvcjogI2QxZDFkMTsgLyogbGlnaHQgZ3JheSAqL1xcbiAgLS1saW5rLWNvbG9yOiAjZmY3YzYwOyAvKiBzYW1lIGFzIHNlY29uZGFyeS1jb2xvciAqL1xcbiAgLS1ob3Zlci1jb2xvcjogIzdjZmY2YTsgLyogc2FtZSBhcyB0ZXJ0aWFyeS1jb2xvciAqL1xcbiAgLS10cmFuc3BhcmVudDogdHJhbnNwYXJlbnQ7XFxuICAtLWJvcmRlci1yYWRpdXM6IDBweDtcXG4gIC0tc3BhY2luZy14czogNXB4O1xcbiAgLS1zcGFjaW5nLXNtOiAxMHB4O1xcbiAgLS1zcGFjaW5nLW1kOiAxNXB4O1xcbiAgLS1zcGFjaW5nLWxnOiAyMHB4O1xcbiAgLS1zcGFjaW5nLXhsOiA0MHB4O1xcbiAgLS1jb250YWluZXItd2lkdGg6IDEyMDBweDtcXG4gIC0tZm9vdGVyLWhlaWdodDogMzBweDtcXG4gIC0tYnRuLXdpZHRoOiAxMDBweDtcXG4gIC0tc2VhcmNoLWJhci1oZWlnaHQ6IDQ0cHg7XFxuICAtLWZvcmVjYXN0LWhlaWdodDogMjUwcHg7XFxuICAtLW5hdi1kb3Qtc2l6ZTogMTBweDtcXG4gIC0tc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcbiAgLS1ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAtLXNtLWJyZWFrcG9pbnQ6IDc2OHB4O1xcbiAgLS1mb3JlY2FzdC1oZWlnaHQtc206IDU1MHB4O1xcbn1cXG5cXG4vKiBHTE9CQUwgKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3V0ZSBGb250XFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLndpZGVTY3JlZW5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMCwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiA0ODtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1vdXQ7XFxufVxcblxcbi5zd2VlcFRvUmlnaHQ6aG92ZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuLmZyb3N0ZWRHbGFzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWJhY2tncm91bmQtY29sb3IpLCAwLjYpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBzYXR1cmF0ZSgxODAlKSBibHVyKDEwcHgpO1xcbn1cXG5cXG5Ac3VwcG9ydHMgKC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBub25lKSBvciAoYmFja2Ryb3AtZmlsdGVyOiBub25lKSB7XFxuICAuZnJvc3RlZEdsYXNzIHtcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXG4gIH1cXG59XFxuXFxuLyogV0VBVEhFUiBJTkZPICovXFxuLndlYXRoZXJJbmZvIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeS1jb2xvcik7XFxufVxcblxcbi53ZWF0aGVySW5mby11bml0Q2hhbmdlQnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctc20pO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXVuaXRDaGFuZ2VCdG46aG92ZXIge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8taWNvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogU0VBUkNIIEJPWCAqL1xcbi5zZWFyY2hCb3gge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWZvcm0ge1xcbiAgaGVpZ2h0OiB2YXIoLS1zZWFyY2gtYmFyLWhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxufVxcblxcbi5zZWFyY2hCb3gtaWNvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb24uc2l6ZS0yMCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIk9QU1pcXFwiIDIwO1xcbn1cXG5cXG4uc2VhcmNoQm94LWlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1lcnJvciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1lcnJvci5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFdFQVRIRVIgREVUQUlMUyAqL1xcbi53ZWF0aGVyRGV0YWlscyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLWl0ZW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLWljb24ge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLWljb24uc2l6ZS0yMCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXFxcIk9QU1pcXFwiIDIwO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtdmFsdWUge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5LWNvbG9yKTtcXG59XFxuXFxuLyogRk9SRUNBU1QgKi9cXG4uZm9yZWNhc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGhlaWdodDogdmFyKC0tZm9yZWNhc3QtaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JlY2FzdC1idG5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cykgdmFyKC0tc3BhY2luZy1zbSk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWw6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbGFiZWwge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LWl0ZW0tZGF0ZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBIaSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhaWx5LWl0ZW0tdGVtcExvIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmZvcmVjYXN0LWhvdXJseS1pdGVtLXRpbWUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGVtcCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90QnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90TGFiZWwge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgd2lkdGg6IHZhcigtLW5hdi1kb3Qtc2l6ZSk7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1kb3Qtc2l6ZSk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90QnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbmF2aWdhdGlvbkRvdExhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDY0JSkgaHVlLXJvdGF0ZSgyNzhkZWcpXFxuICAgIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoMTA4JSk7XFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuLyogZm9yIHNjcmVlbnMgc21hbGxlciB0aGFuIDc2OHB4ICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC53aWRlU2NyZWVuV3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICB9XFxuICAud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC53ZWF0aGVySW5mby10ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLnNlYXJjaEJveC1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLndlYXRoZXJEZXRhaWxzIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbiAgLndlYXRoZXJEZXRhaWxzLXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuZm9yZWNhc3Qge1xcbiAgICBoZWlnaHQ6IHZhcigtLWZvcmVjYXN0LWhlaWdodC1zbSk7XFxuICB9XFxuICAuZm9yZWNhc3QtbGFiZWwge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHkge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVhcGVhdCg0LCAxZnIpO1xcbiAgfVxcbiAgLmZvcmVjYXN0LWhvdXJseSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZWFwZWF0KDQsIDFmcik7XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHktaXRlbS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wSGkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wTG8ge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG4gIC5mb3JlY2FzdC1ob3VybHktaXRlbS10aW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuZm9yZWNhc3QtaG91cmx5LWl0ZW0tdGVtcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJyb3dzZXJjb25maWdcIjp7XCJtc2FwcGxpY2F0aW9uXCI6W3tcInRpbGVcIjpbe1wic3F1YXJlMTUweDE1MGxvZ29cIjpbe1wiJFwiOntcInNyY1wiOlwiL2Fzc2V0cy9mYXZpY29uL21zdGlsZS0xNTB4MTUwLnBuZ1wifX1dLFwiVGlsZUNvbG9yXCI6W1wiIzlmMDBhN1wiXX1dfV19fSJdLCJuYW1lcyI6WyJnZXRMb2NhdGlvbkZyb21Gb3JtIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaXR5IiwidmFsdWUiLCJzYW5pdGl6ZUlucHV0IiwiaW5wdXQiLCJyZXBsYWNlIiwiYnVpbGRDb29yZHNVcmwiLCJjaXR5TmFtZSIsInNhbml0aXplZENpdHlOYW1lIiwiYnVpbGRXZWF0aGVyVXJsIiwiY29vcmRpbmF0ZXMiLCJ1bml0cyIsImxhdCIsImxvbiIsImdldENvb3JkcyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb29yZHNEYXRhIiwianNvbiIsIm5hbWUiLCJjb3VudHJ5IiwiY29vcmQiLCJnZXRXZWF0aGVyIiwid2VhdGhlckRhdGEiLCJjb252ZXJ0VW5peFRpbWVzdGFtcCIsImZvcmVjYXN0Q29tcG9uZW50IiwiZGFpbHlGb3JlY2FzdERhdGEiLCJob3VybHlGb3JlY2FzdERhdGEiLCJ0aW1lem9uZSIsImZvcmVjYXN0IiwiY3JlYXRlRWxlbWVudCIsImZvcmVjYXN0QnRuV3JhcHBlciIsImZvcmVjYXN0RGFpbHlCdG4iLCJmb3JlY2FzdERhaWx5TGFiZWwiLCJmb3JlY2FzdEhvdXJseUJ0biIsImZvcmVjYXN0SG91cmx5TGFiZWwiLCJkYWlseUZvcmVjYXN0Q29tcG9uZW50IiwiZGFpbHlGb3JlY2FzdExpc3QiLCJob3VybHlGb3JlY2FzdENvbXBvbmVudCIsImhvdXJseUZvcmVjYXN0TGlzdCIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uRG90cyIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwidHlwZSIsImNoZWNrZWQiLCJodG1sRm9yIiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImZvcmVjYXN0RGFpbHkiLCJmb3JlY2FzdEhvdXJseSIsInJlbW92ZSIsInJlUmVuZGVyTmF2aWdhdGlvbkRvdHMiLCJmaXJzdEFjdGl2ZUZvcmVjYXN0SW5kZXgiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YXNldCIsImluZGV4IiwiTWF0aCIsImZsb29yIiwiYXBwZW5kQ2hpbGQiLCJ0ZW1wZXJhdHVyZURpc3BsYXlVbml0IiwiaSIsImRhaWx5Rm9yZWNhc3RJdGVtIiwiZGFpbHlGb3JlY2FzdEl0ZW1EYXRlIiwiZGFpbHlGb3JlY2FzdEl0ZW1UZW1wSGkiLCJkYWlseUZvcmVjYXN0SXRlbVRlbXBMbyIsImRhaWx5Rm9yZWNhc3RJdGVtSWNvbiIsImR0IiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwidGltZVpvbmUiLCJ0ZW1wIiwibWF4IiwidG9GaXhlZCIsIm1pbiIsInNyYyIsIndlYXRoZXIiLCJpY29uIiwiYWx0IiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiam9pbiIsImhvdXJseUZvcmVjYXN0SXRlbSIsImhvdXJseUZvcmVjYXN0SXRlbVRpbWUiLCJob3VybHlGb3JlY2FzdEl0ZW1UZW1wIiwiaG91cmx5Rm9yZWNhc3RJdGVtSWNvbiIsImhvdXIiLCJob3VyMTIiLCJjaGlsZHJlbiIsIm51bVRhYnMiLCJhY3RpdmVEb3RJbmRleCIsIm51bURvdHMiLCJuYXZpZ2F0aW9uRG90QnRuIiwibmF2aWdhdGlvbkRvdExhYmVsIiwibmF2SW5kZXgiLCJwYXJzZUludCIsInRhcmdldCIsImxlbmd0aCIsInByZXZpb3VzTmF2aWdhdGlvbkRvdHMiLCJuZXdOYXZpZ2F0aW9uRG90cyIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJ3ZWF0aGVySW5mb0NvbXBvbmVudCIsIndlYXRoZXJEZXRhaWxzQ29tcG9uZW50Iiwic2VhcmNoQm94Q29tcG9uZW50IiwiYXBwbGVUb3VjaEljb25IcmVmIiwiZmF2aWNvbjMySHJlZiIsImZhdmljb24xNkhyZWYiLCJtYW5pZmVzdEhyZWYiLCJtYXNrSWNvbkhyZWYiLCJtc0NvbmZpZ0hyZWYiLCJsb2FkRmF2aWNvbnMiLCJhcHBsZVRvdWNoSWNvbiIsImZhdmljb24zMiIsImZhdmljb24xNiIsIm1hbmlmZXN0IiwibWFza0ljb24iLCJtc1RpbGVDb2xvciIsIm1zQ29uZmlnIiwidGhlbWVDb2xvciIsInJlbCIsInNpemVzIiwiaHJlZiIsImNvbG9yIiwiY29udGVudCIsImhlYWQiLCJtYWluIiwiZm9vdGVyIiwibG9hZEtpdCIsImZvb3RlclRleHQiLCJmb290ZXJMaW5rIiwiZm9vdGVySWNvbiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImZvbnRhd2Vzb21lS2l0IiwiY3Jvc3NPcmlnaW4iLCJsb2FkR29vZ2xlRm9udHMiLCJnb29nbGVGb250cyIsImdvb2dsZUZvbnRzMiIsImdvb2dsZUZvbnRzMyIsImxvYWRHb29nbGVJY29ucyIsImljb25zIiwicGFnZUxvYWQiLCJ3aWRlU2NyZWVuV3JhcHBlciIsImN1cnJlbnQiLCJkYWlseSIsImhvdXJseSIsInJlUmVuZGVyTWFpbiIsImlubmVySFRNTCIsInVwZGF0ZU1haW4iLCJjdXJyZW50VW5peFRpbWVzdGFtcCIsInNlYXJjaEJveCIsInNlYXJjaEZvcm0iLCJzZWFyY2hJbnB1dCIsImVycm9yIiwibG9jYXRpb24iLCJkYXRlIiwibG9jYWxUaW1lIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInNwZWxsY2hlY2siLCJhdXRvY29tcGxldGUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnREYXRlVGltZSIsImdldERhdGUiLCJtb250aCIsInRvTG9jYWxlVGltZVN0cmluZyIsInNldEludGVydmFsIiwic2V0U2Vjb25kcyIsImdldFNlY29uZHMiLCJ3ZWF0aGVyRGV0YWlscyIsImN1cnJlbnRXZWF0aGVyRGF0YSIsIndlYXRoZXJEZXRhaWxzTGlzdCIsIndlYXRoZXJEZXRhaWxzSXRlbSIsIndlYXRoZXJEZXRhaWxzSXRlbUljb24iLCJ3ZWF0aGVyRGV0YWlsc0l0ZW1MYWJlbCIsIndlYXRoZXJEZXRhaWxzSXRlbVZhbHVlIiwid2VhdGhlckRldGFpbHNJY29ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3ZWF0aGVyRGV0YWlsc0xhYmVscyIsIndpbmRTcGVlZERpc3BsYXlVbml0Iiwid2VhdGhlckRldGFpbHNWYWx1ZXMiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJjbG91ZHMiLCJ3aW5kX3NwZWVkIiwid2VhdGhlckluZm8iLCJ0ZW1wZXJhdHVyZSIsInVuaXRDaGFuZ2VCdG4iLCJ3ZWF0aGVyRGVzY3JpcHRpb24iLCJ0ZW1wZXJhdHVyZURpc3BsYXlzIiwid2luZFNwZWVkRGlzcGxheSIsImZvckVhY2giLCJ0ZW1wZXJhdHVyZURpc3BsYXkiLCJkZWZhdWx0TG9jYXRpb24iLCJkZWZhdWx0VW5pdHMiLCJ1bml4VGltZXN0YW1wIiwiZGF0ZU9iaiIsImZldGNoRGVmYXVsdERhdGEiLCJkZWZhdWx0Q29vcmRzVXJsIiwiZGVmYXVsdENvb3JkcyIsImRlZmF1bHRXZWF0aGVyVXJsIiwiZGVmYXVsdFdlYXRoZXJEYXRhIiwiY29vcmRzIiwic3RhcnRBcHAiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImZldGNoTmV3RGF0YSIsImNvb3Jkc1VybCIsIndlYXRoZXJVcmwiLCJzZWFyY2hCb3hFcnJvciIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==