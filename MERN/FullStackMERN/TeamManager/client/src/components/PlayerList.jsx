import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const PlayerList = (props) => {

    const {player, setPlayer, update, setUpdate}= props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then((res) => {
                setPlayer(res.data)
            })
            .catch((err) => console.log(err))
    }, [update])

    const deletePlayer = (playerId) => {
        axios.delete('http://localhost:8000/api/player/' + playerId)
            .then(res => setUpdate(!update))
            .catch(err => console.log(err))
    }

return(
    <div>
        <Link className="h3" to={'/players/list'}>List</Link>&nbsp; &nbsp;|&nbsp; &nbsp;
        <Link className="h3" to={'/players/addPlayer'}>Add Player</Link>
        <div className='row'>
            {
                <table className="table col-sm-6 table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Player Name</th>
                            <th scope="col">Prefered Position</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {player.map((player, index) => (
                            <tr key={index}>
                                <td>{player.playerName}</td>
                                <td>{player.position}</td>
                                <td> <button className="btn btn-danger" onClick={(e) => { deletePlayer(player._id) }}>
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    </div>
)
}

export default PlayerList;