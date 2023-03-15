/**
 * @fileoverview The search box component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the search box component.
 * @return {HTMLElement} Search box component
 * @exports
 */
export default function searchBoxComponent() {
  const searchBox = document.createElement("section");
  const searchForm = document.createElement("form");
  const icon = document.createElement("span");
  const searchInput = document.createElement("input");
  const location = document.createElement("div");
  const localTime = document.createElement("div");

  searchBox.classList.add("searchBox");
  searchForm.id = "searchBox-form";
  searchForm.classList.add("searchBox-form");
  icon.classList.add("material-symbols-outlined", "searchBox-icon", "size-20");
  searchInput.classList.add("searchBox-input");
  searchInput.id = "searchBox-input";
  searchInput.type = "text";
  searchInput.placeholder = "Search for a city";
  searchInput.required = true;
  searchInput.spellcheck = false;
  location.classList.add("searchBox-location");
  localTime.classList.add("searchBox-localTime");

  icon.textContent = "search";
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("searchBox-input");
    const cityName = input.value;
    console.log(cityName);
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
