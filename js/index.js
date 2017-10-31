'use strict';

var game;

$(document).ready(function() {
  game = new Game($('#container'));
  game.intro();


  // var html = '';
  //
  // GameBoard.buttons.forEach(function(pic, index) {
  //   var sanitizedName = pic.name.split(' ').join('_');
  //
  //   html += '<div class= "cell" name="button_' + sanitizedName + '">';
  //   html += '<div class="back"';
  //   html += '    name="' + pic.name + '">';
  //   html += '</div>';
  //   html += '<div class="front" ';
  //   html += 'style="background: url(img/' + pic.img + '") no-repeat"';
  //   html += '    name="' + pic.name + '">';
  //   html += '</div>';
  //   html += '</div>';
  // });
  //
  // // Add all the divs to the HTML
  // $('game-board').innerHTML = html;
});
