import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const AuthorsEdit = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        if (name.length <= 3) {
            setError('Name should be more than 3 characters!');
            return;
          }
        axios.patch('http://localhost:8000/api/authors/edit/' + id, {
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
            <h1>Favorite authors</h1>
            <p>
                <Link to={"/"}>Home</Link>
            </p>
            <p>Edit this Author: {name}</p>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} 
                         />
                </p>
                <input class="btn btn-outline-success" type="submit" />
            </form>
            {error && <span className="text-danger">{error}</span>}
        </div>
    )

}
export default AuthorsEdit;