var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes/index');

var users = require('./routes/user');
var surveys = require('./routes/survey');
var answer_options = require('./routes/answer_option');
var questions = require('./routes/question');
var answers = require('./routes/answer');
var accounts = require('./routes/account');
var app = express();

app.use(cors());
app.use(logger('dev'));

//For the jwt
var bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

//This is for the let server know we expect and allow header with content-type of Authorization
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//Typical node server setup below teacher's(or default express)
//setup was "bodyParser urlencodede extendted as false but here set as true"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//Here setting for the express jsonwebtoken middleware
//So to say simply required for express to properly utilize the token for request
//secret must be same that will be sent to client

//Here i set secret as simple sentence but normally? people said it is set with unrecognized random texts
const jwtMW = exjwt({
  secret: 'ouluOnKaupunki'
});

//Most important part verifying the client password to login
//if validation success, server sends back json res with valid jwt for the user to use it
app.post('/log-in', (req, res) => {
  const { account, password } = req.body;
  console.log('User submitted: ', account, password);
  var sql = require('./database');
  sql.query('select * from account where account = ?', [account], function(
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
            //here set json web token with npm package account, secret key words with expire time
            let token = jwt.sign(
              { account: account.account },
              'ouluOnKaupunki',
              {
                //For developing test, set as 30 sec
                expiresIn: 30
              }
            );
            res.json({
              status: true,
              message: 'Successfully Login',
              id: results[0].id,
              err: null,
              token
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

app.get('/jwt', jwtMW /* Using the express jwt MW here */, (req, res) => {
  console.log('Web Token Checked.');
  res.json({
    auth: true
  });
  res.send('You are authenticated'); //Sending some response when authenticated
});

//jwt Until here
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
app.use('/surveys', surveys);
app.use('/questions', questions);
app.use('/answer_options', answer_options);
app.use('/answers', answers);
app.use('/accounts', accounts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
