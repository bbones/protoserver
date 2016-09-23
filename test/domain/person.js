var expect    = require("chai").expect;
var Person = require('../../domain/person');

describe("Person", function() {
  var person = new Person("Pogrebinsky", "Valentin");
  // console.log(enterprise);
  it("Has name", function() {
    expect(person.name).to.equal("Pogrebinsky Valentin");
  });
  it("Has First name", function() {
    expect(person.firstName).to.equal("Valentin");
  });
  it("Has Last name", function() {
    expect(person.lastName).to.equal("Pogrebinsky");
  });

});
