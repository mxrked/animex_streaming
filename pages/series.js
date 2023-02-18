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

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Series/Series.module.css";

export default function Series() {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".series-link");
  }, []);

  return (
    <div id="page" className="page overrides_Series full-second">
      <PageHead
        title="Animex Streaming - Browse Series"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/series/"
      />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
      </main>
    </div>
  );
}
