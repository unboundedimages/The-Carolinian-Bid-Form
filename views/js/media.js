//load banner
window.onload = function carobanner(){
	let caro_banner = '<img src="http://caro.news/wp-content/uploads/2017/12/caro-logo-for-website.png">';
	document.getElementById("CaroBanner").innerHTML = caro_banner;
	let caro_man = '<img src="http://caro.news/wp-content/uploads/2018/01/Caro-Newsman-Mark-223x300.png" class="caroman">';
	document.getElementById("CaroMan").innerHTML = caro_man;
}
// carobanner();
function copyRecord(e) { 
	var x = document.getElementById('invisiline');
	x.select();
	document.execCommand("copy");
	// alert("Copied the text: " + x.value);
}