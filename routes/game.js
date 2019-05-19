const express = require('express');

const gameController = require('../controllers/gameController');

const router = express.Router();

router.get('/getgame', gameController.getGameState);

router.get('/savegame', gameController.saveGameState);

router.get('/playgame', gameController.playGame);

router.post('/updatemessage', gameController.updateMessage);

router.get('/updateboard', gameController.updateBoard);

module.exports = router;
