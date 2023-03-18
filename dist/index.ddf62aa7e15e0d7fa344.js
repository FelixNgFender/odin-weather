(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["index"],{

/***/ 399:
/*!*************************************!*\
  !*** ./src/components/fetchData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationFromForm": () => (/* binding */ getLocationFromForm)
/* harmony export */ });
/**
 * @fileoverview Fetch app data from APIs
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/**
 * Get location from the search box form
 * @return {void}
 * @exports
 */
function getLocationFromForm() {
  const form = document.getElementById("searchBox-form");
  const cityName = form.city.value;
  console.log(cityName);
  form.reset();
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
/**
 * @fileoverview The forecast component
 * @author Thinh Nguyen
 * @version 1.0.0
 */



/**
 * Create the forecast component.
 * @return {HTMLElement} Forecast component
 * @exports
 */
function forecastComponent() {
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
  const numDots = numTabs <= 7 ? 1 : 3;
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

/***/ }),

/***/ 256:
/*!************************************!*\
  !*** ./src/components/pageLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageLoad)
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
 * @return {void}
 * @exports
 */
function pageLoad() {
  const content = document.getElementById("content");
  const wideScreenWrapper = main();
  content.appendChild(wideScreenWrapper);
  wideScreenWrapper.appendChild((0,_weatherInfo__WEBPACK_IMPORTED_MODULE_0__["default"])());
  wideScreenWrapper.appendChild((0,_searchBox__WEBPACK_IMPORTED_MODULE_2__["default"])());
  wideScreenWrapper.appendChild((0,_weatherDetails__WEBPACK_IMPORTED_MODULE_1__["default"])());
  wideScreenWrapper.appendChild((0,_forecast__WEBPACK_IMPORTED_MODULE_3__["default"])());
  content.appendChild(footer());
  loadFavicons();
  loadGoogleIcons();
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
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ 399);
/**
 * @fileoverview The search box component
 * @author Thinh Nguyen
 * @version 1.0.0
 */





/**
 * Create the search box component.
 * @return {HTMLElement} Search box component
 * @exports
 */
function searchBoxComponent() {
  const searchBox = document.createElement("section");
  const searchForm = document.createElement("form");
  const icon = document.createElement("label");
  const searchInput = document.createElement("input");
  const location = document.createElement("div");
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
  location.classList.add("searchBox-location");
  localTime.classList.add("searchBox-localTime");
  icon.textContent = "search";
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__.getLocationFromForm)();
  });
  location.textContent = "Boston, US";
  localTime.textContent = "12:00 PM";
  searchForm.appendChild(icon);
  searchForm.appendChild(searchInput);
  searchBox.appendChild(searchForm);
  searchBox.appendChild(location);
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
 * @return {HTMLElement} Weather details component
 * @exports
 */
function weatherDetails() {
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
 * @return {HTMLElement} Weather info component
 * @exports
 */
function weatherInfo() {
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

/***/ }),

/***/ 352:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pageLoad */ 256);
/* harmony import */ var _styles_styles_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles-reset.css */ 69);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.css */ 441);
/**
 * @fileoverview Weather app
 * @author Thinh Nguyen
 * @version 1.0.0
 */







/**
 * Initialize the app
 * @return {void}
 */
