/**
 *
 *  This is the index news
 *
 */

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundImage } from "react-image-and-background-image-fade";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import TriggerInViewMotion from "@/assets/functions/dom/triggers/TriggerInViewMotion";

import { FADES } from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexNews = (props) => {
  const [isMobile, setIsMobile] = useState(false); // This is used to indicate if the variant needs to be changed

  const router = useRouter();

  // Checkers
  let newsRouted = false;

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
    <section id="indexNews" className={`${styles.index_news}`}>
      <motion.div
        className={`fm-motion full-second fade-right-fix ${styles.fm_motion}`}
        ref={REF}
        animate={CONTROLS}
        initial="hidden"
        // isMobile = true - Fade In
        // isMobile = false - Fade Up
        variants={isMobile ? FADES[0] : FADES[3]}
      >
        <div
          className={`${styles.index_news_inner} full-second`}
          id="indexNewsInner"
        >
          <div className={`${styles.index_news_inner_top}`}>
            <h1>News</h1>

            <div
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/news", newsRouted);
              }}
            >
              <span>View All</span>
            </div>
          </div>

          <div className={`${styles.index_news_inner_main}`}>
            <div
              className={`${styles.index_news_inner_main_box} container-fluid`}
            >
              <div className={`${styles.index_news_inner_main_row} row`}>
                {props.newsArticlesData.map((article) => (
                  <div
                    className={`${styles.article} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                    key={article.articleID}
                  >
                    <div
                      className={`${styles.article_inner} article-inner half-second`}
                      onMouseEnter={(e) => {
                        document
                          .querySelectorAll(".article-inner")
                          .forEach((inner) => {
                            inner.style.opacity = 0.3;
                          });

                        e.currentTarget.style.opacity = 1;
                      }}
                      onMouseLeave={() => {
                        document
                          .querySelectorAll(".article-inner")
                          .forEach((inner) => {
                            inner.style.opacity = 1;
                          });
                      }}
                    >
                      <div className={`${styles.bg_holder}`}>
                        <BackgroundImage
                          src={article.articleImg}
                          className={`${styles.bg}`}
                          width="100%"
                          height="100%"
                        />
                      </div>

                      <div className={`${styles.article_inner_text}`}>
                        <div className={`${styles.article_inner_text_cnt}`}>
                          <span
                            className={`${styles.article_name} half-second`}
                          >
                            {article.articleName}
                          </span>

                          <p className="half-second">{article.articleDesc}</p>

                          <div
                            className="half-second"
                            onClick={() => {
                              ExitAndRoute(
                                router,
                                "/news" + article.articleLink,
                                newsRouted
                              );
                            }}
                          >
                            <span>READ</span>
                          </div>
                        </div>
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
