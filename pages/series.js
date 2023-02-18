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

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/Series/Series.module.css";

export default function Series() {
  const router = useRouter();

  return (
    <div id="page" className="page overrides_Series full-second">
      <PageHead
        title="Animex Streaming - Browse Series"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/series/"
      />

      <main id="pageCnt" className="page-cnt full-second">
        Series
      </main>
    </div>
  );
}
