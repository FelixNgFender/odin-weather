"use strict";
(self["webpackChunkodin_weather"] = self["webpackChunkodin_weather"] || []).push([["index"],{

/***/ 399:
/*!*************************************!*\
  !*** ./src/components/fetchData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  const slider = sliderComponent();
  forecast.id = "forecast";
  forecast.classList.add("forecast");
  forecastDailyBtn.id = "forecast-dailyBtn";
  forecastDailyBtn.classList.add("forecast-btn");
  forecastDailyBtn.type = "radio";
  forecastDailyBtn.name = "forecast";
  forecastDailyBtn.value = "daily";
  forecastDailyBtn.checked = true;
  forecastDailyLabel.classList.add("forecast-label");
  forecastDailyLabel.htmlFor = "forecast-dailyBtn";
  forecastHourlyBtn.id = "forecast-hourlyBtn";
  forecastHourlyBtn.classList.add("forecast-btn");
  forecastHourlyBtn.type = "radio";
  forecastHourlyBtn.name = "forecast";
  forecastHourlyBtn.value = "hourly";
  forecastHourlyLabel.classList.add("forecast-label");
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

/***/ }),

/***/ 256:
/*!************************************!*\
  !*** ./src/components/pageLoad.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/**
 * @fileoverview Initialize page load
 * @author Thinh Nguyen
 * @version 1.0.0
 */













/**
 * Add favicons to the page.
 * @return {void}
 */
function loadFavicons() {
  const appleTouchIcon = document.createElement("link");
  const favicon32 = document.createElement("link");
  const favicon16 = document.createElement("link");
  const manifest = document.createElement("link");
  const maskIcon = document.createElement("link");
  const msTileColor = document.createElement("meta");
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
  maskIcon.rel = "mask-icon";
  maskIcon.href = _assets_favicon_safari_pinned_tab_svg__WEBPACK_IMPORTED_MODULE_8__;
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
  description.classList.add("weatherInfo-description");
  temperature.classList.add("weatherInfo-temperature");
  unitChangeBtn.classList.add("weatherInfo-unitChangeBtn");
  icon.classList.add("weatherInfo-icon");
  description.textContent = "Broken Clouds";
  temperature.textContent = "21 °C";
  unitChangeBtn.textContent = "Display °F";
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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 300px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --btn-border: 2px solid grey;\n  --placeholder-text: grey;\n  --text-color: black;\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-color: #f5f5f5;\n  /* background-image: url(\"../assets/images/placeholder.jpg\"); */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: transparent;\n  width: var(--btn-width);\n  border: var(--btn-border);\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n/* Make it look like google search bar*/\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: 1px solid grey;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  color: grey;\n  background-color: #f5f5f5;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n}\n\n.weatherDetails-icon.size-20 {\n  margin-top: 3px;\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  border: var(--btn-border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.forecast-label:hover,\n.forecast-btn:checked + .forecast-label {\n  background-color: grey;\n  color: #f5f5f5;\n}\n\n.forecast-slider {\n  display: flex;\n  width: var(--btn-width);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.forecast-slider svg {\n  fill: black;\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  color: black;\n  transition: transform 0.3s ease-in-out;\n  /* filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg) brightness(113%) contrast(108%); */\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n", "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;EACzB,wBAAwB;EACxB,yCAAyC;EACzC,4BAA4B;EAC5B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA,WAAW;AACX;EACE,wBAAwB;EACxB,4CAAgD;AAClD;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B,oCAAoC;EACpC,iBAAiB;EACjB,yBAAyB;EACzB,+DAA+D;EAC/D,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,iCAAiC;EACjC,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,4BAA4B;EAC5B,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE;;;;;AAKF;;AAEA,iBAAiB;AACjB;EACE,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,6BAA6B;EAC7B,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;EACb,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB;;AAEA,eAAe;AACf;EACE,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA,uCAAuC;AACvC;EACE,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mCAAmC;EACnC,sBAAsB;EACtB,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,WAAW;EACX,yBAAyB;AAC3B;;AAEA,oBAAoB;AACpB;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,+BAA+B;EAC/B,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,aAAa;AACb;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,+BAA+B;EAC/B,eAAe;EACf,6CAA6C;AAC/C;;AAEA;;EAEE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA,WAAW;AACX;EACE,4BAA4B;EAC5B,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;EACR,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;EACf,YAAY;EACZ,sCAAsC;EACtC,uGAAuG;AACzG;;AAEA;EACE,oCAAoC;AACtC;;AAEA,kBAAkB","sourcesContent":[":root {\n  --border-radius: 0px;\n  --spacing-xs: 5px;\n  --spacing-sm: 10px;\n  --spacing-md: 15px;\n  --spacing-lg: 20px;\n  --spacing-xl: 40px;\n  --container-width: 1200px;\n  --footer-height: 30px;\n  --btn-width: 100px;\n  --search-bar-height: 44px;\n  --forecast-height: 300px;\n  --shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n  --btn-border: 2px solid grey;\n  --placeholder-text: grey;\n  --text-color: black;\n}\n\n/* GLOBAL */\n@font-face {\n  font-family: \"Cute Font\";\n  src: url(\"../assets/fonts/CuteFont-Regular.ttf\");\n}\n\nhtml {\n  box-sizing: border-box;\n  height: 100%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nbody {\n  min-height: 100%;\n  display: grid;\n  grid-template-rows: 1fr auto;\n  font-family: \"Cute Font\", sans-serif;\n  font-size: 2.5rem;\n  background-color: #f5f5f5;\n  /* background-image: url(\"../assets/images/placeholder.jpg\"); */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.wideScreenWrapper {\n  width: 100%;\n  max-width: var(--container-width);\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr auto;\n  padding: var(--spacing-lg);\n  gap: var(--spacing-lg);\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n/* WEATHER INFO */\n.weatherInfo {\n  padding: var(--spacing-lg);\n}\n\n.weatherInfo-temperature {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.weatherInfo-unitChangeBtn {\n  font-family: inherit;\n  font-size: 1.5rem;\n  background-color: transparent;\n  width: var(--btn-width);\n  border: var(--btn-border);\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n}\n\n.weatherInfo-icon {\n  display: block;\n}\n\n/* SEARCH BOX */\n.searchBox {\n  padding: var(--spacing-lg);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n}\n\n/* Make it look like google search bar*/\n.searchBox-form {\n  height: var(--search-bar-height);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--border-radius);\n  border: 1px solid grey;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-md);\n}\n\n.searchBox-icon.size-20 {\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.searchBox-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.5rem;\n  font-family: inherit;\n  color: grey;\n  background-color: #f5f5f5;\n}\n\n/* WEATHER DETAILS */\n.weatherDetails {\n  font-size: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n}\n\n.weatherDetails-item {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  gap: var(--spacing-sm);\n}\n\n.weatherDetails-icon {\n  grid-row: 1 / -1;\n}\n\n.weatherDetails-icon.size-20 {\n  margin-top: 3px;\n  font-size: 20px;\n  font-variation-settings: 'OPSZ' 20;\n}\n\n.weatherDetails-value {\n  font-size: 2.5rem;\n  font-weight: 700;\n}\n\n/* FORECAST */\n.forecast {\n  grid-column: 1 / -1;\n  height: var(--forecast-height);\n  padding: var(--spacing-lg);\n}\n\n.forecast-btn {\n  display: none;\n}\n\n.forecast-label {\n  display: inline-block;\n  width: var(--btn-width);\n  font-size: 1.5rem;\n  text-align: center;\n  border: var(--btn-border);\n  margin-right: var(--spacing-sm);\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out;\n}\n\n.forecast-label:hover,\n.forecast-btn:checked + .forecast-label {\n  background-color: grey;\n  color: #f5f5f5;\n}\n\n.forecast-slider {\n  display: flex;\n  width: var(--btn-width);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.forecast-slider svg {\n  fill: black;\n}\n\n/* FOOTER */\n.footer {\n  height: var(--footer-height);\n  font-size: 1.3rem;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  width: 100%;\n  grid-row: 3 / 4;\n}\n\n.fa-github {\n  font-size: 18px;\n  margin-top: 4px;\n  color: black;\n  transition: transform 0.3s ease-in-out;\n  /* filter: invert(100%) sepia(0%) saturate(7464%) hue-rotate(278deg) brightness(113%) contrast(108%); */\n}\n\n.fa-github:hover {\n  transform: rotate(360deg) scale(1.2);\n}\n\n/* MEDIA QUERIES */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ 734:
/*!*********************************************!*\
  !*** ./src/assets/favicon/site.webmanifest ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8ec675d70f0c8e96f20.webmanifest";

/***/ }),

