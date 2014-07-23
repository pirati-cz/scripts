// ==UserScript==
// @name          PHPBB thread mute
// @namespace     http://pirati.cz/
// @version       0.23
// @author        Lukas -krtek.net- Novy <zmrd@krtek.net>
// @description   Delists muted threads for 7 days
// @match         https://forum.pirati.cz/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require       http://coruvar.cz/jquery.cookie.js
// ==/UserScript==

$(function () {
	$('ul.topiclist.topics li dl dt a.topictitle').each(function() {
		var url = this.href;

		url = url.replace(/\.html$/, '');
		var topic_id = url.replace(/.+t/g, '');

		var cookie_name = 'mute-thread-' + topic_id;
		if ($.cookie(cookie_name)) {
			$(this).parent().parent().parent().remove();
		} else {
			var button = $("<button>MUTE</button>");
			button.click(function() {
				$.cookie(cookie_name, '1', { expires: 7, path: '/' });
				$(this).parent().parent().parent().remove();
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
		}
	});
})();
