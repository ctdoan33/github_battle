var mongoose=require('mongoose');
var RankSchema=new mongoose.Schema({
	avatar: {type: String},
	username: {type: String, required: [true, "Username is required"]},
	score: {type: Number, required: [true, "Score is required"]}
}, {timestamps: true});
mongoose.model("Rank", RankSchema);