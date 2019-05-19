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

  togglePlayer() {
    return this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  play(col) {
    if (!this.gameOver) {
      let board = this.board;
      for (let row = 5; row >= 0; row--) {
        if (!board[row][col]) {
          board[row][col] = this.currentPlayer;
          break;
        }
      }

      
    }
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

  getState() {
    return { test: test };
  }

  updateMessage(message) {
    this.message = message;
  }

  updatePlayer1(player1) {
    this.player1 = player1;
  }

  updatePlayer2(player2) {
    this.player2 = player2;
  }

  updateBoard(c) {
    for (let r = 5; r >= 0; r--) {
      if (!this.board[r][c]) {
        this.board[r][c] = this.player1;
        break;
      }
    }
  }

  getBoard() {
    return this.board;
  }
};
