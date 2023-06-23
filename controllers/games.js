const Game = require('../models/game');

module.exports = {
    indexAAA,
    indexIndie,
    show,
    new: newGame,
    create
}

async function indexAAA(req, res) {
    const games = await Game.find({ category: 'AAA' })
    res.render('games/AAA', { title: 'AAA Games', games })
}

async function indexIndie(req, res) {
    const games = await Game.find({ category: 'Indie' })
    res.render('games/indie', { title: 'Indie Games', games })
}

async function show(req, res) {
    const games = await Game.findById(req.params.id)
    res.render('games/show', { title: 'Game Details', games });
}

function newGame(req, res) {
    res.render('games/new', { title: 'Add Game', errorMsg: '' });
}

async function create(req, res) {
    try {
        await Game.create(req.body);
        res.redirect('/');
    } catch (err) {
        console.log(err)
        res.render('games/new', { errorMsg: err.message });
    }
}