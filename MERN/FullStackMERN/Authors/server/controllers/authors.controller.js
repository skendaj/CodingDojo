const Author = require('../models/authors.model');    /* this is new */
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createPerson = (request, response) => {
    Author.create(request.body) 
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

