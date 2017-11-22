var mongoose=require('mongoose');
var Rank=mongoose.model("Rank");
module.exports={
	all: function(req, res){
		Rank.find({}, function(err, ranks){
			res.json(err ? err : ranks);
		});
	},
	updateOrCreate: function(req, res){
		Rank.update({username: req.body.username}, req.body, {upsert: true}, function(err, rank){
			res.json(err ? err : rank);
		});
	}
};