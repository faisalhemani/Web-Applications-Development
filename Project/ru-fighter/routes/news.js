var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var News = require('../models/news'); 

//Router handle sign up/register of new users and log in existing users
router.post('/', function(req, res) {

	//if (typeof req.user != 'undefined' && req.user.admin = true)
	{
		var title = req.body.title;
		var message = req.body.news;
		var date = 0;
		console.log(message);
		//validation 
		req.checkBody('news', 'News message is empty').notEmpty();
		req.checkBody('title', 'News title is empty').notEmpty();

		//Determine if there are errors with request as specified above
		var errors = req.validationErrors();
		if (errors){
			res.render('news', {
				errors: errors
			});
		} else { 

			var newNews = new News({
				date: date,
				message: message,
				title: title
			});
			console.log(req.header.title);
			News.createNews(newNews, function(err, user) {
				if (err){
					throw err;
					console.log(user);
				}
			}, function () {
				//Comment.find()
				//.then(function (doc){
				//	res.render('news', {comments:doc});
				//});
				res.redirect('/');
			});	
  		}
	}
	//else 
	{
		//req.flash('error_msg', 'Please login to post to forum!');
		//res.redirect('/users/login');
	}
});

router.get('/', function (req, res, next) {
	News.find()
	.then(function (doc){
			console.log(req.user);
			//console.log(req.user.admin);
			console.log(doc);
			for (var i = 0; i < doc.length; i++)
			{
				doc[i].message = doc[i].message.substring(0,200)+"...";
			}
			//doc.summary = doc.message.substring(1,75);
			if (typeof req.user != 'undefined') {
				res.render('news', {news: doc, admin: req.user.admin});
			}
			else {
				res.render('news', {news: doc});
			}
	});
});

module.exports = router;
