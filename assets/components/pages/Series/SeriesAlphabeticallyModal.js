/**
 *
 *  This is the series alphabetically modal
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import CloseModal from "@/assets/functions/dom/closers/CloseModal";

import { ALPHABETICAL_SERIES } from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/Series/Series.module.css";

export const SeriesAlphabeticallyModal = () => {
  return (
    <div
      id="alphabeticallyPreferenceModal"
      className={`${styles.modal} ${styles.alphabetically_modal} _modal full-second`}
    >
      <div
        className={`${styles.modal_darken}`}
        onClick={() => {
          CloseModal();
        }}
      ></div>
      <div className={`${styles.modal_inner}`}>
        <div className={`${styles.modal_inner_cnt}`}>
          <div className={`${styles.modal_inner_cnt_top}`}>
            <h1>Alphabetical</h1>

            <button
              className={`${styles.closer}`}
              onClick={() => {
                CloseModal();
              }}
            >
              Close Modal
            </button>
          </div>

          <div className={`${styles.alphabetical_holder}`}>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {ALPHABETICAL_SERIES.map((series) => (
                  <div
                    className={`${styles.series} col-lg-4 col-md-4 col-sm-4 col-xs-12`}
                  >
                    <div className={`${styles.series_inner}`}>
                      <BackgroundImage
                        src={series.getImg}
                        className={`${styles.bg} half-second`}
                        width="100%"
                        height="100%"
                      />

                      <button className={`${styles.darken} half-second`}>
                        <span>{series.getName}</span>
                      </button>
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
