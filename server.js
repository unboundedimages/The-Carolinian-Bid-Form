//require dependencies
const express = require ('express');
const mysql = require('mysql');
const path = require("path");
const bodyParser = require ('body-parser');

//connect to DB
const db = mysql.createConnection({
	host: 'localhost',
	user: 'XXXX',
	password: 'XXXXX',
	database: 'caro_bid'
});

//connect express server 
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

//connect routes
app.get('/hey',(req,res, next)=>{res.send({hello:"dude"})})

//CREATE db
// db.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// 	db.query("CREATE DATABASE caro_bid", function (err, result) {
// 		if (err) throw err;
// 		console.log("Database created");
// 	});
// });


//todo
//create schema 
//company name
//random identifier
//amount charged/
// paid true/false
//date paid
//date add runs
//text from add
// **************//
// create code that only allows bids to be submitted by a certain time
//otherwise the date is greyed out

//on submit, user goes to a verificiation of screen to preview text they typed
//and the amount that's billed, with payment options.
//paypal, square, cashapp etc.
//upon statement, user is emailed invoice/reciept, and a cc of invoice goes to 
//companies email.

//company does not print on sundays
//so the dates the user picks
//if user wants bid add in print, it must be submitted by 5pm monday of same week.
// otherwise the date for print will be greyed out for that week
// so if the user sumbits on tuesday, it will be in the following (next) week's print addition.
//user must know and be reminded of when the add will run when they hit submit.

//table one customer info:
// customer id
//name of company
//email address
//first and last name
// address
//phone number and xtn


// talble two sales info
//purchase number i.e 1 , 2 , 3 , 4 ...
// purchase date
// customer id
// unitque random item number associated with purchase confirmation
// total cost


// table three bid info
// customer id
// date(s) bid will run
// text from bid



