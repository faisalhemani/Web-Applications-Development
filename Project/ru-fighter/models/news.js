var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var newsSchema = mongoose.Schema({
	date: {
		type: Number,
		index: true
	},
	title: {
		type: String
	},
	message: {
		type: String
	}
});

var News = module.exports = mongoose.model('News', newsSchema);
const saltRounds = 10;
module.exports.createNews = function(newNews, callback){
	newNews.save(callback); 
}

/*
module.exports.getNewsByUsername = function(username, callback){
	var query = {username: username};
	Comment.findOne(query, callback);
}*/

module.exports.getNewsById = function(id, callback){
	Comment.findById(id, callback);
}

/*
module.exports.comparePassword = function (candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if (err) throw err;
    	callback(null, isMatch);
	});
}
*/
