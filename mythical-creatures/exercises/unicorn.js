class Unicorn {
  constructor(name, color, says) {
    this.name = name;
    this.color = color || 'white';
    this.saying = '';
  }
  isWhite(color) {
    //if unicorn is white, then true
    //if unicorn is not white, then false
    if ( this.color === 'white') {
      return true;
    } else {
      return false;
    }
  }
  says(saying) {
      return `**;* ${saying} *;**`;
    }
  }



module.exports = Unicorn;






























// class Unicorn {
//   constructor(name, color, saying) {
//     this.name = name;
//     this.color = color || 'white';
//   }
//   isWhite() {
//     if (this.color !== 'white') {
//       return false;
//     }
//   }
//   says(message) {
//     return `**;* ${message} *;**`;
//   }
// }
