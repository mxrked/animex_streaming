/**
 *
 *  This is the Series Page
 *
 */

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLink";
import CheckSeriesRoute from "@/assets/functions/routing/CheckSeriesRoute";
import TriggerSeriesModal from "@/assets/functions/dom/triggers/series/TriggerSeriesModal";
import TriggerSeriesPreference from "@/assets/functions/dom/triggers/series/TriggerSeriesPreferenceModal";

import {
  ALPHABETICAL_SERIES,
  SERIES_ROUTES,
} from "@/assets/data/variables/ARRAYS";

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { DesktopNavMegaMenu } from "@/assets/components/global/Nav/Desktop/DesktopNavMegaMenu";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";
import { ScrollIndicator } from "@/assets/components/global/ScrollIndicator";
import { Footer } from "@/assets/components/global/Footer/Footer";

import { SeriesTop } from "@/assets/components/pages/Series/SeriesTop";
import { SeriesBrowsePreferences } from "@/assets/components/pages/Series/SeriesBrowsePreferences";
import { SeriesLatestModal } from "@/assets/components/pages/Series/SeriesLatestModal";
import { SeriesAlphabeticallyModal } from "@/assets/components/pages/Series/SeriesAlphabeticallyModal";
import { SeriesGenresModal } from "@/assets/components/pages/Series/SeriesGenresModal";
import { SeriesPopularModal } from "@/assets/components/pages/Series/SeriesPopularModal";

// Style Imports
import "../assets/styles/modules/Series/Series.module.css";

// Adding some json data to be used later
export const getStaticProps = async () => {
  const SEARCH_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/animex_streaming_CDN/master/files/data/SEARCH.json"
  );
  const SEARCH_RES_DATA = await SEARCH_RES.json();

  return {
    props: {
      display_search_data: SEARCH_RES_DATA,
    },
  };
};

export default function Series({ display_search_data }) {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".series-link");
  }, []);

  // Enabling interactivity
  useEffect(() => {
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, []);

  // Checking current series hash
  useEffect(() => {
    const checkSeriesRoute = CheckSeriesRoute(router);

    // Logging the current hash path the user is on
    SERIES_ROUTES.forEach((route) => {
      if (checkSeriesRoute == route) {
        console.log("Currently on " + route);
      }
    });

    // If no hash = the standard series page
    if (!window.location.hash) {
      console.log("Currently on Series (Main)");
    }
  }, [router]);

  // Displaying preferences or series modals
  useEffect(() => {
    TriggerSeriesPreference();
    TriggerSeriesModal();
  }, []);

  return (
    <div id="page" className="page overrides_Series full-second">
      <PageHead
        title="Animex Streaming - Browse Series"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/series/"
      />

      <Search searchData={display_search_data} />

      <ScrollIndicator />

      <SeriesLatestModal />
      <SeriesPopularModal />
      <SeriesGenresModal />
      <SeriesAlphabeticallyModal />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
        <DesktopNavMegaMenu />
        <MobileNav />
        <MobileNavMenu />

        <SeriesTop />
        <SeriesBrowsePreferences />

        <Footer />

        {/**

          <span id="Attack_On_Titan_Modal" className="_modal series-modal">
          Attack On Titan Modal
        </span>
        <span id="Chainsaw_Man_Modal" className="_modal series-modal">
          Chainsaw Man Modal
        </span>
        <span id="Demon_Slayer_Modal" className="_modal series-modal">
          Demon Slayer Modal
        </span>
        <span
          id="Jojos_Bizarre_Adventure_Modal"
          className="_modal series-modal"
        >
          Jojo's Bizarre Adventure Modal
        </span>
        <span id="My_Hero_Academia_Modal" className="_modal series-modal">
          My Hero Academia Modal
        </span>
        <span id="Mob_Psycho_100_Modal" className="_modal series-modal">
          Mob Psycho 100 Modal
        </span>
        <span id="One_Punch_Man_Modal" className="_modal series-modal">
          One Punch Man Modal
        </span>
        <span id="Spy_X_Family_Modal" className="_modal series-modal">
          Spy X Family Modal
        </span>
        <span id="Vinland_Saga_Modal" className="_modal series-modal">
          Vinland Saga Modal
        </span>
        <span id="latestPreferenceModal" className="_modal preference-modal">
          Latest Modal
        </span>
        <span id="popularPreferenceModal" className="_modal preference-modal">
          Popular Modal
        </span>
        <span id="genresPreferenceModal" className="_modal preference-modal">
          Genres Modal
        </span>
        <span
          id="alphabeticallyPreferenceModal"
          className="_modal preference-modal"
        >
          Alphabetically Modal
        </span>
      
        */}
      </main>
    </div>
  );
}
