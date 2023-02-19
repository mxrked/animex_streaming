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

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";
import { DesktopNavMegaMenu } from "@/assets/components/global/Nav/Desktop/DesktopNavMegaMenu";
import { MobileNav } from "@/assets/components/global/Nav/Mobile/MobileNav";
import { MobileNavMenu } from "@/assets/components/global/Nav/Mobile/MobileNavMenu";
import { Search } from "@/assets/components/global/Nav/Both/Search";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".index-link");
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

      <Search />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
        <DesktopNavMegaMenu />
        <MobileNav />
        <MobileNavMenu />
      </main>
    </div>
  );
}
