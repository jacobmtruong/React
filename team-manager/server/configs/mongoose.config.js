const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/playerdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to playerdb'))
    .catch(err => { console.log("There was an error connecting to playerdb", err) })
