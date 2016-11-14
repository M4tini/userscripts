// ==UserScript==
// @name        GitHub
// @namespace   m4tini
// @description Highlight code tags
// @include     https://github.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  // highlight code tags
  var css = document.createElement('style');
  css.innerHTML = '.markdown-body code { display: inline-block; vertical-align: middle; padding: 0; background: #666; color: #fff; font-size: 13px; }'
                + '.markdown-body pre code { color: #333; }'
                + '.markdown-body blockquote { border-color: #f90; }'
                ;
  document.body.appendChild(css);
})();
