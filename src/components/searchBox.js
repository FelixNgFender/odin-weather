/**
 * @fileoverview The search box component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

import { convertUnixTimestamp, updateMain } from "..";

/**
 * Create the search box component.
 * @param {Object} coordsData - Coordinates data
 * @param {Number} currentUnixTimestamp - Current unix timestamp
 * @return {HTMLElement} Search box component
 * @exports
 */
export default function searchBoxComponent(coordsData, currentUnixTimestamp) {
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
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    updateMain();
  });
  error.textContent = "Invalid city name. Please try again.";  
  location.textContent = `${coordsData.name}, ${coordsData.country}`;
  const currentDateTime = convertUnixTimestamp(currentUnixTimestamp);
  date.textContent = `${currentDateTime.toLocaleString("en-US", {
    weekday: "long",
  })}, ${currentDateTime.getDate()} ${currentDateTime.toLocaleString("en-US", {
    month: "long",
  })} ${currentDateTime.getFullYear()}`;
  localTime.textContent = `${currentDateTime.toLocaleTimeString()}`;
  setInterval(() => {
    currentDateTime.setSeconds(currentDateTime.getSeconds() + 1);
    localTime.textContent = `${currentDateTime.toLocaleTimeString()}`;
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