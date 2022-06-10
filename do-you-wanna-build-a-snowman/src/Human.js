var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0, 
      carrots: 0
    };
  }

  gatherMaterials(materialType, number) {
    this.materials[materialType] += number;
  }

  buildASnowman(snowmanDetails) {
    var otherSnowman = new Snowman(this.materials);
    return otherSnowman;
  }

  placeMagicHat() {
    var madeSnowman = new Snowman(this.materials)
      madeSnowman.canWearMagicHat()
    if (!madeSnowman.magicHat) {
      return 'I guess I didn\'t build it correctly.'
    } else {
      return 'Woah, this snowman is coming to life!'
    }
  }
 }



module.exports = Human;
