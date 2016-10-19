var Register = require('../../domain/register');
var RegisterRepository = require('../../repository/register-repository');

describe("RegisterRepository", function() {
  it("Insert register", function() {
    var registerRep = new RegisterRepository;
    var register = new Register({a:1, b:5}, 100);
    registerRep.insert(register, function(reg) {
      console.log(reg);
      done();
    });
  });
  it("Find register", function() {
    var registerRep = new RegisterRepository;
    var register = new Register({a:2, b:3}, 100);
    registerRep.insert(register);
    registerRep.find({a:2, b:3}, function(reg) {
      console.log(reg);
      done();
    });
  });
  it("Debit register");
  it("Credit register");
  it("Delete register");
});
