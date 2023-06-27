const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
}, {
    timestamps: true
})

const gameSchema = new Schema({
    category: { 
        type: String,
        required: true,
        enum: ['AAA', 'Indie']
    },
    name: { type: String, required: true},
    releaseDate: { type: Date, required: true },
    genre: {
        type: String,
        enum: ['Action', 'Action-Adventure', 'Adventure', 'Puzzle',
        'Role-playing', 'Simulation', 'Strategy', 'Sports', 'MMO', 'Other']
    },
    console: {
        type: String,
        enum: ['Playstation', 'Xbox', 'Nintendo', 'PC']
    },
    image: { type: String },
    description: {type: String},
    reviews: [reviewSchema]
});


module.exports = mongoose.model('Game', gameSchema);