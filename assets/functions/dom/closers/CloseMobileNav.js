/**
 *
 *  This is used to close the mobile nav menu
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

export default function CloseMobileNav() {
  const MENU = document.getElementById("mobileNavMenu");
  const TOGGLER = document.getElementById("mobileNavToggler");
  const CLOSER = document.getElementById("mobileNavCloser");
  const GENRE_LINKS_CB = document.getElementById("genreLinksCB");

  RemoveStorageVariable("session", "Mobile Nav Opened");

  TOGGLER.style.display = "block";
  CLOSER.style.display = "none";
  MENU.style.display = "none";

  if (GENRE_LINKS_CB.checked) {
    GENRE_LINKS_CB.checked = false;
    document.getElementById("genreLinks").style.height = 0;
  }
}
