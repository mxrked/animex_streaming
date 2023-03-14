/**
 *
 *  This is used to check the series genre the user picks
 *
 */

import { SERIES_GENRES } from "@/assets/data/variables/ARRAYS";

export default function CheckSeriesGenre() {
  let currentGenre;

  for (let i = 0; i < SERIES_GENRES.length; i++) {
    if (window.location.hash == "#" + SERIES_GENRES[i]) {
      currentGenre = SERIES_GENRES[i]; // This will be used to indicate what genre the user clicked
    }
  }

  return currentGenre;
}
