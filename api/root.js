// Root serving file for the API, imports the rest of the APIs
let express = require('express')
  , router = express.Router();

router.use(require("./userApi"));

module.exports = router;