var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express API Hello World!/nWelcome To Survey Application API!'
  });
});
module.exports = router;
