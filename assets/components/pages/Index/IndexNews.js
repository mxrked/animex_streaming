/**
 *
 *  This is the index news
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import CheckAndAddAnimateScroll from "@/assets/functions/dom/checkers/CheckAndAddAnimateScroll";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexNews = (props) => {
  const router = useRouter();

  // Adding/Removing classes to element
  useEffect(() => {
    window.addEventListener("load", () => {
      CheckAndAddAnimateScroll(
        // window,
        "indexNewsInner",
        "scroll-fade-yB",
        "animate-fade-down"
      );
    });
  }, []);

  // Checkers
  let newsRouted = false;

  return (
    <section id="indexNews" className={`${styles.index_news}`}>
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
                        <span className={`${styles.article_name} half-second`}>
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
    </section>
  );
};
