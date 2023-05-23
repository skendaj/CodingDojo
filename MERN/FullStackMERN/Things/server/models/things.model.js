const mongoose = require('mongoose');
const ThingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
              return value.length >= 3;
            },
            message: 'Name should be more than 3 characters!',
          },
          validate: {
            validator: function (value) {
              return !/cake/i.test(value);
            },
            message: 'Name cannot contain the string "cake" in any casing.',
          },
      },
    likes: { type: Number}
}, { timestamps: true });
module.exports = mongoose.model('Thing', ThingSchema);

