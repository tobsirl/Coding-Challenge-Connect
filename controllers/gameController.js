const GameState = require('../models/gameState');

exports.getGameState = (req, res, next) => {
  res.json({ message: 'Hi' });
};

exports.saveGameState = (req, res, next) => {
  const player1 = req.body.player1;
  const player2 = req.body.player2;
  const currentPlayer = req.body.currentPlayer;
  const board = req.body.board;
  const gameOver = req.body.gameOver;
  const message = req.body.message;
  const gameState = new GameState(
    player1,
    player2,
    currentPlayer,
    board,
    gameOver,
    message
  );
  gameState.save();
};

exports.createNewGame = (req, res, next) => {
  gameState.initBoard();
};
