var Period = require('../../domain/period');

var periods = [];

var nxt = null;

for(i = 0; i < 12; i++) {
  var period = new Period(
    new Date(Date.UTC(2016,i,1)),
    new Date(Date.UTC(2016,i+1,0)),
    nxt
  );

  periods.push(period, nxt);
  nxt = period;
}

module.exports = periods;
