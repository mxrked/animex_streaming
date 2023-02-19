/**
 *
 *  This is the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { FaCaretDown, FaSearch } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

import { LOGO_LARGE_RED, LOGO_LARGE_ORANGE } from "@/assets/cdns/CDNIcons";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";
import ToggleSearch from "@/assets/functions/dom/togglers/ToggleSearch";

export const DesktopNav = () => {
  const router = useRouter();

  // Checkers
  let indexRouted,
    contactRouted,
    newsRouted,
    loginRegisterRouted = false;

  // Hiding mega menu on resize
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (document.getElementById("desktopNavMegaMenuCB").checked) {
        document.getElementById("desktopNavMegaMenuCB").checked = false;
      }

      document.getElementById("desktopNavMegaMenu").style.display = "none";
    });
  }, []);

  return (
    <nav id="desktopNav" className={`${styles.desktop_nav} desktop-nav`}>
      <div className={`${styles.desktop_nav_inner}`}>
        <div className={`${styles.desktop_nav_inner_box} container-fluid`}>
          <div className={`${styles.desktop_nav_inner_row} row`}>
            <div
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <div
                  className={`${styles.logo} half-second`} // index-link
                  onClick={() => {
                    ExitAndRoute(router, "/", indexRouted);
                  }}
                  onMouseEnter={(e) => {
                    document.querySelector(".d-red-logo").style.opacity = 0;
                    document.querySelector(".d-red-logo").style.visibility =
                      "hidden";
                    document.querySelector(".d-orange-logo").style.opacity = 1;
                    document.querySelector(".d-orange-logo").style.visibility =
                      "visible";

                    e.currentTarget.querySelector(
                      ".d-orange-logo"
                    ).style.transform = "rotate(45deg)";
                    e.currentTarget.querySelector(
                      ".d-orange-logo"
                    ).style.scale = 0.9;

                    e.currentTarget.querySelector(
                      ".d-red-logo"
                    ).style.transform = "rotate(45deg)";
                    e.currentTarget.querySelector(
                      ".d-red-logo"
                    ).style.scale = 0.9;
                  }}
                  onMouseLeave={(e) => {
                    document.querySelector(".d-red-logo").style.opacity = 1;
                    document.querySelector(".d-red-logo").style.visibility =
                      "visible";
                    document.querySelector(".d-orange-logo").style.opacity = 0;
                    document.querySelector(".d-orange-logo").style.visibility =
                      "hidden";

                    e.currentTarget.querySelector(
                      ".d-orange-logo"
                    ).style.transform = "rotate(0)";
                    e.currentTarget.querySelector(
                      ".d-orange-logo"
                    ).style.scale = 0.8;

                    e.currentTarget.querySelector(
                      ".d-red-logo"
                    ).style.transform = "rotate(0)";
                    e.currentTarget.querySelector(
                      ".d-red-logo"
                    ).style.scale = 0.8;
                  }}
                >
                  <div className={styles.imgs}>
                    <img
                      data-src={LOGO_LARGE_RED}
                      className={`${styles.red_logo} lazyload d-red-logo half-second`}
                      alt="Animex Streaming logo."
                    />
                    <img
                      data-src={LOGO_LARGE_ORANGE}
                      className={`${styles.orange_logo} lazyload d-orange-logo half-second`}
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
              className={`${styles.desktop_nav_inner_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
            >
              <div className={`${styles.desktop_nav_inner_side_cnt}`}>
                <ul className={`${styles.page_links}`}>
                  <li
                    className="series-link desktop-nav-link half-second"
                    onMouseEnter={(e) => {
                      const DESKTOP_NAV_LINKS =
                        document.querySelectorAll(".desktop-nav-link");

                      DESKTOP_NAV_LINKS.forEach((link) => {
                        link.style.opacity = 0.5;
                      });

                      e.currentTarget.style.opacity = 1;
                    }}
                    onMouseLeave={() => {
                      const DESKTOP_NAV_LINKS =
                        document.querySelectorAll(".desktop-nav-link");

                      DESKTOP_NAV_LINKS.forEach((link) => {
                        if (link.style.pointerEvents != "none") {
                          link.style.opacity = 1;
                        }
                      });
                    }}
                  >
                    <input
                      id="desktopNavMegaMenuCB"
                      type="checkbox"
                      onChange={(e) => {
                        const MEGA_MENU =
                          document.getElementById("desktopNavMegaMenu");

                        if (e.currentTarget.checked) {
                          MEGA_MENU.style.display = "block";
                        } else {
                          MEGA_MENU.style.display = "none";
                        }
                      }}
                      onBlur={() => {
                        setTimeout(() => {
                          if (
                            document.getElementById("desktopNavMegaMenuCB")
                              .checked
                          ) {
                            document.getElementById(
                              "desktopNavMegaMenuCB"
                            ).checked = false;
                          }

                          document.getElementById(
                            "desktopNavMegaMenu"
                          ).style.display = "none";
                        }, 300);
                      }}
                    />
                    <span className="half-second">Browse</span>
                    <FaCaretDown className={`${styles.icon} half-second`} />
                  </li>
                  <li
                    className="news-link desktop-nav-link half-second"
                    onClick={() => {
                      ExitAndRoute(router, "/news", newsRouted);
                    }}
                    onMouseEnter={(e) => {
                      const DESKTOP_NAV_LINKS =
                        document.querySelectorAll(".desktop-nav-link");

                      DESKTOP_NAV_LINKS.forEach((link) => {
                        link.style.opacity = 0.5;
                      });

                      e.currentTarget.style.opacity = 1;
                    }}
                    onMouseLeave={() => {
                      const DESKTOP_NAV_LINKS =
                        document.querySelectorAll(".desktop-nav-link");

                      DESKTOP_NAV_LINKS.forEach((link) => {
                        if (link.style.pointerEvents != "none") {
                          link.style.opacity = 1;
                        }
                      });
                    }}
                  >
                    <span className="half-second">News</span>
                  </li>
                  <li
                    className="contact-link desktop-nav-link half-second"
                    onClick={() => {
                      ExitAndRoute(router, "/contact", contactRouted);
                    }}
                    onMouseEnter={(e) => {
                      const DESKTOP_NAV_LINKS =
                        document.querySelectorAll(".desktop-nav-link");

                      DESKTOP_NAV_LINKS.forEach((link) => {
                        link.style.opacity = 0.5;
                      });

                      e.currentTarget.style.opacity = 1;
                    }}
                    onMouseLeave={() => {
                      const DESKTOP_NAV_LINKS =
                        document.querySelectorAll(".desktop-nav-link");

                      DESKTOP_NAV_LINKS.forEach((link) => {
                        if (link.style.pointerEvents != "none") {
                          link.style.opacity = 1;
                        }
                      });
                    }}
                  >
                    <span className="half-second">Contact</span>
                  </li>
                </ul>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
