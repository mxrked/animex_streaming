/**
 *
 *  This is the index news
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";
import TriggerExitAnimations from "@/assets/functions/dom/triggers/TriggerExitAnimations";
import CheckAnimationType from "@/assets/functions/dom/checkers/CheckingAnimationType";

import styles from "../../../styles/modules/Index/Index.module.css";

export const IndexNews = (props) => {
  return <section id="indexNews" className={`${styles.index_news}`}></section>;
};
