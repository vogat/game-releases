var express = require('express');
var router = express.Router();

const gamesCtrl = require('../controllers/games');

// GET /games/AAA
router.get('/AAA', gamesCtrl.indexAAA);

router.get('/indie', gamesCtrl.indexIndie);

router.get('/new', gamesCtrl.new);

router.post('/', gamesCtrl.create);

router.get('/:id', gamesCtrl.show)

module.exports = router;
