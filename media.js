// var dbs = require('mysql');

//load banner
function carobanner(){
	let caro_banner = '<img src="http://caro.news/wp-content/uploads/2017/12/caro-logo-for-website.png">';
	document.getElementById("CaroBanner").innerHTML = caro_banner;
	let caro_man = '<img src="http://caro.news/wp-content/uploads/2018/01/Caro-Newsman-Mark-223x300.png" class="caroman">';
	document.getElementById("CaroMan").innerHTML = caro_man;
}
carobanner();


//random id generator
//create variable to store random key
// var text3 = [];
// console.log(text3)
// //pass two arguements that will hold the value of two randomly created alpha-numeric values
// function makeid(text, text2) {
// 	// var text3 = []
// 	var text = "";
// 	var text2 = "";
// 	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	for (let i = 0; i < 8; i++)
// 	text += possible.charAt(Math.floor(Math.random() * possible.length))
// for (let i = 0; i < 8; i++)
// text2 += possible.charAt(Math.floor(Math.random() * possible.length));
// // dynamically add alpha-numeric values to div element 
// document.getElementById("randomId").innerHTML = text +"-" + text2;
// //store data in array
// text3.push(text + "-" + text2)
// return text + "-" + text2; 
// }
// makeid();



// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'majid158',
// 	database: 'caro_bid'
// });

// db.query("INSERT INTO bid_nfo SET ?", {runs: makeid()}, (err, res)=>{
// 	if (err) throw err;
// 	console.log("my dude" + res)

// });
///////////////////////////////////////
// let exports = module.exports = {}

// export.add = (req,res)=> {
// 	db.query("INSERT INTO bid_nfo SET ?", {
// 		 makeid: function() {
// 	var text = "";
// 	var text2 = "";
// 	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// 	for (let i = 0; i < 8; i++)
// 	text += possible.charAt(Math.floor(Math.random() * possible.length))
// for (let i = 0; i < 8; i++)
// text2 += possible.charAt(Math.floor(Math.random() * possible.length));
// // console.log(text2 +"-"+ text)
// document.getElementById("demo").innerHTML = text +"-" + text2;
// return text;
// }
// };
// })
// }