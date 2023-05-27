const AuthorController = require('../controllers/authors.controller');
module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.post('/api/authors/new', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.patch('/api/authors/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);

}

