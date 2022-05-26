class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
  }

  noticesOgre() {
    if (this.encounterCounter % 3 === 0 && this.encounterCounter !== 0) {
        return true
    }
    return false;
  }




  noticesOgre() {
    if (this.encounterCounter <= 2) {
      return false;
    } else {
      this.encounterCounter = 0;
      return true;
    }
  }
}


module.exports = Human;
