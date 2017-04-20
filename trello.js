// ==UserScript==
// @name        Trello
// @namespace   m4tini
// @description Highlight assigned cards + show card numbers
// @include     https://trello.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function(){
  let user = {};

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
  let css = document.createElement('style');
  css.innerHTML = `
    #board { overflow: visible; margin-bottom: 0; }
    #content { overflow: visible; }
    body, button, html, input, select, textarea, .dark-hover span, .open-card-composer { color: #333; }
    .button.primary, button.primary, input.primary[type="button"], input.primary[type="submit"] { background: #ffe128 !important; color: #333; box-shadow: none; }
    .board-wrapper { z-index: 10; }
    .body-board-view #header { background: #333; }
    .card-short-id { display: block; float: left; font-weight: 700; margin-right: 8px; }
    .list { min-height: 100%; background: rgba(255, 255, 255, .3); border-radius: 0; }
    .list-card { background: rgba(255, 255, 255, .7); border-bottom-color: #ddd; border-radius: 8px; }
    .list-card.mp-user { background: #fff; }
    .list-name-input { color: #fff; }
    .list-total .cpoints { margin-right: auto !important; }
    .list-wrapper.js-add-list { position: absolute; top: -81px; right: 245px; width: auto; min-height: auto; padding: 0; background: rgba(255, 255, 255, .3) !important; }
    .list-wrapper.js-add-list .list-name-input { padding: 6px; background: #fff; color: #333; border: 0; }
    .list-wrapper.mod-add .placeholder { min-height: auto; padding: 6px; }
    .is-show-menu .list-wrapper.js-add-list { right: -94px; }
    .member { border-radius: 50%; }
    .member-type { right: 0; left: 0; margin: 0 auto; }
    .open-card-composer:hover { background: rgba(255, 255, 255, .3); }
  `;
  document.body.appendChild(css);
})();
