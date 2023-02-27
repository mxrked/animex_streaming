/**
 *
 *  This is the Index Page
 *
 */

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLink";
import TriggerEnterAnimations from "@/assets/functions/dom/triggers/TriggerEnterAnimations";
import TriggerScrollAnimations from "@/assets/functions/dom/triggers/TriggerScrollAnimations";

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { DesktopNavMegaMenu } from "@/assets/components/global/Nav/Desktop/DesktopNavMegaMenu";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";
import { ScrollIndicator } from "@/assets/components/global/ScrollIndicator";

import { IndexTop } from "@/assets/components/pages/Index/IndexTop";
import { IndexBrowsingWatching } from "@/assets/components/pages/Index/IndexBrowsingWatching";
import { IndexNews } from "@/assets/components/pages/Index/IndexNews";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

// Adding some json data to be used later
export const getStaticProps = async () => {
  const SEARCH_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/animex_streaming_CDN/master/files/data/SEARCH.json"
  );
  const NEWS_ARTICLES_RES = await fetch(
    "https://raw.githubusercontent.com/mxrked/animex_streaming_CDN/master/files/data/NEWS_ARTICLES.json"
  );

  const SEARCH_RES_DATA = await SEARCH_RES.json();
  const NEWS_ARTICLES_RES_DATA = await NEWS_ARTICLES_RES.json();

  return {
    props: {
      display_search_data: SEARCH_RES_DATA,
      display_news_articles_data: NEWS_ARTICLES_RES_DATA,
    },
  };
};

export default function Home({
  display_search_data,
  display_news_articles_data,
}) {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".index-link");
  }, []);

  // Refreshing Page on tab switch (This is used to fix the animations)
  useEffect(() => {
    if (!sessionStorage.getItem("Page Reload")) {
      DeclareStorageVariable("session", "Page Reload", true);

      router.reload();
    }
  }, []);

  //! Triggering Enter Animations
  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => {
        TriggerEnterAnimations();
      }, 660);
    });

    window.addEventListener("popstate", () => {
      TriggerEnterAnimations();
    });

    router.events.on("routeChangeComplete", () => {
      TriggerEnterAnimations();
    });
  }, [router]);

  //! Triggering Scroll Animations
  useEffect(() => {
    window.addEventListener("scroll", () => {
      TriggerScrollAnimations();
    });
  }, []);

  // Enabling interactivity
  useEffect(() => {
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, []);

  return (
    <div id="page" className="page overrides_Index full-second">
      <PageHead
        title="Animex Streaming - Home"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/"
      />

      <Search searchData={display_search_data} />

      <ScrollIndicator />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
        <DesktopNavMegaMenu />
        <MobileNav />
        <MobileNavMenu />
        <IndexTop />
        <IndexBrowsingWatching />
        <IndexNews />
      </main>
    </div>
  );
}
