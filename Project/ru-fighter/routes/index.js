var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/rufighter';
var User = require('../models/user');
var Player = require('../models/player');

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
	Player.getPlayerByUsername(req.user.username, function (err, doc){
		if (err)
		{
			console.err('Error no entrie found');
		}
		else
		{
			if (typeof doc != 'undefined') {
				var player = new Array().push(doc);
				doc.stringify = JSON.stringify(doc.stats);
				console.log("*"+doc+"*");	
				res.render('index', {players: doc});	
			}
			else {
				res.redirect('/users/login');
			}
		}
	});;
});

router.post('/api/create/character', ensureAuthenticated, function (req, res, next) {
	Player.getPlayerByUsername(req.user.username, function (err, doc){
		if (err)
		{
			console.err('Error no entrie found');
		}
		else
		{
			req.on('data', function (data) {
				console.log('%'+data+'%');	
				var player = JSON.parse(data);
				doc.facility = player.facility;
				doc.items = player.items;
				doc.ramz = player.ramz;
				doc.avatar = player.avatar;
				doc.wins = player.wins;
				doc.loss = player.loss;
				doc.stats = player.stats;
				doc.created = true;
				doc.save();
				res.json(doc);
			});
		}
	});
});

router.get('/api/player', ensureAuthenticated, function (req, res, next){
	Player.getPlayerByUsername(req.user.username, function (err, doc) {
		if (err)
		{
			console.err('Error no entrie found');
		}
		else
		{
			console.log(req.isAuthenticated());
			res.header("Access-Control-Allow-Credentials", "true");
			res.header("Access-Control-Allow-Origin", "*");
                        res.header("Access-Control-Allow-Headers", "X-Requested-With");               
                        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
			res.json(doc);
		}
	});
});

router.get('/team', function(req,res,next) {
	res.render('team', { title: 'RU-Fighter - Team'});
});

/*
router.get('/news', function(req,res,next) {
	res.render('news', { title: 'RU-Fighter - News'});
});
*/

/*
router.get('/get-players', function (req, res, next) {
	var results = [];
	mongo.connect(url, function (err, db) {
		assert.equal(null, err);
		var cursor = db.collection('players').find();
		cursor.forEach(function (doc, err) {
			assert.equal(null, err);	
			results.push(doc);
		}, function() {
			db.close();
			res.writeHead(200, {"Content-Type": "application/json"});
			res.end(JSON.stringify(results));
		});
	});
});
*/

/*
router.get('/forum', function (req, res, next) {
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
});
*/

/*
router.get('/forum', function (req, res, next) {
	res.render('forum', { title: 'RU-Fighter - Forum'});
}); */

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login');
	}	
}

module.exports = router;
