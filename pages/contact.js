/**
 *
 *  This is the Contact Page
 *
 */

// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import ManipPageLink from "@/assets/functions/dom/manip/ManipPageLink";

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { DesktopNavMegaMenu } from "@/assets/components/global/Nav/Desktop/DesktopNavMegaMenu";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";
import { ScrollIndicator } from "@/assets/components/global/ScrollIndicator";
import { Footer } from "@/assets/components/global/Footer/Footer";

import { ContactTop } from "@/assets/components/pages/Contact/ContactTop";
import { ContactForm } from "@/assets/components/pages/Contact/ContactForm";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

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

export default function Contact({ display_search_data }) {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".contact-link");
  }, []);

  // Enabling interactivity
  useEffect(() => {
    document.body.style.overflowY = "auto";
    document.body.style.pointerEvents = "auto";
  }, []);

  return (
    <div id="page" className="page overrides_Contact full-second">
      <PageHead
        title="Animex Streaming - Contact/Support"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/contact/"
      />

      <Search searchData={display_search_data} />

      <ScrollIndicator />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
        <DesktopNavMegaMenu />
        <MobileNav />
        <MobileNavMenu />

        <ContactTop />
        <ContactForm />

        <Footer />
      </main>
    </div>
  );
}
