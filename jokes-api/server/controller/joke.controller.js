// -- Controller --
// making queries to the database

// using the model
// import the model

const Joke = require('../models/joke.model');


// --- READ ALL ---
module.exports.findAllJokes = (req, res) => {
    // use the model to execute the query
    Joke.find()
        // if we got the data, send back to client the object 
        .then(allDaJokes => res.json({ Jokes: allDaJokes, status: 'ok' }))
        // if not or there is an error (serverError so we know it happened in the server)
        .catch(err => res.json({ message: 'Something went wrong', serverError: err }));
}

// --- CREATE ONE ---
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body) // db.ninjas.insertOne
        .then(newJoke => res.json({ Joke: newJoke }))
        .catch(err => res.json({ message: 'Something went wrong', serverError: err }));
}

// --- FIND ONE ---
module.exports.findOneJoke = (req, res) => {
    // _id is Mongo id, params id is the id we provide and it has to match with the route (id = :id, bob = :bob)
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ Joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', serverError: err }));
}

// --- UPDATE ONE ---
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true })

        .then(updateJoke => res.json({ Joke: updateJoke }))
        .catch(err => res.json({ message: 'Something went wrong', serverError: err }));
}

// --- DELETE ONE ---
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOneJoke({ _id: req.params.id })
        .then(results => res.json({ result: results }))
        .catch(err => res.json({ message: 'Something went wrong', serverError: err }));
}

// --- FIND RANDOM JOKE ---
// module.exports.findRandomJoke = (req, res) => {
    // const allDaJokes = Joke.find()
    // const randomJoke = allDaJokes[Math.floor(Math.random() * allDaJokes.length)]
    // Joke.find()
    //     .then(allTheJokes => res.json({ Joke: allTheJokes[Math.floor(Math.random() * allTheJokes.length)] }))
    //     .catch(err => res.json({ message: 'Something went wrong', serverError: err }));
// }