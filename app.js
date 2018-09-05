//Use an event listener to 
// document.addEventListener('keyup', checkKey);

// function checkKey(event) {
// 	var key = event.keyCode;
// 	if (key === 13) {
// 		money(event)
// 	}
// }

//make a variable that ++ each time enter is pressed. And thta will be muliplied by 1.56
// Ensure that the decimal prints out the 100th place, 2 places to the right of the deciimal only
// var x = 2;
// function money() {
// 	return document.getElementById('estimate').innerHTML = "$"+ (1.56 * x++).toFixed(2);
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
        numberOfLines = Math.ceil(taHeight / taLineHeight) *(1.56);
        numberOfLiness = Math.ceil(taHeight / taLineHeight);

        var runs = document.getElementById("runs").value * numberOfLines
        document.getElementById("lines").innerHTML = "Estimate $" +
        runs.toFixed(2) + "for " + numberOfLiness + " lines.";
    };

    calculateHeight();
    if (ta.addEventListener) {
    	ta.addEventListener("mouseup", calculateHeight, false);
    	ta.addEventListener("keyup", calculateHeight, false);
} else if (ta.attachEvent) { // IE
	ta.attachEvent("onmouseup", calculateHeight);
	ta.attachEvent("onkeyup", calculateHeight);
}