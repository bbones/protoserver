var assert = require('chai').assert;
var Balance = require('../../domain/balance');

describe('Balance', function() {
  describe('#error', function () {
     it('should have error', function () {
       var balance = new Balance(100, 80,20);
       assert.equal(0, balance.balanceError());
     });
  });
  describe('Should return fields', function () {
     it('should have active', function () {
       var balance = new Balance(100, 80,20);
       assert.equal(100, balance.active);
     });
  });

});
