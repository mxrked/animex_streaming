/**
 *
 *  This is used to filter the search links
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
} from "../../../data/variables/ARRAYS";

// This is used to display a certain link if the input value matches a related keyword
function DisplaySearchLinkBasedOnKWS(kws, link) {
  for (let i = 0; i < kws.length; i++) {
    if (
      document.getElementById("searchIpt").value.toLowerCase().indexOf(kws[i]) >
      -1
    ) {
      link.style.display = "flex";
    }
  }
}

//! MAIN FUNCTION
export default function FilterSearchLinks() {
  const LINKS = document.getElementById("searchLinks");
  const SEARCH_LINK = LINKS.getElementsByTagName("li");
  const FILTER = document.getElementById("searchIpt").value.toUpperCase();

  for (let i = 0; i < SEARCH_LINK.length; i++) {
    const SPAN = SEARCH_LINK[i].getElementsByTagName("span")[0];
    const TXT_VAL = SPAN.textContent || SPAN.innerText;

    if (TXT_VAL.toUpperCase().indexOf(FILTER) > -1) {
      SEARCH_LINK[i].style.display = "";
    } else {
      SEARCH_LINK[i].style.display = "none";
    }
  }

  // Displays the different links if user inputs a certain word or pairing
  DisplaySearchLinkBasedOnKWS(ATTACK_ON_TITAN_KWS, SEARCH_LINK[0]);
  DisplaySearchLinkBasedOnKWS(CHAINSAW_MAN_KWS, SEARCH_LINK[1]);
  DisplaySearchLinkBasedOnKWS(DEMON_SLAYER_KWS, SEARCH_LINK[2]);
  DisplaySearchLinkBasedOnKWS(JOJO_KWS, SEARCH_LINK[3]);
  DisplaySearchLinkBasedOnKWS(MY_HERO_ACADEMIA_KWS, SEARCH_LINK[4]);
  DisplaySearchLinkBasedOnKWS(MOB_PSYCHO_KWS, SEARCH_LINK[5]);
  DisplaySearchLinkBasedOnKWS(ONE_PUNCH_MAN_KWS, SEARCH_LINK[6]);
  DisplaySearchLinkBasedOnKWS(SPY_X_FAMILY_KWS, SEARCH_LINK[7]);
  DisplaySearchLinkBasedOnKWS(VINLAND_SAGA_KWS, SEARCH_LINK[8]);
}
