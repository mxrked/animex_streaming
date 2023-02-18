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

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";

// Style Imports
import "../assets/styles/modules/News/News.module.css";

export default function News() {
  const router = useRouter();

  return (
    <div id="page" className="page overrides_News full-second">
      <PageHead
        title="Animex Streaming - News"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/news/"
      />

      <main id="pageCnt" className="page-cnt full-second"></main>
    </div>
  );
}
