const Direwolf = require("./direwolf");

class Stark {
  constructor(starkDetails) {
    this.name = starkDetails.name;
    this.location = starkDetails.area || 'Winterfell';
    this.safe = false;
  }

  sayHouseWords() {
    if (this.safe === true) {
      return 'The North Remembers';
    } else {
    return 'Winter is Coming'
    }
  }

  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark










































//
// class Stark {
//   constructor(obj) {
//     this.name = obj.name
//     this.location = obj.area || 'Winterfell'
//     this.safe = false;
//   }
//   sayHouseWords() {
//     if (this.safe) {
//       return 'The North Remembers'
//     }
//     return 'Winter is Coming';
//   }
//   callDirewolf(name, location) {
//      var direwolf = new Direwolf (name, location);
//      console.log(direwolf);
//   }
// }
