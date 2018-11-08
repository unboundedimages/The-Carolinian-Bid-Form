//require dependencies
const express = require ('express');
const exphbs  = require('express-handlebars');
const mysql = require('mysql');
const env = require('dotenv').load()
const path = require("path");
const bodyParser = require ('body-parser');
const db = require ("./config/dbConnection.js")
const PORT = process.env.PORT || 8080;
const app = express();
///////////////////////////////////
//square
var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "YOUR ACCESS TOKEN";

var api = new SquareConnect.LocationsApi();
var apiInstance = new SquareConnect.TransactionsApi();
var locationId = "locationId_example"; // String | The ID of the location to associate the created transaction with.
var transactionId = "transactionId_example"; //String |

var body = new SquareConnect.ChargeRequest(); // ChargeRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.


api.listLocations().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

//connect express server 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/views')));
app.set('views', './views');
app.engine('hbs', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', '.hbs')
app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});


app.get('/', function(req, res) {
	console.log("we in here")
	res.render('index')
});

app.get('/payment', function(req, res) {
	console.log("we in here again")
	
	var queires = [
		"SELECT rec_locator FROM bid_nfo ORDER BY id DESC LIMIT 1",
		"SELECT price FROM bid_nfo ORDER BY id DESC LIMIT 1",
		"SELECT bid_ad FROM bid_nfo ORDER BY id DESC LIMIT 1"
	]
	db.query(queires.join(';'), function(error, results, fields){
		
		if(error) { 
			throw error;
		}
		var rec = {
			rec_locator: results[0][0].rec_locator,
			price: results[1][0].price,
			bid_text: results[2][0].bid_ad
		}
		res.render('ccpgtm', {rec})
		return;
	});
});
app.post('/payment', 	(req, res, next)=>{

var SquareConnect = require('square-connect');
var defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new SquareConnect.TransactionsApi();

var locationId = "locationId_example"; // String | The ID of the location to associate the created transaction with.

apiInstance.charge(locationId, body).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
})
app.post('/thanks', (req,res, next)=>{
	console.log("ty for the business")
	var queires = [
		"SELECT rec_locator FROM bid_nfo ORDER BY id DESC LIMIT 1",
		"SELECT price FROM bid_nfo ORDER BY id DESC LIMIT 1",
		"SELECT bid_ad FROM bid_nfo ORDER BY id DESC LIMIT 1"
	]
	db.query(queires.join(';'), function(error, results, fields){
		
if(error) {
	console.log("it didn't make it: ", error)
}
var rec = {
	rec_locator: results[0][0].rec_locator,
	price: results[1][0].price,
	bid_text: results[2][0].bid_ad
}
res.render('tycbrs', {rec})
return;
});
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
	db.query('CREATE TABLE bid_nfo (id int AUTO_INCREMENT, name VARCHAR(255), rec_locator VARCHAR(20), date1 DATE, date2 DATE default NULL, date3 DATE default NULL,  date4 DATE default NULL, runs int, bid_ad LONGTEXT, price VARCHAR(20), PRIMARY KEY(id))', function(err, result){
		if (err) throw err;
		console.log("Table created" + result)
		res.send("Table created")
	});
});


// Insert into Table

app.post("/add", (req, res, next)=> {
	//create random key for record locator
	let text3 = []
	function makeid(text, text2) {

		var text = "";
		var text2 = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for (let i = 0; i < 8; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length))
		}
		for (let i = 0; i < 8; i++) {
			text2 += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		text3.push(text + "-" + text2)
		return text + "-" + text2; 
	}
	makeid();

	let timenow = Date.now();
console.log("this is the time ====================================================", timenow)

//Puts data into DB
db.query("INSERT INTO bid_nfo SET ?",{
	name:req.body.company,
	// logged: req.body.date, 
	date1:req.body.input1,
	date2:req.body.input2,
	date3:req.body.input3,
	date4:req.body.input4,
	rec_locator:text3,
	price:req.body.price,
	bid_ad:req.body.bid_Ad,
	runs:req.body.runs
		// runs:BidRun
	}, (err,res)=>{
		if (err) throw err;
		console.log("data inserted", res);
	// return;
});


//display queries in DOM
var queires = [
	"SELECT rec_locator FROM bid_nfo ORDER BY id DESC LIMIT 1",
	"SELECT price FROM bid_nfo ORDER BY id DESC LIMIT 1",
	"SELECT bid_ad FROM bid_nfo ORDER BY id DESC LIMIT 1"
]
db.query(queires.join(';'), function(error, results, fields){
	
	if(error) { 
		throw error;
	}
	var rec = {
		rec_locator: results[0][0].rec_locator,
		price: results[1][0].price,
		bid_text: results[2][0].bid_ad
	}
	res.render('pybtyfts', {rec})
	return;
});
}); //end of post route

//get all records
app.get("/fetch-seek-find-locate", (req,res)=> { 
	db.query("SELECT * FROM bid_nfo", (err, rows, field)=> {
			if (!err)
			// console.log("ooooooooOOOOOOOoooooooOOOOOOOOooooooOOOOOOOoooooOOOO: ",rows[0].rec_locator);
			res.send(rows)
			else
			console.log(err);
		}
	)
})

//get specific single record
app.get("/fetch-seek-find-locate/:id", (req,res)=> { 
	db.query("SELECT * FROM bid_nfo WHERE rec_locator = ?",[req.params.id],(err, rows, field)=> {
			if (!err)
			res.send(rows)
			else
			console.log(err);
		}
	)
})

//catch all query #2
app.get("/fetch-seek-find-locate-name", (req,res)=> { 
	db.query("SELECT * FROM bid_nfo", (err, rows, field)=> {
			if (!err)
			res.send(rows)
			else
			console.log(err);
		}
	)
})
//get query by company name 
app.get("/fetch-seek-find-locate-name/:id", (req,res)=> { 
	db.query("SELECT * FROM bid_nfo WHERE name = ?",[req.params.id],(err, rows, field)=> {
			if (!err)
			res.send(rows)
			else
			console.log(err);
		}
	)
})
//===============================================================================================

//todo
//create schema ** in progress
//company name  ** done
//random identifier ** done
//amount charged ** done
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