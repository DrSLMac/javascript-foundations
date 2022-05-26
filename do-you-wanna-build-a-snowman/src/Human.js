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
    }
  }
  gatherMaterials(material, number) {
    this.materials[material] = this.materials[ 0,0, 5, 1];
  }

  buildASnowman() {
    var snowman = new Snowman(this.materials[4, 1, 3]);
    return snowman;
  }
}

module.exports = Human;
