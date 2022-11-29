// Bring in express
const express = require('express');
const app = express();
const port = 8000;

// Bring in cors 
// Cors allow us to let us access the server, we can limit port with cors
const cors = require('cors');

// Middleware
app.use(cors(),express.json(), express.urlencoded({extended: true}));

// Database Connection
require ('./configs/mongoose.config')

// Routes Connection
require ('./routes/author.route') (app);

// Start server 
app.listen(port, () => console.log(`Listening on port ${port}`));