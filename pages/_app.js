// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

// Data/Functions/Images Imports
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";
import CheckMobileNavMenuStatus from "@/assets/functions/dom/checkers/CheckMobileNavStatus";
import CheckUserDevice from "@/assets/functions/dom/checkers/CheckUserDevice";
// import CheckUsername from "@/assets/functions/dom/checkers/account/CheckUsername";

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //? GLOBALS
  //! NProgress Init
  useEffect(() => {
    // NProgress.done(); // Prevents NProgress from being stuck after page route completed

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, [router, router.events]);

  //! Forget scroll position and force user back to top of page
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.addEventListener("beforeunload", () => {
      if (window.scrollY !== 0) {
        DeclareStorageVariable("session", "Reload Scroll", true);
      }
    });

    if (sessionStorage.getItem("Reload Scroll")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      RemoveStorageVariable("session", "Reload Scroll");
    }
  }, []);

  //! Enable vertical scrolling
  useEffect(() => {
    if (!sessionStorage.getItem("Mobile Nav Opened")) {
      if (!sessionStorage.getItem("Search Opened")) {
        if (!sessionStorage.getItem("Modal Opened")) {
          document.body.style.overflowY = "auto";
          document.body.style.pointerEvents = "auto";
        }
      }
    }
  }, [router]);

  //! Reload Page after route change (This is mostly for the animations)
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      router.reload();
    });
  }, [router]);

  //? DATA
  //! Session/Local Storage Clearing
  useEffect(() => {
    setTimeout(() => {
      RemoveStorageVariable("local", "ally-supports-cache");
      RemoveStorageVariable("session", "Search Opened");
      RemoveStorageVariable("session", "Mobile Nav Opened");
      RemoveStorageVariable("session", "Country Code");

      // This will allow the modal to stay opened and prevents user from interacting
      if (!window.location.hash) {
        RemoveStorageVariable("session", "Modal Opened");
      }

      RemoveStorageVariable("session", "Page Reload");
    }, 700);
  }, [router]);

  //? CHECKERS
  //! Check User Device
  useEffect(() => {
    let mobile,
      desktop = false;

    // Page Load
    window.addEventListener("load", () => {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    });

    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    }

    // Resize
    window.addEventListener("resize", () => {
      CheckUserDevice(mobile, desktop);
    });
  }, []);

  // //! Check Username
  // useEffect(() => {
  //   CheckUsername(router);
  // }, [router]);

  //! Checking Mobile Nav Menu Status
  useEffect(() => {
    window.addEventListener("resize", () => {
      CheckMobileNavMenuStatus();
    });

    window.addEventListener("load", () => {
      CheckMobileNavMenuStatus();
    });

    router.events.on("routeChangeComplete", () => {
      CheckMobileNavMenuStatus();
    });
  }, [router]);

  //? DISPLAYS/HIDERS
  //! Showing Page after some time
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".page").forEach((page) => {
        page.style.opacity = 1;
        page.style.visibility = "visible";
      });
    }, 500);
  }, [router]);

  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
