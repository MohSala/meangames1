const express = require('express');
const { gamesGetAll } = require('../controller/games.controller');
const router = express.Router();

router.route("/games").get(gamesGetAll);

module.exports = router;