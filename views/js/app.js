// "use strict";
function getBidNfo() {
  let bidText = document.getElementById("ta");

  /////////////////////////////////////////////////////////////////////////
  // this will insert the html markup with the text in the db
  // Find a way to store this and the text without html into a table
  let bidzHTML = (document.getElementById(
    "bidAd"
  ).innerHTML = document.querySelector("#ta").innerHTML);
  //////////////////////////////////////////////////////////////////////////

  console.log("text text text text text ", bidText.innerText);
}

getBidNfo();

//create a formula that counts the lines and multiplies it by 1.56
//create a function that substracts 1.56 every time a line is removed.
var calculateContentHeight = function(ta, scanAmount) {
  var origHeight = ta.style.height,
    height = ta.offsetHeight,
    scrollHeight = ta.scrollHeight,
    overflow = ta.style.overflow;
  /// only bother if the ta is bigger than content
  if (height >= scrollHeight) {
    /// check that our browser supports changing dimension
    /// calculations mid-way through a function call...
    ta.style.height = height + scanAmount + "px";
    /// because the scrollbar can cause calculation problems
    ta.style.overflow = "hidden";
    /// by checking that scrollHeight has updated
    if (scrollHeight < ta.scrollHeight) {
      /// now try and scan the ta's height downwards
      /// until scrollHeight becomes larger than height
      while (ta.offsetHeight >= ta.scrollHeight) {
        ta.style.height = (height -= scanAmount) + "px";
      }
      /// be more specific to get the exact height
      while (ta.offsetHeight < ta.scrollHeight) {
        ta.style.height = height++ + "px";
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
};
let estimate = [];
let new_estimate = [];
console.log("estimate xxxx: ", estimate);

function calculateHeight() {
  var ta = document.getElementById("ta"),
    style = window.getComputedStyle
      ? window.getComputedStyle(ta)
      : ta.currentStyle,
    // This will get the line-height only if it is set in the css,
    // otherwise it's "normal"
    taLineHeight = parseInt(style.lineHeight, 10),
    // Get the scroll height of the textarea
    taHeight = calculateContentHeight(ta, taLineHeight),
    // calculate the number of lines
    numberOfLines = Math.ceil(taHeight / taLineHeight) * 2.57 + 5.14;
  var runs = document.getElementById("runs").value * numberOfLines;
  document.getElementById("lines").innerHTML = "$" + runs.toFixed(2);
  //this has no decimals for square requirements
  var runs_2 = document.getElementById("runs").value * numberOfLines * 100;
  // document.getElementById("lines_2").innerHTML = runs_2.toFixed(2);
  document.getElementById("lines_2").value = runs_2.toFixed(0);

  var json = runs.toFixed(2);
  //no decimal
  var json_2 = runs_2.toFixed(0);
  var obj = JSON.parse(json);
  //no decimal
  var obj_2 = JSON.parse(json_2);
  console.log("obj ", obj, obj_2);
  var new_json = JSON.stringify(obj);
  //no decimal
  var new_json_2 = JSON.parse(obj_2);
  estimate.push(new_json);
  //no decimal
  new_estimate.push(new_json_2);

  console.log("new J", new_json, new_json_2);
}
console.log("new estimate xxxxxxxxxxxxxxxxxxxxxx: ", new_estimate);

function getit(getruns) {
  calculateHeight();
  document.getElementById("runs").focus();
  document.getElementById("ta").focus();
  var getruns = document.getElementById("runs").value;
  console.log("what the hell is up with runs: ", getruns);
}
getit();

if (ta.addEventListener) {
  ta.addEventListener("mouseup", calculateHeight, false);
  ta.addEventListener("keyup", calculateHeight, false);
} else if (ta.attachEvent) {
  // IE
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
    document.getElementById("date2").disabled = true;
    document.getElementById("date3").disabled = true;
    document.getElementById("date4").disabled = true;
    document.getElementById("date2").value = "";
    document.getElementById("date3").value = "";
    document.getElementById("date4").value = "";
    return;
  } else if (that.value === "2") {
    document.getElementById("date1").disabled = false;
    document.getElementById("date2").disabled = false;
    document.getElementById("date3").disabled = true;
    document.getElementById("date4").disabled = true;
    document.getElementById("date3").value = "";
    document.getElementById("date4").value = "";
    return;
  } else if (that.value == "3") {
    document.getElementById("date1").disabled = false;
    document.getElementById("date2").disabled = false;
    document.getElementById("date3").disabled = false;
    document.getElementById("date4").disabled = true;
    // document.getElementById("date2").value = "";
    // document.getElementById("date3").value = "";
    document.getElementById("date4").value = "";
    return;
  } else if (that.value == "4") {
    document.getElementById("date1").disabled = false;
    document.getElementById("date2").disabled = false;
    document.getElementById("date3").disabled = false;
    document.getElementById("date4").disabled = false;
    return;
  } else if (runs.value === "") {
    document.getElementById("date1").disabled = false;
    document.getElementById("date2").disabled = false;
    document.getElementById("date3").disabled = true;
    document.getElementById("date4").disabled = true;
    document.getElementById("date1").value = "";
    document.getElementById("date2").value = "";
    document.getElementById("date3").value = "";
    document.getElementById("date4").value = "";
    return;
  }
}

function show_inputs(that) {
  if (that.value === "1") {
    checkDay1();
    document.getElementById("1").style.display = "inline-block";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    return;
  } else if (that.value == "2") {
    checkDay1();
    document.getElementById("1").style.display = "inline-block";
    document.getElementById("2").style.display = "inline-block";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    return;
  } else if (that.value == "3") {
    checkDay1();
    document.getElementById("1").style.display = "inline-block";
    document.getElementById("2").style.display = "inline-block";
    document.getElementById("3").style.display = "inline-block";
    document.getElementById("4").style.display = "none";
    return;
  } else if (that.value == "4") {
    checkDay1();
    document.getElementById("1").style.display = "inline-block";
    document.getElementById("2").style.display = "inline-block";
    document.getElementById("3").style.display = "inline-block";
    document.getElementById("4").style.display = "inline-block";
    return;
  } else if (that.value === "") {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
    return;
  }
}

//strips formatting when text is pasted into text area
document
  .querySelector("div[contenteditable]")
  .addEventListener("paste", function(e) {
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

// Toggle H1 and H3
let h1Size = true;
let h3Size = true;
let ulBullets = true;
function callResizeH1() {
  document.getElementById("h1").addEventListener("click", function() {
    // if(h1Size || h1Size === true && h3Size === false){
    if (h1Size == true && ulBullets == true) {
      h1Size = false;
      h3Size = true;
      ulBullets = true;

      (() => document.execCommand("formatBlock", false, "<h1>"))();
    } else if (h1Size === true && ulBullets === false) {
      h1Size = false;
      h3Size = true;
      ulBullets = true;
      document.execCommand("insertUnorderedlist", false, "div");
      document.execCommand("formatBlock", false, "<h1>");
    } else {
      h1Size = true;
      h3Size = true;
      ulBullets = true;
      document.execCommand("formatBlock", false, "div");
    }
  });
}
callResizeH1();

function callResizeH3() {
  document.getElementById("h3").addEventListener("click", function() {
    if (h3Size === true && ulBullets === true) {
      h3Size = false;
      h1Size = true;
      ulBullets = true;
      document.execCommand("formatBlock", false, "<h3>");
    } else if (h3Size === true && ulBullets === false) {
      h3Size = false;
      h1Size = true;
      ulBullets = true;
      document.execCommand("insertUnorderedlist", false, null);
      document.execCommand("formatBlock", false, "<h3>");
    } else {
      h3Size = true;
      h1Size = true;
      ulBullets = true;
      (() => document.execCommand("formatBlock", false, "div"))();
    }
  });
}
callResizeH3();

// ends H1 and H3 toggle

function noH1ResizeForUl() {
  document.getElementById("bullet-list").addEventListener("click", function() {
    if (
      ulBullets ||
      h3Size == false ||
      (ulBullets === true && h1Size == false)
    ) {
      ulBullets = false;
      h1Size = true;
      h3Size = true;
      document.execCommand("formatBlock", false, "div");
      document.execCommand("insertUnorderedlist", false, "div");
      document.execCommand("formatBlock", false, "div");
    } else {
      ulBullets = true;
      h1Size = true;
      h3Size = true;
      document.execCommand("formatBlock", false, "div");
      document.execCommand("insertUnorderedlist", false, "div");
      function changeFontSize(fontvar) {
        fontvar = 20;
        var div = document.getElementById("ta");
        var currentFont = div.style.fontSize.replace("pt", "");

        div.style.fontSize = parseInt(currentFont) + parseInt(fontvar) + "pt";
      }
      changeFontSize();
      document.execCommand("formatBlock", false, "div");
      return;
    }
  });
}
noH1ResizeForUl();
function removeDot() {
  execCommandOnElement(document.getElementById("ta"), "insertUnorderedlist");
  document.getElementById("ta").innerHTML = "";
}
removeDot();

function miniUpdate() {
  let dow = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let fin = new Date();
  let shutDown = fin.getDay();
  let today = dow[shutDown];
  console.log("what is today my dude?, Today is: ", today);
  let theHour = fin.getHours();
  //if the hour is greater then 12 and the day index is 4
  if (12 <= theHour && today == "Tuesday") {
    return 3;
  } else if (today == "Wednesday") {
    return 3;
  } else if (17 <= theHour && today == "Thursday") {
    return 6;
  } else if (today == "Friday") {
    return 3;
  } else if (today == "Saturday") {
    return 2;
  } else if (today == "Sunday") {
    return 2;
  } else {
    return 0;
  }
}
//make sure user doesn't enter duplicate dates
function checkDay1() {
  let oNoFF = {
    off: () => {
      document.getElementById("submit-B").style.backgroundColor =
        "rgba(110, 104, 104, 0.18)";
    },
    on: () => {
      document.getElementById("submit-B").style.backgroundColor = "#9b3333";
    }
  };
  console.log(oNoFF.off);
  let dateArray = [];
  dateArray.push(document.getElementById("date1").value);
  dateArray.push(document.getElementById("date2").value);
  dateArray.push(document.getElementById("date3").value);
  dateArray.push(document.getElementById("date4").value);

  if (runs.value == 1) {
    document.getElementById("errormsg").innerText = "";
    document.getElementById("submit-B").disabled = false;
    oNoFF.on();
  }
  if (runs.value == 2) {
    if (dateArray[0] === dateArray[1]) {
      oNoFF.off();
      // console.log("off", oNoFF.off);
      document.getElementById("errormsg").innerText =
        "It looks like that date is already selected.";
      document.getElementById("submit-B").disabled = true;
    } else {
      document.getElementById("submit-B").disabled = false;
      document.getElementById("errormsg").innerText = "";
      oNoFF.on();
    }
    if (dateArray[0] === "" && dateArray[1] === "") {
      document.getElementById("errormsg").innerText = "";
      oNoFF.on();
    }
  }

  if (runs.value == 3) {
    if (
      dateArray[0] === dateArray[1] ||
      dateArray[0] === dateArray[2] ||
      dateArray[1] === dateArray[2]
    ) {
      oNoFF.off();
      document.getElementById("errormsg").innerText =
        "That date is already selected, try again.";
      document.getElementById("submit-B").disabled = true;
    } else {
      document.getElementById("errormsg").innerText = "";
      document.getElementById("submit-B").disabled = false;
      oNoFF.on();
    }
    //fix this..... for when 3 is selected from drop down.
    if (
      (dateArray[0] === "" && dateArray[1] === "" && dateArray[2] === "") ||
      (dateArray[0] === "" && dateArray[2] === "") ||
      (dateArray[1] === "" && dateArray[2] === "")
    ) {
      document.getElementById("errormsg").innerText = "";
      oNoFF.on();
    }
  }
  if (runs.value == 4) {
    if (
      dateArray[0] === dateArray[1] || //1-2
      dateArray[0] === dateArray[2] || //1-3
      dateArray[0] === dateArray[3] || //1-4
      dateArray[1] === dateArray[2] || //2-3
      dateArray[1] === dateArray[3] || //2-4
      dateArray[2] === dateArray[3] //3-4
    ) {
      oNoFF.off();
      document.getElementById("errormsg").innerText =
        "That is a duplicate date. Try again";
      document.getElementById("submit-B").disabled = true;
    } else {
      document.getElementById("errormsg").innerText = "";
      document.getElementById("submit-B").disabled = false;
      oNoFF.on();
    }
    if (
      (dateArray[0] === "" &&
        dateArray[1] === "" &&
        dateArray[2] === "" &&
        dateArray[3] === "") ||
      (dateArray[0] === "" && dateArray[2] === "") ||
      (dateArray[1] === "" && dateArray[2] === "") ||
      (dateArray[0] !== dateArray[1] &&
        dateArray[2] === "" &&
        dateArray[3] === "")
    ) {
      document.getElementById("errormsg").innerText = "";
      oNoFF.on();
    }
  }
}

//prevent error message from firing if runs dropdown isn't selected
// document.getElementById("submit-B").onclick = function() {
//   if (runs.value === "") {
//     document.getElementById("errormsg").innerText = "";
//   }
// };

$(function() {
  $(".datepicker").datepicker({
    minDate: miniUpdate(),
    showAdmin: "clip",
    dateFormat: "yy-mm-dd",
    currentText: "Now",
    showWeek: true,
    weekHeader: "Wk",
    yearRange: "2018:2030",
    constrainInput: true,
    showOtherMonths: true,
    selectOtherMonths: true,
    beforeShowDay: function(date) {
      $thisDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      var day = date.getDay();
      if (
        $.inArray($thisDate) == -1 &&
        day != 1 &&
        day != 2 &&
        day != 3 &&
        day != 5 &&
        day != 6
      ) {
        return [true, ""];
      } else {
        return [false, "", "Unavailable"];
      }
    }
  });
});
// prevent user from being able to type in input date fields
// and force use of the datepicker
function noText() {
  document.getElementById("date1").addEventListener("keydown", function(event) {
    event.preventDefault();
  });
  document.getElementById("date2").addEventListener("keydown", function(event) {
    event.preventDefault();
  });
  document.getElementById("date3").addEventListener("keydown", function(event) {
    event.preventDefault();
  });
  document.getElementById("date4").addEventListener("keydown", function(event) {
    event.preventDefault();
  });
}
// noText();
