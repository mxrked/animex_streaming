/**
 *
 *  This is the series genres modal
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import CloseModal from "@/assets/functions/dom/closers/CloseModal";

import {
  SHONEN_SERIES,
  SEINEN_SERIES,
  COMEDY_SERIES,
  ROMANCE_SERIES,
  FANTASY_SERIES,
  HORROR_SERIES,
} from "@/assets/data/variables/ARRAYS";

import styles from "../../../styles/modules/Series/Series.module.css";

export const SeriesGenresModal = () => {
  return (
    <div
      id="genresPreferenceModal"
      className={`${styles.modal} ${styles.genres_modal} _modal full-second`}
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
            <h1>Genres</h1>

            <button
              className={`${styles.closer} half-second`}
              onClick={() => {
                CloseModal();
              }}
            >
              Close Modal
            </button>
          </div>

          <div className={`${styles.genres_holder}`}>
            <span className={`${styles.genre_name}`}>Shonen</span>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {SHONEN_SERIES.map((series) => (
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

            <span className={`${styles.genre_name}`}>Seinen</span>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {SEINEN_SERIES.map((series) => (
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

            <span className={`${styles.genre_name}`}>Comedy</span>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {COMEDY_SERIES.map((series) => (
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

            <span className={`${styles.genre_name}`}>Romance</span>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {ROMANCE_SERIES.map((series) => (
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

            <span className={`${styles.genre_name}`}>Fantasy</span>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {FANTASY_SERIES.map((series) => (
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

            <span className={`${styles.genre_name}`}>Horror</span>
            <div className={`${styles.modal_inner_cnt_box} container-fluid`}>
              <div className={`${styles.modal_inner_cnt_row} row`}>
                {HORROR_SERIES.map((series) => (
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
