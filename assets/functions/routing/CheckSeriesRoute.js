/**
 *
 *  This is used to check the series url for certain info
 *
 */

/**
 *
 *  !ROUTES
 *
 * /series/#Popular
 * /series/#Latest
 * /series/#Genres
 * /series/#Alphabetically
 * /series/#Attack_On_Titan
 * /series/#Chainsaw_Man
 * /series/#Demon_Slayer
 * /series/#Jojos_Bizarre_Adventure
 * /series/#My_Hero_Academia
 * /series/#Mob_Psycho_100
 * /series/#One_Punch_Man
 * /series/#Spy_X_Family
 * /series/#Vinland_Saga
 *
 */

import { SERIES_ROUTES } from "@/assets/data/variables/ARRAYS";

export default function CheckSeriesRoute(rooter) {
  let currentRouteHash; // This will hold the current hash the user is on

  SERIES_ROUTES.forEach((route) => {
    if (rooter.asPath.indexOf(route) > -1) {
      currentRouteHash = route; // Appends the hash to the variable
    }
  });

  return currentRouteHash;
}
