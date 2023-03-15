/**
 * @fileoverview The search box component
 * @author Thinh Nguyen
 * @version 1.0.0
 */

"use strict";

/**
 * Create the search box component.
 * @return {HTMLElement} Search box component
 * @export
 */
export default function searchBoxComponent() {
 const searchBox = document.createElement("section");

 searchBox.id = "searchBox";
 searchBox.classList.add("searchBox");

 return searchBox;
}