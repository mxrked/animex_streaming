/**
 *
 *  This is the footer
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FADES } from "@/assets/data/variables/ARRAYS";
import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
} from "../../../cdns/CDNIcons";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  // Checkers
  let indexRouted,
    contactRouted,
    newsRouted,
    seriesRouted = false;

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
    <footer id="footer" className={`${styles.footer}`}>
      <motion.div
        className={`${styles.footer_inner} fm-motion full-second`}
        ref={REF}
        animate={CONTROLS}
        initial="hidden"
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        variants={isMobile ? FADES[0] : FADES[0]}
      >
        <div className={`${styles.footer_inner_box} container-fluid`}>
          <div className={`${styles.footer_inner_row} row`}>
            <div
              className={`${styles.footer_inner_side} ${styles.footer_L} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.footer_inner_side_cnt}`}>
                <span className={`${styles.side_name} half-second`}>Pages</span>

                <div className={`${styles.links_holder}`}>
                  <ul>
                    <li className="half-second index-link">
                      <span
                        className="half-second"
                        onClick={() => {
                          ExitAndRoute(router, "/", indexRouted);
                        }}
                      >
                        Home/Index
                      </span>
                    </li>
                    <li className="half-second news-link">
                      <span
                        className="half-second"
                        onClick={() => {
                          ExitAndRoute(router, "/news", newsRouted);
                        }}
                      >
                        News
                      </span>
                    </li>
                    <li className="half-second contact-link">
                      <span
                        className="half-second"
                        onClick={() => {
                          ExitAndRoute(router, "/contact", contactRouted);
                        }}
                      >
                        Contact
                      </span>
                    </li>
                    <li className="half-second series-link">
                      <span
                        className="half-second"
                        onClick={() => {
                          ExitAndRoute(router, "/series", seriesRouted);
                        }}
                      >
                        Browse Series
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li className="half-second series-link">
                      <span
                        className="half-second"
                        onClick={() => {
                          ExitAndRoute(router, "/series#Latest", seriesRouted);
                        }}
                      >
                        Latest
                      </span>
                    </li>
                    <li className="half-second series-link">
                      <span
                        className="half-second"
                        onClick={() => {
                          ExitAndRoute(router, "/series#Popular", seriesRouted);
                        }}
                      >
                        Popular
                      </span>
                    </li>
                    <li className="half-second series-link">
                      <span
                        className="half-second"
                        onClick={() => {
                          ExitAndRoute(
                            router,
                            "/series#Alphabetically",
                            seriesRouted
                          );
                        }}
                      >
                        Alphabetically
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`${styles.footer_inner_side} ${styles.footer_R} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <div className={`${styles.footer_inner_side_cnt}`}>
                <span className={`${styles.side_name} half-second`}>
                  Contact
                </span>

                <ul className={`${styles.contact_info}`}>
                  <li>
                    <span className="half-second">contact@animex.com</span>
                  </li>
                  <li>
                    <span className="half-second">+1 (202)-555-0371</span>
                  </li>
                </ul>

                <ul className={`${styles.socials}`}>
                  <li>
                    <img data-src={INSTAGRAM_ICON} className="lazyload" />
                  </li>
                  <li>
                    <img data-src={FACEBOOK_ICON} className="lazyload" />
                  </li>
                  <li>
                    <img data-src={TWITTER_ICON} className="lazyload" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
