var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var Comment = require('../models/comment'); 

//Router handle sign up/register of new users and log in existing users
router.post('/forum', function(req, res) {
	if (typeof req.user != 'undefined')
	{
		var username = req.user.username;//'Cynicalbird';//req.body.username;
		var message = req.body.message;
		var tag = req.body.tag;
		var time = 0;
	
	//validation 
	//req.checkBody('message', 'Email is Required').notEmpty();
	//req.checkBody('username', 'Username is Required').notEmpty();
	//req.checkBody('tag', 'Password is Required').notEmpty();
	//req.checkBody('time', 'Passwords do not match').notEmpty();

	//Determine if there are errors with request as specified above
		var errors = req.validationErrors();
		if (errors){
			/*
			res.render('register', {
				errors: errors
			});
			*/
		} else { 

			var newComment = new Comment({
				username: username,
				tag: tag,
				message: message,
				time: time
			});
			console.log(req.header.comments);
			Comment.createComment(newComment, function(err, user) {
				if (err){
					throw err;
					console.log(user);
				}
			}, function () {
				Comment.find()
				.then(function (doc){
					res.render('function', {comments:doc});
				});
			});	
			//res.render('forum');
			/*
			User.createUser(newUser, function(err, user){
				if(err){
					throw err;
					console.log(user);
				}
			});
	
			Player.createPlayer(newPlayer, function (err, player){
				if (err){
					throw err;
					console.log(player);
				}
			});
			*/
			//req.flash('success_msg', 'You Have Successfully Registered');
			//res.redirect('/users/login');
			/*
			Comment.find()
			.then(function (doc){
				res.render('forum', {comments: doc});
			});
			*/
  		}
	}
	else 
	{
		req.flash('error_msg', 'Please login to post to forum!');
		res.redirect('/users/login');
		/*
		Comment.find()
			.then(function (doc){
				res.render('forum', {comments: doc});
			});
		*/
	}
});

router.get('/forum', function (req, res, next) {
	if (typeof req.user != 'undefined')
	{
		Comment.find()
		.then(function (doc){
			res.render('forum', {comments: doc});
		});
	}
	else
	{
		req.flash('error_msg', 'Please login to view forum!');
		res.redirect('/users/login');
	}
	/*
	var results = [];
	if (typeof req.user != 'undefined')
	{
		req.flash('error_msg', 'You are not logged in!');
		res.redirect('login');
	}
	mongo.connect(url, function (err, db) {
		assert.equal(null, err);
		var cursor = db.collection('comments').find();
		cursor.forEach(function (doc, err) {
			assert.equal(null, err);
			results.push(doc);              
		}, function () {
			db.close();
			res.render('forum', {comments: results});
		});
	});
	*/
});

module.exports = router;
