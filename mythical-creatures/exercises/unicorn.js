class Unicorn {
  constructor(name, color, saying) {
    this.name = name;
    this.color = color || 'white';
    this.saying = saying
  }
  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;
