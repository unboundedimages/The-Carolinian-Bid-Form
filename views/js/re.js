"use strict";
window.onclick = myStopFunction;
window.onkeyup = myStopFunction;
window.onmousemove = myStopFunction;
var myVar = setInterval(myTimer, 1000 * 60 * 10);

function myTimer() {
  document.getElementById("notify").style.display = "block";

  document.getElementById("notify").innerHTML =
    "<b>your session will end in 30 second due to inactivity.</b>" +
    "<br>Click the window to continue this session otherwise " +
    "the page will redirect and this session will be lost.";
  var myVar2 = setInterval(gotoUrl, 1000 * 30);
  window.onclick = function hideDiv() {
    clearInterval(myVar2);
    document.getElementById("notify").style.display = "none";
    return myVar;
  };
}

function gotoUrl() {
  window.location = "https://carobids.com";
}

var nut = true;
var up = true;
function myStopFunction() {
  nut = false;
  clearInterval(myVar);
  myVar = setInterval(myTimer, 1000 * 60 * 5);
}

// SIDENAV
let bool = true;
let booly = false;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  bool = true;
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
document.getElementById("contain").addEventListener("click", function() {
  if (parseInt($("#mySidenav").css("width")) > 0) {
    bool = true;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
});

let dgebID = ["CaroBanner", "CaroMan"];
let x = 0;
for (x; x < dgebID.length; x++) {
  document.getElementById(dgebID[x]).addEventListener("click", function() {
    closeNav();
  });
}

document.getElementById("title").addEventListener("click", function() {
  if (bool) {
    bool = false;
    booly = true;
    openNav();
  } else {
    closeNav();
  }
});

function copyEmial(e) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value = "help@carobids.com";
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
