// invoke express
const express = require('express');
const app = express();
const PORT = 8000;
// create DATABASE
const DB = "jokes";


// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({extended: true}));

// Connect to the DB using mongooose
require ("./config/mongoose.config") (DB)

// --- import Routes after DB connection ---
require ('./routes/joke.route') (app)

// --- START THE SERVER ---
app.listen (PORT, () => console.log(` >> server is up on ${PORT} <<`));