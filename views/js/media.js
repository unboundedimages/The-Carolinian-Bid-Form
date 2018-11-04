//load banner
window.onload = function carobanner(){
	let caro_banner = '<img src="/img/caro-logo-for-website.png">';
	document.getElementById("CaroBanner").innerHTML = caro_banner;
	let caro_man = '<img src="/img/Caro-Newsman-Mark-223x300" class="caroman">';
	document.getElementById("CaroMan").innerHTML = caro_man;
}

function copyRecord(e) { 
	var x = document.getElementById('invisiline');
	x.select();
	document.execCommand("copy");
	// alert("Copied the text: " + x.value);
}
//strips formatting when text is pasted into text area
document.querySelector("div[contenteditable]").addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    var temp = document.createElement("div");
    temp.innerHTML = text;
    document.execCommand("insertHTML", false, temp.textContent);
});