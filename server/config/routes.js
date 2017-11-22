var ranks=require('../controllers/ranks.js');
module.exports=function(app){
	app.get("/ranks", function(req, res){
		ranks.all(req, res);
	});
	app.put("/ranks", function(req, res){
		ranks.updateOrCreate(req, res);
	});
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};