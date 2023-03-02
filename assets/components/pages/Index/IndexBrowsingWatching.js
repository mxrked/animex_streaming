/**
 *
 *  This is the index browsing/watching
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import {
  ALL_GENRES,
  LATEST_SERIES,
  POPULAR_SERIES,
} from "@/assets/data/variables/ARRAYS";

import { FADE_UP } from "@/assets/anims/FADES";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";
import TriggerExitAnimations from "@/assets/functions/dom/triggers/TriggerExitAnimations";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexBrowsingWatching = () => {
  const router = useRouter();

  // Checkers
  let seriesRouted = false;

  // Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    setTimeout(() => {
      TriggerInViewMotion(CONTROLS, INVIEW);
    }, 900);
  }, [CONTROLS, INVIEW]);

  return (
    <section
      id="indexBrowsingWatching"
      className={`${styles.index_browsing_watching}`}
    >
      <motion.div
        className={`fm-motion full-second ${styles.fm_motion}`}
        ref={REF}
        animate={CONTROLS}
        initial="hidden"
        variants={FADE_UP}
      >
        <div className={`${styles.index_browsing_watching_inner} full-second`}>
          <div className={`${styles.index_browsing_watching_inner_top}`}>
            <h1 className="half-second">Browsing/Watching.</h1>

            <div
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series", seriesRouted);
              }}
            >
              <span>View All</span>
            </div>
          </div>

          <div className={`${styles.index_browsing_watching_inner_main}`}>
            <span className={`${styles.section_heading} half-second`}>
              Popular
            </span>

            <div className={`${styles.popular_series_box} container-fluid`}>
              <div className={`${styles.popular_series_row} row`}>
                {POPULAR_SERIES.map((item) => (
                  <div
                    className={`${styles.popular_series} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div
                      className={`${styles.popular_series_inner} half-second`}
                    >
                      <div
                        className={`${styles.popular_series_inner_hover} half-second`}
                      >
                        <div className={`${styles.hover_cnt}`}>
                          <span className={`${styles.series_name} half-second`}>
                            {item.name}
                          </span>

                          <p className="half-second">{item.desc}</p>

                          <div
                            className="half-second"
                            onClick={() => {
                              document.body.style.pointerEvents = "none";
                              document.body.style.overflowY = "hidden";

                              TriggerExitAnimations();

                              setTimeout(() => {
                                router.push("/series" + item.link);
                              }, 800);
                            }}
                          >
                            <span>Watch</span>
                          </div>
                        </div>
                      </div>

                      <BackgroundImage
                        src={item.img}
                        className={`${styles.bg} half-second`}
                      />

                      <div className={`${styles.darken} half-second`}>
                        <span className="half-second">{item.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <span className={`${styles.section_heading} half-second`}>
              Latest
            </span>

            <div className={`${styles.latest_series_box} container-fluid`}>
              <div className={`${styles.latest_series_row} row`}>
                {LATEST_SERIES.map((item) => (
                  <div
                    className={`${styles.latest_series} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div
                      className={`${styles.latest_series_inner} half-second`}
                    >
                      <div
                        className={`${styles.latest_series_inner_hover} half-second`}
                      >
                        <div className={`${styles.hover_cnt}`}>
                          <span className={`${styles.series_name} half-second`}>
                            {item.name}
                          </span>

                          <p className="half-second">{item.desc}</p>

                          <div
                            className="half-second"
                            onClick={() => {
                              document.body.style.pointerEvents = "none";
                              document.body.style.overflowY = "hidden";

                              TriggerExitAnimations();

                              setTimeout(() => {
                                router.push("/series" + item.link);
                              }, 800);
                            }}
                          >
                            <span>Watch</span>
                          </div>
                        </div>
                      </div>

                      <BackgroundImage
                        src={item.img}
                        className={`${styles.bg} half-second`}
                      />

                      <div className={`${styles.darken} half-second`}>
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <span className={`${styles.section_heading} half-second`}>
              Genres
            </span>

            <div className={`${styles.genres_box} container-fluid`}>
              <div className={`${styles.genres_row} row`}>
                {ALL_GENRES.map((item) => (
                  <div
                    className={`${styles.genres} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.genres_inner} half-second`}>
                      <BackgroundImage
                        src={item.img}
                        className={`${styles.bg} half-second`}
                      />

                      <div
                        className={`${styles.darken} half-second`}
                        onClick={() => {
                          setTimeout(() => {
                            router.push("/series" + item.link);
                          }, 800);
                        }}
                      >
                        <span className="half-second">{item.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
