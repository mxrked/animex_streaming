/**
 *
 *  This is a series modal (This will change depending on what series the user opens)
 *
 */

import { BackgroundImage } from "react-image-and-background-image-fade";

import CloseModal from "@/assets/functions/dom/closers/CloseModal";

import styles from "../../../styles/modules/Series/Series.module.css";

export const SeriesModal = () => {
  return (
    <div
      id="seriesModal"
      className={`${styles.series_modal} ${styles.modal} _modal full-second`}
    >
      <div
        id="seriesModalDarken"
        className={`${styles.modal_darken} full-second`}
        onClick={() => {
          CloseModal();
        }}
      />

      <div className={`${styles.series_modal_inner} full-second`}>
        <div className={`${styles.video_holder}`}>
          <video controls id="seriesModalVideo">
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
