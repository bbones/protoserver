
var PeriodService = require('./period-service')

class TreasureService {
  constructor() {
    this.periodService = new PeriodService();
  }
};

module.exports = TreasureService;
