const mysql = require('mysql');
const env = require('dotenv').load()

const dbConnection = mysql.createConnection({
	host: 'localhost',
	user: process.env.dbu,
	password: process.env.dbp,
	database: process.env.dbn
});
console.log(dbConnection, "=====================")

dbConnection.connect(function(err) {
	if (err) throw err;
	console.log("DB Connected!");
});

module.exports = dbConnection;