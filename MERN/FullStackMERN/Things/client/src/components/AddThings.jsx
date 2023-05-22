import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AddThings = (props) => {
  const { thing, setThing } = props;
  const [name, setName] = useState("");
  const [error, setError] = useState('');

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

    axios.post('http://localhost:8000/api/things', { name })
      .then(res => {
        console.log(res);
        console.log(res.data);
        setThing([...thing, res.data]);
      })
      .catch(err => console.log(err));

    setName("");
    setError('');
  };

  return (
    <div>
      <p>Don't see what you like? Add your own!</p>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">I like this!</button>
      </form>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default AddThings;
