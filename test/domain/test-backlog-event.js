var BacklogEvent = require('../../domain/backlog-event');
var testparty = require('./test-party')

var ble = {
  be1 : new BacklogEvent(new Date(2016, 9, 16), 100,
      testparty.isd, testparty.pva ),
  be2 : new BacklogEvent(new Date(2016, 9, 16), 100,
      testparty.pva, testparty.isd )
}

module.exports = ble;
