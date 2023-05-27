const mongoose = require('mongoose');
const AcademySchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    img : { type: String },
    role : { type: Selection },
    belt: { type: Boolean},
    degree: { type: Boolean}
}, { timestamps: true });
module.exports = mongoose.model('Academy', AcademySchema);

