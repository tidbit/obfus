var getElem = function( id ) { return document.getElementById(id); };

var header = getElem("header"), 
	app = getElem("app"), 
	input = getElem("email-input"),
	obfus = getElem("obfuscated");

input.addEventListener( 'focus', function(e) {
	header.classList.add("small");
	app.classList.add("show");
});

input.addEventListener( 'input', function(e) {
	obfus.value =	e.srcElement.value.trim().split("").map( function( character ) {
		return '&#' + character.charCodeAt(0) + ';'; 
	}).join("");
});

var selectObfuscated = function() {
	obfus.focus();
	obfus.select();
}

obfus.addEventListener( 'focus', selectObfuscated); 
obfus.addEventListener( 'click', selectObfuscated);




/**
 * Handle hiding/showing info section
 */
var infoIsShown = false;
var infoSVG = document.querySelectorAll("#info-toggle svg");
var info = getElem("info");

var toggleInfo = function( e ) {

	for ( var i = 0; i < infoSVG.length; ++i ) {
		infoSVG[i].classList.toggle('show');
	}

	info.classList.toggle('show');
	infoIsShown = infoIsShown ? false : true;

};

for ( var i = 0; i < infoSVG.length; ++i ) {
	infoSVG[i].addEventListener( 'click', toggleInfo );
}


/**
 * Handle Opening Links in default browser
 */
var shell = require('shell');

var openLink = function( e ) {
	e.preventDefault();
	shell.openExternal( e.srcElement.href );
}

var links = document.querySelectorAll("a");
for ( var i = 0; i < links.length; ++i ) {
	links[i].addEventListener( 'click', openLink );
}
