/**
 *
 *  This is the index top
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { TOP_BG } from "@/assets/cdns/CDNBgs";
import { CLUSTER_1 } from "@/assets/cdns/CDNImgs";

import { FADE_IN } from "@/assets/anims/FADES";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexTop = () => {
  const router = useRouter();

  // Checkers
  let seriesRouted = false;

  // Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    if (INVIEW) {
      setTimeout(() => {
        CONTROLS.start("visible");
      }, 900);
    }
  }, [CONTROLS, INVIEW]);

  return (
    <section id="indexTop" className={`${styles.index_top}`}>
      <BackgroundImage src={TOP_BG} className={`${styles.bg}`} />

      <div className={`${styles.hover_trigger}`}>
        <motion.div
          className={styles.fm_motion}
          ref={REF}
          animate={CONTROLS}
          initial="hidden"
          variants={FADE_IN}
        >
          <div className={`${styles.index_top_inner}`}>
            <div className={`${styles.index_top_inner_box} container-fluid`}>
              <div className={`${styles.index_top_inner_row} row`}>
                <div
                  className={`${styles.index_top_inner_side} ${styles.index_top_inner_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
                >
                  <div
                    className={`${styles.index_top_inner_side_cnt} animate-fade-down-sub full-second`}
                  >
                    <h1 className="half-second">Anime isn't just art.</h1>
                    <h1 className="half-second">It's an experience.</h1>

                    <p className="half-second">
                      Browse the different series we have available for
                      streaming.
                    </p>

                    <div
                      className="half-second"
                      onClick={() => {
                        ExitAndRoute(router, "/series", seriesRouted);
                      }}
                    >
                      <span className="half-second">BROWSE</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.index_top_inner_side} ${styles.index_top_inner_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
                >
                  <div className={`${styles.index_top_inner_side_cnt}`}>
                    <img
                      data-src={CLUSTER_1}
                      className="lazyload animate-fade-down-sub full-second"
                      alt="Image of Tanjiro, Deku, Eren and Jotaro."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
