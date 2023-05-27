const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      validate: {
        validator: function (value) {
          return value.length >= 3;
        },
        message: 'Name should be more than 3 characters!',
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Author', AuthorSchema);
