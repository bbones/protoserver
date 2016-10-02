class Register {
  constructor(analitics, amount) {
    this.analitics = analitics;
    this.hashString = "";
    for (var key in analitics)
      this.hashString += analitics[key];
    this.amount = amount;
  }

  save() {

  }
}

module.exports = Register;
