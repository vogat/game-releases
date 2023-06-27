var express = require('express');
var router = express.Router();

const gamesCtrl = require('../controllers/games');

// GET /games/AAA
router.get('/AAA', gamesCtrl.indexAAA);

router.get('/Indie', gamesCtrl.indexIndie);

router.get('/new', gamesCtrl.new);

router.get('/admin', gamesCtrl.indexAdmin);

router.get('/:id/edit', gamesCtrl.edit);

router.post('/', gamesCtrl.create);

router.get('/:id', gamesCtrl.show);

router.put('/:id', gamesCtrl.update);

router.delete('/:id', gamesCtrl.delete)

module.exports = router;
