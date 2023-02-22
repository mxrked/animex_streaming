/**
 *
 *  This holds the urls/srcs for the imgs
 *
 */

import { CDNImgReturn } from "./CDNReturns";

const CLUSTER_1 = CDNImgReturn("clusters", "cluster-1", "webp");
const CLUSTER_2 = CDNImgReturn("clusters", "cluster-2", "webp");
const CLUSTER_3 = CDNImgReturn("clusters", "cluster-3", "webp");
const CLUSTER_4 = CDNImgReturn("clusters", "cluster-4", "webp");
const CLUSTER_5 = CDNImgReturn("clusters", "cluster-5", "webp");

const AFRESHPLACE_IMG = CDNImgReturn("projects", "afreshplace-display", "webp");
const FAUNAANDFLORA_IMG = CDNImgReturn(
  "projects",
  "faunaandflora-display",
  "webp"
);
const ONLYJOJO_IMG = CDNImgReturn("projects", "onlyjojo-display", "webp");
const RTSYVISUALS_IMG = CDNImgReturn("projects", "rtsyvisuals-display", "webp");
const SHARPQUILLS_IMG = CDNImgReturn("projects", "sharpquills-display", "webp");

export { CLUSTER_1, CLUSTER_2, CLUSTER_3, CLUSTER_4, CLUSTER_5 };

export {
  AFRESHPLACE_IMG,
  FAUNAANDFLORA_IMG,
  ONLYJOJO_IMG,
  RTSYVISUALS_IMG,
  SHARPQUILLS_IMG,
};
