var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var playerSchema = mongoose.Schema({
		name: {
			type: String
        },
       	avatar: {
			type: String
        },
        stats: {
			level: Number,
			hp: Number,
			maxhp: Number,
			mana: Number,
			maxmana: Number,
			speed: Number,
			exp: Number
        },
		skills: [
			{
				name: String,
				tier: String,
				dmg: Number,
				manacost: Number
			},

			{
				name: String,
				tier: String,
				dmg: Number,
				manacost: Number
			},
			{
				name: String,
				tier: String,
				dmg: Number,
				manacost: Number
			},

			{
				name: String,
				tier: String,
				dmg: Number,
				manacost: Number
			}
		],
		created: {
			type: Boolean
		},
		ramz: {
			type: Number
		},
		hair: {
			style:String,
			color:String
		},
		eyes: {
			type: String
		},
		skin: {
			type: String
		},
		facility: {
			type: String
		},
		wins: {
			type: Number
		},
		loss: {
			type: Number
		},
		items: []
});

var Player = module.exports = mongoose.model('Player', playerSchema);
const saltRounds = 10;
module.exports.createPlayer = function(newPlayer, callback){
	
	newPlayer.save(callback);
}

module.exports.getPlayerByUsername = function(username, callback){
        var query = {name: username};
        Player.findOne(query, callback);
}

module.exports.getPlayerById = function(id, callback){
        Player.findById(id, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback){
        bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
        });
}
