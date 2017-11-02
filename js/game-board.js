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
    img: "./img/island.png"
  }, {
    name: "treasure",
    img: "./img/treasure.png"
  }, {
    name: "seawater",
    img: "./img/seawater.png"
  }];

  self.cells = [];
  self.dimension = 10;

  // self.treasuresClicked = 0;
  // self.islandsClicked = 0;
  // self.seawaterClicked = 0;

  self.$timeLeft = null;
  self.$itemsLeft = null;
  self.timeRemain = 60;
  self.itemsRemain = 0;
  self.isOver = false;

  self.createCells();
  self.buildMain();
  self.buildStatus();
  self.buildBoard();

};


//Create
GameBoard.prototype.buildMain = function() {
  var self = this;

  self.$main = $('<div class="main"></div>');
  self.$status = $('<div class="status"></div>');

  self.$main.append(self.$status);
  self.$container.append(self.$main);
};


GameBoard.prototype.buildStatus = function() {
  var self = this;

  self.$timeLeft = $('<div id="timer"> Timer </div>');
  self.$itemsLeft = $('<div id="items-left"> Items Left </div>');

  self.$status.append(self.$timeLeft);
  self.$status.append(self.$itemsLeft);
};


GameBoard.prototype.createCells = function() {
  var self = this;

  for (var i = 0; i < self.dimension; i++) {
    self.cells[i] = [];
    for (var j = 0; j < self.dimension; j++) {
      var type = Math.floor(Math.random() * self.cellsTypes.length);
      if (self.cellsTypes[type].name === 'treasure') {
        self.itemsRemain += 1;
      }

      self.cells[i][j] = {
        type: self.cellsTypes[type].name,
        img: self.cellsTypes[type].img,
        open: false,
      };
    }
  }
};

GameBoard.prototype.buildBoard = function() {
  var self = this;

  var $board = $('<div id="board"></div>');
  for (var i = 0; i < self.dimension; i++) {
    var $row = $('<div class="row"></div>');
    $board.append($row);
    for (var j = 0; j < self.dimension; j++) {

      var $cell = $('<div class="cell"></div>');
      var $top = $('<div class="top-cell"></div>');
      $cell.append($top);

      var $img = $('<img class="image-cell" src="' + self.cells[i][j].img + '">');
      $cell.append($img);
      self.setupCell($cell);
      $row.append($cell);
    }
  }
  self.$main.append($board);

};

//Add event click to a cell
GameBoard.prototype.setupCell = function(cell) {
  var self = this;
  $(cell).on('click', function() {
    var children = cell.children()[0];
    $(children).css('display', 'none');

    var children1 = cell.children()[1];
    if (children1.src.indexOf('treasure') !== -1) {
      self.itemsRemain -= 1;
    }
    if (self.itemsRemain === 0) {
      self.isOver = true;
    }
    console.log(self.itemsRemain);
  });
};


GameBoard.prototype.updateStatus = function() {
  var self = this;

  self.timeRemain -= 1;


  if (self.timeRemain === 0) {
    self.isOver = true;
  }

  self.$timeLeft.text("Time: " + self.timeRemain);
  self.$itemsLeft.text("Treasures: " + self.itemsRemain);
};

GameBoard.prototype.destroy = function() {
  var self = this;
  self.$main.remove();
};
