let express = require('express')
  , router = express.Router()
let models = require('../models/root');

router.post('/createUser', (req, res) => {
    console.log("Got request to create user...");
    // res.json("Hello!");
    models.users.createUser(req.body.username, req.body.password, (err) => {
        console.log("Callback called")
        console.log(err);
        res.json({err:!!err});
    });
});

router.post('/authenticateUser', (req, res) => {
    models.users.authUser(req.body.username, req.body.password, (err, status) => {
        if (!err && status){ // success, user is authenticated
            res.json({err: 0, auth: 1});
        } else if (!err && !status){ // success, but username or password incorrect
            res.json({err:0, auth: 0});
        } else {
            res.json({err: 1});
        }
    });
});

module.exports = router;