/**
 *
 *  This is the index browsing/watching
 *
 */

import { useEffect } from "react";
import { useRouter } from "next/router";

import { BackgroundImage } from "react-image-and-background-image-fade";

import {
  AOT_BG,
  CSM_BG,
  JOJO_BG,
  MHA_BG,
  MOB_PSYCHO_BG,
  SXF_BG,
  COMEDY_BG,
  FANTASY_BG,
  HORROR_BG,
  ROMANCE_BG,
  SEINEN_BG,
  SHONEN_BG,
} from "@/assets/cdns/CDNBgs";

import ExitAndRoute from "@/assets/functions/routing/ExitAndRoute";

import styles from "../../../styles/modules/Index/Index.module.css";
