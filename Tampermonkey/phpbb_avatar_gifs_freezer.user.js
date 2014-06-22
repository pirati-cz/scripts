// ==UserScript==
// @name           Stop gif avatar animation in phpbb
// @namespace      http://github.com/lnovy/
// @description    Implements the "stop gif avatar animations in phpbb" feature
// @match          https://forum.pirati.cz/*
// ==/UserScript==

document.addEventListener('load', freeze_avatar_gifs, true);

function freeze_avatar_gifs(e) {
  [].slice.apply(document.images).filter(is_avatar_gif).map(freeze_gif);
}

function is_avatar_gif(i) {
  return /^(?!data:).*\.gif/i.test(i.src) && i.parentNode.parentNode.parentNode.className == 'postprofile';
}

function freeze_gif(i) {
  var c = document.createElement('canvas');
  var w = c.width = i.width;
  var h = c.height = i.height;

  c.getContext('2d').drawImage(i, 0, 0, w, h);
  i.src = c.toDataURL("image/gif");
}

