import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const PlayerForm = (props) => {

    const [playerName, setPlayerName] = useState("")
    const [position, setPosition] = useState("")
    const [validation, setValidation] = useState("")
    const {update, setUpdate} = props
    const navigate = useNavigate()

    const CreatePlayer = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/players/', {
            playerName,
            position,
        })
            .then(res => {
                setUpdate(!update)
                navigate('/players/list')
            })
            .catch(err => {
                console.log(err)
                setValidation(err.response.data.errors.playerName.message)})
    }

    return(
        <div>
            <Link className="h3" to={'/players/list'}>List</Link>&nbsp; &nbsp;|&nbsp; &nbsp;
            <Link className="h3" to={'/players/addPlayer'}>Add Player</Link>
            <form onSubmit={CreatePlayer} className="formStyle">
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Player Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={(e) => setPlayerName(e.target.value)} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Player Position:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={(e) => setPosition(e.target.value)} />
                    </div>
                </div>
                <br />
                {validation ? <p className="validation">{validation}</p> : null}
                <button className="btn btn-success" type="submit">Create</button>
            </form>
        </div>
    )
}

export default PlayerForm;