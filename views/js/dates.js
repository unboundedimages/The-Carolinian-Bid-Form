// document.readyState = () => {
let date1 = document.getElementById("date1a").innerHTML;
document.getElementById("date1a").innerHTML = date1.substr(0, 22);
let date2 = document.getElementById("date2a").innerHTML;
document.getElementById("date2a").innerHTML = date2.substr(0, 22);
let date3 = document.getElementById("date3a").innerHTML;
document.getElementById("date3a").innerHTML = date3.substr(0, 22);
let date4 = document.getElementById("date4a").innerHTML;
document.getElementById("date4a").innerHTML = date4.substr(0, 22);

// console.log("the damn dates", dateS.substr(0, 19));
// let data = {};
// $.ajax({
//   url: "http://localhost:8080/preview-bid",
//   type: "GET",
//   dataType: "application/json",
//   // data: JSON.stringify(data),
//   // contentType: "application/json",
//   success: function(data) {
//     console.log("success");
//     console.log(data);
//   },
//   error: () => console.log("error")
// });
// };
