
class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meal = 0;
  }
  greet(rider) {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.meal++
    if (this.meal >= 3) {
    this.hungry = false;
  }
}
}


module.exports = Dragon






















// class Dragon {
//   constructor(name, rider) {
//     this.name = name;
//     this.rider = rider;
//     this.hungry = true;
//     this.meals = 0
//   }
//   greet() {
//     return `Hi, ${this.rider}!`
//   }
//   eat() {
//     this.meals++
//     if (this.meals >= 3) {
//       this.hungry = false;
//     }
//   }
// }
