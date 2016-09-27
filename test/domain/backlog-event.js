var chai = require('chai');
var expect = require('chai').expect;
var BacklogEvent = require('../../domain/backlog-event');
var Person = require('../../domain/person');
var Enterprise = require('../../domain/enterprise');

describe("Backlog event", function() {
  chai.use(require('chai-datetime'));
  var debt = new BacklogEvent(new Date(2016, 9, 16), 100,
        new Enterprise('ISD Corp', 123),
        new Person('Pogrebinsky', 'Valentin') );
  it("Has date-time stamp", function() {
    expect(debt.stamp).to.equalDate(new Date(2016, 9, 16));
  });
  it("Has amount", function() {
    expect(debt.amount).to.equal(100);
  });
  it("Has who", function() {
    expect(debt.who.name).to.equal('ISD Corp');
  });
  it("Has whom", function() {
    expect(debt.whom.name).to.equal('Pogrebinsky Valentin');
  });

});
