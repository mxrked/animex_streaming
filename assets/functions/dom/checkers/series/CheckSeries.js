/**
 *
 *  This is used to check the series the user picks
 *
 */

import { SERIES_NAMES } from "@/assets/data/variables/ARRAYS";

export default function CheckSeries() {
  let currentSeries;

  for (let i = 0; i < SERIES_NAMES.length; i++) {
    if (window.location.hash == "#" + SERIES_NAMES[i]) {
      currentSeries = "#" + SERIES_NAMES[i]; // This will be used to indicate what series the user clicked
    }
  }

  return currentSeries;
}
