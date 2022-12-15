// import the controller from to instanciate the model

const JokeController = require('../controller/joke.controller');


module.exports = (app) => {
    app.get ('/api/jokes', JokeController.findAllJokes); 
    app.post ('/api/jokes/new', JokeController.createNewJoke);
    app.get ('/api/jokes/:id', JokeController.findOneJoke);
    app.put ('/api/jokes/:id', JokeController.updateJoke);
    app.delete ('/api/jokes/:id', JokeController.deleteJoke);
    // app.get ('/api/jokes/random', JokeController.findRandomJoke);
}