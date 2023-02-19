/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import { LOGO_LARGE_RED, LOGO_LARGE_ORANGE } from "@/assets/cdns/CDNIcons";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import ToggleMobileNav from "@/assets/functions/dom/togglers/ToggleMobileNav";
import CloseMobileNav from "@/assets/functions/dom/closers/CloseMobileNav";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav = () => {
  const router = useRouter();

  // Checkers
  let indexRouted,
    loginRegisterRouted = false;

  return (
    <nav id="mobileNav" className={`${styles.mobile_nav} mobile-nav`}>
      <div className={`${styles.mobile_nav_inner}`}>
        <div className={`${styles.mobile_nav_inner_box} container-fluid`}>
          <div className={`${styles.mobile_nav_inner_row} row`}>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <div
                  className={`${styles.logo} half-second`} // index-link
                  onClick={() => {
                    ExitAndRoute(router, "/", indexRouted);
                  }}
                  onMouseEnter={(e) => {
                    document.querySelector(".m-red-logo").style.opacity = 0;
                    document.querySelector(".m-red-logo").style.visibility =
                      "hidden";
                    document.querySelector(".m-orange-logo").style.opacity = 1;
                    document.querySelector(".m-orange-logo").style.visibility =
                      "visible";

                    e.currentTarget.querySelector(
                      ".m-orange-logo"
                    ).style.transform = "rotate(45deg)";
                    e.currentTarget.querySelector(
                      ".m-orange-logo"
                    ).style.scale = 0.9;

                    e.currentTarget.querySelector(
                      ".m-red-logo"
                    ).style.transform = "rotate(45deg)";
                    e.currentTarget.querySelector(
                      ".m-red-logo"
                    ).style.scale = 0.9;
                  }}
                  onMouseLeave={(e) => {
                    document.querySelector(".m-red-logo").style.opacity = 1;
                    document.querySelector(".m-red-logo").style.visibility =
                      "visible";
                    document.querySelector(".m-orange-logo").style.opacity = 0;
                    document.querySelector(".m-orange-logo").style.visibility =
                      "hidden";

                    e.currentTarget.querySelector(
                      ".m-orange-logo"
                    ).style.transform = "rotate(0)";
                    e.currentTarget.querySelector(
                      ".m-orange-logo"
                    ).style.scale = 0.8;

                    e.currentTarget.querySelector(
                      ".m-red-logo"
                    ).style.transform = "rotate(0)";
                    e.currentTarget.querySelector(
                      ".m-red-logo"
                    ).style.scale = 0.8;
                  }}
                >
                  <div className={styles.imgs}>
                    <img
                      data-src={LOGO_LARGE_RED}
                      className={`${styles.red_logo} lazyload m-red-logo half-second`}
                      alt="Animex Streaming logo."
                    />
                    <img
                      data-src={LOGO_LARGE_ORANGE}
                      className={`${styles.orange_logo} lazyload m-orange-logo half-second`}
                      alt="Animex Streaming logo."
                    />
                  </div>
                  <div className={styles.text_holder}>
                    <span className={`${styles.top_text}`}>animex</span>
                    <span className={`${styles.bottom_text}`}>
                      anime streaming
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${styles.mobile_nav_inner_side} ${styles.mobile_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <div className={`${styles.mobile_nav_inner_side_cnt}`}>
                <div className={`${styles.side_links}`}>
                  <button
                    id="toggleSearch"
                    className={`${styles.toggle_search} half-second`}
                    onClick={() => {
                      ToggleSearch();
                    }}
                  >
                    <FaSearch className={`${styles.icon}`} />
                  </button>

                  <div
                    className="half-second"
                    onClick={() => {
                      ExitAndRoute(
                        router,
                        "/login_register",
                        loginRegisterRouted
                      );
                    }}
                  >
                    <MdAccountCircle className={`${styles.icon} half-second`} />
                  </div>
                </div>

                <div className={`${styles.btns}`}>
                  <button
                    id="mobileNavToggler"
                    className={`${styles.mobile_nav_toggler}`}
                    onClick={() => {
                      ToggleMobileNav();
                    }}
                  >
                    <span className="half-second" />
                    <span className="half-second" />
                    <span className="half-second" />
                  </button>
                  <button
                    id="mobileNavCloser"
                    className={`${styles.mobile_nav_closer}`}
                    onClick={() => {
                      CloseMobileNav();
                    }}
                  >
                    <span className="half-second" />
                    <span className="half-second" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
