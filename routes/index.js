var express = require('express');
var db = require('../database');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res) {
  var account = req.body.account;
  var password = req.body.password;
  db.query('select * from account where account = ?', [account], function(
    error,
    results,
    fields
  ) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      });
    } else {
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function(err, ress) {
          if (!ress) {
            res.json({
              status: false,
              message: 'Account and password does not match'
            });
          } else {
            res.json({
              status: true,
              message: 'Successfully Login',
              id: results[0].id
            });
          }
        });
      } else {
        res.json({
          status: false,
          message: 'Account does not exits'
        });
      }
    }
  });
});

module.exports = router;
