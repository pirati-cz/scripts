// ==UserScript==
// @name          PHPBB replygif easteregg
// @namespace     http://pirati.cz/
// @version       0.42
// @author        Lukas -krtek.net- Novy <zmrd@krtek.net>
// @description   Bring back the famous easteregg
// @match         https://forum.pirati.cz/*
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==

(function($) {
$(function() {
	var f;
    $(".content > blockquote > div > cite").each(function() {
		var $this = $(this);
		$this.click(f = function() {
			$this.parent().parent().after($('<br /><div><img src="https://stream.pirati.cz/replygif.php?_=' + Math.random() + '" /></div>'));
		});
		if (Math.random() < 0.01) {
			//f();
		}
    });
});

})(jQuery);
