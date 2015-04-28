console.log(document);

var getElem = function( id ) { return document.getElementById(id); };


console.log(getElem);

var header = getElem("header"); 
var app = getElem("app"); 
var input = getElem("email-input");
var obfus = getElem("obfuscated");

input.addEventListener( 'focus', function(e) {
	header.classList.add("small");
	app.classList.add("show");
});

input.addEventListener( 'input', function(e) {
	console.log(e);
	var value = e.srcElement.value.trim();
	obfus.value =	value.split("").map( function( character ) { return '&#' + character.charCodeAt(0) + ';'; } ).join("");
});


var selectObfuscated = function() {
	obfus.focus();
	obfus.select();
}

obfus.addEventListener( 'focus', selectObfuscated); 
obfus.addEventListener( 'click', selectObfuscated);

