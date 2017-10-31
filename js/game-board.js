'use strict';

// //Screen intro
// intro - button.click(start) {
//   start();
// }

//Game Logic
var GameBoard = function($container) {
  var self = this;

  self.$container = $container;

  self.cellsTypes = [{
    name: "island",
    img: "island.png"
  }, {
    name: "treasure",
    img: "treasure.png"
  }, {
    name: "seawater",
    img: "seawater.png"
  }];

  self.cells = [];

  // self.treasuresClicked = 0;
  // self.islandsClicked = 0;
  // self.seawaterClicked = 0;

  self.timeLeft = 60;
  self.itemsLeft = 10;

  self.buildMain();
  self.createStatus();
  self.createCells();
  self.createBoard();

};



//Create
GameBoard.prototype.buildMain = function() {
  var self = this;

  self.$main = $('<div class="main"></div>');
  self.$status = $('<div class="status"></div>');

  self.$main.append(self.$status);
  self.$container.append(self.$main);

};


GameBoard.prototype.createStatus = function() {
  var self = this;

  self.$timeLeft = ('<div id = "timer"> Timer </div>');
  self.$itemsLeft = ('<div id = "items-left"> Items Left </div>');

  self.$status.append(self.$timeLeft);
  self.$status.append(self.$itemsLeft);
};



GameBoard.prototype.createCells = function() {
  var self = this;

  for (var i = 0; i < 3; i++) {
    self.cells[i] = [];
    for (var j = 0; j < 3; j++) {
      var type = Math.floor(Math.random() * 3);
      self.cells[i][j] = {
        type: self.cellsTypes[type].name,
        img: self.cellsTypes[type].img,
        open: false,
      };
    }
  }
};


GameBoard.prototype.createBoard = function() {
  var self = this;

  for (var i = 0; i < 10; i++) {
    self.cells = [];
    for (var j = 0; j < 10; j++) {
      var type = Math.floor(Math.random() * 10);
      // self.cells[i][j] = {
      //
      // }
    }
  }

}

// on('click'(  )
//
// )
// <div id="game-board"></div>

//Select a button
GameBoard.prototype.selectCard = function() {
  var self = this;

  $(".button").on('click', function() {
    $("div.children").addClass(".back", ".front");
  });
};


GameBoard.prototype.updateStatus = function() {
  var self = this;

  self.$remainingClicks.text('Remaining Clicks: ' + self.remainingClicks);
  self.$timeLeft.text(self.timeLeft);
  self.$itemsLeft.text(self.itemsLeft);
};
