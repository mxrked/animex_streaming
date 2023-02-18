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

// Component Imports
import { PageHead } from "@/assets/components/global/PageHead";
import { DesktopNav } from "@/assets/components/global/Nav/Desktop/DesktopNav";

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  return (
    <div id="page" className="page overrides_Contact full-second">
      <PageHead
        title="Animex Streaming - Contact/Support"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/contact/"
      />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
      </main>
    </div>
  );
}
