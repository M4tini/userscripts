// ==UserScript==
// @name        Facebook
// @namespace   m4tini
// @description Hide ads and sidebars
// @include     https://www.facebook.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  var removed = 0,
      display = document.createElement('div'),
      message = document.createElement('span'),
      counter = document.createElement('span'),
      attached = false;
  display.appendChild(message);
  display.appendChild(counter);
  message.innerHTML = 'Cleaned up: ';
  counter.innerHTML = removed;

  function removeWrapper(elem) {
    var wrapper = elem.closest('.userContentWrapper');
    // support wrapped wrappers
    if (wrapper.parentNode.closest('.userContentWrapper')) {
      wrapper = wrapper.parentNode.closest('.userContentWrapper');
    }
    //wrapper.parentNode.parentNode.remove();
    wrapper.parentNode.parentNode.style.opacity = '.2';
    counter.innerHTML = ++removed;
  }

  // hide sponsored posts
  setInterval(function(){
    [].forEach.call(document.querySelectorAll('a[href*="/friends/requests/"]:not(.tini_checked)'), function(elem){
      elem.classList.add('tini_checked');
      removeWrapper(elem);
    });
    //
    [].forEach.call(document.querySelectorAll('a[href^="https://l.facebook.com/l.php"]:not(.tini_checked)'), function(elem){
      elem.classList.add('tini_checked');
      if ('Gesponsord' == elem.innerHTML) {
        removeWrapper(elem);
      }
    });
    // monitor when ajax stuff is loaded
    if (!attached) {
      if (footer = document.querySelector('#pagelet_rhc_footer span:last-child')) {
        footer.parentNode.parentNode.appendChild(display);
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
