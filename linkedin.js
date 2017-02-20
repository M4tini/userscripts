// ==UserScript==
// @name        LinkedIn
// @namespace   m4tini
// @description Hide ads + fix image dimensions
// @include     https://www.linkedin.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  // hide ads + fix logo height
  var css = document.createElement('style');
  css.innerHTML = '.ad-banner-container { display: none; }'
                + '.pv-entity__logo-img { height: 56px; }'
                ;
  document.body.appendChild(css);
})();
