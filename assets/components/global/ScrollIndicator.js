/**
 *
 *  This is the scroll indicator
 *
 */

import { useEffect } from "react";

import styles from "../../styles/modules/Misc/Misc.module.css";

export const ScrollIndicator = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // Hiding/Showing indicator based on scrollY
      if (window.scrollY <= 10) {
        document.getElementById("scrollIndicatorHolder").style.transform =
          "translateY(-20px)";
      } else {
        document.getElementById("scrollIndicatorHolder").style.transform =
          "translateY(0)";
      }

      // Adding progress to indicator when scrolling
      const WIN_SCROLL =
        document.body.scrollTop || document.documentElement.scrollTop;
      const HEIGHT =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const SCROLLED = (WIN_SCROLL / HEIGHT) * 100;

      document.getElementById("scrollIndicatorBar").style.width =
        SCROLLED + "%";
    });

    window.addEventListener("load", () => {
      // Hiding/Showing indicator based on scrollY
      if (window.scrollY <= 10) {
        document.getElementById("scrollIndicatorHolder").style.transform =
          "translateY(-20px)";
      } else {
        document.getElementById("scrollIndicatorHolder").style.transform =
          "translateY(0)";
      }
    });
  }, []);

  return (
    <div
      className={`${styles.scroll_indicator_holder} half-second`}
      id="scrollIndicatorHolder"
    >
      <div className={`${styles.scroll_indicator}`} id="scrollIndicatorBar" />
    </div>
  );
};
