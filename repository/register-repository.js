var
  MongoClient = require('mongodb').MongoClient,
  Server = require('mongodb').Server;

class RegisterRepository {
  save(register) {
    var url = 'mongodb://localhost:27017';
    console.log("Saves");
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
      console.log("connect")
      assert.equal(null, err);
      insertRegister(register, db, function() {db.close();});
    });
  }

  insertRegister(register, db, callback) {
    console.log("insertRegister")
    // Get the documents collection
    var collection = db.collection('register');
    // Insert some documents
    collection.insert(register, function(err, result) {
      console.log(result);
      console.log(err);
      callback(result);
    });
  }
}


module.exports = RegisterRepository;
