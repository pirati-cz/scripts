// ==UserScript==
// @name       Mod icon
// @namespace  mod icon
// @version    0.1
// @description  change width and color of mod icon
// @match      https://forum.pirati.cz/*
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.edit-icon a { background-image: none !important; }');
addGlobalStyle('ul.profile-icons li.edit-icon { width: 40px !important; padding-right: 20px !important; background: url("http://i61.tinypic.com/sy09cp.gif") no-repeat !important; }');