/***/ 281:
/*!*************************************************!*\
  !*** ./src/assets/favicon/apple-touch-icon.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f214fb1fa4b4ecaed20.png";

/***/ }),

/***/ 231:
/*!**********************************************!*\
  !*** ./src/assets/favicon/favicon-16x16.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84b55d7a803036c294dd.png";

/***/ }),

/***/ 750:
/*!**********************************************!*\
  !*** ./src/assets/favicon/favicon-32x32.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "136290d15d740daa34c0.png";

/***/ }),

/***/ 969:
/*!**************************************************!*\
  !*** ./src/assets/favicon/safari-pinned-tab.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e45af1e90d06f96193ec.svg";

/***/ }),

/***/ 950:
/*!***********************************************!*\
  !*** ./src/assets/fonts/CuteFont-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1d48bd56aaa550cadce.ttf";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(352));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFNBQVMsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyx1Q0FBdUMseUJBQXlCLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFB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QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9jb21wb25lbnRzL2ZldGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2NvbXBvbmVudHMvd2VhdGhlckluZm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzcz9hMDIzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEZldGNoIGFwcCBkYXRhIGZyb20gQVBJc1xuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogR2V0IGxvY2F0aW9uIGZyb20gdGhlIHNlYXJjaCBib3ggZm9ybVxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbkZyb21Gb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCb3gtZm9ybVwiKTtcbiAgY29uc3QgY2l0eU5hbWUgPSBmb3JtLmNpdHkudmFsdWU7XG5cbiAgY29uc29sZS5sb2coY2l0eU5hbWUpO1xuXG4gIGZvcm0ucmVzZXQoKTtcbn0iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIGZvcmVjYXN0IGNvbXBvbmVudFxuICogQGF1dGhvciBUaGluaCBOZ3V5ZW5cbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBmb3JlY2FzdCBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRm9yZWNhc3QgY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JlY2FzdENvbXBvbmVudCgpIHtcbiAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3QgZm9yZWNhc3REYWlseUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZm9yZWNhc3REYWlseUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBmb3JlY2FzdEhvdXJseUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZm9yZWNhc3RIb3VybHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3Qgc2xpZGVyID0gc2xpZGVyQ29tcG9uZW50KClcblxuICBmb3JlY2FzdC5pZCA9IFwiZm9yZWNhc3RcIjtcbiAgZm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0XCIpO1xuICBmb3JlY2FzdERhaWx5QnRuLmlkID0gXCJmb3JlY2FzdC1kYWlseUJ0blwiO1xuICBmb3JlY2FzdERhaWx5QnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1idG5cIik7XG4gIGZvcmVjYXN0RGFpbHlCdG4udHlwZSA9IFwicmFkaW9cIjtcbiAgZm9yZWNhc3REYWlseUJ0bi5uYW1lID0gXCJmb3JlY2FzdFwiO1xuICBmb3JlY2FzdERhaWx5QnRuLnZhbHVlID0gXCJkYWlseVwiO1xuICBmb3JlY2FzdERhaWx5QnRuLmNoZWNrZWQgPSB0cnVlO1xuICBmb3JlY2FzdERhaWx5TGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWxhYmVsXCIpO1xuICBmb3JlY2FzdERhaWx5TGFiZWwuaHRtbEZvciA9IFwiZm9yZWNhc3QtZGFpbHlCdG5cIjtcbiAgZm9yZWNhc3RIb3VybHlCdG4uaWQgPSBcImZvcmVjYXN0LWhvdXJseUJ0blwiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtYnRuXCIpO1xuICBmb3JlY2FzdEhvdXJseUJ0bi50eXBlID0gXCJyYWRpb1wiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi5uYW1lID0gXCJmb3JlY2FzdFwiO1xuICBmb3JlY2FzdEhvdXJseUJ0bi52YWx1ZSA9IFwiaG91cmx5XCI7XG4gIGZvcmVjYXN0SG91cmx5TGFiZWwuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWxhYmVsXCIpO1xuICBmb3JlY2FzdEhvdXJseUxhYmVsLmh0bWxGb3IgPSBcImZvcmVjYXN0LWhvdXJseUJ0blwiO1xuXG4gIGZvcmVjYXN0RGFpbHlMYWJlbC50ZXh0Q29udGVudCA9IFwiRGFpbHlcIjtcbiAgZm9yZWNhc3RIb3VybHlMYWJlbC50ZXh0Q29udGVudCA9IFwiSG91cmx5XCI7XG5cbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm9yZWNhc3REYWlseUJ0bik7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKGZvcmVjYXN0RGFpbHlMYWJlbCk7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKGZvcmVjYXN0SG91cmx5QnRuKTtcbiAgZm9yZWNhc3QuYXBwZW5kQ2hpbGQoZm9yZWNhc3RIb3VybHlMYWJlbCk7XG4gIGZvcmVjYXN0LmFwcGVuZENoaWxkKHNsaWRlcik7XG5cbiAgcmV0dXJuIGZvcmVjYXN0O1xufVxuXG4vKipcbiAqIENyZWF0ZSB0aGUgc2xpZGVyIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBTbGlkZXIgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIHNsaWRlckNvbXBvbmVudCgpIHtcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGVmdEFycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGxlZnRBcnJvd1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIGNvbnN0IGxlZnRBcnJvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIpO1xuICBjb25zdCBsZWZ0QXJyb3dQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBhdGhcIik7XG4gIGNvbnN0IHJpZ2h0QXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgcmlnaHRBcnJvd1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIik7XG4gIGNvbnN0IHJpZ2h0QXJyb3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiKTtcbiAgY29uc3QgcmlnaHRBcnJvd1BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGF0aFwiKTtcbiAgY29uc3QgZG90MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBkb3QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IGRvdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBzbGlkZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXNsaWRlclwiKTtcbiAgbGVmdEFycm93LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zbGlkZXItbGVmdFwiKTtcbiAgbGVmdEFycm93U3ZnLnhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBsZWZ0QXJyb3dTdmcudmVyc2lvbiA9IFwiMS4xXCI7XG4gIGxlZnRBcnJvd1N2Zy52aWV3Qm94ID0gXCI4LjAyIDYgNy40MSAxMlwiO1xuICBsZWZ0QXJyb3dTdmcuZmlsbCA9IFwiI2Y1ZjVmNVwiO1xuICBsZWZ0QXJyb3dUaXRsZS50ZXh0Q29udGVudCA9IFwiYXJyb3dfbGVmdFwiO1xuICBsZWZ0QXJyb3dQYXRoLmQgPSBcIk0xNS40MjIgMTYuNTk0bC0xLjQwNiAxLjQwNi02LTYgNi02IDEuNDA2IDEuNDA2LTQuNTk0IDQuNTk0elwiO1xuICByaWdodEFycm93LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zbGlkZXItcmlnaHRcIik7XG4gIHJpZ2h0QXJyb3dTdmcueG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIHJpZ2h0QXJyb3dTdmcudmVyc2lvbiA9IFwiMS4xXCI7XG4gIHJpZ2h0QXJyb3dTdmcudmlld0JveCA9IFwiOC41OCA2IDcuNDEgMTJcIjtcbiAgcmlnaHRBcnJvd1N2Zy5maWxsID0gXCIjZjVmNWY1XCI7XG4gIHJpZ2h0QXJyb3dUaXRsZS50ZXh0Q29udGVudCA9IFwiYXJyb3dfcmlnaHRcIjtcbiAgcmlnaHRBcnJvd1BhdGguZCA9IFwiTTguNDIyIDYuNTk0bDEuNDA2IDEuNDA2IDQuNTk0LTQuNTk0LTQuNTk0LTQuNTk0LTEuNDA2IDEuNDA2IDYgNnpcIjtcbiAgZG90MS5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtc2xpZGVyLWRvdFwiLCBcImZvcmVjYXN0LXNsaWRlci1kb3QxXCIpO1xuICBkb3QyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zbGlkZXItZG90XCIsIFwiZm9yZWNhc3Qtc2xpZGVyLWRvdDJcIik7XG4gIGRvdDMuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXNsaWRlci1kb3RcIiwgXCJmb3JlY2FzdC1zbGlkZXItZG90M1wiKTtcblxuICBsZWZ0QXJyb3dTdmcuYXBwZW5kQ2hpbGQobGVmdEFycm93VGl0bGUpO1xuICBsZWZ0QXJyb3dTdmcuYXBwZW5kQ2hpbGQobGVmdEFycm93UGF0aCk7XG4gIGxlZnRBcnJvdy5hcHBlbmRDaGlsZChsZWZ0QXJyb3dTdmcpO1xuICByaWdodEFycm93U3ZnLmFwcGVuZENoaWxkKHJpZ2h0QXJyb3dUaXRsZSk7XG4gIHJpZ2h0QXJyb3dTdmcuYXBwZW5kQ2hpbGQocmlnaHRBcnJvd1BhdGgpO1xuICByaWdodEFycm93LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3dTdmcpO1xuICBzbGlkZXIuYXBwZW5kQ2hpbGQobGVmdEFycm93KTtcbiAgc2xpZGVyLmFwcGVuZENoaWxkKGRvdDEpO1xuICBzbGlkZXIuYXBwZW5kQ2hpbGQoZG90Mik7XG4gIHNsaWRlci5hcHBlbmRDaGlsZChkb3QzKTtcbiAgc2xpZGVyLmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpO1xuXG4gIHJldHVybiBzbGlkZXI7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgSW5pdGlhbGl6ZSBwYWdlIGxvYWRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2VhdGhlckluZm9Db21wb25lbnQgZnJvbSBcIi4vd2VhdGhlckluZm9cIjtcbmltcG9ydCB3ZWF0aGVyRGV0YWlsc0NvbXBvbmVudCBmcm9tIFwiLi93ZWF0aGVyRGV0YWlsc1wiO1xuaW1wb3J0IHNlYXJjaEJveENvbXBvbmVudCBmcm9tIFwiLi9zZWFyY2hCb3hcIjtcbmltcG9ydCBmb3JlY2FzdENvbXBvbmVudCBmcm9tIFwiLi9mb3JlY2FzdFwiO1xuXG5pbXBvcnQgYXBwbGVUb3VjaEljb25IcmVmIGZyb20gXCIuLi9hc3NldHMvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiO1xuaW1wb3J0IGZhdmljb24zMkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCI7XG5pbXBvcnQgZmF2aWNvbjE2SHJlZiBmcm9tIFwiLi4vYXNzZXRzL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIjtcbmltcG9ydCBtYW5pZmVzdEhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL3NpdGUud2VibWFuaWZlc3RcIjtcbmltcG9ydCBtYXNrSWNvbkhyZWYgZnJvbSBcIi4uL2Fzc2V0cy9mYXZpY29uL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiO1xuXG4vKipcbiAqIEFkZCBmYXZpY29ucyB0byB0aGUgcGFnZS5cbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGxvYWRGYXZpY29ucygpIHtcbiAgY29uc3QgYXBwbGVUb3VjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgY29uc3QgZmF2aWNvbjMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGNvbnN0IGZhdmljb24xNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBtYW5pZmVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBtYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBjb25zdCBtc1RpbGVDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIpO1xuICBjb25zdCB0aGVtZUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIik7XG4gIGFwcGxlVG91Y2hJY29uLnJlbCA9IFwiYXBwbGUtdG91Y2gtaWNvblwiO1xuICBhcHBsZVRvdWNoSWNvbi5zaXplcyA9IFwiMTgweDE4MFwiO1xuICBhcHBsZVRvdWNoSWNvbi5ocmVmID0gYXBwbGVUb3VjaEljb25IcmVmO1xuICBmYXZpY29uMzIucmVsID0gXCJpY29uXCI7XG4gIGZhdmljb24zMi50eXBlID0gXCJpbWFnZS9wbmdcIjtcbiAgZmF2aWNvbjMyLnNpemVzID0gXCIzMngzMlwiO1xuICBmYXZpY29uMzIuaHJlZiA9IGZhdmljb24zMkhyZWY7XG4gIGZhdmljb24xNi5yZWwgPSBcImljb25cIjtcbiAgZmF2aWNvbjE2LnR5cGUgPSBcImltYWdlL3BuZ1wiO1xuICBmYXZpY29uMTYuc2l6ZXMgPSBcIjE2eDE2XCI7XG4gIGZhdmljb24xNi5ocmVmID0gZmF2aWNvbjE2SHJlZjtcbiAgbWFuaWZlc3QucmVsID0gXCJtYW5pZmVzdFwiO1xuICBtYW5pZmVzdC5ocmVmID0gbWFuaWZlc3RIcmVmO1xuICBtYXNrSWNvbi5yZWwgPSBcIm1hc2staWNvblwiO1xuICBtYXNrSWNvbi5ocmVmID0gbWFza0ljb25IcmVmO1xuICBtYXNrSWNvbi5jb2xvciA9IFwiIzViYmFkNVwiO1xuICBtc1RpbGVDb2xvci5uYW1lID0gXCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiO1xuICBtc1RpbGVDb2xvci5jb250ZW50ID0gXCIjZGE1MzJjXCI7XG4gIHRoZW1lQ29sb3IubmFtZSA9IFwidGhlbWUtY29sb3JcIjtcbiAgdGhlbWVDb2xvci5jb250ZW50ID0gXCIjZmZmZmZmXCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYXBwbGVUb3VjaEljb24pO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhdmljb24zMik7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2aWNvbjE2KTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYW5pZmVzdCk7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWFza0ljb24pO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1zVGlsZUNvbG9yKTtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0aGVtZUNvbG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIG1haW4gY29tcG9uZW50LlxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9IE1haW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIndpZGVTY3JlZW5XcmFwcGVyXCIpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGZvb3RlciBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gRm9vdGVyIGVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gZm9vdGVyKCkge1xuICBsb2FkS2l0KCk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgXCJmYS1naXRodWJcIik7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiQ29weXJpZ2h0IMKpIFwiICsgbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpICsgXCIgRmVsaXhOZ0ZlbmRlclwiO1xuICBmb290ZXJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9GZWxpeE5nRmVuZGVyXCI7XG4gIGZvb3RlckxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgZm9vdGVyTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcbiAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJJY29uKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluayk7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbi8qKlxuICogTG9hZCB0aGUgZm9udGF3ZXNvbWUga2l0LlxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gbG9hZEtpdCgpIHtcbiAgY29uc3QgZm9udGF3ZXNvbWVLaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBmb250YXdlc29tZUtpdC5zcmMgPSBcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9iNmI0MGEzOTAyLmpzXCI7XG4gIGZvbnRhd2Vzb21lS2l0LmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmb250YXdlc29tZUtpdCk7XG59XG5cbi8qKlxuICogTG9hZCBHb29nbGUgRm9udHMgaWNvbnMuXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBsb2FkR29vZ2xlSWNvbnMoKSB7XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIGljb25zLmhyZWYgPVxuICAgIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcIjtcbiAgaWNvbnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaWNvbnMpO1xufVxuXG4vKipcbiAqIEluaXRpYWxpemUgcGFnZSBsb2FkLlxuICogQHJldHVybiB7dm9pZH1cbiAqIEBleHBvcnRzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCB3aWRlU2NyZWVuV3JhcHBlciA9IG1haW4oKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3aWRlU2NyZWVuV3JhcHBlcik7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvQ29tcG9uZW50KCkpO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChzZWFyY2hCb3hDb21wb25lbnQoKSk7XG4gIHdpZGVTY3JlZW5XcmFwcGVyLmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzQ29tcG9uZW50KCkpO1xuICB3aWRlU2NyZWVuV3JhcHBlci5hcHBlbmRDaGlsZChmb3JlY2FzdENvbXBvbmVudCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG4gIGxvYWRGYXZpY29ucygpO1xuICBsb2FkR29vZ2xlSWNvbnMoKTtcbn1cbiIsIi8qKlxuICogQGZpbGVvdmVydmlldyBUaGUgc2VhcmNoIGJveCBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBnZXRMb2NhdGlvbkZyb21Gb3JtIH0gZnJvbSBcIi4vZmV0Y2hEYXRhXCI7XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBzZWFyY2ggYm94IGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBTZWFyY2ggYm94IGNvbXBvbmVudFxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoQm94Q29tcG9uZW50KCkge1xuICBjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhbFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHNlYXJjaEJveC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94XCIpO1xuICBzZWFyY2hGb3JtLmlkID0gXCJzZWFyY2hCb3gtZm9ybVwiO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtZm9ybVwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiLCBcInNlYXJjaEJveC1pY29uXCIsIFwic2l6ZS0yMFwiKTtcbiAgaWNvbi5odG1sRm9yID0gXCJzZWFyY2hCb3gtaW5wdXQtY2l0eVwiO1xuICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoQm94LWlucHV0XCIpO1xuICBzZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoQm94LWlucHV0LWNpdHlcIjtcbiAgc2VhcmNoSW5wdXQubmFtZSA9IFwiY2l0eVwiO1xuICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggZm9yIGEgY2l0eVwiO1xuICBzZWFyY2hJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHNlYXJjaElucHV0LnNwZWxsY2hlY2sgPSBmYWxzZTtcbiAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcInNlYXJjaEJveC1sb2NhdGlvblwiKTtcbiAgbG9jYWxUaW1lLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hCb3gtbG9jYWxUaW1lXCIpO1xuXG4gIGljb24udGV4dENvbnRlbnQgPSBcInNlYXJjaFwiO1xuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0TG9jYXRpb25Gcm9tRm9ybSgpO1xuICB9KTtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkJvc3RvbiwgVVNcIjtcbiAgbG9jYWxUaW1lLnRleHRDb250ZW50ID0gXCIxMjowMCBQTVwiO1xuXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoRm9ybSk7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIHNlYXJjaEJveC5hcHBlbmRDaGlsZChsb2NhbFRpbWUpO1xuXG4gIHJldHVybiBzZWFyY2hCb3g7XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgVGhlIHdlYXRoZXIgZGV0YWlscyBjb21wb25lbnRcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgd2VhdGhlciBkZXRhaWxzIGNvbXBvbmVudC5cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBXZWF0aGVyIGRldGFpbHMgY29tcG9uZW50XG4gKiBAZXhwb3J0c1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3ZWF0aGVyRGV0YWlscygpIHtcbiAgY29uc3Qgd2VhdGhlckRldGFpbHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gIHdlYXRoZXJEZXRhaWxzTGlzdC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHNcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzSXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGV0YWlsc0l0ZW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXRhaWxzSXRlbVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEZXRhaWxzLWl0ZW1cIik7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIsXG4gICAgICBcIndlYXRoZXJEZXRhaWxzLWljb25cIixcbiAgICAgIFwic2l6ZS0yMFwiXG4gICAgKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW1MYWJlbC5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckRldGFpbHMtbGFiZWxcIik7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtVmFsdWUuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEZXRhaWxzLXZhbHVlXCIpO1xuXG4gICAgd2VhdGhlckRldGFpbHNJdGVtVmFsdWUudGV4dENvbnRlbnQgPSBcIjEwMCVcIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNJdGVtSWNvbik7XG4gICAgd2VhdGhlckRldGFpbHNJdGVtLmFwcGVuZENoaWxkKHdlYXRoZXJEZXRhaWxzSXRlbUxhYmVsKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0l0ZW0uYXBwZW5kQ2hpbGQod2VhdGhlckRldGFpbHNJdGVtVmFsdWUpO1xuICAgIHdlYXRoZXJEZXRhaWxzTGlzdC5hcHBlbmRDaGlsZCh3ZWF0aGVyRGV0YWlsc0l0ZW0pO1xuICB9XG5cbiAgY29uc3Qgd2VhdGhlckRldGFpbHNJY29ucyA9IHdlYXRoZXJEZXRhaWxzTGlzdC5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYXRoZXJEZXRhaWxzLWljb25cIik7XG4gICAgd2VhdGhlckRldGFpbHNJY29uc1swXS50ZXh0Q29udGVudCA9IFwidGhlcm1vc3RhdFwiO1xuICAgIHdlYXRoZXJEZXRhaWxzSWNvbnNbMV0udGV4dENvbnRlbnQgPSBcImh1bWlkaXR5X3BlcmNlbnRhZ2VcIjtcbiAgICB3ZWF0aGVyRGV0YWlsc0ljb25zWzJdLnRleHRDb250ZW50ID0gXCJyYWlueVwiO1xuICAgIHdlYXRoZXJEZXRhaWxzSWNvbnNbM10udGV4dENvbnRlbnQgPSBcImFpclwiO1xuXG4gICAgY29uc3Qgd2VhdGhlckRldGFpbHNMYWJlbHMgPSB3ZWF0aGVyRGV0YWlsc0xpc3QucXVlcnlTZWxlY3RvckFsbChcIi53ZWF0aGVyRGV0YWlscy1sYWJlbFwiKTtcbiAgICB3ZWF0aGVyRGV0YWlsc0xhYmVsc1swXS50ZXh0Q29udGVudCA9IFwiRmVlbHMgTGlrZVwiO1xuICAgIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzFdLnRleHRDb250ZW50ID0gXCJIdW1pZGl0eVwiO1xuICAgIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzJdLnRleHRDb250ZW50ID0gXCJDaGFuY2Ugb2YgUmFpblwiO1xuICAgIHdlYXRoZXJEZXRhaWxzTGFiZWxzWzNdLnRleHRDb250ZW50ID0gXCJXaW5kIFNwZWVkXCI7XG5cblxuICByZXR1cm4gd2VhdGhlckRldGFpbHNMaXN0O1xufVxuIiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFRoZSB3ZWF0aGVyIGluZm8gY29tcG9uZW50XG4gKiBAYXV0aG9yIFRoaW5oIE5ndXllblxuICogQHZlcnNpb24gMS4wLjBcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHdlYXRoZXIgaW5mbyBjb21wb25lbnQuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gV2VhdGhlciBpbmZvIGNvbXBvbmVudFxuICogQGV4cG9ydHNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2VhdGhlckluZm8oKSB7XG4gIGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1bml0Q2hhbmdlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgd2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJbmZvXCIpO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8tZGVzY3JpcHRpb25cIik7XG4gIHRlbXBlcmF0dXJlLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySW5mby10ZW1wZXJhdHVyZVwiKTtcbiAgdW5pdENoYW5nZUJ0bi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8tdW5pdENoYW5nZUJ0blwiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwid2VhdGhlckluZm8taWNvblwiKTtcblxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQnJva2VuIENsb3Vkc1wiO1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IFwiMjEgwrBDXCI7XG4gIHVuaXRDaGFuZ2VCdG4udGV4dENvbnRlbnQgPSBcIkRpc3BsYXkgwrBGXCI7XG4gIGljb24uc3JjID0gXCJodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8wNGQucG5nXCI7XG4gIGljb24uYWx0ID0gXCJCcm9rZW4gQ2xvdWRzXCI7XG5cbiAgd2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG4gIHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKHVuaXRDaGFuZ2VCdG4pO1xuICB3ZWF0aGVySW5mby5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gd2VhdGhlckluZm87XG59XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgV2VhdGhlciBhcHBcbiAqIEBhdXRob3IgVGhpbmggTmd1eWVuXG4gKiBAdmVyc2lvbiAxLjAuMFxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vY29tcG9uZW50cy9wYWdlTG9hZFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLXJlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFwcFxuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc3RhcnRBcHAoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5pZCA9IFwiY29udGVudFwiO1xuICBwYWdlTG9hZCgpO1xufVxuXG5zdGFydEFwcCgpOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy1yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL0N1dGVGb250LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XFxuICAtLXNwYWNpbmcteHM6IDVweDtcXG4gIC0tc3BhY2luZy1zbTogMTBweDtcXG4gIC0tc3BhY2luZy1tZDogMTVweDtcXG4gIC0tc3BhY2luZy1sZzogMjBweDtcXG4gIC0tc3BhY2luZy14bDogNDBweDtcXG4gIC0tY29udGFpbmVyLXdpZHRoOiAxMjAwcHg7XFxuICAtLWZvb3Rlci1oZWlnaHQ6IDMwcHg7XFxuICAtLWJ0bi13aWR0aDogMTAwcHg7XFxuICAtLXNlYXJjaC1iYXItaGVpZ2h0OiA0NHB4O1xcbiAgLS1mb3JlY2FzdC1oZWlnaHQ6IDMwMHB4O1xcbiAgLS1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHg7XFxuICAtLWJ0bi1ib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgLS1wbGFjZWhvbGRlci10ZXh0OiBncmV5O1xcbiAgLS10ZXh0LWNvbG9yOiBibGFjaztcXG59XFxuXFxuLyogR0xPQkFMICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkN1dGUgRm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDdXRlIEZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLmpwZ1xcXCIpOyAqL1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG4ud2lkZVNjcmVlbldyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAnRklMTCcgMCxcXG4gICd3Z2h0JyA0MDAsXFxuICAnR1JBRCcgMCxcXG4gICdvcHN6JyA0OFxcbn1cXG5cXG4vKiBXRUFUSEVSIElORk8gKi9cXG4ud2VhdGhlckluZm8ge1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi53ZWF0aGVySW5mby10ZW1wZXJhdHVyZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdW5pdENoYW5nZUJ0biB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGJvcmRlcjogdmFyKC0tYnRuLWJvcmRlcik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndlYXRoZXJJbmZvLWljb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIFNFQVJDSCBCT1ggKi9cXG4uc2VhcmNoQm94IHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLyogTWFrZSBpdCBsb29rIGxpa2UgZ29vZ2xlIHNlYXJjaCBiYXIqL1xcbi5zZWFyY2hCb3gtZm9ybSB7XFxuICBoZWlnaHQ6IHZhcigtLXNlYXJjaC1iYXItaGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XFxufVxcblxcbi5zZWFyY2hCb3gtaWNvbi5zaXplLTIwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnT1BTWicgMjA7XFxufVxcblxcbi5zZWFyY2hCb3gtaW5wdXQge1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4vKiBXRUFUSEVSIERFVEFJTFMgKi9cXG4ud2VhdGhlckRldGFpbHMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pdGVtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy1pY29uLnNpemUtMjAge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdPUFNaJyAyMDtcXG59XFxuXFxuLndlYXRoZXJEZXRhaWxzLXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLyogRk9SRUNBU1QgKi9cXG4uZm9yZWNhc3Qge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGhlaWdodDogdmFyKC0tZm9yZWNhc3QtaGVpZ2h0KTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4uZm9yZWNhc3QtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiB2YXIoLS1idG4tYm9yZGVyKTtcXG4gIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy1zbSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JlY2FzdC1sYWJlbDpob3ZlcixcXG4uZm9yZWNhc3QtYnRuOmNoZWNrZWQgKyAuZm9yZWNhc3QtbGFiZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4uZm9yZWNhc3Qtc2xpZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogdmFyKC0tYnRuLXdpZHRoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1zbGlkZXIgc3ZnIHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG4uZm9vdGVyIHtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uZmEtZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi10b3A6IDRweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgLyogZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NjQlKSBodWUtcm90YXRlKDI3OGRlZykgYnJpZ2h0bmVzcygxMTMlKSBjb250cmFzdCgxMDglKTsgKi9cXG59XFxuXFxuLmZhLWdpdGh1Yjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxufVxcblxcbi8qIE1FRElBIFFVRVJJRVMgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHlDQUF5QztFQUN6Qyw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSx3QkFBd0I7RUFDeEIsNENBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsK0RBQStEO0VBQy9ELHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsY0FBYztFQUNkLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTs7Ozs7QUFLRjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsNkNBQTZDO0FBQy9DOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBLFdBQVc7QUFDWDtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLHNDQUFzQztFQUN0Qyx1R0FBdUc7QUFDekc7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsa0JBQWtCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYm9yZGVyLXJhZGl1czogMHB4O1xcbiAgLS1zcGFjaW5nLXhzOiA1cHg7XFxuICAtLXNwYWNpbmctc206IDEwcHg7XFxuICAtLXNwYWNpbmctbWQ6IDE1cHg7XFxuICAtLXNwYWNpbmctbGc6IDIwcHg7XFxuICAtLXNwYWNpbmcteGw6IDQwcHg7XFxuICAtLWNvbnRhaW5lci13aWR0aDogMTIwMHB4O1xcbiAgLS1mb290ZXItaGVpZ2h0OiAzMHB4O1xcbiAgLS1idG4td2lkdGg6IDEwMHB4O1xcbiAgLS1zZWFyY2gtYmFyLWhlaWdodDogNDRweDtcXG4gIC0tZm9yZWNhc3QtaGVpZ2h0OiAzMDBweDtcXG4gIC0tc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xcbiAgLS1idG4tYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIC0tcGxhY2Vob2xkZXItdGV4dDogZ3JleTtcXG4gIC0tdGV4dC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIEdMT0JBTCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDdXRlIEZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4uL2Fzc2V0cy9mb250cy9DdXRlRm9udC1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3V0ZSBGb250XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5qcGdcXFwiKTsgKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuLndpZGVTY3JlZW5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgJ0ZJTEwnIDAsXFxuICAnd2dodCcgNDAwLFxcbiAgJ0dSQUQnIDAsXFxuICAnb3BzeicgNDhcXG59XFxuXFxuLyogV0VBVEhFUiBJTkZPICovXFxuLndlYXRoZXJJbmZvIHtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckluZm8tdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLndlYXRoZXJJbmZvLXVuaXRDaGFuZ2VCdG4ge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBib3JkZXI6IHZhcigtLWJ0bi1ib3JkZXIpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53ZWF0aGVySW5mby1pY29uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBTRUFSQ0ggQk9YICovXFxuLnNlYXJjaEJveCB7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XFxufVxcblxcbi8qIE1ha2UgaXQgbG9vayBsaWtlIGdvb2dsZSBzZWFyY2ggYmFyKi9cXG4uc2VhcmNoQm94LWZvcm0ge1xcbiAgaGVpZ2h0OiB2YXIoLS1zZWFyY2gtYmFyLWhlaWdodCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xcbn1cXG5cXG4uc2VhcmNoQm94LWljb24uc2l6ZS0yMCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ09QU1onIDIwO1xcbn1cXG5cXG4uc2VhcmNoQm94LWlucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuLyogV0VBVEhFUiBERVRBSUxTICovXFxuLndlYXRoZXJEZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaXRlbSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxuICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbiB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbn1cXG5cXG4ud2VhdGhlckRldGFpbHMtaWNvbi5zaXplLTIwIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnT1BTWicgMjA7XFxufVxcblxcbi53ZWF0aGVyRGV0YWlscy12YWx1ZSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi8qIEZPUkVDQVNUICovXFxuLmZvcmVjYXN0IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBoZWlnaHQ6IHZhcigtLWZvcmVjYXN0LWhlaWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogdmFyKC0tYnRuLWJvcmRlcik7XFxuICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9yZWNhc3QtbGFiZWw6aG92ZXIsXFxuLmZvcmVjYXN0LWJ0bjpjaGVja2VkICsgLmZvcmVjYXN0LWxhYmVsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBjb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuLmZvcmVjYXN0LXNsaWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IHZhcigtLWJ0bi13aWR0aCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3Qtc2xpZGVyIHN2ZyB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLyogRk9PVEVSICovXFxuLmZvb3RlciB7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG59XFxuXFxuLmZhLWdpdGh1YiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG4gIC8qIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDY0JSkgaHVlLXJvdGF0ZSgyNzhkZWcpIGJyaWdodG5lc3MoMTEzJSkgY29udHJhc3QoMTA4JSk7ICovXFxufVxcblxcbi5mYS1naXRodWI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cXG5cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiZ2V0TG9jYXRpb25Gcm9tRm9ybSIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2l0eU5hbWUiLCJjaXR5IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicmVzZXQiLCJmb3JlY2FzdENvbXBvbmVudCIsImZvcmVjYXN0IiwiY3JlYXRlRWxlbWVudCIsImZvcmVjYXN0RGFpbHlCdG4iLCJmb3JlY2FzdERhaWx5TGFiZWwiLCJmb3JlY2FzdEhvdXJseUJ0biIsImZvcmVjYXN0SG91cmx5TGFiZWwiLCJzbGlkZXIiLCJzbGlkZXJDb21wb25lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsInR5cGUiLCJuYW1lIiwiY2hlY2tlZCIsImh0bWxGb3IiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwibGVmdEFycm93IiwibGVmdEFycm93U3ZnIiwibGVmdEFycm93VGl0bGUiLCJsZWZ0QXJyb3dQYXRoIiwicmlnaHRBcnJvdyIsInJpZ2h0QXJyb3dTdmciLCJyaWdodEFycm93VGl0bGUiLCJyaWdodEFycm93UGF0aCIsImRvdDEiLCJkb3QyIiwiZG90MyIsInhtbG5zIiwidmVyc2lvbiIsInZpZXdCb3giLCJmaWxsIiwiZCIsIndlYXRoZXJJbmZvQ29tcG9uZW50Iiwid2VhdGhlckRldGFpbHNDb21wb25lbnQiLCJzZWFyY2hCb3hDb21wb25lbnQiLCJhcHBsZVRvdWNoSWNvbkhyZWYiLCJmYXZpY29uMzJIcmVmIiwiZmF2aWNvbjE2SHJlZiIsIm1hbmlmZXN0SHJlZiIsIm1hc2tJY29uSHJlZiIsImxvYWRGYXZpY29ucyIsImFwcGxlVG91Y2hJY29uIiwiZmF2aWNvbjMyIiwiZmF2aWNvbjE2IiwibWFuaWZlc3QiLCJtYXNrSWNvbiIsIm1zVGlsZUNvbG9yIiwidGhlbWVDb2xvciIsInJlbCIsInNpemVzIiwiaHJlZiIsImNvbG9yIiwiY29udGVudCIsImhlYWQiLCJtYWluIiwiZm9vdGVyIiwibG9hZEtpdCIsImZvb3RlclRleHQiLCJmb290ZXJMaW5rIiwiZm9vdGVySWNvbiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInRhcmdldCIsImZvbnRhd2Vzb21lS2l0Iiwic3JjIiwiY3Jvc3NPcmlnaW4iLCJsb2FkR29vZ2xlSWNvbnMiLCJpY29ucyIsInBhZ2VMb2FkIiwid2lkZVNjcmVlbldyYXBwZXIiLCJzZWFyY2hCb3giLCJzZWFyY2hGb3JtIiwiaWNvbiIsInNlYXJjaElucHV0IiwibG9jYXRpb24iLCJsb2NhbFRpbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic3BlbGxjaGVjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ3ZWF0aGVyRGV0YWlscyIsIndlYXRoZXJEZXRhaWxzTGlzdCIsImkiLCJ3ZWF0aGVyRGV0YWlsc0l0ZW0iLCJ3ZWF0aGVyRGV0YWlsc0l0ZW1JY29uIiwid2VhdGhlckRldGFpbHNJdGVtTGFiZWwiLCJ3ZWF0aGVyRGV0YWlsc0l0ZW1WYWx1ZSIsIndlYXRoZXJEZXRhaWxzSWNvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwid2VhdGhlckRldGFpbHNMYWJlbHMiLCJ3ZWF0aGVySW5mbyIsImRlc2NyaXB0aW9uIiwidGVtcGVyYXR1cmUiLCJ1bml0Q2hhbmdlQnRuIiwiYWx0Iiwic3RhcnRBcHAiLCJib2R5IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=