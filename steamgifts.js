// ==UserScript==
// @name        SteamGifts
// @namespace   m4tini
// @description Hide ads and higher level gifts
// @include     https://www.steamgifts.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  // hide red level gifts
  [].forEach.call(document.querySelectorAll('.giveaway__column--contributor-level--negative'), function(elem) {
    elem.closest('.giveaway__row-outer-wrap').remove();
  });

  // hide ads and images + smaller header
  var css = document.createElement('style');
  css.innerHTML = '.adsbygoogle, .global__image-outer-wrap--avatar-small { display: none !important; }'
                + '.global__image-outer-wrap { padding: 0; }'
                + '.global__image-outer-wrap img { height: 70px; }'
                ;
  document.body.appendChild(css);
})();
