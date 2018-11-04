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
        date.addEventListener('input',noMondays);
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
    // document.getElementsByName("date")[0].setAttribute('min', today);
    document.getElementsByClassName('date')[0].setAttribute('min', today);
    // document.getElementsByTagName('input')[0].setAttribute('min', today);
    console.log("today object: ", today)

// disable days that user can select.  User must select Sunday or Thursday.  Other days will be invalid

//need distinct querySelectors for each input
var input1 = document.querySelector('[id=date1]');
var input2 = document.querySelector('[id="date2"]');
var input3 = document.querySelector('[id="date3"]');
var input4  = document.querySelector('[id="date4"]');

console.log(input1)
// console.log("datess==", datess)

// toast popup
function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

function noMondays(e){

    // Days in JS range from 0-6 where 0 is Sunday and 6 is Saturday
  
let dateMond = document.getElementById("date1").value;
let dateMondUTC = new Date(dateMond).getUTCDay();  
  console.log("todayAgainn",dateMondUTC)
  

    if(dateMondUTC === 1 || dateMondUTC === 2 || dateMondUTC === 3 || dateMondUTC === 5 || dateMondUTC === 6){
          // alert("this is an invalid date")
          e.target.setCustomValidity('OH NOES! We hate Mondays! Please pick any day but Monday.');
          launch_toast()
          document.getElementById("submit-B").disabled = true;
          document.getElementById("submit-B").style.backgroundColor = "black";
          document.getElementById("date2").disabled = true;
          document.getElementById("date3").disabled = true;
          document.getElementById("date4").disabled = true;
    } else {

          e.target.setCustomValidity('');
          document.getElementById("submit-B").disabled = false;
          document.getElementById("date2").disabled = false;
          document.getElementById("date3").disabled = false;
          document.getElementById("date4").disabled = false;
          document.getElementById("submit-B").style.backgroundColor = "#9b3333";
    }
  
// noTuesdays()
}


function noTuesdays(e) {
  
  //trying to pull data from specific input
var dateTues = document.getElementById("date2").value;
  console.log("testme date2", dateTues)
var dateTuesUTC = new Date(dateTues).getUTCDay()
  console.log("dateTuesUTC",dateTuesUTC)
  // console.log("this is a test", testme)
  
    if(dateTuesUTC === 6 || dateTuesUTC === 5 || dateTuesUTC === 3 || dateTuesUTC === 2 || dateTuesUTC === 1){
          // alert("this is an invalid dates")
          //e.target.setCustomValidity('OH NOES! We hate Mondays! Please pick any day but Monday.');
          // document.getElementById("submit").disabled = true;
          launch_toast()
          document.getElementById("submit-B").disabled = true;
          document.getElementById("submit-B").style.backgroundColor = "black";
          document.getElementById("date1").disabled = true;
          document.getElementById("date3").disabled = true;
          document.getElementById("date4").disabled = true;
    } else {

        e.target.setCustomValidity('');
        document.getElementById("submit-B").disabled = false;
        document.getElementById("date1").disabled = false;
        document.getElementById("date3").disabled = false;
        document.getElementById("date4").disabled = false;
        document.getElementById("submit-B").style.backgroundColor = "#9b3333";
    } 
  
  
}

function noWednesday(e) {
  var dateWeds = document.getElementById("date3").value;
  var dateWedsUTC = new Date(dateWeds).getUTCDay()
  
   if(dateWedsUTC === 6 || dateWedsUTC === 5 || dateWedsUTC === 3 || dateWedsUTC === 2 || dateWedsUTC === 1) {
          
          alert("this is an invalid dates")
          //e.target.setCustomValidity('OH NOES! We hate Mondays! Please pick any day but Monday.');
          // document.getElementById("submit").disabled = true;
          document.getElementById("submit-B").disabled = true;
          document.getElementById("submit-B").style.backgroundColor = "black";
          document.getElementById("date1").disabled = true;
          document.getElementById("date2").disabled = true;
          document.getElementById("date4").disabled = true;
          launch_toast()
   
   } else {

        e.target.setCustomValidity('');
        document.getElementById("submit-B").disabled = false;
        document.getElementById("date1").disabled = false;
        document.getElementById("date2").disabled = false;
        document.getElementById("date4").disabled = false;
        document.getElementById("submit-B").style.backgroundColor = "#9b3333";
    }
  
}

function noFridays(e) {
var dateFri = document.getElementById("date4").value;
  var dateFriUTC = new Date(dateFri).getUTCDay()
  
   if(dateFriUTC === 6 || dateFriUTC === 5 || dateFriUTC === 3 || dateFriUTC === 2 || dateFriUTC === 1) {
          
          alert("this is an invalid dates")
          //e.target.setCustomValidity('OH NOES! We hate Mondays! Please pick any day but Monday.');
          // document.getElementById("submit").disabled = true;
          document.getElementById("submit-B").disabled = true;
          document.getElementById("submit-B").style.backgroundColor = "black";
          document.getElementById("date1").disabled = true;
          document.getElementById("date2").disabled = true;
          document.getElementById("date3").disabled = true;
          launch_toast()
   
   } else {

        e.target.setCustomValidity('');
        document.getElementById("submit-B").disabled = false;
        document.getElementById("date1").disabled = false;
        document.getElementById("date2").disabled = false;
        document.getElementById("date3").disabled = false;
        document.getElementById("submit-B").style.backgroundColor = "#9b3333";
    }
  
}  


input1.addEventListener('input',noMondays);
input2.addEventListener('input',noTuesdays);
input3.addEventListener('input', noWednesday);
input4.addEventListener('input', noFridays);

// function doesWork() {
//  alert("does this work?")
//  return false;
// }
// document.getElementById('submit-B').onclick = doesWork;