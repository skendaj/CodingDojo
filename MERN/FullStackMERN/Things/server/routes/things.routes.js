const ThingController = require('../controllers/things.controller');  

module.exports = (app) => {
    app.get('/api/things', ThingController.findAllThings);
    app.post('/api/things', ThingController.createThing);
    app.get('/api/things/:id', ThingController.getThing);
    app.patch('/api/things/edit/:id', ThingController.updateThing);
    app.post('/api/things/:id', ThingController.updateLikes);
    app.put('/api/things/:id', ThingController.resetLikes);
    app.delete('/api/things/:id', ThingController.deleteThing);
}

