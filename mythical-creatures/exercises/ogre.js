const Human = require("./human");

class Ogre {
  constructor(ogreDetails) {
    this.name = 'Brak';
    this.home = ogreDetails.abode || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swingAt(human);
    } if (this.swings % 2 === 0 && this.swings !==0) {
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    var notices = human.noticesOgre();
      if (notices = true) {
      this.swings += 1;
      }
    }

  apologize(human) {
    human.knockedOut = false;
  }
}


module.exports = Ogre;