class Centaur {
  constructor(centaurDetails) {
    this.name = centaurDetails.name;
    this.breed = 'Palomino';
    this.cranky = false;
    this.standing = true;
    this.activity = 0;
    this.layingDown = false;
  }

  shootBow() {
    this.activity += 1;
    if (this.activity >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } else {
    return 'Twang!!!';
  }
}

  run() {
    this.activity += 1;
    if (this.activity >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } else {
    return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      this.activity = 0;
      return 'ZZZZ';
    } else {
    return 'NO!';
  }
}

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    this.cranky = false;
    if (this.layingDown === true) {
    return 'Not while I\'m laying down!';
    }
  }
}


module.exports = Centaur
