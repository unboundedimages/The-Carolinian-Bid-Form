// document.getElementById('bidAd').onload = ()=> getBidNfo();
// "use strict";

function getBidNfo() {
	// window.onload(){	
		let bidText = document.getElementById("ta")		
        // let bidz = document.getElementById("bidAd").innerHTML = document.querySelector('#ta').innerText;
        
        /////////////////////////////////////////////////////////////////////////
        // this will insert the html markup with the text in the db
        // Find a way to store this and the text without html into a table
		let bidzHTML = document.getElementById("bidAd").innerHTML = document.querySelector('#ta').innerHTML;
        //////////////////////////////////////////////////////////////////////////

        // console.log("bzzzzzzzzzzzzzzzzzzzzzz",bidz);
		console.log("text text text text text ", bidText.innerText)
	}

	getBidNfo()
// getBidNfo()
//Use an event listener to 
// document.addEventListener('keyup', checkKey);

// function checkKey(event) {
// 	var key = event.keyCode;
// 	if (key === 13) {
// 		money(event)
// 	}
// }


// create a formula that refreshes the index page so that when the user hits back the form is blank

// function clearPage() {
//     document.getElementsByName('input').values == 
// }

//create a formula that counts the lines and multiplies it by 1.56

//create a function that substracts 1.56 every time a line is removed.

var calculateContentHeight = function( ta, scanAmount ) {
	var origHeight = ta.style.height,
	height = ta.offsetHeight,
	scrollHeight = ta.scrollHeight,
	overflow = ta.style.overflow;
    /// only bother if the ta is bigger than content
    if ( height >= scrollHeight ) {
        /// check that our browser supports changing dimension
        /// calculations mid-way through a function call...
        ta.style.height = (height + scanAmount) + 'px';
        /// because the scrollbar can cause calculation problems
        ta.style.overflow = 'hidden';
        /// by checking that scrollHeight has updated
        if ( scrollHeight < ta.scrollHeight ) {
            /// now try and scan the ta's height downwards
            /// until scrollHeight becomes larger than height
            while (ta.offsetHeight >= ta.scrollHeight) {
            	ta.style.height = (height -= scanAmount)+'px';
            }
            /// be more specific to get the exact height
            while (ta.offsetHeight < ta.scrollHeight) {
            	ta.style.height = (height++)+'px';
            }
            /// reset the ta back to it's original height
            ta.style.height = origHeight;
            /// put the overflow back
            ta.style.overflow = overflow;
            return height;
        }
    } else {
    	return scrollHeight;
    }
}
let estimate= [];
console.log("estimate xxxx: ", estimate)

var calculateHeight = function() {
	var ta = document.getElementById("ta"),
	style = (window.getComputedStyle) ?
	window.getComputedStyle(ta) : ta.currentStyle,

        // This will get the line-height only if it is set in the css,
        // otherwise it's "normal"
        taLineHeight = parseInt(style.lineHeight, 10),
        // Get the scroll height of the textarea
        taHeight = calculateContentHeight(ta, taLineHeight),
        // calculate the number of lines
        numberOfLines = Math.ceil(taHeight / taLineHeight) *(2.57)+5.14;
        // numberOfLiness = Math.ceil(taHeight / taLineHeight);

        var runs = document.getElementById("runs").value * numberOfLines
        // document.getElementById("lines").innerHTML = "Estimate $" +
        // runs.toFixed(2) + " for " + numberOfLiness + " lines.";
        document.getElementById("lines").innerHTML = "$" +
        runs.toFixed(2);
        // estimate.push(runs.toFixed(2))
        var json = runs.toFixed(2)
        var obj = JSON.parse(json)
        console.log("obj ", obj)
        var new_json = JSON.stringify(obj)
        estimate.push(new_json)
        console.log("new J", new_json)
    };

    calculateHeight();
    // function getBidAd() {	
    	
    // 	console.log(getBid)
    // }
    if (ta.addEventListener) {
    	ta.addEventListener("mouseup", calculateHeight, false);
    	ta.addEventListener("keyup", calculateHeight, false);
} else if (ta.attachEvent) { // IE
	ta.attachEvent("onmouseup", calculateHeight);
	ta.attachEvent("onkeyup", calculateHeight);
} else if (runs.addEventListener) {
	runs.addEventListener("mouseup", calculateHeight, false);
	runs.addEventListener("keyup", calculateHeight, false);
}


//
// console.log("white lines blowing through my mind")
// getLines();

// document.getElementById('lines').addEventListener('click', getLines);

// getLines => 

// var loadDiv = function(that) {
//     if(that.value == "2") {
//         document.getElementById("2").style.display="block";
//     }
//     else{
//         document.getElementById("2").style.display="none";
//     };

//     if (that.value == "3") {
//         document.getElementById("2").style.display="block";
//         document.getElementById("3").style.display="block";
//     }
//     else{
//         document.getElementById("2").style.display="none";
//         document.getElementById("3").style.display="none";
//     }
// }
// loadDiv()
var load_2 = 
    function (that) {
    if(that.value == "2") {
        document.getElementById("2").style.display="block";
    }
    else{
        document.getElementById("2").style.display="none";
    }

}
// load_2();

var load_3 =
    function (that) {
    if (that.value == "3") {
        document.getElementById("2").style.display="block";
        document.getElementById("3").style.display="block";
    }
    else{
        // document.getElementById("2").style.display="none";
        document.getElementById("3").style.display="none";
    }
}

var load_4 =
    function (that) {
    if (that.value == "4") {
        document.getElementById("2").style.display="block";
        document.getElementById("3").style.display="block";
        document.getElementById("4").style.display="block";
    }
    else{
        // document.getElementById("2").style.display="none";
        document.getElementById("4").style.display="none";
    }
}
var testdate = new Date()
    console.log("test date object", testdate)
//greys out dates prior to today.
var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("date")[0].setAttribute('min', today);
    console.log("today object: ", today)