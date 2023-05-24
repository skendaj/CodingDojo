import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const AddThings = (props) => {
  const [author, setAuthor ] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.length <= 3) {
      setError('Name should be more than 3 characters!');
      return;
    }

    if (/cake/i.test(name)) {
      setError('Name cannot contain the string "cake" in any casing!');
      return;
    }

    axios.post('http://localhost:8000/api/authors/new', { name })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setAuthor([...author, res.data]);
        navigate("/");
      })
      .catch(err => console.log(err));

    setName("");
    setError('');
  };


  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to={"/"}>Home</Link>
      <p>Add a new author:</p>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <input class="btn btn-outline-success" type="submit" />

      </form>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default AddThings;
