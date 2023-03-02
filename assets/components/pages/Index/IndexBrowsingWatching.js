/**
 *
 *  This is the index browsing/watching
 *
 */

import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";

import {
  ALL_GENRES,
  LATEST_SERIES,
  POPULAR_SERIES,
} from "@/assets/data/variables/ARRAYS";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexBrowsingWatching = () => {
  const router = useRouter();

  // Checkers
  let seriesRouted = false;

  return (
    <section
      id="indexBrowsingWatching"
      className={`${styles.index_browsing_watching}`}
    >
      <div
        className={`${styles.index_browsing_watching_inner} animate-fade-in full-second`}
        id="indexBrowsingWatchingInner"
      >
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
                  <div className={`${styles.popular_series_inner} half-second`}>
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
                  <div className={`${styles.latest_series_inner} half-second`}>
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
    </section>
  );
};
