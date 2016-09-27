var Period = require('../domain/period');

class PeriodService {
  constructor() {
    this.periods = [];
    for(var i = 1; i <=12; i++) {
      this.periods.push(new Period);
    }
  }
};

module.exports = PeriodService;
