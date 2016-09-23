var expect    = require("chai").expect;
var Enterprise = require('../../domain/enterprise');

describe("Enterprise", function() {
  var enterprise = new Enterprise("ISD Corp", "123");
  // console.log(enterprise);
  it("Has name", function() {
    expect(enterprise.name).to.equal("ISD Corp");
  });
  it("Has taxId", function() {
    expect(enterprise.taxId).to.equal("123");
  });

});
