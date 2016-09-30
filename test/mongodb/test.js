var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


describe("MongoDB", function() {
  it("Connect", function() {
    // Connection URL
    var url = 'mongodb://localhost:27017/myproject';

    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      db.close();
    });
  });


});
