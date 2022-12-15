// 1. import mongoose
const mongoose = require('mongoose');


// 2. connect database to Mongoose
module.exports = (DB_NAME) => {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`)
        .then(() => console.log(`Connected to ${DB_NAME}`))
        .catch(err => console.log(`cannot connect to ${DB_NAME}`, err));
}