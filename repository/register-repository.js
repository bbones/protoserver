var
  MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/treasure';

class RegisterRepository {
  insert(register, callback) {
    MongoClient.connect(url, function(err, db) {
      if(err) {
        console.log("Error" + err);
      } else {
        var collection = db.collection('register');
        collection.insert(register, function(err, result) {
          callback(function(){
            db.close();
          });
        });
      }
    });
  }

  find(callback) {

  }
}


module.exports = RegisterRepository;
