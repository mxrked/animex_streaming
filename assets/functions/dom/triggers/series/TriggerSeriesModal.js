/**
 *
 *  This is used to trigger a series modal
 *
 */

import { ALL_SERIES } from "@/assets/data/variables/ARRAYS";

import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import CheckSeries from "../../checkers/series/CheckSeries";

export default function TriggerSeriesModal() {
  // const SERIES = CheckSeries();
  // const SERIES_MODALS = document.querySelectorAll(".series-modal");
  // for (let i = 0; i < ALL_SERIES.length; i++) {
  //   if (SERIES === ALL_SERIES[i].getLink) {
  //     // Checking if the series matches a series object
  //     for (let j = 0; j < SERIES_MODALS.length; j++) {
  //       const NONHASH_SERIES = SERIES.split("#").pop(); // Removing the # from SERIES
  //       if (SERIES_MODALS[j].id == NONHASH_SERIES + "_Modal") {
  //         // Displaying the modal
  //         // console.log(SERIES_MODALS[j].innerHTML);
  //         document.body.style.overflowY = "hidden";
  //         document.body.style.pointerEvents = "none";
  //         // Hiding all other modals
  //         document.querySelectorAll("._modal").forEach((modal) => {
  //           modal.style.opacity = 0;
  //           modal.style.visibility = "hidden";
  //         });
  //         // Showing the modal
  //         DeclareStorageVariable("session", "Modal Opened", true);
  //         document.getElementById(SERIES_MODALS[j].id).style.opacity = 1;
  //         document.getElementById(SERIES_MODALS[j].id).style.visibility =
  //           "visible";
  //         setTimeout(() => {
  //           document.getElementById(SERIES_MODALS[j].id).style.overflowY =
  //             "auto";
  //           document.getElementById(SERIES_MODALS[j].id).style.pointerEvents =
  //             "none";
  //         }, 700);
  //       }
  //     }
  //   }
  // }

  const CURRENT_SERIES = CheckSeries();
  const SERIES_MODAL = document.getElementById("seriesModal");
  const SERIES_MODAL_VIDEO = document.getElementById("seriesModalVideo");

  SERIES_MODAL.style.display = "block";

  for (let i = 0; i < ALL_SERIES.length; i++) {
    // Checking if CURRENT_SERIES matches a series object
    if (CURRENT_SERIES == ALL_SERIES[i].getLink) {
      document.body.style.overflowY = "hidden";
      document.body.style.pointerEvents = "none";

      setTimeout(() => {
        SERIES_MODAL.style.opacity = 1;
        SERIES_MODAL.style.visibility = "visible";
      }, 500);

      // Changing the video source
      SERIES_MODAL_VIDEO.src = ALL_SERIES[i].getVideo;

      setTimeout(() => {
        SERIES_MODAL.style.pointerEvents = "auto";
        SERIES_MODAL.style.overflowY = "auto";

        DeclareStorageVariable("session", "Modal Opened", true); // Indicates a modal is opened

        document.body.style.overflowY = "hidden";
        // document.body.style.pointerEvents = "none";
      }, 800);
    }
  }
}
