const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'pcat';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
  console.log("skip 0");
  simplePipeline(db, 0, 4, function() {
    client.close();
  });
  console.log("skip 1");
  simplePipeline(db, 1, 4, function() {
    client.close();
  });
  console.log("skip 2");
  simplePipeline(db, 2, 4, function() {
    client.close();
  });
});
// skipNum  - Query term, starts at zero.
// limitNum - number of records per query

function simplePipeline(db, skipNum, limitNum, callback) {
  const collection = db.collection( 'mybooks' );
  collection.aggregate(
    [
          {$match : { name : "Arul"} }
        , {$unwind : "$documents" }
        , {$project: {name:1, status:1, docid: "$documents.id", text: { $split: ["$documents.text", "--break-- "]} } }
      	, {$project: {name:1, status:1, docid: 1, text: 1 , totalPage: {$size: "$text"}} }
        , {$unwind : "$text" }
        , {$match : { docid : "report4"} }
        , {$project:{_id: 0, docid:1, text:1, totalPage: 1}}
        , {$skip: skipNum * limitNum}
        , {$limit: limitNum}        
    ],
    function(err, cursor) {
        assert.equal(err, null);

        cursor.toArray(function(err, documents) {
          console.log(documents)
          callback(documents);
        });
      }
  );
}
