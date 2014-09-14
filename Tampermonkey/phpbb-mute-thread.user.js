// ==UserScript==
// @name          PHPBB thread mute
// @namespace     http://pirati.cz/
// @version       0.25
// @author        Lukas -krtek.net- Novy <zmrd@krtek.net>
// @description   Delists muted threads for 7 days
// @match         https://forum.pirati.cz/*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// @require       http://coruvar.cz/jquery.cookie.js
// ==/UserScript==

$(function () {
	var muted = $.cookie('mute-threads');
	if (!muted) {
		muted = {};
	} else {
		muted = JSON.parse(muted);
	}
	var now = new Date().valueOf() / 1000;
	var n = {};
	for (var i in muted) {
		var e = muted[i];
		if (now - e < 60 * 60 * 24 * 14) {
			n[i] = e;
		}
	}
	muted = n;

	$('ul.topiclist.topics li dl dt a.topictitle').each(function() {
		var url = this.href;

		url = url.replace(/\.html$/, '');
		var topic_id = url.replace(/.+t/g, '');

		if ('t-' + topic_id in muted) {
			$(this).parent().parent().parent().hide();
		} else {
			var button = $("<button>MUTE</button>");
			var unmutefun;
			var mutefun = function() {
				muted['t-' + topic_id] = now;
				$.cookie('mute-threads', JSON.stringify(muted), {expires: 365, path: '/'});
				$(this).html('UNMUTE');
				$(this).unbind('click', mutefun);
				$(this).click(unmutefun);
			};
			var unmutefun = function () {
				delete muted['t-' + topic_id];
				$.cookie('mute-threads', JSON.stringify(muted), {expires: 365, path: '/'});
				$(this).html('MUTE');
				$(this).unbind('click', unmutefun);
				$(this).click(mutefun);
			};
			button.click(mutefun);
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
