var chai = require('chai');
var assert = require('chai').assert;
var Register = require('../../domain/register');

describe("Register", function() {
  var register = new Register({_account : 10, _party : 25}, 100);
  it("Has hashString", function() {
    console.log(JSON.stringify({_account : 10, _party : 25}));
    assert(JSON.stringify({_account : 10, _party : 25}),
      register.hashString);
  });
});
