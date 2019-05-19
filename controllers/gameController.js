const GameState = require('../models/gameState');

exports.getGameState = (req, res, next) => {
  // res.json({
  //   player1: 1,
  //   player2: 2,
  //   currentPlayer: null,
  //   board,
  //   gameOver: false,
  //   message: '',
  // });
};

exports.saveGameState = (req, res, next) => {
  const { player1 } = req.body;
  const { player2 } = req.body;
  const { currentPlayer } = req.body;
  const { board } = req.body;
  const { gameOver } = req.body;
  const { message } = req.body;
  const gameState = new GameState(
    player1,
    player2,
    currentPlayer,
    board,
    gameOver,
    message,
  );
  console.log(gameState);
  gameState.save();
};

exports.playGame = (req, res, next) => {
  const createEmptyTable = () => new Array(6).fill(0).map(() => new Array(9).fill(0));

  const board = createEmptyTable();

  const gameState = new GameState(1, 2, null, board, false, '');

  gameState.updateMessage('Hi there2sdf');
  gameState.updatePlayer1(1);
  gameState.updatePlayer2(2);
  gameState.updateBoard(4);
  gameState.updateBoard(5);
  gameState.play(6);
  gameState.play(7);
  gameState.play(7);
  gameState.play(7);
  gameState.play(7);
  gameState.play(7);
  gameState.play(7);
  gameState.checkAll(board);
  console.log(gameState);
  console.log(gameState.checkAll(board));
  // gameState.save();

  // while (gameState.gameOver !== false) {
  //   gameState.play();
  // }
  gameState.updateBoard(1);
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
  // GameState.message = req.body;
};
