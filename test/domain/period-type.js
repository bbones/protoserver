var PeriodType = require('../../domain/period-type');

describe("PeriodType constant", function() {
  it('Has WEEKLY', function() {
    expect(String(PeriodType.WEEKLY)).to.equal('Symbol(WEEKLY)');
  });
});
