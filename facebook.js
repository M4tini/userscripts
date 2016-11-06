// ==UserScript==
// @name        Facebook
// @namespace   m4tini
// @description Hide ads and sidebars
// @include     https://www.facebook.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  var m4tini_hidden = 0;
  var display = document.createElement('div');
  var message = document.createElement('span');
  var counter = document.createElement('span');
  var attached = false;
  display.appendChild(message);
  display.appendChild(counter);
  message.innerHTML = 'Cleaned up: ';
  counter.innerHTML = m4tini_hidden;

  // hide sponsored posts
  setInterval(function(){
    var unwanted = document.querySelectorAll('.uiStreamAdditionalLogging, a[href^="https://www.facebook.com/friends/requests/"]');
    for (var i = 0, j = unwanted.length; i < j; i++) {
      var wrapper = unwanted[i].closest('.userContentWrapper');
      wrapper.parentNode.parentNode.style.border = '5px solid #f90';
      // support wrapped wrappers
      if (wrapper.parentNode.closest('.userContentWrapper')) {
        wrapper = wrapper.parentNode.closest('.userContentWrapper');
      }
      var post = wrapper.parentNode.parentNode;
      post.remove();
      counter.innerHTML = ++m4tini_hidden;
    }
    
    if (!attached) {
      if (document.querySelector('#pagelet_rhc_footer span:last-child')) {
        document.querySelector('#pagelet_rhc_footer span:last-child').parentNode.parentNode.appendChild(display);
        document.getElementById('q').setAttribute('placeholder', '');
        attached = true;
      }
    }
  }, 137);

  // hide sidebar and ads
  var css = document.createElement('style');
  css.innerHTML = '#pagelet_navigation, #pagelet_ego_pane, #pagelet_sidebar { display: none; }'
                + '.home_right_column { min-height: auto !important; } .fbReminders { padding-bottom: 0; }'
                + '#searchBarClickRef .uiTypeahead { background-color: #F6F7F9; }'
                + 'div { border-color: #fff !important; }'
                ;
  document.body.appendChild(css);
})();
