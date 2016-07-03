'use strict'

var assert = require('chai').assert;
var AccountService = require('../../service/account-service')

describe('AccountService', function() {
  describe('#loadJSON', function() {
    it('shouldLoad', function() {
      var accountService = new AccountService;
      accountService.loadList('test/account.json', function(accountList) {
        assert.equal(0, accountList.size());
      });
    });
  });
});
