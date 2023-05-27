import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import LikesDashboard from './LikeDashboard';

const UpdateThing = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [likes, setLikes] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/things/' + id)
            .then(res => {
                setName(res.data.name);
                setLikes(res.data.likes);
            })
            .catch(err => console.log(err))
    }, [])

    const updateThing = (e) => {
        e.preventDefault();
        if (name.length <= 3) {
            setError('Name should be more than 3 characters!');
            return;
          }
        axios.patch('http://localhost:8000/api/things/edit/' + id, {
            name,
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <LikesDashboard />
            <p>
                <Link to={"/"}>go to home</Link>
            </p>
            <p>Change the name of this thing ! {name}</p>
            <form onSubmit={updateThing}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input class="btn btn-outline-success" type="submit" />
            </form>
            {error && <span className="text-danger">{error}</span>}

        </div>
    )

}
export default UpdateThing;