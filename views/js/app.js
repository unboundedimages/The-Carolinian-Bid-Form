// "use strict";

// (function() {
//     var gotChrome = {
//         isChromium: window.chrome,
//         winNav: window.navigator,
//         vendorName: window.navigator.vendor,
//         isOpera:'typeof window.opr !== "undefined"',
//         isIEedge: 'winNav.userAgent.indexOf("Edge") > -1',
//         isIOSChrome: 'winNav.userAgent.match("CriOS")'
//     }
//     if(gotChrome) {
//         if(performance.navigation.type == 2){
//             location.reload(true);
//         }
//         // console.log('is Google Chrome IOS');
//         // alert('is Google Chrome IOS');
//     }
// })();
// if(performance.navigation.type == 2){
//     location.reload(true);
// }

// if(performance.navigation.type == 2){
//     location.reload(true);
// }
function getBidNfo() {

		let bidText = document.getElementById("ta")		
        
        /////////////////////////////////////////////////////////////////////////
        // this will insert the html markup with the text in the db
        // Find a way to store this and the text without html into a table
		let bidzHTML = document.getElementById("bidAd").innerHTML = document.querySelector('#ta').innerHTML;
        //////////////////////////////////////////////////////////////////////////

		console.log("text text text text text ", bidText.innerText)
	}

	getBidNfo()

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
let new_estimate = [];
console.log("estimate xxxx: ", estimate)

 function calculateHeight() {
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
        var runs = document.getElementById("runs").value * numberOfLines
        document.getElementById("lines").innerHTML = "$" +
        runs.toFixed(2);
        //this has no decimals for square requirements
        var runs_2 = document.getElementById("runs").value * numberOfLines * 100
        // document.getElementById("lines_2").innerHTML = runs_2.toFixed(2);
        document.getElementById("lines_2").value = runs_2.toFixed(0);

        var json = runs.toFixed(2)
        //no decimal
        var json_2 = runs_2.toFixed(0)
        var obj = JSON.parse(json)
        //no decimal
        var obj_2 = JSON.parse(json_2)
        console.log("obj ", obj, obj_2)
        var new_json = JSON.stringify(obj)
        //no decimal
        var new_json_2= JSON.parse(obj_2)
        estimate.push(new_json)
        //no decimal
        new_estimate.push(new_json_2)

        console.log("new J", new_json, new_json_2)
    };
    console.log("new estimate xxxxxxxxxxxxxxxxxxxxxx: ", new_estimate)

    // calculateHeight();
    function getit(getruns) {
        calculateHeight()
        document.getElementById('runs').focus()
        document.getElementById('ta').focus()
        var getruns = document.getElementById('runs').value;
       console.log("what the hell is up with runs: ", getruns);
    }
    getit();

    if (ta.addEventListener) {
    	ta.addEventListener("mouseup", calculateHeight, false);
    	ta.addEventListener("keyup", calculateHeight, false);
    } else if (ta.attachEvent) { // IE
        ta.attachEvent("onmouseup", calculateHeight);
        ta.attachEvent("onkeyup", calculateHeight);
    } else if (runs.addEventListener) {
        runs.addEventListener("mouseup", calculateHeight, false);
        runs.addEventListener("keyup", calculateHeight, false);
        runs.addEventListener("click", calculateHeight, false);
    }

////// Toggle visibility of input fields, and enable and disable them for db entries.//////
function enable_dates(that) {
    
    if (that.value === "1") {
        document.getElementById('date2').disabled = true;
        document.getElementById('date3').disabled = true;
        document.getElementById('date4').disabled = true;
        return;
    } else if (that.value ==="2") {
        document.getElementById('date1').disabled = false;
        document.getElementById('date2').disabled = false;
        document.getElementById('date3').disabled = true;
        document.getElementById('date4').disabled = true; 
        return;     
    } else if (that.value == "3") {
        document.getElementById('date1').disabled = false;
        document.getElementById('date2').disabled = false;
        document.getElementById('date3').disabled = false;
        document.getElementById('date4').disabled = true;
        return;
    } else if (that.value == "4") {
        document.getElementById('date1').disabled = false;
        document.getElementById('date2').disabled = false;
        document.getElementById('date3').disabled = false;
        document.getElementById('date4').disabled = false;
        return;
    }
    // if (that.value == "2") {
    //    document.getElementById('date2').disabled = false;
    //    document.getElementById('date3').disabled = true;
    //    document.getElementById('date4').disabled = true;
    // } else if (that.value =="1") {
    //     document.getElementById('date2').disabled = true;
    //     document.getElementById('date3').disabled = true;
    //     document.getElementById('date4').disabled = true;
    // } else if (that.value == "3") {
    //     document.getElementById('date2').disabled = false;
    //     document.getElementById('date3').disabled = false;
    //     document.getElementById('date4').disabled = true;
    // } else if (that.value == "4") {
    //     document.getElementById('date2').disabled = false;
    //     document.getElementById('date3').disabled = false;
    //     document.getElementById('date4').disabled = false;
    // }

}

