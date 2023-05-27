import React, {useEffect, useState} from "react";
import axios from "axios";

const Game = (props) => {

    const [update,setUpdate] = useState(false);
    const {player, setPlayer} = props
    const [game,setGame]= useState("gameOne");

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
        .then((res) => {
            setPlayer(res.data)
        })
        .catch((err) => console.log(err))
    }, [update])

    const HandleStatus = (e) => {
        setGame(e.target.id);
        setUpdate(!update)
    }
    
    const ChangeStatus = (e) => {
        const id = e.target.id
        const gjendjaLojtarit = e.target.value
        axios.patch(`http://localhost:8000/api/players/${id}/${game}`, {
            gjendjaLojtarit: gjendjaLojtarit
        }).then(e=>setUpdate(!update))
        
    }

    return(
        <div>
            <h3>Player Status</h3>
            <br/>
            <button id="gameOne" onClick={HandleStatus}>Game 1</button>&nbsp; &nbsp;|&nbsp; &nbsp;
            <button id="gameTwo" onClick={HandleStatus}>Game 2</button>&nbsp; &nbsp;|&nbsp; &nbsp;
            <button id="gameThree" onClick={HandleStatus}>Game 3</button>
        <div className='row'>
                {
                    <table className="table col-sm-6 table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Player Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {player.map((players, index) => (
                                <tr key={index}>
                                    <td>{players.playerName}</td>
                                    <td className="d-flex justify-content-around">
                                        <button id={players._id} style={{ backgroundColor: players[`${game}`] =='Playing' ? "#28a745" : "white" }} className="btn" onClick={ChangeStatus} value="Playing">Playing</button>
                                        <button id={players._id} style={{ backgroundColor: players[`${game}`] ==='Not Playing'  ? "#dc3545" : "white" }} onClick={ChangeStatus} className="btn" value="Not Playing" >Not Playing</button>
                                        <button id={players._id} style={{ backgroundColor: players[`${game}`] ==='Undecided' ? "#ffc107" : "white" }}  onClick={ChangeStatus} className="btn" value="Undecided" >Undecided</button>
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

export default Game;