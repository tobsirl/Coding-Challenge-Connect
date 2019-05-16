const express = require('express');

const gameController = require('../controllers/gameController');

const router = express.Router();

router.get('/getgame', gameController.getGameState);

router.get('/savegame', gameController.saveGameState);

router.get('/creategame', gameController.createNewGame);

//router.post('/updatemessage', gameController.updatemessage);

module.exports = router;
