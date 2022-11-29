const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, " {PATH}'s minimum length is 3 characters"]
    }    
}, { timestamps: true }); 

// Create a new NoteSchema and export it 
const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;