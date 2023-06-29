const Game = require('../models/game');

module.exports = {
    indexAAA,
    indexIndie,
    indexAdmin,
    edit,
    show,
    new: newGame,
    create,
    update,
    delete: deleteGame
}

async function indexAAA(req, res) {
    const games = await Game.find({ category: 'AAA' })
    res.render('games/AAA', { title: 'AAA Games', games })
}

async function indexIndie(req, res) {
    const games = await Game.find({ category: 'Indie' })
    res.render('games/Indie', { title: 'Indie Games', games })
}

async function indexAdmin(req, res) {
    const games = await Game.find({});
    res.render('games/admin', { title: 'Administration', games });
}

async function edit(req, res) {
    const games = await Game.findById(req.params.id)
    res.render('games/edit', { title: 'Edit Game', games });
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

async function update(req, res) {
    try {
        await Game.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.redirect('/games/admin');
    } catch (err) {
        console.log(err);
    }
}

async function deleteGame(req, res) {
    try {
        await Game.findByIdAndRemove(req.params.id);
        res.redirect('/games/admin');
    } catch (err) {
        res.render('/games/admin', { errorMsg: err.message });
    }
}