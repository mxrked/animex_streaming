/**
 *
 *  This is used to close the search
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseSearch() {
  const SEARCH = document.getElementById("search");

  RemoveStorageVariable("session", "Search Opened");

  SEARCH.style.pointerEvents = "none";

  SEARCH.style.opacity = 0;
  SEARCH.style.visibility = "hidden";

  // Resetting the search
  document.getElementById("searchIpt").value = "";

  document.querySelectorAll(".search-link").forEach((link) => {
    link.style.display = "flex";
  });

  setTimeout(() => {
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, 1200);
}
