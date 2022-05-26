class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
    this.ouncesDrank = 0;
  };
  drink() {
    this.thirsty = false;
    this.ouncesDrank+= 10;
    if (this.ouncesDrank >= 10 * 5) {
      return 'I\'m too full to drink anymore!'
    }
  }
 }




module.exports = Vampire
