// function doink() {
//   alert("doink");
// }
// var httpRequest;
// (() => {
//     httpRequest = new XMLHttpRequest();
//     httpRequest.onreadystatechange = checkContents;
//     httpRequest.open('POST', 'tycbrs.hbs');
//     httpRequest.send();
// })();

// var checkContents = () => {
//     if (httpRequest.readyState === XMLHttpRequest.DONE) {
//         if (httpRequest.status === 400 || 402){
//             alert("doink")
//         }
// }
// // checkVal();

$(document).ready(() => {
  // function launch_toast2() {
  //   var x = document.getElementById("toast2");
  //   x.className = "show";
  //   x.hidden = false;
  //   setTimeout(function() {
  //     x.className = x.className.replace("show", "");
  //     x.hidden = true;
  //   }, 5000);
  // }
  // launch_toast2();

  function shake() {
    var sha = {
      cardnumber: document.getElementById("sq-card-number"),
      cvv: document.getElementById("sq-cvv"),
      expiration: document.getElementById("sq-expiration-date"),
      zipcode: document.getElementById("sq-postal-code")
    };
    sha.cardnumber.classList.add("shake-in");
    sha.cvv.classList.add("shake-in");
    sha.expiration.classList.add("shake-in");
    sha.zipcode.classList.add("shake-in");
    setTimeout(function() {
      sha.cardnumber.classList.remove("shake-in");
      sha.cvv.classList.remove("shake-in"); // Remove .fade-in class
      sha.expiration.classList.remove("shake-in");
      sha.zipcode.classList.remove("shake-in");
    }, 1000);
  }
  shake();

  $("#sq-creditcard").click(() => {
    $.ajax({
      url: "/thanks",
      type: "POST",
      dataType: "json",
      success: data => {
        console.log("this works?", data.status);
        $("#error").html("Please check your card. ", data);
      },
      error: data => {
        console.log("error");
      }
      //   subumit: document.getElementById("nonce-form").submit()
    });
  });
});

// function launch_toast2() {
//   var x = document.getElementById("toast2");
//   x.className = "show";
//   x.hidden = false;
//   setTimeout(function() {
//     x.className = x.className.replace("show", "");
//     x.hidden = true;
//   }, 5000);
// }
// launch_toast2();
