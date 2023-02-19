/**
 *
 *  This is used to toggle the mobile nav menu
 *
 */

import DeclareStorageVariable from "../../data/storage/DeclareStorageVariable";

export default function ToggleMobileNav() {
  const MENU = document.getElementById("mobileNavMenu");
  const TOGGLER = document.getElementById("mobileNavToggler");
  const CLOSER = document.getElementById("mobileNavCloser");

  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";

  DeclareStorageVariable("session", "Mobile Nav Opened", true);

  document.getElementById("mobileNav").style.pointerEvents = "auto";

  TOGGLER.style.display = "none";
  CLOSER.style.display = "block";
  MENU.style.pointerEvents = "auto";
  MENU.style.display = "block";
}
