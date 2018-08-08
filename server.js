const express = require ('express');
const app = express();
const path = require("path");


const PORT = process.env.PORT || 3330;

app.use(express.static(path.join(__dirname, '/')));

app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});