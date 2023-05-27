const Author = require('../models/authors.model');    /* this is new */

module.exports.findAllAuthors = (req, res) => {
    Author.find() 
         .then((authors) =>{
            res.json({authors})
         })
         .catch ((err) => {
         res.json({ message: "Something went wrong", error: err})
         });
}

module.exports.createAuthor = (request, response) => {
    Author.create(request.body) 
        .then(author => response.json(author))
        .catch(err => response.json(err));
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
       .then(author => response.json(author))
       .catch(err => response.json(err));
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
       .then(updatedAuthor=> response.json(updatedAuthor))
       .catch(err => response.json(err))
}

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
       .then(deleteConfirmation => response.json(deleteConfirmation))
       .catch(err => response.json(err))
}