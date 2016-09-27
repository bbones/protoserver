'use strict';

var expect    = require("chai").expect;
var assert = require('chai').assert;

var Party = require('../../domain/party');
var testparty = require('./test-party')

describe("Party", function() {
  var party = testparty.isd;
  it("Has name", function() {
    expect(party.name).to.equal("ISD Corp");
  });
});
