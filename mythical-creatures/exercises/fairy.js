class Fairy {
  constructor(name, dust, clothes) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowers) {
    // this.clothes.dresses.push('Daffodil', 'Tulip', 'Poppy');
    var flowers = [];
    for (var i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i]);
      console.log(this.clothes.dresses.length);
    }
  }
}


module.exports = Fairy
