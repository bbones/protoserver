var Party = require('./party');

class Person extends Party {

  constructor(lastName, firstName) {
    super(lastName + ' ' + firstName);
    this.lastName = lastName;
    this.firstName = firstName;
  }
}

module.exports = Person;
