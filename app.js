var readline = require('readline');
var Promise = require('bluebird');

var Board = function() {
  this.firstRow = [null, null, null];
  this.secondRow = [null, null, null];
  this.thridRow = [null, null, null];
};

Board.prototype.togglePiece = function() {

};

var checkWins = function(board) {

};

var checkValidity = function(input) {

}

var promptPlayerOne = () =>
  new Promise((resolve) => {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Which ROW would you like to place the X in? 1-3', (row) => {
      rl.question('Which COLUMN would you like to place the X in? 1-3', (column) => {
        rl.close();
        resolve([row, column]);
      })
    })
  });

var promptPlayerTwo = () =>
  new Promise((resolve) => {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Which ROW would you like to place the O in? 1-3', (row) => {
      rl.question('Which COLUMN would you like to place the O in? 1-3', (column) => {
        rl.close();
        resolve([row, column]);
      })
    })
  });

var askToStartGame = () =>
  new Promise((resolve, reject) => {
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Would you like to play tic-tac-toe? (y/n)', (answer) => {
      rl.close();
      if (answer === 'y') {
        resolve();
      } else {
        reject();
      }
    })
  });

var playRound = (board) => {
  new Promise((resolve, reject) => {
    promptPlayerOne()
    .then((input) => checkValidity(input))
    .then(() => resolve('yay'))
    .then(() => promptPlayerTwo(board))
    .then(() => {
      win = checkWins();
      return;
    });
  })
}

// Start the game when the file is run
askToStartGame()
.then(() => console.log('Game started.'))
.then(() => new Board)
.then((board) => {
  let win = false;
  let winner = null;
  playRound(board)
  return winner;
})
.then((winner) => console.log(`${winner} won the game!`))
.catch((err) => console.log('Game failed.', err));
