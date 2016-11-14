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
    elem.closest('.giveaway__row-outer-wrap').remove();
  });

  // hide ads and images
  [].forEach.call(document.querySelectorAll('.adsbygoogle, .global__image-outer-wrap--avatar-small'), function(elem){
    elem.remove();
  });

  // smaller header
  document.querySelector('.global__image-outer-wrap').style.padding = '0';
  document.querySelector('.global__image-outer-wrap img').style.height = '70px';
})();
