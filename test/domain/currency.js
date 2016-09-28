var assert = require('chai').assert;
var Currency = require('../../domain/currency');
var currencies = require('./test-currencies')


describe("Currency", function() {
  var currency = currencies[0];
  it("Has code", function() {
    assert('USD', currency.code);
  });

  it("Has name", function() {
    assert("US Dollar", currency.name);
  });
});
