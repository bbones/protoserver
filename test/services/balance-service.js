'use strict'
var assert = require('chai').assert;
var BalanceService = require('../../service/balance-service')

describe('BalanceService', function() {
  describe('#loadJSON', function() {
    it('shouldLoad', function() {
      var balanceService = new BalanceService;
      balanceService.load('test/balance.json', function(balance) {
        assert.equal(0, balance.balanceError());
        assert.equal(100, balance.active);
        assert.equal(80, balance.liability);
        assert.equal(20, balance.equity);
      });
    });
  });
});
