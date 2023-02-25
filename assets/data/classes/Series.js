/**
 *
 *  This is the Series class
 *
 */

const {
  AOT_BG,
  CSM_BG,
  DEMON_SLAYER_BG,
  JOJO_BG,
  MHA_BG,
  MOB_PSYCHO_BG,
  OPM_BG,
  SXF_BG,
  VINLAND_SAGA_BG,
} = require("@/assets/cdns/CDNBgs");

class Series {
  constructor(name, desc, genre, img, release_date, link) {
    this.name = name;
    this.desc = desc;
    this.genre = genre;
    this.img = img;
    this.release_date = release_date;
    this.link = link;
  }

  get getName() {
    return this.name;
  }
  get getDesc() {
    return this.desc;
  }
  get getGenre() {
    return this.genre;
  }
  get getImg() {
    return this.img;
  }
  get getReleaseDate() {
    return this.release_date;
  }
  get getLink() {
    return this.link;
  }

  set setName(name) {
    this.name = name;
  }
  set setDesc(desc) {
    this.desc = desc;
  }
  set setGenre(genre) {
    this.genre = genre;
  }
  set setImg(img) {
    this.img = img;
  }
  set setReleaseDate(release_date) {
    this.release_date = release_date;
  }
  set setLink(link) {
    this.link = link;
  }
}

const AOT_OBJ = new Series(
  "Attack On Titan",
  "People fight giant monsters known as 'Titans' as they try to survive behind tall stone walls.",
  "Shonen, Horror",
  AOT_BG,
  "2013",
  "#Attack_On_Titan"
);
const CSM_OBJ = new Series(
  "Chainsaw Man",
  "A low on his life teen gains the ability to project chainsaws from his body and fight devils.",
  "Shonen, Horror, Romance",
  CSM_BG,
  "2022",
  "#Chainsaw_Man"
);
const DEMON_SLAYER_OBJ = new Series(
  "Demon Slayer",
  "A boy and his demon sister work together to fight powerful demons.",
  "Shonen, Fantasy, Comedy",
  DEMON_SLAYER_BG,
  "2021",
  "#Demon_Slayer"
);
const JOJO_OBJ = new Series(
  "Jojo's Bizarre Adventure",
  "A tale of ancestory that involve alot of wacky and epic yet bizarre adventures.",
  "Shonen, Comedy, Fantasy",
  JOJO_BG,
  "2012",
  "#Jojos_Bizarre_Adventure"
);
const MHA_OBJ = new Series(
  "My Hero Academia",
  "A powerless boy tries his hardest to fit in and gain the powers of a superhero.",
  "Shonen, Comedy",
  MHA_BG,
  "2018",
  "#My_Hero_Academia"
);
const MOB_PSYCHO_OBJ = new Series(
  "Mob Psycho 100",
  "An unconfident middle-schooler exorcises ghosts and spirits in his city.",
  "Shonen, Comedy, Romance",
  MOB_PSYCHO_BG,
  "2018",
  "#Mob_Psycho_100"
);
const OPM_OBJ = new Series(
  "One Punch Man",
  "An incredibly powerful superhero comes to the realization that being too powerful can be boring.",
  "Shonen, Comedy",
  OPM_BG,
  "2015",
  "#One_Punch_Man"
);
const SXF_OBJ = new Series(
  "Spy X Family",
  "A spy and an assassin, become parents for a little girl who can read minds.",
  "Romance, Comedy",
  SXF_BG,
  "2022",
  "#Spy_X_Family"
);
const VINLAND_SAGA_OBJ = new Series(
  "Vinland Saga",
  "A young warrior tries to get revenge for the loss of someone who he loved dearly.",
  "Seinen, Fantasy",
  VINLAND_SAGA_BG,
  "2019",
  "#Vinland_Saga"
);

export {
  AOT_OBJ,
  CSM_OBJ,
  DEMON_SLAYER_OBJ,
  JOJO_OBJ,
  MHA_OBJ,
  MOB_PSYCHO_OBJ,
  OPM_OBJ,
  SXF_OBJ,
  VINLAND_SAGA_OBJ,
};
