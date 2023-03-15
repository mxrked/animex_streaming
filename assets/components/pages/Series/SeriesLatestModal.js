/**
 *
 *  This is the series latest modal
 *
 */

import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";

import { LATEST_SERIES } from "@/assets/data/variables/ARRAYS";

import CloseModal from "@/assets/functions/dom/closers/CloseModal";
import TriggerSeriesModal from "@/assets/functions/dom/triggers/series/TriggerSeriesModal";

import styles from "../../../styles/modules/Series/Series.module.css";

export const SeriesLatestModal = () => {
  // Series Hovers/Unhovers
  useEffect(() => {
    const SERIES_INNERS = document.querySelectorAll(".series-inner");

    SERIES_INNERS.forEach((inner) => {
      // Hovering
      inner.addEventListener("mouseenter", (e) => {
        // Hiding overlay
        inner.querySelector(".series-inner-overlay").style.opacity = 0;
        inner.querySelector(".series-inner-overlay").style.visibility =
          "hidden";

        // Showing button
        inner.querySelector("button").style.opacity = 1;
        inner.querySelector("button").style.visibility = "visible";
      });

      // Unhovering
      inner.addEventListener("mouseleave", (e) => {
        // Hiding button
        inner.querySelector("button").style.opacity = 0;
        inner.querySelector("button").style.visibility = "hidden";

        // Showing overlay
        inner.querySelector(".series-inner-overlay").style.opacity = 1;
        inner.querySelector(".series-inner-overlay").style.visibility =
          "visible";
      });
    });
  }, []);

  return (
    <div
      id="latestPreferenceModal"
      className={`${styles.modal} ${styles.latest_modal} _modal full-second`}
    >
      <div
        className={`${styles.modal_darken}`}
        onClick={() => {
          CloseModal();
        }}
      ></div>
      <div className={`${styles.modal_inner} _modal-inner`}>
        <div className={`${styles.modal_inner_cnt}`}>
          <div className={`${styles.modal_inner_cnt_top}`}>
            <h1>Latest Series</h1>

            <button
              className={`${styles.closer}`}
              onClick={() => {
                CloseModal();
              }}
            >
              Close Modal
            </button>
          </div>

          <div className={`${styles.series_holder}`}>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {LATEST_SERIES.map((series) => (
                  <div
                    className={`${styles.series} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.series_inner} series-inner`}>
                      <BackgroundImage
                        src={series.getImg}
                        className={`${styles.bg} half-second`}
                        width="100%"
                        height="100%"
                      />

                      <div
                        className={`${styles.overlay} series-inner-overlay half-second`}
                      >
                        <span>{series.getName}</span>
                      </div>

                      {/***/}

                      <button
                        className={`${styles.darken} half-second`}
                        onClick={() => {
                          CloseModal();

                          window.location.hash = series.getLink;

                          setTimeout(() => {
                            TriggerSeriesModal();
                          }, 1600);
                        }}
                      >
                        <span className={`${styles.series_name}`}>
                          {series.getName}
                        </span>

                        <p>{series.getDesc}</p>

                        <div className="half-second">
                          <span>View</span>
                        </div>
                      </button>

                      {/** 
                         <button
                        className={`${styles.darken} half-second`}
                        onClick={() => {
                          CloseModal();

                          window.location.hash = series.getLink;

                          setTimeout(() => {
                            TriggerSeriesModal();
                          }, 1600);
                        }}
                      >
                        <span>{series.getName}</span>
                      </button>
                      */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
