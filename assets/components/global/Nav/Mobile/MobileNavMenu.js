/**
 *
 *  This is the mobile nav menu
 *
 */

import { useRouter } from "next/router";

import { FaCaretDown } from "react-icons/fa";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = () => {
  const router = useRouter();

  // Checkers
  let indexRouted,
    seriesRouted,
    contactRouted,
    newsRouted = false;

  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu}`}>
      <div className={`${styles.mobile_nav_menu_cnt} half-second`}>
        <div className={`${styles.general_section}`}>
          <ul>
            <li
              className="index-link half-second"
              onClick={() => {
                ExitAndRoute(router, "/", indexRouted);
              }}
            >
              <span>Home</span>
            </li>
            <li
              className="news-link half-second"
              onClick={() => {
                ExitAndRoute(router, "/news", newsRouted);
              }}
            >
              <span>News</span>
            </li>
            <li
              className="contact-link half-second"
              onClick={() => {
                ExitAndRoute(router, "/contact", contactRouted);
              }}
            >
              <span>Contact</span>
            </li>
          </ul>
        </div>

        <div className={`${styles.browse_section}`}>
          <ul>
            <li
              className="series-link half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Popular", seriesRouted);
              }}
            >
              <span>Popular</span>
            </li>
            <li
              className="series-link half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Latest", seriesRouted);
              }}
            >
              <span>Latest</span>
            </li>
            <li
              className="series-link half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Alphabetically", seriesRouted);
              }}
            >
              <span>Alphabetically</span>
            </li>
            <li className="series-link half-second">
              <span>Genres</span>

              <FaCaretDown className={styles.icon} />

              <input
                type="checkbox"
                id="genreLinksCB"
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    document.getElementById("genreLinks").style.height =
                      "330px";
                  } else {
                    document.getElementById("genreLinks").style.height = 0;
                  }
                }}
              />
            </li>
            <div
              className={`${styles.genre_links} half-second`}
              id="genreLinks"
            >
              <div
                className="half-second"
                onClick={() => {
                  ExitAndRoute(router, "/series#Shonen", seriesRouted);
                }}
              >
                <span>Shonen</span>
              </div>
              <div
                className="half-second"
                onClick={() => {
                  ExitAndRoute(router, "/series#Seinen", seriesRouted);
                }}
              >
                <span>Seinen</span>
              </div>
              <div
                className="half-second"
                onClick={() => {
                  ExitAndRoute(router, "/series#Comedy", seriesRouted);
                }}
              >
                <span>Comedy</span>
              </div>
              <div
                className="half-second"
                onClick={() => {
                  ExitAndRoute(router, "/series#Romance", seriesRouted);
                }}
              >
                <span>Romance</span>
              </div>
              <div
                className="half-second"
                onClick={() => {
                  ExitAndRoute(router, "/series#Fantasy", seriesRouted);
                }}
              >
                <span>Fantasy</span>
              </div>
              <div
                className="half-second"
                onClick={() => {
                  ExitAndRoute(router, "/series#Horror", seriesRouted);
                }}
              >
                <span>Horror</span>
              </div>
            </div>
            <li
              className="series-link half-second"
              onClick={() => {
                ExitAndRoute(router, "/series", seriesRouted);
              }}
            >
              <span>View All Series</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
