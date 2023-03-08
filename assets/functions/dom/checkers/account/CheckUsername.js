/**
 *
 *  This is used to check for the username
 *
 */

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

function CleanURL(rooter, title) {
  window.history.pushState("Clean URL", title, rooter.pathname); // Cleans the URL
}

export default function CheckUsername(rooter) {
  const URL = window.location.hash;
  const SPLIT_URL = URL.split("/");

  // If user is logged in
  if (localStorage.getItem("Logged In")) {
    // Declaring the username by default
    if (!localStorage.getItem("Username")) {
      DeclareStorageVariable("local", "Username", SPLIT_URL[1]);
    }
  }

  // Cleaning up the URL
  if (URL.indexOf("#successful_login") > -1) {
    CleanURL(rooter, "Cleaning URL after login");
  }
}
