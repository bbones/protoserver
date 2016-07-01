var assert = require('chai').assert;
var BalanceService = require('../../service/balance-service')

describe('BalanceService', function() {
  describe('#loadJSON', function() {
    debugger;
    it('shouldLoad', function() {
      var balanceService = new BalanceService;
      balanceService.load('test/balance.json', function(balance) {
        debugger;
        console.log(balance);
        assert.equal(0, balance.error());
        assert.equal(100, balance.active);
        assert.equal(80, balance.liability);
        assert.equal(20, balance.equity);
      });
    });
  });
});
