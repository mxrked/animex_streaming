/**
 *
 *  This is the index contact
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADES } from "@/assets/data/variables/ARRAYS";
import { CLUSTER_2 } from "@/assets/cdns/CDNImgs";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexContact = () => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  // Checkers
  let contactRouted = false;

  //! Framer Motion Detect InView
  const CONTROLS = useAnimation();
  const [REF, INVIEW] = useInView();
  useEffect(() => {
    TriggerInViewMotion(CONTROLS, INVIEW);
  }, [CONTROLS, INVIEW]);

  //! Changing Variant based on device size
  useEffect(() => {
    // Fade In
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    }

    // Fade Up
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    }
  }, [router]);

  return (
    <section id="indexContact" className={`${styles.index_contact}`}>
      <motion.div
        className={`fm-motion full-second fade-left-fix ${styles.fm_motion}`}
        ref={REF}
        animate={CONTROLS}
        initial="hidden"
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        variants={isMobile ? FADES[0] : FADES[2]}
      >
        <div className={`${styles.index_contact_inner}`}>
          <div className={`${styles.index_contact_inner_box} container-fluid`}>
            <div className={`${styles.index_contact_inner_row} row`}>
              <div
                className={`${styles.index_contact_inner_side} ${styles.index_contact_inner_L} col-lg-7 col-md-7 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.index_contact_inner_side_cnt}`}>
                  <h1 className="half-second">Need some help?</h1>

                  <p>
                    Our 24/7 support team is up to the task of resolving any
                    issue that you have.
                  </p>

                  <div
                    className="half-second"
                    onClick={() => {
                      ExitAndRoute(router, "/contact", contactRouted);
                    }}
                  >
                    <span>GET HELP</span>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.index_contact_inner_side} ${styles.index_contact_inner_R} col-lg-5 col-md-5 col-sm-12 col-xs-12`}
              >
                <div className={`${styles.index_contact_inner_side_cnt}`}>
                  <img
                    data-src={CLUSTER_2}
                    className="lazyload"
                    alt="Image of Mob, Joseph and Thorfinn."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
