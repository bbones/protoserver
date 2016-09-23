'use strict';

var expect    = require("chai").expect;
var assert = require('chai').assert;
var Party = require('../../domain/party');

describe("Party", function() {
  var party = new Party("ISD Corp");
  it("Has name", function() {
    expect(party.name).to.equal("ISD Corp");
  });
});
