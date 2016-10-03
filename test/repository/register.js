var Register = require('../../domain/register');
var RegisterRepository = require('../../repository/register-repository');

describe("RegisterRepository", function() {
  it("Saves register", function() {
    var registerRep = new RegisterRepository;
    var register = new Register({a:1, b:5});
    registerRep.save(register);
  });
});
