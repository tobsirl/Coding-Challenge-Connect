const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'gameState.json',
);

const getGameStateFromFile = (cb) => {
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
    const createEmptyTable = () => new Array(6).fill(null).map(() => new Array(9).fill(null));

    this.board = createEmptyTable();
    console.log(this.board);
  }

  togglePlayer() {
    return this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }

  play(col) {
    if (!this.gameOver) {
      const { board } = this;
      for (let row = 5; row >= 0; row--) {
        if (!board[row][col]) {
          board[row][col] = this.player2;
          break;
        }
      }
    }
  }

  save() {
    getGameStateFromFile((gameState) => {
      gameState.push(this);
      fs.writeFile(p, JSON.stringify(gameState), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getGameStateFromFile(cb);
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

  updateBoard(col) {
    for (let row = 5; row >= 0; row--) {
      if (!this.board[row][col]) {
        this.board[row][col] = this.player1;
        break;
      }
    }
  }

  getBoard() {
    return this.board;
  }

  // Check board for win conditions
  static checkVertical(board) {
    // Check only if row is 4 or greater
    for (let row = 4; row < 6; row++) {
      for (let col = 0; col < 7; col++) {
        if (board[row][col]) {
          if (
            board[row][col] === board[row - 1][col]
            && board[row][col] === board[row - 2][col]
            && board[row][col] === board[row - 3][col]
            && board[row][col] === board[row - 4][col]
          ) {
            return board[row][col];
          }
        }
      }
    }
  }

  static checkHorizontal(board) {
    // Check only if column is 3 or less
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 5; col++) {
        if (board[row][col]) {
          if (
            board[row][col] === board[row][col + 1]
            && board[row][col] === board[row][col + 2]
            && board[row][col] === board[row][col + 3]
            && board[row][col] === board[row][col + 4]
          ) {
            return board[row][col];
          }
        }
      }
    }
  }
};
