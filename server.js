//require dependencies
'use strict;'
const express = require ('express');
const exphbs  = require('express-handlebars');
const mysql = require('mysql');
const env = require('dotenv').load()
const path = require("path");
const bodyParser = require ('body-parser');
const db = require ("./config/dbConnection.js")
const PORT = process.env.PORT || 8080;
const app = express();
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
let options = {
    host: 'localhost',
    port: 8080,
    user: 'process.env.dbu',
    password: 'process.env.dbp',
	database: 'process.env.dbn',
	clearExpired: true,
    // How frequently expired sessions will be cleared; milliseconds:
    checkExpirationInterval: 1000 * 6, //6 seconds
    // The maximum age of a valid session; milliseconds:
    expiration: 86400000,
    // Whether or not to create the sessions database table, if one does not already exist:
    createDatabaseTable: true,
    // Number of connections when creating a connection pool:
    connectionLimit: 1,
    // Whether or not to end the database connection when the store is closed.
    // The default value of this option depends on whether or not a connection was passed to the constructor.
    // If a connection object is passed to the constructor, the default value for this option is false.
    endConnectionOnClose: true,
    charset: 'utf8mb4_bin',
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
};
let connection = mysql.createConnection(options); // or mysql.createPool(options);
// let sessionStore = new MySQLStore({}/* session store options */, connection);
let sessionStore = new MySQLStore(options, connection);
// sessionStore.close();
var SquareConnect = require('square-connect');

var defaultClient = SquareConnect.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
// oauth2.accessToken = process.env.sandbox_token;
oauth2.accessToken = process.env.token;
const transactions_api = new SquareConnect.TransactionsApi();



///////////////////////////////////


