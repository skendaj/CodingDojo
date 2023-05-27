const mongoose = require('mongoose')
const PlayerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: [true, "*Name is required"],
        minlength: [2, "*Name must be at least 2 characters"]
    },
    position: {
        type: String,
    },
    
    gameOne:{
        type: String,
        default: 'Undecided'
    },
    gameTwo:{
        type: String,
        default: 'Undecided'
    },
    gameThree:{
        type: String,
        default: 'Undecided'
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Player', PlayerSchema)