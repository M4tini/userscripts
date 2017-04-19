// ==UserScript==
// @name        Trello
// @namespace   m4tini
// @description Highlight assigned cards + show card numbers
// @include     https://trello.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  user = {};

  // monitor ajax loading
  setInterval(function() {
    // reset abandoned cards
    let cards = document.getElementsByClassName('mp-user');
    for (let card of cards) {
      let members = card.getElementsByClassName('member-avatar');
      let spotted = false;
      for (let member of members) {
        if (member.title === user.title) {
          spotted = true;
        }
      }
      if (!spotted) {
        card.classList.remove('mp-user');
      }
    }
    // highlight assigned cards
    let avatars = document.getElementsByClassName('member-avatar');
    user = avatars[0];
    for (let avatar of avatars) {
      if (avatar.title === user.title) {
        let card = avatar.closest('.list-card:not(.list-card-quick-edit):not(.mp-user)');
        if (card) {
          avatar.closest('.list-card').classList.add('mp-user');
        }
      }
    }
  }, 1337);

  // show card numbers + enhance interface
  var css = document.createElement('style');
  css.innerHTML = '#board { overflow: visible; margin-bottom: 0; }'
                + '#content { overflow: visible; }'
                + 'body, button, html, input, select, textarea, .icon-lg, .icon-sm, .open-card-composer { color: #333; }'
                + '.button.primary, button.primary, input.primary[type="button"], input.primary[type="submit"] { background: #ffe128 !important; color: #333; box-shadow: none; }'
                + '.board-header-btn, .board-header-btn-icon, .list-name-input { color: #fff; }'
                + '.board-wrapper { z-index: 13; }'
                + '.body-board-view #header { background: #333; }'
                + '.card-short-id { display: block; float: left; font-weight: 700; margin-right: 8px; }'
                + '.list { min-height: 100%; background: rgba(255, 255, 255, .3); border-radius: 0; }'
                + '.list-card { background: rgba(255, 255, 255, .7); border-bottom-color: #ddd; border-radius: 8px; }'
                + '.list-card.mp-user { background: #fff; }'
                + '.list-wrapper.js-add-list { position: absolute; top: -81px; right: 245px; width: auto; min-height: auto; padding: 0; background: rgba(255, 255, 255, .3) !important; }'
                + '.is-show-menu .list-wrapper.js-add-list { right: -94px; }'
                + '.list-wrapper.mod-add .placeholder { padding: 6px; }'
                + '.open-card-composer:hover { background: rgba(255, 255, 255, .3); }'
                + '.list-total .cpoints { margin-right: auto !important; }'
                ;
  document.body.appendChild(css);
})();
