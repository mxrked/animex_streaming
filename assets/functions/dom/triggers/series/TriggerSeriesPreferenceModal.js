/**
 *
 *  This is used to trigger a series preference modal
 *
 */

import CheckSeriesGenre from "../../checkers/series/CheckSeriesGenre";
import CheckSeriesPreference from "../../checkers/series/CheckSeriesPreference";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

function DisplayPreferenceModal(modalId) {
  document.getElementById(modalId).style.display = "block";

  setTimeout(() => {
    if (document.getElementById(modalId)) {
      // Displaying the modal
      // console.log(document.getElementById(modalId).innerHTML);

      document.body.style.overflowY = "hidden";
      document.body.style.pointerEvents = "none";

      // Hiding all other modals
      document.querySelectorAll("._modal").forEach((modal) => {
        modal.style.opacity = 0;
        modal.style.visibility = "hidden";
      });

      // Showing the modal
      DeclareStorageVariable("session", "Modal Opened", true);

      document.getElementById(modalId).style.opacity = 1;
      document.getElementById(modalId).style.visibility = "visible";

      setTimeout(() => {
        document.getElementById(modalId).style.overflowY = "auto";
        document.getElementById(modalId).style.pointerEvents = "auto";
      }, 700);
    }
  }, 500);
}

export default function TriggerSeriesPreferenceModal() {
  const SERIES_PREFERENCE = CheckSeriesPreference();
  const GENRE = CheckSeriesGenre();

  let modalId;

  // Preferences
  if (SERIES_PREFERENCE === "Latest") {
    modalId = "latestPreferenceModal"; // Setting the modal id

    DisplayPreferenceModal(modalId);
  }
  if (SERIES_PREFERENCE === "Popular") {
    modalId = "popularPreferenceModal"; // Setting the modal id

    DisplayPreferenceModal(modalId);
  }
  if (SERIES_PREFERENCE === "Genres") {
    modalId = "genresPreferenceModal"; // Setting the modal id

    DisplayPreferenceModal(modalId);
  }
  if (SERIES_PREFERENCE === "Alphabetically") {
    modalId = "alphabeticallyPreferenceModal"; // Setting the modal id

    DisplayPreferenceModal(modalId);
  }

  // Genres
  if (GENRE === "Shonen") {
    modalId = "genresPreferenceModal"; // Setting the modal id
    DisplayPreferenceModal(modalId);

    document.getElementById("shonenSect").scrollIntoView(); // Scrolling the user to section
  }
  if (GENRE === "Seinen") {
    modalId = "genresPreferenceModal"; // Setting the modal id
    DisplayPreferenceModal(modalId);

    document.getElementById("seinenSect").scrollIntoView(); // Scrolling the user to section
  }
  if (GENRE === "Comedy") {
    modalId = "genresPreferenceModal"; // Setting the modal id
    DisplayPreferenceModal(modalId);

    document.getElementById("comedySect").scrollIntoView(); // Scrolling the user to section
  }
  if (GENRE === "Romance") {
    modalId = "genresPreferenceModal"; // Setting the modal id
    DisplayPreferenceModal(modalId);

    document.getElementById("romanceSect").scrollIntoView(); // Scrolling the user to section
  }
  if (GENRE === "Fantasy") {
    modalId = "genresPreferenceModal"; // Setting the modal id
    DisplayPreferenceModal(modalId);

    document.getElementById("fantasySect").scrollIntoView(); // Scrolling the user to section
  }
  if (GENRE === "Horror") {
    modalId = "genresPreferenceModal"; // Setting the modal id
    DisplayPreferenceModal(modalId);

    document.getElementById("horrorSect").scrollIntoView(); // Scrolling the user to section
  }
}
