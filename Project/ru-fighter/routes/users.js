var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var User = require('../models/user');
var Player = require('../models/player'); 

//Register
router.get('/register', function(req, res) {
  res.render('register');
});

//Router display login view
router.get('/login', function(req, res) {
  res.render('login');
});

//Router handle sign up/register of new users and log in existing users
router.post('/register', function(req, res) {
	var username = req.body.username;
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	//validation 
	req.checkBody('name', 'Name is Required').notEmpty();
	req.checkBody('email', 'Email is Required').notEmpty();
	req.checkBody('email', 'Invalid Email').isEmail();
	req.checkBody('username', 'Username is Required').notEmpty();
	req.checkBody('password', 'Password is Required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	var results;
	User.getUserByUsername(username, function (err, doc) {
		if (err){
			console.log('New Account username!');
		}
		else {}
	});	
	
	//console.log(results);

	//Determine if there are errors with request as specified above
	var errors = req.validationErrors();
	if (errors){
		res.render('register', {
			errors: errors
		});
	} else { 
	var newUser = new User({
		name: name,
		email: email,
		username: username,
		password: password
	});
	var newPlayer = Player({ 
		name: username,
		avatar: 'faisal.png',
		stats: 
		{
			hp : 50,
			maxhp : 50,
			mana : 25,
			speed : 3,
			exp : 0
		},
		skills: [
			{
				name: "Velocity=d/t",
				tier: "regualar",
      				dmg: 5,
      				manacost: 0
			},
			
			{
				name: "DNA Splice",
      				tier: "special",
				dmg: 8,
				manacost: 3
			},

			{
				name: "Atomic Restructure",
				tier: "utility",
				dmg: 10,
				manacost: 6
			},
			
			{
				name: "TrojanHorse.exe",
				tier: "ultimate",
 				dmg: 18,
				manacost: 14
			}
		],
		created: false,
		ramz: 100,
		hair: {
			style: "regular",
			color: "black"
		},
		eyes: "black",
		skin: "defualt",
		facility: "Science",
		wins: 0,
		loss: 0,
		items: [
			{
				potions:5
			}
		]  
	});
	User.createUser(newUser, function(err, user){
		if(err){
			throw err;
			//console.log('new');
			console.log(user);
			//console.log('new');
		}
		console.log(user);
	});
	
	Player.createPlayer(newPlayer, function (err, player){
		if (err){
			throw err;
			console.log(player);
		}
	});
	//console.log(username === results.username);	
	req.flash('success_msg', 'You Have Successfully Registered');
	res.redirect('/users/login');
  	}
	/*
	else {
		
	}
	*/
});

/*
router.post('/playerdata', function (req, res) {
	passport.use(new LocalStrategy(
	function(username, password, done) {

	});
});
*/

passport.use(new LocalStrategy(
   function(username, password, done) {
   User.getUserByUsername(username, function(err, user){
   	if(err){
   		throw err;
   	}
   	if(!user){
   		return done(null, false), {message: 'Unknown User'};
   	}

   	User.comparePassword(password, user.password, function (err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else{
   			return done(null, false, {message: 'Invalid Password'});
   		}
   	});
   });
  }));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
})

router.post('/login',
  passport.authenticate('local', {successRedirect: '/', failureRedirect: '/users/login', failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });


router.get('/logout', function(req, res){
	req.logout();
	req.flash('success_msg', 'Logout Successful');
	res.redirect('/users/login');
})

module.exports = router;
