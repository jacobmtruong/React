// Bring in Author Controller
const AuthorController = require('../controllers/author.controller');

// API routes passed in "app" from server.js
module.exports = (app) => {
    app.get ('/api/authors', AuthorController.findAll);
    app.get ('/api/authors/:id', AuthorController.findOne);
    app.post ('/api/authors', AuthorController.createAuthor);
    app.put ('/api/authors/:id', AuthorController.updateAuthor);
    app.delete ('/api/authors/:id', AuthorController.deleteAuthor);
}