// https://www.npmjs.com/package/json-stable-stringify
var stringify = require('json-stable-stringify');

class Register {
  constructor(analitics, amount) {
    this.analitics = analitics;
    this.hashString = stringify(analitics);
    this.amount = amount;
  }

  save() {

  }
}

module.exports = Register;
