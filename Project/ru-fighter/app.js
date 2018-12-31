var express = require('express');
var expressValidator = require('express-validator');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://FaisalHemani:Masoom14@ds249727.mlab.com:49727/rufighter');
var db = mongoose.connection;

var index = require('./routes/index');
var users = require('./routes/users');
var comments = require('./routes/comments');
var news = require('./routes/news');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');

//Add's favicon icon to browser tabs
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Express Session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

//Passport initialize
app.use(passport.initialize());
app.use(passport.session());


//Express Validator 
app.use(expressValidator({
	errorFormatter: function(param, msg, value){
		var namespace = param.split('.'), root = namespace.shift(),formParam = root;

		while(namespace.length){
			formParam += '[' + namespace.shift() + ']';
    		}
		return{
			param : formParam,
			msg : msg,
			value : value
		};
	}
}));

//Connect Flash
app.use(flash());
//Global Vars
app.use(function(req,res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
  res.locals.user =req.user || null;
	next();
});

app.use('/', index);
app.use('/users', users);
app.use('/comments', comments);
app.use('/news', news);
//app.use('/players', players);

//Set Port
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function()
{
		console.log('Server started on port '+ app.get('port'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
