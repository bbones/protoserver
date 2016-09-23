'use strict';

class PaymentEvent {
  constructor(stamp, amount, who, whom) {
    this.stamp = stamp;
    this.amount = amount;
    this.who = who;
    this.whom = whom;
  }
}

module.exports = PaymentEvent;
