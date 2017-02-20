// ==UserScript==
// @name        LinkedIn
// @namespace   m4tini
// @description Fix image dimensions
// @include     https://www.linkedin.com/in/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  // fix logo height
  var css = document.createElement('style');
  css.innerHTML = '.pv-entity__logo-img { height: 56px; }'
  ;
  document.body.appendChild(css);
})();
