'use strict';
window.onclick= myStopFunction;
window.onkeyup = myStopFunction;
window.onmousemove = myStopFunction;
var myVar = setInterval(myTimer, 1000 * 60 * 5);

function myTimer() {
    document.getElementById("notify").style.display="block"

    document.getElementById("notify").innerHTML= "<b>your session will end in 30 second due to inactivity.</b>"+
				 "<br>Click the window to continue this session otherwise "
				+"the page will redirect and this session will be lost."
                var myVar2 = setInterval(gotoUrl, 1000 * 30)
                window.onclick = function hideDiv(){
                    clearInterval(myVar2)
                    document.getElementById("notify").style.display="none"
                    return myVar;
                }
                
}

function gotoUrl() {
	window.location="https://carobids.com"
}

var nut = true;
var up = true;
function myStopFunction() {
    nut = false;
    clearInterval(myVar)
    myVar= setInterval(myTimer,1000 * 60 * 5);
}