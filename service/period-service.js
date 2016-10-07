var Period = require('../domain/period');

class PeriodService {
  constructor() {
    this.periods = [];
    for(var i = 0; i <12; i++) {
      var period = new Period(
        new Date(Date.UTC(2016,i,1)),
        new Date(Date.UTC(2016,(i + 1) % 12, 0)));
      if (i>1) {
        this.periods[i - 1].next = period;
      }
      this.periods.push(new Period);
    }
  }
};

module.exports = PeriodService;
