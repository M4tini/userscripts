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
    var wrapper = elem.closest('.fbUserContent');
    // support wrapped wrappers
    if (wrapper.parentNode.closest('.fbUserContent')) {
      wrapper = wrapper.parentNode.closest('.fbUserContent');
    }
    wrapper.parentNode.parentNode.remove();
    counter.innerHTML = ++removed;
  }

  // monitor ajax loading
  setInterval(function(){
    // hide sponsored posts
    [].forEach.call(document.querySelectorAll('a[href^="https://l.facebook.com/l.php"]:not(.tini_checked)'), function(elem){
      elem.classList.add('tini_checked');
      if ('Gesponsord' == elem.innerHTML) {
        removeWrapper(elem);
      }
    });
    // show counter
    if (!attached) {
      if (footer = document.querySelector('#pagelet_rhc_footer span:last-child')) {
        footer.parentNode.parentNode.appendChild(display);
        document.getElementById('q').setAttribute('placeholder', '');
        attached = true;
      }
    }
  }, 137);

  // hide ads and sidebar
  var css = document.createElement('style');
  css.innerHTML = '#pagelet_navigation, #pagelet_ego_pane, #pagelet_sidebar { display: none; }'
                + '.home_right_column { min-height: auto !important; } .fbReminders { padding-bottom: 0; }'
                + '#globalContainer { padding: 0 !important; } div { border-color: #fff !important; }'
                ;
  document.body.appendChild(css);
})();
