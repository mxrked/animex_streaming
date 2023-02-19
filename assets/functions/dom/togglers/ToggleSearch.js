/**
 *
 *  This is used to toggle the search
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleSearch() {
  const SEARCH = document.getElementById("search");

  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  DeclareStorageVariable("session", "Search Opened", true);

  SEARCH.style.display = "flex";

  setTimeout(() => {
    SEARCH.style.opacity = 1;
    SEARCH.style.visibility = "visible";
  }, 700);

  setTimeout(() => {
    SEARCH.style.pointerEvents = "auto";
  }, 1200);
}
