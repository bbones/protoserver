var assert = require('chai').assert;
var AccountList = require('../domain/account-list');

describe('AccountList', function() {
  describe('#size', function () {
	var accountList = new AccountList;
    it('should have size', function () {
      assert.equal(3, accountList.size());
    });
  });
});
