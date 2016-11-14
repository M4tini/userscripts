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
  css.innerHTML = '.markdown-body code { background: #eee; color: #000; }'
                + '.markdown-body pre, .markdown-body .highlight pre { background: #eee; color: #000 }'
                + '.markdown-body blockquote, .markdown-body blockquote code { color: #999; border-color: #f90; }'
                ;
  document.body.appendChild(css);
})();
