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
addGlobalStyle('ul.profile-icons li.edit-icon { width: 40px !important; padding-right: 20px !important; background-repeat: no-repeat !important; background-image: url(data:image/gif;base64,R0lGODlhKAAoAOflABZF2RpG2x1H3CNK1yVK2ChL2ipM2zZJ2h1R3ixN3C5O3TBQ1zJR2AFltydW3CxY3jZe3l9hXg90xj9k3i5vsEBl3yxxqyNzuUJm4GlraDR2sT11q25wbXFzcDWAwFt03Vx13i+Fy11231934GB44V953EmGwmJ8336AfVGJuWeA421/3YGDgG+B32iE4G+D2mmF4XOE4l+PuoeJhm6J5oqMiXeK4nmM5HiO33+M31Sa1nmP4HuR4led2XyS44KS3ZOVkoOT3n6U5ZWXlGif0IeX44aZ3pqbmImZ5ZudmZyem4ud45Kf34yi4JOg4KGjoKKkoXes35aj5KSmo4iszqiqp5ip4qmrqJ6p3Yuw0n2z5aqsqZ2q65it7K2vrH+45IC55aOv46Cw6qSw5Ie64IO757Gzr6ay5qy046m16qu23q215Ke35LG13qq265S+5rC35qDA3bq8ubC847G95ZfF5aPD4JjG5rO+5rC/7b7BvbXA6KTI66jI5cLEwbjD67zD5b/D37nE7MHF4qvL6MXHxL/G6cLG48DH6rHN5cHI68nLyMPK7cvOyrrR48nM6czM48fP5cjQ5szQ4LnV7crR58/T49LS6dTV39LW5tXW4NPX587a6NHZ79TZ6dba6trc2djc7Nze29zd59re7t3e6Nvg497g3d7f6dzg8N/h3t/g6tni6uDi39fj8dHl8ePh5dLm8uLi7eXi5uHk4NPn9OPj7t3l7uPl4eHm6eTm4+Tl79Xp9uXn5Nzo9ubo5eTp7Ofp5ufo8uHq8uro7OXq7ejq5+jp8+Lr8+vp7enr6OPs9Ozq7urs6eTt9eft7+Xu9+vu6ufv+Orv8u3v6+jw+fHu8+7w7enx+u/x7u3y9fDy7/Hz8PTy9vP18vT38/b49Pf59vX6/fj69/n7+P///////////////////////////////////////////////////////////////////////////////////////////////////////////yH5BAEKAP8ALAAAAAAoACgAAAj+AP8JHEiwoMGDCA1ySMiwIcIqHQot2gKkosWLGDNqrDhlYI0MGVhc2XatpMmTKFOqLCnKzJN/XlBEYOFnHLmbOHPq3MkTJy0oAo9wOKIs3LijSJMqXcoUaTQlAmccGUIL3LerWLNq3coVazOo/+TgatSMGzcAZgE8AgDgABK2AGJws8aABDcVRbgZYgAXwAmzysDq2dZsW7ZsAA4DYJQYzoDElwAA26MAwK40GLIJaQEgVOLD2YKBnRIsWrPTAFAjSr2Gb7NKA5LByAEhjKwBpSacAeAp9elmogUq+RWseDAAxQEEYjvACFwcuRLg2SEiGAgmDCwByITc+C+ww3/+if8FoE0bAJEAiNf+K1ACNn1HWRngQjv78d+F46LFn5aTBQs0MQkA/A1IiyZ+vUCLKQ9ggQkAagxoYH+4gIeLKqdkqOGGHHbo4YaqVCgQFKo009+JKKaooorNqALUP0+YAYoyNNZo44045mgjKC4RNMVGQAaJUUcOFWnkkUgmqeSSTDK5QZNJUqFBH468EcWVWGap5ZZcXlkGJQLJYAEFJlCBjTRopqnmmmy2ieYrfHzxTxYeNBCCHc/gp+eefPY5DS9gCHSBBD2wgsuhiCaq6KKMIvrLMFoIlAIROnDyCy6XXspopphy6mmij0b6TxyuJHKLeOqRBwhzQcC1wi/+syDwwS8nBPHLHAv0dQJxkApEiDbFRGOMMQAMC8AhxaLxmDGQADDLHAkAsMoZFRjjwwoAbFLssMYgIyoZy1ATzbgAkKtIua2VCxszMNwAwRi2DIBKBbt9Uu640SwjqhbOgIZYSYsxtwRcPDyTwB8+kJDNCFIwYK9n/jqzrzNmpbXHHgB0ghY3pKD1SAJ59EWMGAnQ0HHHFXMjsUBaSOPNy95wwQADXaQCwMs2e3MMACrY4E03D7ghDACC2JwzzNLsW004TDft9NNQRw11NaKC4Ys4PWWttU7i+BLoP1/UEQs2ZJdt9tlop212LXfIOVAZXcYtt5ZlQGn33XjnPVABQAA7) !important; }');
