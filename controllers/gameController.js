const GameState = require('../models/gameState');

exports.getGameState = (req, res, next) => {
  res.json({
    player1: 1,
    player2: 2,
    currentPlayer: null,
    board: board,
    gameOver: false,
    message: ''
  });
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
  console.log(gameState);
  gameState.save();
};

exports.createNewGame = (req, res, next) => {
  const createEmptyTable = () =>
    new Array(6).fill(null).map(() => new Array(9).fill(null));

  let board = createEmptyTable();

  const gameState = new GameState({
    player1: 1,
    player2: 2,
    currentPlayer: null,
    board: board,
    gameOver: false,
    message: ''
  });
  res.json({ gameState });
};

exports.updateBoard = (req, res, next) => {};

exports.updateMessage = (req, res, next) => {
  const updatedMessage = req.body;

  gameState.updateToken();
};
