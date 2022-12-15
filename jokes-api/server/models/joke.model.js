// import Mongoose to build the model
const mongoose = require('mongoose');

// the schema - create Schema object
const JokeSchema = new mongoose.Schema ({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [3, "Setup must be at least 3 characters"]},
    punchline: {
        type: String,
        required: [true, "Punch line is required"],
        min: [1, "Punch line must be at least 1 character"],
        max: [10, "Punch line must be at most 10 characters"],}
}, {timestamps: true}); // timestamp is created at, updated at

// the model - this is what we use to make actual queries to the DB
const Joke = mongoose.model('Joke', JokeSchema);


// export the model Joke
module.exports = Joke;