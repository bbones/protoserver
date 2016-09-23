var chai = require('chai');
var expect = require('chai').expect;
var PaymentEvent = require('../../domain/payment-event');

describe("Payement event", function() {
  chai.use(require('chai-datetime'));
  var debt = new PaymentEvent(new Date(2016, 9, 16), 100);
  it("Has date-time stamp", function() {
    expect(debt.stamp).to.equalDate(new Date(2016, 9, 16));
  });
  it("Has amount", function() {
    expect(debt.amount).to.equal(100);
  });

});
