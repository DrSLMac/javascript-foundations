class Ogre {
  constructor(ogreDetails) {
    this.name = ogreDetails.name;
    this.home = ogreDetails.abode || 'Swamp';
    this.swings = 0
  }
    encounter(human) {
      human.encounterCounter += 1;
  }
  swingAt(human) {
    var notices = human.noticesOgre();
    if (notices = true) {
      this.swings += 1;
    }
  }
}



module.exports = Ogre;







// class Ogre {
//   constructor(ogredetails) {
//     this.name = ogredetails.name;
//     this.home = ogredetails.abode || "Swamp";
//     //two classes are being instantiated
//     //first is ogre with ogre ogredetails
//     //then we have human with the name Jane
//     this.swings = 0;
//   }
//   encounter(human){
//       human.encounterCounter += 1;
//   }
//
//   swingAt(human) {
//     let notices = human.noticesOgre();
//
//     if (notices === true) {
//       this.swings += 1;
//     }
//   }
// }
