'use strict';

function Game($container) {
  var self = this;

  self.$container = $container;
  self.intervalId = null;
}

// -- intro --

Game.prototype.intro = function() {
  var self = this;

  self.$intro = $('<div id="screen-intro"><div id="intro-title"></div></div>');
  var $button = $('<button id="intro-button">START GAME</button>');
  self.$intro.append($button);

  self.$container.append(self.$intro);

  // self.start();

  $button.on('click', function() {
    self.destroyIntro();
    self.start();
  });
};


Game.prototype.destroyIntro = function() {
  var self = this;

  self.$intro.remove();
};

// --- game ---


Game.prototype.start = function() {
  var self = this;

  self.game = new GameBoard(self.$container);

  if (self.game.isOver) {
    self.destroyGame();
  }

  self.intervalId = setInterval(function() {
    self.game.updateStatus();
    if (self.game.isOver) {
      clearInterval(self.intervalId);
      self.destroyGame();
      self.gameOver();
    }
  }, 1000);
};

Game.prototype.destroyGame = function() {
  var self = this;
  self.game.destroy();

  console.log('game destroyed');
};


// --- game over ---


Game.prototype.gameOver = function() {

  var self = this;

  self.$gameOver = $('<div id="game-over-screen"><h2>GAME OVER</h2></div>');
  var $button = $('<button id="game-over-button">START AGAIN</button>');
  self.$gameOver.append($button);
  self.$container.append(self.$gameOver);

  $button.on('click', function() {
    self.destroyGameOver();
    self.start();
  });

};

Game.prototype.destroyGameOver = function() {
  var self = this;

  self.$gameOver.remove();

};
