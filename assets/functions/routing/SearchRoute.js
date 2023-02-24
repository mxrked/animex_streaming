/**
 *
 *  This is used to route when the user uses the search
 *
 */

import {
  ATTACK_ON_TITAN_KWS,
  CHAINSAW_MAN_KWS,
  DEMON_SLAYER_KWS,
  JOJO_KWS,
  MY_HERO_ACADEMIA_KWS,
  MOB_PSYCHO_KWS,
  ONE_PUNCH_MAN_KWS,
  SPY_X_FAMILY_KWS,
  VINLAND_SAGA_KWS,
} from "../../data/variables/ARRAYS";

import ExitAndRoute from "./ExitAndRoute";

// Check KWs for route
function RouteBasedOnKWS(
  rooter,
  input,
  kws,
  linkIndex,
  route,
  checker,
  type,
  hash
) {
  const SEARCH_LINKS = document.querySelectorAll(".search-link");

  for (let i = 0; i < kws.length; i++) {
    const UPPERCASED_LINK = kws[i].toUpperCase();
    const UPPERCASED_INPUT = input.value.toUpperCase();

    console.log(UPPERCASED_INPUT);

    setTimeout(() => {
      if (UPPERCASED_INPUT.indexOf(UPPERCASED_LINK) > -1) {
        if (SEARCH_LINKS[linkIndex].style.opacity != 0.5) {
          //! These 2 if statements are to prevent some strange cancel rendering route error

          // A basic link
          if (type == "link") {
            ExitAndRoute(rooter, route, checker);
          }

          // A hash/slug
          if (type == "hash") {
            const ROUTE_WITH_HASH = route + hash; // Combines the route with the hash the user is going to

            ExitAndRoute(rooter, ROUTE_WITH_HASH, checker);
          }
        } else {
          console.log("You are already on that page..");
        }
      }
    }, 1300);
  }
}

//! MAIN FUNCTION
export default function SearchRoute(rooter) {
  // Checkers
  let seriesRouted = false;

  const INPUT = document.getElementById("searchIpt");

  RouteBasedOnKWS(
    rooter,
    INPUT,
    ATTACK_ON_TITAN_KWS,
    0,
    "/series",
    seriesRouted,
    "hash",
    "#Attack_On_Titan"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    CHAINSAW_MAN_KWS,
    1,
    "/series",
    seriesRouted,
    "hash",
    "#Chainsaw_Man"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    DEMON_SLAYER_KWS,
    2,
    "/series",
    seriesRouted,
    "hash",
    "#Demon_Slayer"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    JOJO_KWS,
    3,
    "/series",
    seriesRouted,
    "hash",
    "#Jojos_Bizarre_Adventure"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    MY_HERO_ACADEMIA_KWS,
    4,
    "/series",
    seriesRouted,
    "hash",
    "#My_Hero_Academia"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    MOB_PSYCHO_KWS,
    5,
    "/series",
    seriesRouted,
    "hash",
    "#Mob_Psycho_100"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    ONE_PUNCH_MAN_KWS,
    6,
    "/series",
    seriesRouted,
    "hash",
    "#One_Punch_Man"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    SPY_X_FAMILY_KWS,
    7,
    "/series",
    seriesRouted,
    "hash",
    "#Spy_X_Family"
  );
  RouteBasedOnKWS(
    rooter,
    INPUT,
    VINLAND_SAGA_KWS,
    8,
    "/series",
    seriesRouted,
    "hash",
    "#Vinland_Saga"
  );
}
