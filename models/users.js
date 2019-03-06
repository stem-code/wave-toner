let helper = require("./connectHelper");
const collectionName = 'users';

exports.createUser = (username, password, cb) => {
    helper.connection((db) => {
        let usersCollection = db.collection(collectionName);
        usersCollection.insert({username: username, password:password}, (err) => {
            cb(!err);
        });
    });
};

exports.authUser = (username, password, cb) => {
    helper.connection((db) => {
        let usersCollection = db.collection(collectionName);
        usersCollection.findOne({username: username, password: password}).toArray(function(err, docs) {
            if (!err && docs.length > 0){
                cb(false, docs);
            } else if (err){
                cb(true);
            }
            client.close();
        });
    });
};