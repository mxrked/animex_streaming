/**
 *
 *  This is the mega menu for the desktop nav
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";

import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNavMegaMenu = () => {
  const router = useRouter();

  // Checkers
  let seriesRouted = false;

  return (
    <div id="desktopNavMegaMenu" className={`${styles.desktop_nav_mega_menu}`}>
      <div className={`${styles.desktop_nav_mega_menu_inner}`}>
        <div className={`${styles.desktop_nav_mega_menu_inner_set}`}>
          <div>
            <span className={`${styles.set_name}`}>Popular</span>

            <span
              className={`${styles.view_all_link} half-second`}
              onClick={() => {
                ExitAndRoute(router, "/series#Popular", seriesRouted);
              }}
            >
              View Popular
            </span>
          </div>

          <ul>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Attack_On_Titan", seriesRouted);
              }}
            >
              <span>Attack On Titan</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(
                  router,
                  "/series#Jojos_Bizarre_Adventure",
                  seriesRouted
                );
              }}
            >
              <span>Jojo's Bizarre Adventure</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#My_Hero_Academia", seriesRouted);
              }}
            >
              <span>My Hero Academia</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Demon_Slayer", seriesRouted);
              }}
            >
              <span>Demon Slayer</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#One_Punch_Man", seriesRouted);
              }}
            >
              <span>One Punch Man</span>
            </li>
          </ul>
        </div>
        <div className={`${styles.desktop_nav_mega_menu_inner_set}`}>
          <div>
            <span className={`${styles.set_name}`}>Latest</span>

            <span
              className={`${styles.view_all_link} half-second`}
              onClick={() => {
                ExitAndRoute(router, "/series#Latest", seriesRouted);
              }}
            >
              View Latest
            </span>
          </div>

          <ul>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Chainsaw_Man", seriesRouted);
              }}
            >
              <span>Chainsaw Man</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Mob_Psycho_100", seriesRouted);
              }}
            >
              <span>Mob Psycho 100</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Spy_X_Family", seriesRouted);
              }}
            >
              <span>Spy X Family</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Vinland Saga", seriesRouted);
              }}
            >
              <span>Vinland Saga</span>
            </li>
            <li className="half-second">&nbsp;</li>
          </ul>
        </div>
        <div className={`${styles.desktop_nav_mega_menu_inner_set}`}>
          <div>
            <span className={`${styles.set_name}`}>Genres</span>

            <span
              className={`${styles.view_all_link} half-second`}
              onClick={() => {
                ExitAndRoute(router, "/series#Genres", seriesRouted);
              }}
            >
              View Genres
            </span>
          </div>

          <ul>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Shonen", seriesRouted);
              }}
            >
              <span>Shonen</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Seinen", seriesRouted);
              }}
            >
              <span>Seinen</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Comedy", seriesRouted);
              }}
            >
              <span>Comedy</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Romance", seriesRouted);
              }}
            >
              <span>Romance</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Fantasy", seriesRouted);
              }}
            >
              <span>Fantasy</span>
            </li>
            <li
              className="half-second"
              onClick={() => {
                ExitAndRoute(router, "/series#Horror", seriesRouted);
              }}
            >
              <span>Horror</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
