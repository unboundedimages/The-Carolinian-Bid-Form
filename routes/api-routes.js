const dbConnection = require("./config/dbConnection.js");
console.log("xxxxxxxxxxxxxxxxxxxxxxxxx", dbConnection)
module.exports = function(app) {


	app.post("/add", function(req, res) {
//=========================================================================================
	//record locator function
	let text3 = []
	function makeid(text, text2) {
	// var text3 = []
	var text = "";
	var text2 = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < 8; i++)
	text += possible.charAt(Math.floor(Math.random() * possible.length))
for (let i = 0; i < 8; i++)
text2 += possible.charAt(Math.floor(Math.random() * possible.length));
// dynamically add alpha-numeric values to div element 
// document.getElementById("randomId").innerHTML = text +"-" + text2;
//store data in array
text3.push(text + "-" + text2)
return text + "-" + text2; 
}
makeid();
//===========================================================================================


// let company = req.body.company;
// let bidDate = req.body.bid_date;
dbConnection.query("INSERT INTO bid_nfo SET ?",{
	name:req.body.company, 
	start_date:req.body.bid_date,
	end_date:req.body.bid_date_end,
	rec_locator:text3
		// runs:BidRun
	}, (err,res)=>{
		if (err) throw err;
		console.log("data inserted" + res);
		// return;
		// res.send("data inserted");
		// res.render('pybtyfts.hbs')
	});

res.render('pybtyfts.hbs')
});
}
