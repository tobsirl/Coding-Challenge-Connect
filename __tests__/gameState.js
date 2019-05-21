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

describe('GameState - testing methods', () => {
  it('should check that togglePlayer() can be called ', () => {
    const board = [];
    const togglePlayer = (GameState.prototype.togglePlayer = jest.fn());
    const gameState = new GameState(1, 2, 1, board, false, '');
    const expected = {
      player1: 1,
      player2: 2,
      currentPlayer: 1,
      board,
      gameOver: false,
      message: '',
    };
    gameState.togglePlayer();

    expect(togglePlayer).toHaveBeenCalledTimes(1);
    expect(gameState).toEqual(expected);
  });
});
