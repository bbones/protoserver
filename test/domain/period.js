var expect    = require("chai").expect;

var Period = require('../../domain/period');
var periods = require('./test-periods');
var backlogEvent = require('./test-backlog-event');

describe("Period", function() {
    it("Year size", function() {
      console.log(periods);
      expect(periods.size).to.equal(12);
    });
    it("References next period");
});
