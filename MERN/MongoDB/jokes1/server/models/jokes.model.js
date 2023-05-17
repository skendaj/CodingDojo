const mongoose = require('mongoose');
 
const JokesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});
 
const Jokes = mongoose.model('Jokes', JokesSchema);
 
module.exports = Jokes;
