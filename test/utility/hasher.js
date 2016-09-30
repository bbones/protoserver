'use strict';

var chai = require('chai');
var expect = require('chai').expect;
var Hasher = require('../../utility/hasher');

describe("Hash objects id-like fields", function() {
  var hasher = new Hasher;
  it("Calculate hash", function() {
    var hash = hasher.calcHash([20,30,25]);
    expect(0, hash);
  });
});
