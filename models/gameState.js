const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'gameState.json'
);

const getGameStateFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class GameState {
  constructor(player1, player2, currentPlayer, board, gameOver, message) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = currentPlayer;
    this.board = board;
    this.gameOver = gameOver;
    this.message = message;
  }

  // Starts new game
  initBoard() {
    // Create a blank 6x9 matrix
    const createEmptyTable = () =>
      new Array(6).fill(null).map(() => new Array(9).fill(null));

    this.board = createEmptyTable();
    console.log(this.board);
  }

  save() {
    getGameStateFromFile(gameState => {
      gameState.push(this);
      fs.writeFile(p, JSON.stringify(gameState), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getGameStateFromFile(cb);
  }
};
