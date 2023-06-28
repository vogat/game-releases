const Game = require('../models/game');

module.exports = {
    editCom,
    create,
    delete: deleteReview
};

async function editCom(req, res) {
    const games = await Game.findById(req.params.id);
    res.render('games/editCom', { title: 'Edit Comments', games });
}

async function create(req, res) {
    const game = await Game.findById(req.params.id);
    game.reviews.push(req.body);
    try {
        await game.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/games/${game._id}`);
}

async function deleteReview(req, res) {
    try {
        const games = await Game.findById(req.params.id);
        const review = games.reviews.id(req.params.rid);
        review.deleteOne();
        await games.save();
        res.redirect(`/games/${req.params.id}/editCom`);
    } catch (err) {
        console.log(err);
    }
}