var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser');

var indexRouter = require('./routes/index.js');
var searchRouter = require('./routes/search.js');
const postUserRouter = require('./routes/api/postUsers.js');
const getUserRouter = require('./routes/api/getUsers.js');
const getSearchRouter = require('./routes/search.js');
const connectDB = require('./db.js');

var app = express();
connectDB();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use(bodyparser.json());

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/postUsers', postUserRouter);
app.use('/getUsers', getUserRouter);
app.use('/search', getSearchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
