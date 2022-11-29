// Bring in the model Note
const Author = require('../models/author.model');

// CRUDs
module.exports = {

    // Read ALL
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json({ message: "There was an error", serverError: err }))
    },

    // Create a new note
    createAuthor: (req, res) => {
        console.log(req.body);
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err))
    },

    // Read ONE
    findOne: (req, res) => {
        Author.findById(req.params.id)
            .then(author => res.json(author))
            .catch(err => err.json({ message: "There was an error find one note", serverError: err }))
    },

    // Update a note
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err))
    },

    // Delete a note
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json({ message: "There was an errors deleting the note", serverError: err }))
    }
};