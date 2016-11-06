// ==UserScript==
// @name        SteamGifts
// @namespace   m4tini
// @description Hide higher level gifts
// @include     https://www.steamgifts.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  // hide red level gifts
  [].forEach.call(document.querySelectorAll('.giveaway__column--contributor-level--negative'), function(elem){
    elem.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
  });
  // hide ads and images
  ['adsbygoogle', 'featured__container', 'global__image-outer-wrap--avatar-small'].forEach(function(classname) {
    var elems = document.getElementsByClassName(classname);
    [].forEach.call(elems, function(elem){
      elem.style.display = 'none';
    });
  });
  // change header colors
  [].forEach.call(document.querySelectorAll('header, .nav__button-container'), function(elem){
    elem.style.background = '#F0F2F5';
  });
})();
