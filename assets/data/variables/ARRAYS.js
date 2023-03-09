// This file is used to hold some arrays

import {
  AOT_OBJ,
  CSM_OBJ,
  DEMON_SLAYER_OBJ,
  JOJO_OBJ,
  MHA_OBJ,
  MOB_PSYCHO_OBJ,
  OPM_OBJ,
  SXF_OBJ,
  VINLAND_SAGA_OBJ,
} from "../classes/Series";

import {
  SHONEN_OBJ,
  SEINEN_OBJ,
  COMEDY_OBJ,
  ROMANCE_OBJ,
  FANTASY_OBJ,
  HORROR_OBJ,
} from "../classes/Genre";

import { FADE_IN, FADE_LEFT, FADE_UP, FADE_RIGHT } from "@/assets/anims/FADES";

//! Meta Keywords
const SITE_KWS = [
  "animex streaming",
  "animex",
  "streaming",
  "anime",
  "watch anime",
  "anime streaming website",
  "latest anime",
  "popular anime",
  "stream anime",
  "anime streaming",
];
const SERIES_KWS = [
  "shonen",
  "shonen anime",
  "seinen",
  "seinen anime",
  "comedy",
  "comedy anime",
  "romance",
  "romance anime",
  "fantasy",
  "fantasy anime",
  "horror",
  "horror anime",
  "attack on titan",
  "aot",
  "jojos bizarre adventure",
  "jojo bizarre adventure",
  "jojo",
  "jojos",
  "jjba",
  "my hero academia",
  "mha",
  "my hero",
  "chainsaw man",
  "demon slayer",
  "mob psycho 100",
  "mob psycho",
  "one punch man",
  "opm",
  "vinland saga",
  "spy x family",
  "spy family",
];
const CONTACT_KWS = [
  "contact",
  "support",
  "need help",
  "contact support",
  "support team",
  "need assistance",
  "contact us",
  "reach out",
  "reaching out",
];
const NEWS_KWS = ["news", "anime news", "latest anime news", "latest news"];
const LOGIN_REGISTER_KWS = [
  "login",
  "register",
  "signup",
  "signin",
  "create an account",
  "create a account",
];

//! Search Keywords
const ATTACK_ON_TITAN_KWS = ["aot", "attack on titan", "titan"];
const CHAINSAW_MAN_KWS = ["chainsaw man", "chainsaw-man", "csm"];
const DEMON_SLAYER_KWS = ["demon-slayer", "demon slayer", "ds"];
const JOJO_KWS = [
  "jojos bizarre adventure",
  "jojo's bizarre adventure",
  "jojo",
  "jojos",
  "jjba",
];
const MY_HERO_ACADEMIA_KWS = ["my hero academia", "mha", "my hero"];
const MOB_PSYCHO_KWS = ["mob psycho 100", "mob psycho", "mp100", "mob"];
const ONE_PUNCH_MAN_KWS = ["one punch man", "one-punch man", "opm"];
const SPY_X_FAMILY_KWS = [
  "spy-x-family",
  "spy x family",
  "spy family",
  "spy-family",
  "sxf",
];
const VINLAND_SAGA_KWS = ["vinland saga", "vinland", "vs"];

//! Path Routes
const SERIES_ROUTES = [
  "Popular",
  "Latest",
  "Genres",
  "Alphabetically",
  "Attack_On_Titan",
  "Chainsaw_Man",
  "Demon_Slayer",
  "Jojos_Bizarre_Adventure",
  "My_Hero_Academia",
  "Mob_Psycho_100",
  "One_Punch_Man",
  "Spy_X_Family",
  "Vinland_Saga",
];

//! Object Arrays
const ALL_SERIES = [
  AOT_OBJ,
  CSM_OBJ,
  DEMON_SLAYER_OBJ,
  JOJO_OBJ,
  MHA_OBJ,
  MOB_PSYCHO_OBJ,
  OPM_OBJ,
  SXF_OBJ,
  VINLAND_SAGA_OBJ,
];
const POPULAR_SERIES = [AOT_OBJ, JOJO_OBJ, MHA_OBJ];
const LATEST_SERIES = [CSM_OBJ, MOB_PSYCHO_OBJ, SXF_OBJ];
const ALL_GENRES = [
  SHONEN_OBJ,
  SEINEN_OBJ,
  COMEDY_OBJ,
  ROMANCE_OBJ,
  FANTASY_OBJ,
  HORROR_OBJ,
];

//! Animation Arrays
const FADES = [FADE_IN, FADE_UP, FADE_LEFT, FADE_RIGHT];

export {
  SITE_KWS,
  SERIES_KWS,
  CONTACT_KWS,
  NEWS_KWS,
  LOGIN_REGISTER_KWS,
  ATTACK_ON_TITAN_KWS,
  CHAINSAW_MAN_KWS,
  DEMON_SLAYER_KWS,
  JOJO_KWS,
  MY_HERO_ACADEMIA_KWS,
  MOB_PSYCHO_KWS,
  ONE_PUNCH_MAN_KWS,
  SPY_X_FAMILY_KWS,
  VINLAND_SAGA_KWS,
};

export { SERIES_ROUTES };

export { ALL_GENRES, ALL_SERIES, POPULAR_SERIES, LATEST_SERIES };

export { FADES };