function startApp() {
  const body = document.querySelector("body");
  body.id = "content";
  (0,_components_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #F9D342; /* yellow */\n  --secondary-color: #FF7C60; /* orange-red */\n  --tertiary-color: #7CFF6A; /* green */\n  --accent-color: #6A7CFF; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #FFFFFF; /* white */\n  --text-color: #D1D1D1; /* light gray */\n  --link-color: #FF7C60; /* same as secondary-color */\n  --hover-color: #7CFF6A; /* same as tertiary-color */\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: rgba(var(--background-color), 1);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: transparent;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: transparent;\n  color: var(--text-color);\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-navigationDots {\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDot {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n}\n\n.forecast-navigationDot.active {\n  background-color: var(--hover-color);\n}\n\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg) brightness(113%) contrast(108%); \n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-color: #F9D342; /* yellow */\n  --secondary-color: #FF7C60; /* orange-red */\n  --tertiary-color: #7CFF6A; /* green */\n  --accent-color: #6A7CFF; /* blue */\n  --background-color: 25, 25, 25; /* black */\n  --foreground-color: #FFFFFF; /* white */\n  --text-color: #D1D1D1; /* light gray */\n  --link-color: #FF7C60; /* same as secondary-color */\n  --hover-color: #7CFF6A; /* same as tertiary-color */\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --nav-dot-size: 10px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --border: 2px solid var(--hover-color);\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(\"../assets/fonts/CuteFont-Regular.ttf\");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-image: url(\"../assets/images/background.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: var(--text-color);\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.sweepToRight {\n  position: relative;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-transition: color 1000ms;\n  transition: color 1000ms;\n  color: var(--text-color);\n}\n\n.sweepToRight:before {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--hover-color);\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  -webkit-transition-property: transform;\n  transition-property: transform;\n  -webkit-transition: 300ms ease-out;\n  transition: 300ms ease-out;\n}\n\n.sweepToRight:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n}\n\n.frostedGlass {\n  background: rgba(var(--background-color), 0.6);\n  backdrop-filter: saturate(180%) blur(10px);\n}\n\n@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {\n  .frostedGlass {\n    -webkit-backdrop-filter: blur(10px);\n    backdrop-filter: blur(10px);\n  }\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: rgba(var(--background-color), 1);\n  color: var(--text-color);\n  width: var(--btn-width);\n  border: var(--border);\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.weatherInfo-unitChangeBtn:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: var(--border);\n  background-color: transparent;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon:hover {\n  color: var(--hover-color);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  background-color: transparent;\n  color: var(--text-color);\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n  margin-top: 3px;\n}\n\n.weatherDetails-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--tertiary-color);\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  border: var(--border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n}\n\n.forecast-label:hover {\n  color: rgba(var(--background-color), 1);\n}\n\n.forecast-btn:checked + .forecast-label {\n  color: rgba(var(--background-color), 1);\n  background-color: var(--hover-color);\n}\n\n.forecast-daily {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.forecast-daily-item-date {\n  font-size: 2rem;\n}\n\n.forecast-daily-item-tempHi {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--secondary-color);\n}\n\n.forecast-daily-item-tempLo {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--accent-color);\n}\n\n.forecast-navigationDots {\n  width: 100%;\n  height: var(--nav-dot-size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-sm);\n}\n\n.forecast-navigationDot {\n  border-radius: 50%;\n  width: var(--nav-dot-size);\n  height: var(--nav-dot-size);\n  border: var(--border);\n  cursor: pointer;\n}\n\n.forecast-navigationDot.active {\n  background-color: var(--hover-color);\n}\n\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  transition: transform 0.3s ease-in-out;\n  filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg) brightness(113%) contrast(108%); \n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDZkEsa0JBQWtCLGlCQUFpQixrQkFBa0IsU0FBUyxzQkFBc0IsS0FBSyw0Q0FBNEMsMEJBQTBCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9mZXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoQm94LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXJEZXRhaWxzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL3dlYXRoZXJJbmZvLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGVzL3N0eWxlcy1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGVzL3N0eWxlcy1yZXNldC5jc3M/YTAyMyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3M/ZTQ1YiIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9hc3NldHMvZmF2aWNvbi9icm93c2VyY29uZmlnLnhtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRmV0Y2ggYXBwIGRhdGEgZnJvbSBBUElzXG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBHZXQgbG9jYXRpb24gZnJvbSB0aGUgc2VhcmNoIGJveCBmb3JtXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uRnJvbUZvcm0oKSB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJveC1mb3JtXCIpO1xuICBjb25zdCBjaXR5TmFtZSA9IGZvcm0uY2l0eS52YWx1ZTtcblxuICBjb25zb2xlLmxvZyhjaXR5TmFtZSk7XG5cbiAgZm9ybS5yZXNldCgpO1xufSIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGUgZm9yZWNhc3QgY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIGZvcmVjYXN0IGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBGb3JlY2FzdCBjb21wb25lbnRcbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcmVjYXN0Q29tcG9uZW50KCkge1xuICBjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBmb3JlY2FzdERhaWx5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBmb3JlY2FzdERhaWx5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGZvcmVjYXN0SG91cmx5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBmb3JlY2FzdEhvdXJseUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXG4gIGZvcmVjYXN0LmlkID0gXCJmb3JlY2FzdFwiO1xuICBmb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3RcIik7XG4gIGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmcm9zdGVkR2xhc3NcIik7XG4gIGZvcmVjYXN0RGFpbHlCdG4uaWQgPSBcImZvcmVjYXN0LWRhaWx5QnRuXCI7XG4gIGZvcmVjYXN0RGFpbHlCdG4uY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWJ0blwiKTtcbiAgZm9yZWNhc3REYWlseUJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICBmb3JlY2FzdERhaWx5QnRuLm5hbWUgPSBcImZvcmVjYXN0XCI7XG4gIGZvcmVjYXN0RGFpbHlCdG4udmFsdWUgPSBcImRhaWx5XCI7XG4gIGZvcmVjYXN0RGFpbHlCdG4uY2hlY2tlZCA9IHRydWU7XG4gIGZvcmVjYXN0RGFpbHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtbGFiZWxcIik7XG4gIGZvcmVjYXN0RGFpbHlMYWJlbC5jbGFzc0xpc3QuYWRkKFwic3dlZXBUb1JpZ2h0XCIpO1xuICBmb3JlY2FzdERhaWx5TGFiZWwuaHRtbEZvciA9IFwiZm9yZWNhc3QtZGFpbHlCdG5cIjtcbiAgZm9yZWNhc3RIb3VybHlCdG4uaWQgPSBcImZvcmVjYXN0LWhvdXJseUJ0blwiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtYnRuXCIpO1xuICBmb3JlY2FzdEhvdXJseUJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi5uYW1lID0gXCJmb3JlY2FzdFwiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi52YWx1ZSA9IFwiaG91cmx5XCI7XG4gIGZvcmVjYXN0SG91cmx5TGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWxhYmVsXCIpO1xuICBmb3JlY2FzdEhvdXJseUxhYmVsLmNsYXNzTGlzdC5hZGQoXCJzd2VlcFRvUmlnaHRcIik7XG4gIGZvcmVjYXN0SG91cmx5TGFiZWwuaHRtbEZvciA9IFwiZm9yZWNhc3QtaG91cmx5QnRuXCI7XG5cbiAgZm9yZWNhc3REYWlseUxhYmVsLnRleHRDb250ZW50ID0gXCJEYWlseVwiO1xuICBmb3JlY2FzdEhvdXJseUxhYmVsLnRleHRDb250ZW50ID0gXCJIb3VybHlcIjtcblxuICBmb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdERhaWx5QnRuKTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYWlseUxhYmVsKTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm9yZWNhc3RIb3VybHlCdG4pO1xuICBmb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdEhvdXJseUxhYmVsKTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdExpc3QoKSk7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKG5hdmlnYXRpb25Eb3RzKDgpKTtcblxuICByZXR1cm4gZm9yZWNhc3Q7XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBkYWlseSBmb3JlY2FzdCBsaXN0LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IERhaWx5IGZvcmVjYXN0IGxpc3RcbiAqL1xuZnVuY3Rpb24gZGFpbHlGb3JlY2FzdExpc3QoKSB7XG4gIGNvbnN0IGRhaWx5Rm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBkYWlseUZvcmVjYXN0TGlzdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHlcIik7XG4gIGRhaWx5Rm9yZWNhc3RMaXN0LmlkID0gXCJjdXJyZW50LWZvcmVjYXN0XCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkYWlseUZvcmVjYXN0SXRlbVRlbXBMbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGFpbHlGb3JlY2FzdEl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtXCIpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHktaXRlbS1kYXRlXCIpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBIaVwiKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBMby5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wTG9cIik7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1kYWlseS1pdGVtLWljb25cIik7XG5cbiAgICBkYWlseUZvcmVjYXN0SXRlbURhdGUudGV4dENvbnRlbnQgPSBcIk1vblwiO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpLnRleHRDb250ZW50ID0gXCIxMCDCsENcIjtcbiAgICBkYWlseUZvcmVjYXN0SXRlbVRlbXBMby50ZXh0Q29udGVudCA9IFwiNCDCsENcIjtcbiAgICBkYWlseUZvcmVjYXN0SXRlbUljb24uc3JjID0gXCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wNGQucG5nXCI7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW1JY29uLmFsdCA9IFwiQ2xlYXIgU2t5XCI7XG5cbiAgICBkYWlseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SXRlbURhdGUpO1xuICAgIGRhaWx5Rm9yZWNhc3RJdGVtLmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RJdGVtVGVtcEhpKTtcbiAgICBkYWlseUZvcmVjYXN0SXRlbS5hcHBlbmRDaGlsZChkYWlseUZvcmVjYXN0SXRlbVRlbXBMbyk7XG4gICAgZGFpbHlGb3JlY2FzdEl0ZW0uYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdEl0ZW1JY29uKTtcblxuICAgIGRhaWx5Rm9yZWNhc3RMaXN0LmFwcGVuZENoaWxkKGRhaWx5Rm9yZWNhc3RJdGVtKTtcbiAgfVxuXG4gIHJldHVybiBkYWlseUZvcmVjYXN0TGlzdDtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG5hdmlnYXRpb24gZG90cyBiYXNlZCBvbiB0aGUgY3VycmVudCBmb3JlY2FzdCB0YWIuXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtVGFicyBOdW1iZXIgb2YgdGFicyBhY3RpdmVcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBOYXZpZ2F0aW9uIGRvdHNcbiAqL1xuZnVuY3Rpb24gbmF2aWdhdGlvbkRvdHMobnVtVGFicykge1xuICBjb25zdCBuYXZpZ2F0aW9uRG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgbnVtRG90cyA9IChudW1UYWJzIDw9IDcgPyAxIDogMyk7XG5cbiAgbmF2aWdhdGlvbkRvdHMuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURvdHM7IGkrKykge1xuICAgIGNvbnN0IG5hdmlnYXRpb25Eb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbmF2aWdhdGlvbkRvdC5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtbmF2aWdhdGlvbkRvdFwiKTtcbiAgICBuYXZpZ2F0aW9uRG90LmNsYXNzTGlzdC5hZGQoXCJzd2VlcFRvUmlnaHRcIik7XG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIG5hdmlnYXRpb25Eb3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgbmF2aWdhdGlvbkRvdHMuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkRvdCk7XG4gIH1cblxuICByZXR1cm4gbmF2aWdhdGlvbkRvdHM7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5pdGlhbGl6ZSBwYWdlIGxvYWRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2VhdGhlckluZm9Db21wb25lbnQgZnJvbSBcIi4vd2VhdGhlckluZm9cIjtcbmltcG9ydCB3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCBmcm9tIFwiLi93ZWF0aGVyRGV0YWlsc1wiO1xuaW1wb3J0IHNlYXJjaEJveENvbXBvbmVudCBmcm9tIFwiLi9zZWFyY2hCb3hcIjtcbmltcG9ydCBmb3JlY2FzdENvbXBvbmVudCBmcm9tIFwiLi9mb3JlY2FzdFwiO1xuXG5pbXBvcnQgYXBwbGVUb3VjaEljb25IcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiO1xuaW1wb3J0IGZhdmljb24zMkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5pbXBvcnQgZmF2aWNvbjE2SHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIjtcbmltcG9ydCBtYW5pZmVzdEhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIjtcbmltcG9ydCBtYXNrSWNvbkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiO1xuLy8gaW1wb3J0IHNob3J0Y3V0SWNvbkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2Zhdmljb24uaWNvXCI7XG5pbXBvcnQgbXNDb25maWdIcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9icm93c2VyY29uZmlnLnhtbFwiO1xuXG4vKipcbiAqIEFkZCBmYXZpY29ucyB0byB0aGUgcGFnZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGxvYWRGYXZpY29ucygpIHtcbiAgY29uc3QgYXBwbGVUb3VjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgZmF2aWNvbjMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IGZhdmljb24xNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBtYW5pZmVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAvLyBjb25zdCBzaG9ydGN1dEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgbWFza0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgbXNUaWxlQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcbiAgY29uc3QgbXNDb25maWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcbiAgY29uc3QgdGhlbWVDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xuICBhcHBsZVRvdWNoSWNvbi5yZWwgPSBcImFwcGxlLXRvdWNoLWljb25cIjtcbiAgYXBwbGVUb3VjaEljb24uc2l6ZXMgPSBcIjE4MHgxODBcIjtcbiAgYXBwbGVUb3VjaEljb24uaHJlZiA9IGFwcGxlVG91Y2hJY29uSHJlZjtcbiAgZmF2aWNvbjMyLnJlbCA9IFwiaWNvblwiO1xuICBmYXZpY29uMzIudHlwZSA9IFwiaW1hZ2UvcG5nXCI7XG4gIGZhdmljb24zMi5zaXplcyA9IFwiMzJ4MzJcIjtcbiAgZmF2aWNvbjMyLmhyZWYgPSBmYXZpY29uMzJIcmVmO1xuICBmYXZpY29uMTYucmVsID0gXCJpY29uXCI7XG4gIGZhdmljb24xNi50eXBlID0gXCJpbWFnZS9wbmdcIjtcbiAgZmF2aWNvbjE2LnNpemVzID0gXCIxNngxNlwiO1xuICBmYXZpY29uMTYuaHJlZiA9IGZhdmljb24xNkhyZWY7XG4gIG1hbmlmZXN0LnJlbCA9IFwibWFuaWZlc3RcIjtcbiAgbWFuaWZlc3QuaHJlZiA9IG1hbmlmZXN0SHJlZjtcbiAgLy8gc2hvcnRjdXRJY29uLnJlbCA9IFwic2hvcnRjdXQgaWNvblwiO1xuICAvLyBzaG9ydGN1dEljb24uaHJlZiA9IHNob3J0Y3V0SWNvbkhyZWY7XG4gIG1hc2tJY29uLnJlbCA9IFwibWFzay1pY29uXCI7XG4gIG1hc2tJY29uLmhyZWYgPSBtYXNrSWNvbkhyZWY7XG4gIG1hc2tJY29uLmNvbG9yID0gXCIjNWJiYWQ1XCI7XG4gIG1zVGlsZUNvbG9yLm5hbWUgPSBcIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCI7XG4gIG1zVGlsZUNvbG9yLmNvbnRlbnQgPSBcIiM5ZjAwYTdcIjtcbiAgbXNDb25maWcubmFtZSA9IFwibXNhcHBsaWNhdGlvbi1jb25maWdcIjtcbiAgbXNDb25maWcuY29udGVudCA9IG1zQ29uZmlnSHJlZjtcbiAgdGhlbWVDb2xvci5uYW1lID0gXCJ0aGVtZS1jb2xvclwiO1xuICB0aGVtZUNvbG9yLmNvbnRlbnQgPSBcIiNmZmZmZmZcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChhcHBsZVRvdWNoSWNvbik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbjMyKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZpY29uMTYpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1hbmlmZXN0KTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYXNrSWNvbik7XG4gIC8vIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2hvcnRjdXRJY29uKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtc1RpbGVDb2xvcik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobXNDb25maWcpO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHRoZW1lQ29sb3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWFpbiBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gTWFpbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwid2lkZVNjcmVlbldyYXBwZXJcIik7XG4gIHJldHVybiBtYWluO1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgZm9vdGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBGb290ZXIgZWxlbWVudFxuICovXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gIGxvYWRLaXQoKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvbnN0IGZvb3Rlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlckljb24uY2xhc3NMaXN0LmFkZChcImZhYlwiLCBcImZhLWdpdGh1YlwiKTtcbiAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJDb3B5cmlnaHQgwqkgXCIgKyBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyBcIiBGZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZlbGl4TmdGZW5kZXJcIjtcbiAgZm9vdGVyTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBmb290ZXJMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3Rlckljb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuLyoqXG4gKiBMb2FkIHRoZSBmb250YXdlc29tZSBraXQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBsb2FkS2l0KCkge1xuICBjb25zdCBmb250YXdlc29tZUtpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gIGZvbnRhd2Vzb21lS2l0LnNyYyA9IFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2I2YjQwYTM5MDIuanNcIjtcbiAgZm9udGF3ZXNvbWVLaXQuY3Jvc3NPcmlnaW4gPSBcImFub255bW91c1wiO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZvbnRhd2Vzb21lS2l0KTtcbn1cblxuLyoqXG4gKiBMb2FkIEdvb2dsZSBGb250cyBpY29ucy5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGxvYWRHb29nbGVJY29ucygpIHtcbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgaWNvbnMuaHJlZiA9XG4gICAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiO1xuICBpY29ucy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChpY29ucyk7XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBwYWdlIGxvYWQuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IHdpZGVTY3JlZW5XcmFwcGVyID0gbWFpbigpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdpZGVTY3JlZW5XcmFwcGVyKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQod2VhdGhlckluZm9Db21wb25lbnQoKSk7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaEJveENvbXBvbmVudCgpKTtcbiAgd2lkZVNjcmVlbldyYXBwZXIuYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNDb21wb25lbnQoKSk7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29tcG9uZW50KCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgbG9hZEZhdmljb25zKCk7XG4gIGxvYWRHb29nbGVJY29ucygpO1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSBzZWFyY2ggYm94IGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGdldExvY2F0aW9uRnJvbUZvcm0gfSBmcm9tIFwiLi9mZXRjaERhdGFcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHNlYXJjaCBib3ggY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFNlYXJjaCBib3ggY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hCb3hDb21wb25lbnQoKSB7XG4gIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgc2VhcmNoQm94LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3hcIik7XG4gIHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKFwiZnJvc3RlZEdsYXNzXCIpO1xuICBzZWFyY2hGb3JtLmlkID0gXCJzZWFyY2hCb3gtZm9ybVwiO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtZm9ybVwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiLCBcInNlYXJjaEJveC1pY29uXCIsIFwic2l6ZS0yMFwiKTtcbiAgaWNvbi5odG1sRm9yID0gXCJzZWFyY2hCb3gtaW5wdXQtY2l0eVwiO1xuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoQm94LWlucHV0LWNpdHlcIjtcbiAgc2VhcmNoSW5wdXQubmFtZSA9IFwiY2l0eVwiO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggZm9yIGEgY2l0eVwiO1xuICBzZWFyY2hJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHNlYXJjaElucHV0LnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1sb2NhdGlvblwiKTtcbiAgbG9jYWxUaW1lLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtbG9jYWxUaW1lXCIpO1xuXG4gIGljb24udGV4dENvbnRlbnQgPSBcInNlYXJjaFwiO1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0TG9jYXRpb25Gcm9tRm9ybSgpO1xuICB9KTtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkJvc3RvbiwgVVNcIjtcbiAgbG9jYWxUaW1lLnRleHRDb250ZW50ID0gXCIxMjowMCBQTVwiO1xuXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChsb2NhbFRpbWUpO1xuXG4gIHJldHVybiBzZWFyY2hCb3g7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHdlYXRoZXIgZGV0YWlscyBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgd2VhdGhlciBkZXRhaWxzIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBXZWF0aGVyIGRldGFpbHMgY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyRGV0YWlscygpIHtcbiAgY29uc3Qgd2VhdGhlckRldGFpbHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIHdlYXRoZXJEZXRhaWxzTGlzdC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHNcIik7XG4gIHdlYXRoZXJEZXRhaWxzTGlzdC5jbGFzc0xpc3QuYWRkKFwiZnJvc3RlZEdsYXNzXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0l0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNJdGVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgd2VhdGhlckRldGFpbHNJdGVtLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyRGV0YWlscy1pdGVtXCIpO1xuICAgIHdlYXRoZXJEZXRhaWxzSXRlbUljb24uY2xhc3NMaXN0LmFkZChcbiAgICAgIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiLFxuICAgICAgXCJ3ZWF0aGVyRGV0YWlscy1pY29uXCIsXG4gICAgICBcInNpemUtMjBcIlxuICAgICk7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtTGFiZWwuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEZXRhaWxzLWxhYmVsXCIpO1xuICAgIHdlYXRoZXJEZXRhaWxzSXRlbVZhbHVlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyRGV0YWlscy12YWx1ZVwiKTtcblxuICAgIHdlYXRoZXJEZXRhaWxzSXRlbVZhbHVlLnRleHRDb250ZW50ID0gXCIxMDAlXCI7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtLmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzSXRlbUljb24pO1xuICAgIHdlYXRoZXJEZXRhaWxzSXRlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0l0ZW1MYWJlbCk7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtLmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzSXRlbVZhbHVlKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0xpc3QuYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNJdGVtKTtcbiAgfVxuXG4gIGNvbnN0IHdlYXRoZXJEZXRhaWxzSWNvbnMgPSB3ZWF0aGVyRGV0YWlsc0xpc3QucXVlcnlTZWxlY3RvckFsbChcIi53ZWF0aGVyRGV0YWlscy1pY29uXCIpO1xuICAgIHdlYXRoZXJEZXRhaWxzSWNvbnNbMF0udGV4dENvbnRlbnQgPSBcInRoZXJtb3N0YXRcIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0ljb25zWzFdLnRleHRDb250ZW50ID0gXCJodW1pZGl0eV9wZXJjZW50YWdlXCI7XG4gICAgd2VhdGhlckRldGFpbHNJY29uc1syXS50ZXh0Q29udGVudCA9IFwicmFpbnlcIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0ljb25zWzNdLnRleHRDb250ZW50ID0gXCJhaXJcIjtcblxuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzTGFiZWxzID0gd2VhdGhlckRldGFpbHNMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2VhdGhlckRldGFpbHMtbGFiZWxcIik7XG4gICAgd2VhdGhlckRldGFpbHNMYWJlbHNbMF0udGV4dENvbnRlbnQgPSBcIkZlZWxzIExpa2VcIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1sxXS50ZXh0Q29udGVudCA9IFwiSHVtaWRpdHlcIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1syXS50ZXh0Q29udGVudCA9IFwiQ2hhbmNlIG9mIFJhaW5cIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1szXS50ZXh0Q29udGVudCA9IFwiV2luZCBTcGVlZFwiO1xuXG5cbiAgcmV0dXJuIHdlYXRoZXJEZXRhaWxzTGlzdDtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGUgd2VhdGhlciBpbmZvIGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSB3ZWF0aGVyIGluZm8gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFdlYXRoZXIgaW5mbyBjb21wb25lbnRcbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdlYXRoZXJJbmZvKCkge1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdW5pdENoYW5nZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIHdlYXRoZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mb1wiKTtcbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZChcImZyb3N0ZWRHbGFzc1wiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvLWRlc2NyaXB0aW9uXCIpO1xuICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8tdGVtcGVyYXR1cmVcIik7XG4gIHVuaXRDaGFuZ2VCdG4uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvLXVuaXRDaGFuZ2VCdG5cIik7XG4gIHVuaXRDaGFuZ2VCdG4uY2xhc3NMaXN0LmFkZChcInN3ZWVwVG9SaWdodFwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8taWNvblwiKTtcblxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQnJva2VuIENsb3Vkc1wiO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiMjEgwrBDXCI7XG4gIHVuaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPSBcIkRpc3BsYXkgwrBGXCI7XG4gIHVuaXRDaGFuZ2VCdG4udHlwZSA9IFwiYnV0dG9uXCI7ICBcbiAgaWNvbi5zcmMgPSBcImh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LzA0ZC5wbmdcIjtcbiAgaWNvbi5hbHQgPSBcIkJyb2tlbiBDbG91ZHNcIjtcblxuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKHRlbXBlcmF0dXJlKTtcbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQodW5pdENoYW5nZUJ0bik7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiB3ZWF0aGVySW5mbztcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBXZWF0aGVyIGFwcFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VMb2FkXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMtcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgYXBwXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzdGFydEFwcCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LmlkID0gXCJjb250ZW50XCI7XG4gIHBhZ2VMb2FkKCk7XG59XG5cbnN0YXJ0QXBwKCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvQ3V0ZUZvbnQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogI0Y5RDM0MjsgLyogeWVsbG93ICovXFxuICAtLXNlY29uZGFyeS1jb2xvcjogI0ZGN0M2MDsgLyogb3JhbmdlLXJlZCAqL1xcbiAgLS10ZXJ0aWFyeS1jb2xvcjogIzdDRkY2QTsgLyogZ3JlZW4gKi9cXG4gIC0tYWNjZW50LWNvbG9yOiAjNkE3Q0ZGOyAvKiBibHVlICovXFxuICAtLWJhY2tncm91bmQtY29sb3I6IDI1LCAyNSwgMjU7IC8qIGJsYWNrICovXFxuICAtLWZvcmVncm91bmQtY29sb3I6ICNGRkZGRkY7IC8qIHdoaXRlICovXFxuICAtLXRleHQtY29sb3I6ICNEMUQxRDE7IC8qIGxpZ2h0IGdyYXkgKi9cXG4gIC0tbGluay1jb2xvcjogI0ZGN0M2MDsgLyogc2FtZSBhcyBzZWNvbmRhcnktY29sb3IgKi9cXG4gIC0taG92ZXItY29sb3I6ICM3Q0ZGNkE7IC8qIHNhbWUgYXMgdGVydGlhcnktY29sb3IgKi9cXG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgLS1zcGFjaW5nLXhzOiA1cHg7XFxuICAtLXNwYWNpbmctc206IDEwcHg7XFxuICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxuICAtLXNwYWNpbmctbGc6IDIwcHg7XFxuICAtLXNwYWNpbmcteGw6IDQwcHg7XFxuICAtLWNvbnRhaW5lci13aWR0aDogMTIwMHB4O1xcbiAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgLS1idG4td2lkdGg6IDEwMHB4O1xcbiAgLS1zZWFyY2gtYmFyLWhlaWdodDogNDRweDtcXG4gIC0tbmF2LWRvdC1zaXplOiAxMHB4O1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxuICAtLWJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLyogR0xPQkFMICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkN1dGUgRm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDdXRlIEZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi53aWRlU2NyZWVuV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAwLFxcbiAgJ3dnaHQnIDQwMCxcXG4gICdHUkFEJyAwLFxcbiAgJ29wc3onIDQ4XFxufVxcblxcbi5zd2VlcFRvUmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0OmhvdmVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5mcm9zdGVkR2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMC42KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxMHB4KTtcXG59XFxuXFxuQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xcbiAgLmZyb3N0ZWRHbGFzcyB7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICB9XFxufVxcblxcbi8qIFdFQVRIRVIgSU5GTyAqL1xcbi53ZWF0aGVySW5mbyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMSk7XFxufVxcblxcbi53ZWF0aGVySW5mby1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBTRUFSQ0ggQk9YICovXFxuLnNlYXJjaEJveCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5zZWFyY2hCb3gtZm9ybSB7XFxuICBoZWlnaHQ6IHZhcigtLXNlYXJjaC1iYXItaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdPUFNaJyAyMDtcXG59XFxuXFxuLnNlYXJjaEJveC1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogV0VBVEhFUiBERVRBSUxTICovXFxuLndlYXRoZXJEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbiB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbi5zaXplLTIwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnT1BTWicgMjA7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy12YWx1ZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4vKiBGT1JFQ0FTVCAqL1xcbi5mb3JlY2FzdCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb3JlY2FzdC1oZWlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5mb3JlY2FzdC1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1idG4td2lkdGgpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWw6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbGFiZWwge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLWRhdGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wSGkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBMbyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NjQlKSBodWUtcm90YXRlKDI3OGRlZykgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCgxMDglKTsgXFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQXdCLEVBQUUsV0FBVztFQUNyQywwQkFB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O0VBQ3ZCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLGlHQUFpRztBQUNuRzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxrQkFBa0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjRjlEMzQyOyAvKiB5ZWxsb3cgKi9cXG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiAjRkY3QzYwOyAvKiBvcmFuZ2UtcmVkICovXFxuICAtLXRlcnRpYXJ5LWNvbG9yOiAjN0NGRjZBOyAvKiBncmVlbiAqL1xcbiAgLS1hY2NlbnQtY29sb3I6ICM2QTdDRkY7IC8qIGJsdWUgKi9cXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogMjUsIDI1LCAyNTsgLyogYmxhY2sgKi9cXG4gIC0tZm9yZWdyb3VuZC1jb2xvcjogI0ZGRkZGRjsgLyogd2hpdGUgKi9cXG4gIC0tdGV4dC1jb2xvcjogI0QxRDFEMTsgLyogbGlnaHQgZ3JheSAqL1xcbiAgLS1saW5rLWNvbG9yOiAjRkY3QzYwOyAvKiBzYW1lIGFzIHNlY29uZGFyeS1jb2xvciAqL1xcbiAgLS1ob3Zlci1jb2xvcjogIzdDRkY2QTsgLyogc2FtZSBhcyB0ZXJ0aWFyeS1jb2xvciAqL1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XFxuICAtLXNwYWNpbmcteHM6IDVweDtcXG4gIC0tc3BhY2luZy1zbTogMTBweDtcXG4gIC0tc3BhY2luZy1tZDogMTVweDtcXG4gIC0tc3BhY2luZy1sZzogMjBweDtcXG4gIC0tc3BhY2luZy14bDogNDBweDtcXG4gIC0tY29udGFpbmVyLXdpZHRoOiAxMjAwcHg7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxuICAtLWJ0bi13aWR0aDogMTAwcHg7XFxuICAtLXNlYXJjaC1iYXItaGVpZ2h0OiA0NHB4O1xcbiAgLS1uYXYtZG90LXNpemU6IDEwcHg7XFxuICAtLXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweDtcXG4gIC0tYm9yZGVyOiAycHggc29saWQgdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4vKiBHTE9CQUwgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3V0ZSBGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuLi9hc3NldHMvZm9udHMvQ3V0ZUZvbnQtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIkN1dGUgRm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcblxcbi53aWRlU2NyZWVuV3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAwLFxcbiAgJ3dnaHQnIDQwMCxcXG4gICdHUkFEJyAwLFxcbiAgJ29wc3onIDQ4XFxufVxcblxcbi5zd2VlcFRvUmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnN3ZWVwVG9SaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcXG4gIHRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcbn1cXG5cXG4uc3dlZXBUb1JpZ2h0OmhvdmVyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxufVxcblxcbi5mcm9zdGVkR2xhc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMC42KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogc2F0dXJhdGUoMTgwJSkgYmx1cigxMHB4KTtcXG59XFxuXFxuQHN1cHBvcnRzICgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkge1xcbiAgLmZyb3N0ZWRHbGFzcyB7XFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxuICB9XFxufVxcblxcbi8qIFdFQVRIRVIgSU5GTyAqL1xcbi53ZWF0aGVySW5mbyB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0bjpob3ZlciB7XFxuICBjb2xvcjogcmdiYSh2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKSwgMSk7XFxufVxcblxcbi53ZWF0aGVySW5mby1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBTRUFSQ0ggQk9YICovXFxuLnNlYXJjaEJveCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5zZWFyY2hCb3gtZm9ybSB7XFxuICBoZWlnaHQ6IHZhcigtLXNlYXJjaC1iYXItaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnNlYXJjaEJveC1pY29uLnNpemUtMjAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdPUFNaJyAyMDtcXG59XFxuXFxuLnNlYXJjaEJveC1pbnB1dCB7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLyogV0VBVEhFUiBERVRBSUxTICovXFxuLndlYXRoZXJEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbiB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbi5zaXplLTIwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnT1BTWicgMjA7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy12YWx1ZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnktY29sb3IpO1xcbn1cXG5cXG4vKiBGT1JFQ0FTVCAqL1xcbi5mb3JlY2FzdCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb3JlY2FzdC1oZWlnaHQpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5mb3JlY2FzdC1idG4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiB2YXIoLS1idG4td2lkdGgpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWw6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbGFiZWwge1xcbiAgY29sb3I6IHJnYmEodmFyKC0tYmFja2dyb3VuZC1jb2xvciksIDEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLWRhdGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGFpbHktaXRlbS10ZW1wSGkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdC1kYWlseS1pdGVtLXRlbXBMbyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmZvcmVjYXN0LW5hdmlnYXRpb25Eb3RzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi5mb3JlY2FzdC1uYXZpZ2F0aW9uRG90IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHdpZHRoOiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtZG90LXNpemUpO1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtbmF2aWdhdGlvbkRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NjQlKSBodWUtcm90YXRlKDI3OGRlZykgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCgxMDglKTsgXFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImJyb3dzZXJjb25maWdcIjp7XCJtc2FwcGxpY2F0aW9uXCI6W3tcInRpbGVcIjpbe1wic3F1YXJlMTUweDE1MGxvZ29cIjpbe1wiJFwiOntcInNyY1wiOlwiL2Fzc2V0cy9mYXZpY29uL21zdGlsZS0xNTB4MTUwLnBuZ1wifX1dLFwiVGlsZUNvbG9yXCI6W1wiIzlmMDBhN1wiXX1dfV19fSJdLCJuYW1lcyI6WyJnZXRMb2NhdGlvbkZyb21Gb3JtIiwiZm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaXR5TmFtZSIsImNpdHkiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsImZvcmVjYXN0Q29tcG9uZW50IiwiZm9yZWNhc3QiLCJjcmVhdGVFbGVtZW50IiwiZm9yZWNhc3REYWlseUJ0biIsImZvcmVjYXN0RGFpbHlMYWJlbCIsImZvcmVjYXN0SG91cmx5QnRuIiwiZm9yZWNhc3RIb3VybHlMYWJlbCIsImlkIiwiY2xhc3NMaXN0IiwiYWRkIiwidHlwZSIsIm5hbWUiLCJjaGVja2VkIiwiaHRtbEZvciIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJkYWlseUZvcmVjYXN0TGlzdCIsIm5hdmlnYXRpb25Eb3RzIiwiaSIsImRhaWx5Rm9yZWNhc3RJdGVtIiwiZGFpbHlGb3JlY2FzdEl0ZW1EYXRlIiwiZGFpbHlGb3JlY2FzdEl0ZW1UZW1wSGkiLCJkYWlseUZvcmVjYXN0SXRlbVRlbXBMbyIsImRhaWx5Rm9yZWNhc3RJdGVtSWNvbiIsInNyYyIsImFsdCIsIm51bVRhYnMiLCJudW1Eb3RzIiwibmF2aWdhdGlvbkRvdCIsIndlYXRoZXJJbmZvQ29tcG9uZW50Iiwid2VhdGhlckRldGFpbHNDb21wb25lbnQiLCJzZWFyY2hCb3hDb21wb25lbnQiLCJhcHBsZVRvdWNoSWNvbkhyZWYiLCJmYXZpY29uMzJIcmVmIiwiZmF2aWNvbjE2SHJlZiIsIm1hbmlmZXN0SHJlZiIsIm1hc2tJY29uSHJlZiIsIm1zQ29uZmlnSHJlZiIsImxvYWRGYXZpY29ucyIsImFwcGxlVG91Y2hJY29uIiwiZmF2aWNvbjMyIiwiZmF2aWNvbjE2IiwibWFuaWZlc3QiLCJtYXNrSWNvbiIsIm1zVGlsZUNvbG9yIiwibXNDb25maWciLCJ0aGVtZUNvbG9yIiwicmVsIiwic2l6ZXMiLCJocmVmIiwiY29sb3IiLCJjb250ZW50IiwiaGVhZCIsIm1haW4iLCJmb290ZXIiLCJsb2FkS2l0IiwiZm9vdGVyVGV4dCIsImZvb3RlckxpbmsiLCJmb290ZXJJY29uIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwidGFyZ2V0IiwiZm9udGF3ZXNvbWVLaXQiLCJjcm9zc09yaWdpbiIsImxvYWRHb29nbGVJY29ucyIsImljb25zIiwicGFnZUxvYWQiLCJ3aWRlU2NyZWVuV3JhcHBlciIsInNlYXJjaEJveCIsInNlYXJjaEZvcm0iLCJpY29uIiwic2VhcmNoSW5wdXQiLCJsb2NhdGlvbiIsImxvY2FsVGltZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJzcGVsbGNoZWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndlYXRoZXJEZXRhaWxzIiwid2VhdGhlckRldGFpbHNMaXN0Iiwid2VhdGhlckRldGFpbHNJdGVtIiwid2VhdGhlckRldGFpbHNJdGVtSWNvbiIsIndlYXRoZXJEZXRhaWxzSXRlbUxhYmVsIiwid2VhdGhlckRldGFpbHNJdGVtVmFsdWUiLCJ3ZWF0aGVyRGV0YWlsc0ljb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIndlYXRoZXJEZXRhaWxzTGFiZWxzIiwid2VhdGhlckluZm8iLCJkZXNjcmlwdGlvbiIsInRlbXBlcmF0dXJlIiwidW5pdENoYW5nZUJ0biIsInN0YXJ0QXBwIiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9