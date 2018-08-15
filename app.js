// function bold() {
// 	var norm = document.getElementById("textarea1");
// 	if (norm.style.fontWeight == 'bold') {
// 		norm.style.fontWeight = "normal"
// 		// alert("alert")
// 	} 
// 	else {
// 		norm.style.fontWeight = "bold"
// // alert("alert111111111111111")
// }

// }


// function money(event) {
// 	var key = event.keyCode;
// 	var forumla = key == 13;
// 	var x = 1.56
// 	if (forumla ){
// 		// alert("alert111111111111111")
// 		document.getElementById('estimate').value = parseInt(document.getElementById('estimate').value) + 2;
// 	}
// }
document.addEventListener('keyup', checkKey);

function checkKey(event) {
	var key = event.keyCode;
	if (key === 13) {
		money(event)
	}
}

//make a variable that ++ each time enter is pressed. And thta will be muliplied by 1.56

var x = 2;
var y = 1.56;
function money() {
	// var y = Math.floor(Math.random() * 13);
	// var z = x * y;
	// var zz= x + x;
	return document.getElementById('estimate').innerHTML = "$"+1.56 * x++;
}


// function money(event) {
// 	var key = event.keyCode;
// 	var forumla = key == 13;
// 	var x = 1.56
// 	if (forumla ){
// 		// alert("alert111111111111111")
// 		document.getElementById('estimate').innerHTML = x + x;
// 	}
// }


// function bold(){
// 	document.getElementbyId("textarea1").style.fontWeight = 'bold';
// }

// if(this.value == 'u')
// textarea.style.textDecoration = 'underline';
// else
// textarea.style.textDecoration = '';
// if(this.value == 'i')
// textarea.style.fontStyle = 'italic';
// else
// textarea.style.fontStyle = 'normal';
// if(this.value == 'b')
// textarea.style.fontWeight = 'bold';
// else
// textarea.style.fontWeight = '';

//add place holder for the text area

// Let it say Headline 1 
// then headline 2 for the sub headlineand then
// body text so when they start typing in the area
// it is already formated to the necessary style

// Need helvitica 65 Neue for the body 
// helvetica -85 heavy for the headline 