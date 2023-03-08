/**
 *
 *  This is the login register page top
 *
 */

import { useRouter } from "next/router";

import { LOGO_LARGE_RED } from "@/assets/cdns/CDNIcons";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";

import styles from "../../../styles/modules/Login_Register/Login_Register.module.css";

export const LoginRegisterTop = () => {
  const router = useRouter();

  // Checkers
  let indexRouted = false;

  return (
    <div className={`${styles.login_register_top}`}>
      <div className={`${styles.login_register_top_inner_box} container-fluid`}>
        <div className={`${styles.login_register_top_inner_row} row`}>
          <div
            className={`${styles.login_register_top_inner_side} ${styles.login_register_top_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
          >
            <div className={`${styles.logo}`}>
              <img data-src={LOGO_LARGE_RED} className="lazyload" />

              <div>
                <span className={`${styles.logo_large_text}`}>animex</span>
                <span className={`${styles.logo_small_text}`}>
                  anime streaming
                </span>
              </div>
            </div>
          </div>
          <div
            className={`${styles.login_register_top_inner_side} ${styles.login_register_top_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
          >
            <div
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/", indexRouted);
              }}
            >
              <span>Return Home</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
