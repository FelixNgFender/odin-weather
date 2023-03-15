/**
 * @fileoverview Fetch app data from APIs
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Get location from the search box form
 * @return {void}
 * @exports
 */
export function getLocationFromForm() {
  const form = document.getElementById("searchBox-form");
  const cityName = form.city.value;

  console.log(cityName);

  form.reset();
}