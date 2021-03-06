'use strict';

function Game($container) {
  var self = this;

  self.$container = $container;
  self.intervalId = null;

  self.soundStart = new Audio("./mp3/254-athletic-bgm.mp3");
  self.soundGameOver = new Audio("./mp3/209-player-down.mp3");
  self.soundWin = new Audio("./mp3/239-fireworks-fanfare.mp3");
}

// -- intro --

Game.prototype.intro = function() {
  var self = this;

  self.$intro = $('<div id="screen-intro"> Find all the<span style="color:gold; font-size:56px;">TREASURE</span>before time runs out!<div id="intro-title"></div></div>');
  var $button = $('<button id="intro-button">START GAME</button>');
  self.$intro.append($button);



  self.$container.append(self.$intro);


  $button.on('click', function() {
    self.destroyIntro();
    self.start();
    self.soundStart.play();
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
  self.soundStart.pause();

  if (self.game.isWon) {
    self.$gameOver = $('<div id="game-over-screen"><h3>You Win!</h3></div>');
    self.soundWin.play();
  } else {
    self.$gameOver = $('<div id="game-over-screen"><h3>GAME OVER</h3></div>');
    self.soundGameOver.play();
  }


  var $button = $('<button id="game-over-button">START AGAIN</button>');
  self.$gameOver.append($button);
  self.$container.append(self.$gameOver);

  $button.on('click', function() {
    self.destroyGameOver();
    self.start();
    self.soundStart.play();

  });

};

Game.prototype.destroyGameOver = function() {
  var self = this;

  self.$gameOver.remove();

};
