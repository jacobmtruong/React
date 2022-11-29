const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to productdb'))
    .catch(err => { console.log("There was an error connecting to productdb", err) })
