/**
 *
 *  This is used to close a modal
 *
 */

import RemoveStorageVariable from "../../data/storage/RemoveStorageVariable";

import { SERIES_ROUTES } from "@/assets/data/variables/ARRAYS";

export default function CloseModal() {
  const SERIES_MODAL_VIDEO = document.getElementById("seriesModalVideo");

  // Pauses and resets video
  SERIES_MODAL_VIDEO.pause();
  SERIES_MODAL_VIDEO.currentTime = 0;

  // Removing hash from URL
  for (let i = 0; i < SERIES_ROUTES.length; i++) {
    if (window.location.hash == "#" + SERIES_ROUTES[i]) {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }
  }

  // Hiding the modal(s)
  document.querySelectorAll("._modal").forEach((modal) => {
    modal.style.pointerEvents = "none";
    modal.style.overflowY = "hidden";

    setTimeout(() => {
      modal.style.opacity = 0;
      modal.style.visibility = "hidden";
    }, 400);

    setTimeout(() => {
      RemoveStorageVariable("session", "Modal Opened");

      document.body.style.overflowY = "auto";
      document.body.style.pointerEvents = "auto";
    }, 1400);
  });
}
