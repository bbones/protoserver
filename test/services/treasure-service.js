var assert = require('chai').assert;
var TreasureService = require('../../service/treasure-service')

describe("Treasure Service", function() {
  describe("Initialize entities", function() {
    var treasureService = new TreasureService();
    it("Initialize periods", function() {
      assert(12, treasureService.periodService.periods.length);
    });
  });
});
