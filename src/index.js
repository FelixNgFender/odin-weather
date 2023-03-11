/**
 * @fileoverview Weather app
 * @author Thinh Nguyen
 * @version 1.0.0
 */

import pageLoad from "./components/pageLoad";
import "./styles/styles-reset.css";
import "./styles/styles.css";

/**
 * Initialize the app
 * @return {void}
 */
function startApp() {
  const body = document.querySelector("body");
  body.id = "content";
  pageLoad();
}

startApp();