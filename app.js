//Use an event listener to 
document.addEventListener('keyup', checkKey);

function checkKey(event) {
	var key = event.keyCode;
	if (key === 13) {
		money(event)
	}
}

//make a variable that ++ each time enter is pressed. And thta will be muliplied by 1.56
// Ensure that the decimal prints out the 100th place, 2 places to the right of the deciimal only
var x = 2;
function money() {
	return document.getElementById('estimate').innerHTML = "$"+ (1.56 * x++).toFixed(2);
}


//create a formula that counts the lines and multiplies it by 1.56