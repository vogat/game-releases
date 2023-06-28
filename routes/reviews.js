const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/games/:id/editCom', reviewsCtrl.editCom);

router.post('/games/:id/reviews', reviewsCtrl.create);

router.delete('/games/:id/reviews/:rid', reviewsCtrl.delete)

module.exports = router;