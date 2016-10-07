var chai = require('chai');
var expect    = require("chai").expect;
var Register = require('../../domain/register');

describe("Register", function() {
  var register = new Register({_party : 25, _account : 10}, 100);
  it("Has hashString", function() {
    expect(JSON.stringify({_account : 10, _party : 25})).to.
      equal(register.hashString);
  });
  it("Has period");
  it("Has inBalance");
  it("Has turnover");
  it("Has outBalance");
  describe("Updates", function() {
    it("Updates outBalance");
    it("Updates turnover");
  });
});
