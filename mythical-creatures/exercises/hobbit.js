class Hobbit {
  constructor(name) {
    this.name = name.name;
    this.age = name.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
    }
    celebrateBirthday() {
      this.age += 1;
      if (this.age >=101) {
        this.old = true;
    } else if (this.age <= 32) {
        this.adult = false;
    } else {
      this.adult = true;
    }
  }
    getRing() {
      if (this.name === 'Frodo') {
        this.hasRing = true;
      return 'Here is the ring!';
    } else {
      return 'You can\'t have it!';
    }
  }
}
    //if age <= 32 isAdult = false
    // timeTravel() {
    //   if age <= 32;
    // } return false;




module.exports = Hobbit;
