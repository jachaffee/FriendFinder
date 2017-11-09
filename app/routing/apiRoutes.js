var bodyParser = require('body-parser');
var path = require('path');
var userProfiles = require('../data/friends.js');


module.exports = function(app) {

	app.get("/api/friends", function(req,res) {
		res.json(userProfiles);
	});

     app.post("/api/friends", function (req, res){
          userProfiles.push(req.body);
          res.json(userProfiles);
     });
};