const Player = require('../models/teammanager.model')

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err))
}

module.exports.ChangeStatusGame = (request, response) => {
    Player.findOne({_id: request.params.id})
    .then(user => {
        user[request.params.game] = request.body.gjendjaLojtarit;
        
        return user.save();
    })
    .then(saveResult => response.json(saveResult))
    .catch(err => response.json(err));
}


module.exports.findPlayers = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deletedPlayer => res.json(deletedPlayer))
        .catch(err => res.json(err))
}