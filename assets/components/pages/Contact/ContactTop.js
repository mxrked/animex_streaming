/**
 *
 *  This is the contact top
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { TOP_BG } from "@/assets/cdns/CDNBgs";
import { CLUSTER_5 } from "../../../cdns/CDNImgs";

import { FADES } from "@/assets/data/variables/ARRAYS";

import { BackgroundImage } from "react-image-and-background-image-fade";

import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Contact/Contact.module.css";

export const ContactTop = () => {
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
    <section id="contactTop" className={`${styles.contact_top}`}>
      <BackgroundImage src={TOP_BG} className={`${styles.bg}`} />

      <div className={`${styles.hover_trigger}`}>
        <motion.div
          id="contactTopFM"
          className={`fm-motion full-second fade-up-fix ${styles.fm_motion}`}
          ref={REF}
          animate={CONTROLS}
          initial="hidden"
          // isMobile = true - Fade In
          // isMobile = false - Fade Up
          variants={isMobile ? FADES[0] : FADES[1]}
        >
          <div className={`${styles.contact_top_inner}`}>
            <div className={`${styles.contact_top_inner_box} container-fluid`}>
              <div className={`${styles.contact_top_inner_row} row`}>
                <div
                  className={`${styles.contact_top_inner_side} ${styles.contact_top_inner_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
                >
                  <div
                    className={`${styles.contact_top_inner_side_cnt} animate-fade-down-sub full-second`}
                  >
                    <h1 className="half-second">Need some help?</h1>

                    <p className="half-second">
                      You can request assistance via our 24/7 customer support
                      team.
                    </p>
                  </div>
                </div>
                <div
                  className={`${styles.contact_top_inner_side} ${styles.contact_top_inner_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
                >
                  <div className={`${styles.contact_top_inner_side_cnt}`}>
                    <img
                      data-src={CLUSTER_5}
                      className="lazyload animate-fade-down-sub full-second"
                      alt="Image of Reigen, Bakugo and Mikasa."
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
