// Bring in the model Note
const Player = require('../models/player.model');

// CRUDs
module.exports = {

    // Read ALL
    findAll: (req, res) => {
        Player.find()
            .then(allPlayers => res.json(allPlayers))
            .catch(err => res.json({ message: "There was an error", serverError: err }))
    },

    // Create a new note
    createPlayer: (req, res) => {
        console.log(req.body);
        Player.create(req.body)
            .then(newPlayer => res.json(newPlayer))
            .catch(err => res.status(400).json(err))
    },

    // Read ONE
    findOne: (req, res) => {
        Player.findById(req.params.id)
            .then(player => res.json(player))
            .catch(err => err.json({ message: "There was an error find one note", serverError: err }))
    },

    // Update a note
    updatePlayer: (req, res) => {
        Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedPlayer => res.json(updatedPlayer))
            .catch(err => res.status(400).json(err))
    },

    // Delete a note
    deletePlayer: (req, res) => {
        Player.findByIdAndDelete(req.params.id)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json({ message: "There was an errors deleting the note", serverError: err }))
    }
};