function show_inputs(that) {
    if (that.value === "1") {
        document.getElementById('1').style.display = "inline-block";
        document.getElementById('2').style.display = "none";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
        return;
    } else if (that.value == "2") {
        document.getElementById('1').style.display = "inline-block";
        document.getElementById('2').style.display = "inline-block";
        document.getElementById('3').style.display = "none";
        document.getElementById('4').style.display = "none";
        return;
    } else if (that.value == "3") {
        document.getElementById('1').style.display = "inline-block";
        document.getElementById('2').style.display = "inline-block";
        document.getElementById('3').style.display = "inline-block";
        document.getElementById('4').style.display = "none";
        return;
    } else if (that.value == '4') {
        document.getElementById('1').style.display = "inline-block";
        document.getElementById('2').style.display = "inline-block";
        document.getElementById('3').style.display = "inline-block";
        document.getElementById('4').style.display = "inline-block";
        return;
    }
}

//greys out dates prior to today.
var today = new Date().toISOString().split('T')[0];
    document.getElementsByName('input1')[0].setAttribute('min', today);
    document.getElementsByName('input2')[0].setAttribute('min', today);
    document.getElementsByName('input3')[0].setAttribute('min', today);
    document.getElementsByName('input4')[0].setAttribute('min', today);
//     console.log("today object: ", today)

// disable days that user can select.  User must select Sunday or Thursday.  Other days will be invalid

//need distinct querySelectors for each input
var input1 = document.querySelector('[id=date1]');
var input2 = document.querySelector('[id="date2"]');
var input3 = document.querySelector('[id="date3"]');
var input4 = document.querySelector('[id="date4"]');

console.log(input1)
// console.log("datess==", datess)

// toast popup
function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    x.hidden = false;
    setTimeout(function(){ 
        x.className = x.className.replace("show", ""); 
        x.hidden = true;
    }, 5000);
}

function noMondays(e){

    // Days in JS range from 0-6 where 0 is Sunday and 6 is Saturday
  
let dateMond = document.getElementById("date1").value;
let inputfield2 = document.getElementById("date2").value;
let inputfield3 = document.getElementById("date3").value;
let inputfield4 = document.getElementById("date4").value;
let dateMondUTC = new Date(dateMond).getUTCDay();
let input2UTC = new Date(inputfield2).getUTCDay();  
let input3UTC = new Date(inputfield3).getUTCDay();  
let input4UTC = new Date(inputfield4).getUTCDay();  
//   console.log("todayAgainn",dateMondUTC)
  
  if(dateMondUTC === 1 || dateMondUTC === 2 || dateMondUTC === 3 || dateMondUTC === 5 || dateMondUTC === 6 
    || input2UTC === 1 || input2UTC === 2  || input2UTC === 3 || input2UTC === 5  || input2UTC === 6
    || input3UTC === 1 || input3UTC === 2  || input3UTC === 3 || input3UTC === 5  || input3UTC === 6
    || input4UTC === 1 || input4UTC === 2  || input4UTC === 3 || input4UTC === 5  || input4UTC === 6
    ) {
        document.getElementById("submit-B").disabled = true;
        document.getElementById("submit-B").style.backgroundColor = "black";
        launch_toast()
        function restoreButton() { 
            setTimeout(() => { 
                document.getElementById("submit-B").disabled = false; 
                document.getElementById("submit-B").style.backgroundColor = "#9b3333";}, 3000);
            }
        restoreButton()
    } else {
          document.getElementById("submit-B").disabled = false;
          document.getElementById("submit-B").style.backgroundColor = "#9b3333";
    }
}

// input1.addEventListener('input',noMondays);
// input2.addEventListener('input',noMondays);
// input3.addEventListener('input',noMondays);
// input4.addEventListener('input',noMondays);

//strips formatting when text is pasted into text area
document.querySelector("div[contenteditable]").addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    var temp = document.createElement("div");
    temp.innerHTML = text;
    document.execCommand("insertHTML", false, temp.textContent);
});

function execCommandOnElement(el, commandName, value) {
    
    if (typeof value == "undefined") {
        value = null;
    }

    if (typeof window.getSelection != "undefined") {
        // Non-IE case
        var sel = window.getSelection();

        // Save the current selection
        var savedRanges = [];
        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
            savedRanges[i] = sel.getRangeAt(i).cloneRange();
        }

        // Temporarily enable designMode so that
        // document.execCommand() will work
        document.designMode = "on";

        // Select the element's content
        sel = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);

        // Execute the command
        document.execCommand(commandName, false, value);

        // Disable designMode
        document.designMode = "off";

        // Restore the previous selection
        sel = window.getSelection();
        sel.removeAllRanges();
        for (var i = 0, len = savedRanges.length; i < len; ++i) {
            sel.addRange(savedRanges[i]);
        }
    } else if (typeof document.body.createTextRange != "undefined") {
        // IE case
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.execCommand(commandName, false, value);
    }
}

function removeDot(){
    execCommandOnElement(document.getElementById("ta"), "insertUnorderedlist");
    document.getElementById("ta").innerHTML="";
}
removeDot()

// function myPopUp(that){
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }

$(function() {
    $(".datepicker").datepicker({
        minDate: new Date(),
        showAdmin: 'clip',
        dateFormat: 'yy-mm-dd',
        showOtherMonths: true,
        selectOtherMonths: true,
        beforeShowDay: function (date) {
        // $thisDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
            $thisDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
            var day = date.getDay();
            if ($.inArray($thisDate) == -1&&day!=1&&day!=2&&day!=3&&day!=5&&day!=6) {
                return [true, ""];
            } else {
                return [false, "", "Unavailable"];
            }
        },  
    });
    }
);

// "Bids must be placed by Monday at 5pm,"+"<br>"+ "<br>"+ "in order to run in this Thursday's print edition"+"<br>"
// execCommandOnElement(document.getElementById("ta"), "insertUnorderedlist");