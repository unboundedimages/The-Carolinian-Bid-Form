//require dependencies
const express = require ('express');
const exphbs  = require('express-handlebars');
const mysql = require('mysql');
const path = require("path");
const bodyParser = require ('body-parser');

//connect to DB
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'majid158',
	database: 'caro_bid'
});

db.connect(function(err) {
	if (err) throw err;
	console.log("DB Connected!");
});

//connect express server 
const PORT = process.env.PORT || 8080;
const app = express();
app.engine('hbs', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

//CREATE db

app.get('/caro_bids', (req, res)=> {
	db.query("CREATE DATABASE caro_bid", function (err, result) {
		if (err) throw err;
		console.log("Database created" + result);
		res.send("db created")
	});
});

//Create Table

app.get('/ad', (req,res)=>{
	db.query('CREATE TABLE bid_nfo (id int AUTO_INCREMENT, name VARCHAR(255), logged TIMESTAMP, start_date DATE, end_date DATE, runs int, bid_ad VARCHAR(255), PRIMARY KEY(id))', function(err, result){
		if (err) throw err;
		console.log("Table created" + result)
		res.send("Table created")
	});
});

app.post("/add", (req, res)=> {
	// console.log(res)
	// console.log("hey")
	let company = req.body.company;
	let bidDate = req.body.bid_date;
	db.query("INSERT INTO bid_nfo SET ?",{
		name:req.body.company, 
		start_date:req.body.bid_date,
		end_date:req.body.bid_date_end
		// runs:BidRun
	}, (err,res)=>{
		if (err) throw err;
		console.log("data inserted" + res);
	// return;
});

	// res.send("data inserted");
	res.render('pybtyfts')
});
//connect routes
app.get('/hey',(req,res, next)=>{res.send({hello:"dude"})})
app.get('/', (req,res,next)=>{
	res.render('pybtyfts.html')
});



//todo
//create schema ** in progress
//company name  ** done
//random identifier ** done
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

//create a function that takes the total - estimate for the lines
//and save that to the DB so it can be posted to the payment page.


