var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(name) {
    this.name = name
    this.statues = [];
  }

  gazeAtVictim(newVictim) {
    var newStatue = new Statue(newVictim.name);
      if (this.statues.length <= 3) {
        this.statues.push(newStatue);
      } if (this.statues.length > 3) {
        var freedPerson = new Person(this.statues[0].name);
        this.statues.shift();
        freedPerson.mood = 'relieved';
        return freedPerson
      }
    }
}


module.exports = Medusa
