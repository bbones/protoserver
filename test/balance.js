var assert = require('chai').assert;
var Balance = require('../domain/balance');

describe('Balance', function() {
  describe('#error', function () {
	var balance = new Balance;
    it('should have error', function () {
      assert.equal(0, balance.error());
    });
  });
});
