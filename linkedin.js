// ==UserScript==
// @name        LinkedIn
// @namespace   m4tini
// @description Hide ads + fix image dimensions
// @include     https://www.linkedin.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  // hide ads
  var css = document.createElement('style');
  css.innerHTML = '.ad-banner-container { display: none; }'
                ;
  document.body.appendChild(css);
})();
