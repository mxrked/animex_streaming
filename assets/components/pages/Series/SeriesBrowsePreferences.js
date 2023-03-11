/**
 *
 *  This is the series browse preferences
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { CSM_BG, AOT_BG, SHONEN_BG, MHA_BG } from "@/assets/cdns/CDNBgs";

import { FADES } from "@/assets/data/variables/ARRAYS";

import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import CheckSeriesPreference from "@/assets/functions/dom/checkers/series/CheckSeriesPreference";
import TriggerSeriesPreferenceModal from "@/assets/functions/dom/triggers/series/TriggerSeriesPreferenceModal";

import styles from "../../../styles/modules/Series/Series.module.css";

export const SeriesBrowsePreferences = () => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  useEffect(() => {
    // Fade In
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }

    // Fade Up
    if (window.innerWidth >= 1024) {
      setIsMobile(false);
    }
  }, [router]);

  return (
    <section
      id="seriesBrowsePreferences"
      className={`${styles.series_browse_preferences}`}
    >
      <motion.div
        id="seriesBrowsePreferencesFM"
        className={`fm-motion fade-left-fix full-second ${styles.series_browse_preferences_inner}`}
        ref={REF}
        animate={CONTROLS}
        initial="hidden"
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        variants={isMobile ? FADES[0] : FADES[3]}
      >
        <div className={`${styles.series_browse_preferences_inner_cnt}`}>
          <h1 className="half-second">Browse Preferences.</h1>

          <div
            className={`${styles.series_browse_preferences_inner_cnt_box} container-fluid`}
          >
            <div
              className={`${styles.series_browse_preferences_inner_cnt_row} row`}
            >
              <div
                className={`${styles.series_preference} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.series_preference_inner}`}>
                  <BackgroundImage
                    src={CSM_BG}
                    className={`${styles.bg} half-second`}
                  />

                  <button
                    id="latestToggler"
                    onClick={() => {
                      window.location.hash = "Latest";

                      TriggerSeriesPreferenceModal();
                    }}
                    className={`${styles.toggler} half-second`}
                  >
                    <span>By Latest</span>
                  </button>
                </div>
              </div>
              <div
                className={`${styles.series_preference} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.series_preference_inner}`}>
                  <BackgroundImage
                    src={AOT_BG}
                    className={`${styles.bg} half-second`}
                  />

                  <button
                    id="popularToggler"
                    onClick={() => {
                      window.location.hash = "Popular";

                      TriggerSeriesPreferenceModal();
                    }}
                    className={`${styles.toggler} half-second`}
                  >
                    <span>By Popularity</span>
                  </button>
                </div>
              </div>
              <div
                className={`${styles.series_preference} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.series_preference_inner}`}>
                  <BackgroundImage
                    src={SHONEN_BG}
                    className={`${styles.bg} half-second`}
                  />

                  <button
                    id="genresToggler"
                    onClick={() => {
                      window.location.hash = "Genres";

                      TriggerSeriesPreferenceModal();
                    }}
                    className={`${styles.toggler} half-second`}
                  >
                    <span>By Genre</span>
                  </button>
                </div>
              </div>
              <div
                className={`${styles.series_preference} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
              >
                <div className={`${styles.series_preference_inner}`}>
                  <BackgroundImage
                    src={MHA_BG}
                    className={`${styles.bg} half-second`}
                  />

                  <button
                    id="alphabeticallyToggler"
                    onClick={() => {
                      window.location.hash = "Alphabetically";

                      TriggerSeriesPreferenceModal();
                    }}
                    className={`${styles.toggler} half-second`}
                  >
                    <span>Alphabetically</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
