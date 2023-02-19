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

// Style Imports
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  const router = useRouter();

  // Disabling Page Links
  useEffect(() => {
    ManipPageLink("disable", "multiple", ".contact-link");
  }, []);

  return (
    <div id="page" className="page overrides_Contact full-second">
      <PageHead
        title="Animex Streaming - Contact/Support"
        robots="index, follow"
        url="https://sparkling-dragon-f3af91.netlify.app/contact/"
      />

      <main id="pageCnt" className="page-cnt full-second">
        <DesktopNav />
        <DesktopNavMegaMenu />
        <MobileNav />
        <MobileNavMenu />
      </main>
    </div>
  );
}
