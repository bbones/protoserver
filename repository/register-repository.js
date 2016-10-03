var
  MongoClient = require('mongodb').MongoClient,
  Server = require('mongodb').Server;

class RegisterRepository {
  save(register) {
    var mongoClient = new MongoClient(new Server('localhost', 27017));
    mongoClient.open(function(err, mongoClient){
      var db = mongoClient.db("treasure");
      db.register.insert(register);
      mongoClient.close();
    });
  }
}

module.exports = RegisterRepository;
