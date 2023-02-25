/**
 *
 *  This is the Genre class
 *
 */

const {
  COMEDY_BG,
  FANTASY_BG,
  HORROR_BG,
  ROMANCE_BG,
  SEINEN_BG,
  SHONEN_BG,
} = require("@/assets/cdns/CDNBgs");

class Genre {
  constructor(name, img, link) {
    this.name = name;
    this.img = img;
    this.link = link;
  }

  get getName() {
    return this.name;
  }
  get getImg() {
    return this.img;
  }
  get getLink() {
    return this.link;
  }

  set setName(name) {
    this.name = name;
  }
  set setImg(img) {
    this.img = img;
  }
  set setLink(link) {
    this.link = link;
  }
}

const SHONEN_OBJ = new Genre("Shonen", SHONEN_BG, "#Shonen");
const SEINEN_OBJ = new Genre("Seinen", SEINEN_BG, "#Seinen");
const COMEDY_OBJ = new Genre("Comedy", COMEDY_BG, "#Comedy");
const ROMANCE_OBJ = new Genre("Romance", ROMANCE_BG, "#Romance");
const FANTASY_OBJ = new Genre("Fantasy", FANTASY_BG, "#Fantasy");
const HORROR_OBJ = new Genre("Horror", HORROR_BG, "#Horror");

export {
  SHONEN_OBJ,
  SEINEN_OBJ,
  COMEDY_OBJ,
  ROMANCE_OBJ,
  FANTASY_OBJ,
  HORROR_OBJ,
};
