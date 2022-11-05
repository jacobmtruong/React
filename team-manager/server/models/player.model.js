const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [2, " {PATH}'s minimum length is 2 characters"],
    },
    position: { type: String }
}, { timestamps: true }); 

// Create a new NoteSchema and export it 
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;