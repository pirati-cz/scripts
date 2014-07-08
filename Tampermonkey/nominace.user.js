// ==UserScript==
// @name          Nominace na cenu
// @namespace     http://pirati.cz/homo/cena
// @version       0.12.2
// @description   prida tlacitko nominace na cenu
// @match         https://forum.pirati.cz/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==

$(function () {
	$('.post .postbody h3 a').each(function() {
		var url = this.href;
		var button = $("<button>OCENIT</button>");
		button.click(function() {
				window.open("http://coruvar.cz/ocenit.php?url="+url, "cena");
		});
		button.css("font-size", "50%");
		button.css("font-weight", "bold");
		button.css("border", "1px solid gray");
		button.css("margin", "1px 10px 0 0");
		button.css("float", "right");
		button.css("background", "rgb(230,230,230)");
		button.css("color", "blue");
		button.css("border-radius", "3px");
		button.css("padding", "0px 2px");
		button.css("cursor", "pointer");
		$(this).parent().append(button);
	});
})();

