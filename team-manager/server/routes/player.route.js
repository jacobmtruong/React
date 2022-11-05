const playerController = require('../controllers/player.controller');

// API routes passed in "app" from server.js
module.exports = (app) => {
    app.get ('/api/players', playerController.findAll);
    app.get ('/api/players/:id', playerController.findOne);
    app.post ('/api/players', playerController.createPlayer);
    app.put ('/api/players/:id', playerController.updatePlayer);
    app.delete ('/api/players/:id', playerController.deletePlayer);
}