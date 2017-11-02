'use strict';

var game;

$(document).ready(function() {
  game = new Game($('#container'));
  game.intro();
});
