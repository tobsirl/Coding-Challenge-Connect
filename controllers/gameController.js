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
  let gameState = new GameState(
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

exports.playGame = (req, res, next) => {
  const createEmptyTable = () =>
  new Array(6).fill(0).map(() => new Array(9).fill(0));
  
  let board = createEmptyTable();
  
  const gameState = new GameState(1, 2, null, board, false, '');

  gameState.updateMessage('Hi there2sdf');
  gameState.updatePlayer1(1);
  gameState.updatePlayer2(2);
  gameState.updateBoard(4);
  console.log(gameState);
  //gameState.save();
  


  while(gameState.gameOver !== false) {

   }
  gameState.updateBoard(1)
  res.json({ gameState });

};

exports.updateBoard = (req, res, next) => {
  const item = GameState();
  console.log(item);
  res.json(item);
};

exports.updateMessage = (req, res, next) => {
  console.log(req.body);
  res.json({ requestbody: req.body });
  //GameState.message = req.body;
};
