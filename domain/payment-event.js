'use strict';

class PaymentEvent {
  constructor(stamp, amount, unit, party) {
    this.stamp = stamp;
    this.amount = amount;
    this.unit = unit;
    this.party = party;
  }
}

module.exports = PaymentEvent;