//connect express server 
app.disable('x-powered-by')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/views')));
app.set('views', './views');
app.use(function(req, res, next) {
	res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
	next();
  });
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));  
app.engine('hbs', exphbs({defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', '.hbs')
app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

//home route
app.get('/', function(req, res) {
	console.log("we in here")
	res.render('index')
});

// Insert into Table
app.post("/", (req, res, next)=> {
	//creates time stamp
	let timenow = new Date();
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
	//to do list, convert timenow to EST and have that post to DB for entry time log.
	console.log("this is text text text x3: ", text3)
	console.log("this is the time ====================================================", timenow)
	
	//Posts data into DB
	db.query("INSERT INTO bid_nfo SET ?",{
		name:req.body.company,
		logged: timenow, 
		date1:req.body.input1,
		date2:req.body.input2,
		date3:req.body.input3,
		date4:req.body.input4,
		email:req.body.email,
		rec_locator:text3,
		price:req.body.price,
		price_2:req.body.price_2,
		bid_ad:req.body.bid_Ad,
		runs:req.body.runs
		}, (err,res)=>{
			if (err){ 
				console.log("Error inserting into db:  ", err.sqlMessage)
			next("OOPS")
			}
			else {
				console.log("data inserted", res);
			}
		});
		res.redirect(307,'/add')
}); //end of add post route

//get /add route
app.get("/add", (req,res)=>{
	res.redirect("/")
});
app.post('/add', (req,res)=>{
console.log(req.body.random_key)
//display queries in DOM
var queires = [
	"SELECT rec_locator FROM bid_nfo ORDER BY id DESC LIMIT 1",
	"SELECT price FROM bid_nfo ORDER BY id DESC LIMIT 1",
	"SELECT bid_ad FROM bid_nfo ORDER BY id DESC LIMIT 1",
	"SELECT email FROM bid_nfo ORDER BY id DESC LIMIT 1"
]
db.query(queires.join(';'), function(error, results, fields){
	
	if(error) { 
		console.log("Please MercifulAllah work....", error)
	}
	var rec = {
		rec_locator: results[0][0].rec_locator,
		price: results[1][0].price,
		bid_text: results[2][0].bid_ad,
		email: results[3][0].email
	}
	res.render('pybtyfts', {rec})
});
})

// get redirect to home
app.get('/payment',(req,res)=>{
	res.redirect('/')
})
//payment route to square
app.post('/payment', function(req, res, next) {
	console.log("we in here again")
	db.query("SELECT * FROM bid_nfo WHERE rec_locator = ?",[req.body.random_key,req.body.email_],(err, rows, field)=> {
		console.log("and this wonderful bit of code is the req.body.random_key: ", req.body.random_key)
		console.log("and this wonderful bit of code is the req.body.random_key: ", req.body.email_)
		console.log(rows)
		let reC = {
			//send to DOM
			applicationId: process.env.applicatoin_id
		}
			if (!err)
			res.render('ccpgtm', {rows})
			else
			console.log(err);
		});
});
app.get('/thanks', (req,res)=> {
		res.redirect('/')
	}
)
app.post('/thanks', (req,res, next)=>{
//write an insert that puts  a paid status into the dB with the record locator.
let request_params = req.body;
let pricePaid = req.body.rec_locator;
let theMale = req.body.email;
console.log("this is the male:", theMale)
console.log("this is the recLoc to link the paid column that should be updated: ", pricePaid)
clientPaid = ["UPDATE bid_nfo SET paid = 'Paid' WHERE rec_locator = ?"]
db.query(clientPaid.join(';'), pricePaid, function (err, result) {
	if (err) throw err;
	console.log(result.affectedRows + "we won.")
}),

//possibly create another table for this.  The record locator can be used in
//square to show proof of payments  Doing it on this side would be for redundancy.
console.log(req.body)
	var squareLocationId = process.env.location;
	// var squareLocationId = process.env.sandbox_location;
	console.log("this is reques_params: ", request_params);
	var idempotency_key = require('crypto').randomBytes(64).toString('hex');
	price = parseInt(request_params._price_)
	console.log(price)
	// Charge the customer's card
	var request_body = {
		card_nonce: request_params.nonce,
		amount_money: {
			amount: price, 
			currency: 'USD'
		},
		idempotency_key: idempotency_key,
		note: request_params.rec_locator + "   -   " + request_params._email_,
	};
	transactions_api.charge(squareLocationId, request_body).then(function(data) {
		console.log("wtf is data: ", data)
		
		var queires = [
					"SELECT rec_locator FROM bid_nfo ORDER BY id DESC LIMIT 1",
					"SELECT price FROM bid_nfo ORDER BY id DESC LIMIT 1",
					"SELECT bid_ad FROM bid_nfo ORDER BY id DESC LIMIT 1",
				]
				db.query(queires.join(';'), function(error, results, fields){
				console.log("this is results xxxx ", results)	
			if(error) {
				console.log("it didn't make it: ", error)
			}
			var rec = {
				rec_locator: results[0][0].rec_locator,
				price: results[1][0].price,
				bid_text: results[2][0].bid_ad,
			}
			res.render('tycbrs',rec)
		})
	}, function(error) {
			console.log("what is broken: ", error)
			res.redirect('/')
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
	db.query('CREATE TABLE bid_nfo (id int AUTO_INCREMENT, logged VARCHAR(30), paid VARCHAR(30), name VARCHAR(255), email VARCHAR(50), rec_locator VARCHAR(20), date1 DATE, date2 DATE default NULL, date3 DATE default NULL,  date4 DATE default NULL, runs int, bid_ad LONGTEXT, price VARCHAR(20), price_2 VARCHAR(20), PRIMARY KEY(id))', function(err, result){
		if (err) throw err;
		console.log("Table created" + result)
		res.send("Table created")
	});
});

//get all rec	ords
app.get("/fetch-seek-find-locate", (req,res)=> { 
	db.query("SELECT * FROM bid_nfo", (err, rows, field)=> {
			if (!err)
			res.send(rows)
			else
			console.log(err);
		}
	)
})

//get specific single record
app.get("/fetch-seek-find-locate/:id", (req,res,next)=> { 
	db.query("SELECT * FROM bid_nfo WHERE rec_locator = ?",[req.params.id],(err, rows, field)=> {
			if (!err)
			res.render('myquery', {rows})
			else
			console.log(err);
		}
	)
})

app.post("/fetch-seek-find-locate/submit", (req,res)=> { 
	db.query("SELECT * FROM bid_nfo WHERE rec_locator = ?",[req.params.id],(err, rows, field)=> {
		var id = req.body.id;
		console.log("req req req req req rqe req req rqe your body:  ", id)
			res.redirect('/fetch-seek-find-locate/' + id)
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
//date add runs ** done
//text from add ** done
//create a function that takes the total - estimate for the lines ** done
//and save that to the DB so it can be posted to the payment page. ** done
//on submit, user goes to a verificiation of screen to preview text they typed ** done
//and the amount that's billed, with payment options. ** done
//paypal, square, cashapp etc.  ** sqaure done
// create code that only allows bids to be submitted by a certain time ** done clientside
//otherwise the date is greyed out ** done
// bid add in print, must be submitted by 5pm Tuesday of same week. Boss changed it to 12pm noon ** done
// otherwise the date for print will be greyed out for that week **
// paid true/false ** done

// ***********************************************************//

// time that card was processed == handled through square ** done
	
//upon statement, user is emailed invoice/reciept, and a cc of invoice goes to == handled through sqauare receipt
//companies email.


//************************** Table redesign ideas ********************************* *//

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