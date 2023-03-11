/**
 *
 *  This is used to check the series preference the user picks
 *
 */

import { SERIES_PREFERENCES } from "@/assets/data/variables/ARRAYS";

export default function CheckSeriesPreference() {
  let currentPreference;

  for (let i = 0; i < SERIES_PREFERENCES.length; i++) {
    if (window.location.hash == "#" + SERIES_PREFERENCES[i]) {
      currentPreference = SERIES_PREFERENCES[i]; // This will be used to indicate what preference the user clicked
    }
  }

  return currentPreference;
}
