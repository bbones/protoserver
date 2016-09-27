var Person = require('../../domain/person');
var Enterprise = require('../../domain/enterprise');

var parties = {
  isd : new Enterprise('ISD Corp', 123),
  pva : new Person('Pogrebinsky', 'Valentin'),
  duferco : new Enterprise('Duferco', 234),
  amk : new Enterprise('AMK', 345),
  dmkd : new Enterprise('DMKD', 456)
}

module.exports = parties;
