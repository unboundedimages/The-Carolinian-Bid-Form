window.onload = function carobanner(){
	if(!window.location.hash) {
		window.location = window.location + '#caro';
		window.location.reload(true);
		window.history.go(0);
	}
	let caro_banner = '<img src="/img/caro-logo-for-website.png">';
	document.getElementById("CaroBanner").innerHTML = caro_banner;
	let caro_man = '<img src="/img/Caro-Newsman-Mark-223x300.png" class="caroman">';
	document.getElementById("CaroMan").innerHTML = caro_man;
	document.getElementById('home').innerHTML = '<div id="line-it"><img src="/img/home-icon-for-website-1.png"></div>';
}
function redirect()
{
    setInterval(function(){
		window.location='https://carobids.com'
		// window.onload=redirect;
	},1000 * 60 * 5);//5 minutes secs
}
redirect()


function copyRecord(e) { 
	var x = document.getElementById('invisiline');
	x.select();
	document.execCommand("copy");
	// alert("Copied the text: " + x.value);
}