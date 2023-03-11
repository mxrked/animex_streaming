/**
 *
 *  This is used to trigger a series modal
 *
 */

import { ALL_SERIES } from "@/assets/data/variables/ARRAYS";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import CheckSeries from "../../checkers/series/CheckSeries";

export default function TriggerSeriesModal() {
  const SERIES = CheckSeries();
  const SERIES_MODALS = document.querySelectorAll(".series-modal");

  for (let i = 0; i < ALL_SERIES.length; i++) {
    if (SERIES === ALL_SERIES[i].getLink) {
      // Checking if the series matches a series object
      for (let j = 0; j < SERIES_MODALS.length; j++) {
        const NONHASH_SERIES = SERIES.split("#").pop(); // Removing the # from SERIES

        if (SERIES_MODALS[j].id == NONHASH_SERIES + "_Modal") {
          // Displaying the modal
          // console.log(SERIES_MODALS[j].innerHTML);

          document.body.style.overflowY = "hidden";
          document.body.style.pointerEvents = "none";

          // Hiding all other modals
          document.querySelectorAll("._modal").forEach((modal) => {
            modal.style.opacity = 0;
            modal.style.visibility = "hidden";
          });

          // Showing the modal
          DeclareStorageVariable("session", "Modal Opened", true);

          document.getElementById(SERIES_MODALS[j].id).style.opacity = 1;
          document.getElementById(SERIES_MODALS[j].id).style.visibility =
            "visible";

          setTimeout(() => {
            document.getElementById(SERIES_MODALS[j].id).style.overflowY =
              "auto";
            document.getElementById(SERIES_MODALS[j].id).style.pointerEvents =
              "none";
          }, 700);
        }
      }
    }
  }
}