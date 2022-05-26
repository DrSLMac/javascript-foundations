var Skier = require('./Skier');

class Lift {
  constructor() {
    this.inService = true;
    this.limit = 3;
    this.skiers = [];
    this.safetyBar = 'up';
  }

  admitSkier(skiers) {
    // var newSkier = new Skier(name.name)

    this.skiers[skiers] = this.skiers[skiers];
    console.log(skiers);
  }
}

module.exports = Lift;
