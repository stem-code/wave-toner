const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

let password = process.env.PASS;
let dbName = "wave-toner";

// Connection URL
const url = 'mongodb+srv://app:' + password + '@cluster0-rebfr.gcp.mongodb.net/' + dbName + '?retryWrites=true';

// Create a new MongoClient
const client = new MongoClient(url);
let db;
let dbReady = false;

exports.connection = (cb) => {
    if (dbReady){
        cb(db);
    }
}

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db = client.db(dbName);
    dbReady = true;
    // client.close();
});