const GameState = require('../models/gameState');

test('testing the class constructor  ', () => {
  const board = [];
  const gameState = new GameState(1, 2, 1, board, false, '');
  expect(gameState.player1).toBe(1);
  expect(gameState.player2).toBe(2);
  expect(gameState.currentPlayer).toBe(1);
  expect(gameState.board).toBe(board);
  expect(gameState.gameOver).toBe(false);
  expect(gameState.message).toBe('');
});
