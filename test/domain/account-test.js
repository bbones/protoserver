var assert = require('chai').assert;
var Account = require('../../domain/account');

describe('Account', function() {
  describe('#accountBalance', function () {
	var account = new Account;
    it('should return 0', function () {
      assert.equal(0, account.balance());
    });
  });
});
