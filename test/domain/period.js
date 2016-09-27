var Period = require('../../domain/period');
var backlogEvent = require('./test-backlog-event');

describe("Period", function() {
    describe("Event List operations", function() {
        var period = new Period();
        it("Can add event", function() {
            period.add(backlogEvent);
        });
    });
});
