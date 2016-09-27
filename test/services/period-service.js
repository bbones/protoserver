'use strict'
var assert = require('chai').assert;
var PeriodService = require('../../service/period-service')

describe("Period Service", function() {
  var periodService = new PeriodService();
  it("Init periods", function() {
    assert(12, periodService.periods.length);
  });
});
