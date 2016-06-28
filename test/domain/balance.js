var assert = require('chai').assert;
var Balance = require('../../domain/balance');

describe('Balance', function() {
  describe('#error', function () {
     it('should have error', function () {
       var balance = new Balance();
       assert.equal(-4, balance.error());
     });
  });
});
