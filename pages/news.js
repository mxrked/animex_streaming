/**
 *
 *  This is the Info Page
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

// Style Imports
import "../assets/styles/modules/News/News.module.css";

export default function News() {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".news-link");
  }, []);

  return (
    <div id="page" className="page overrides_News full-second">
      <PageHead
        title="Animex Streaming - News"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/news/"
      />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
        <MobileNav />
      </main>
    </div>
  );
}
