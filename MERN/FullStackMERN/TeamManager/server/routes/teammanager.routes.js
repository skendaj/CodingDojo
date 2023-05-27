const PlayerController = require('../controllers/teammanager.controller')

module.exports = app => {
    app.get('/api/players/', PlayerController.findPlayers)
    app.post('/api/players/', PlayerController.createPlayer)
    app.delete('/api/player/:id', PlayerController.deletePlayer)
    app.patch('/api/players/:id/:game', PlayerController.ChangeStatusGame)
}