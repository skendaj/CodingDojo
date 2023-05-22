import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AddThings= (props) => {
    const {thing, setThing} = props;
    const [name, setName] = useState("");
    const [likes, setLikes] = useState();
    const [error, setError] = useState('');
    const [isUnique, setIsUnique] = useState(true);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (name.length < 3 ) {
            setError('Name should be more than 3 characters');
            return;
          }
          console.log(error)
        axios.post('http://localhost:8000/api/things', { name })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
                setThing([...thing, res.data]);
            })
            .catch(err=>console.log(err))
            setName("");
            setError('');
    }
    
    return (
      <div>
            <p>Don't see what you like? Add your own!</p>
            <form onSubmit={onSubmitHandler}>
                <div class="form-group">
                <input type="text" class="form-control" value={name} onChange = {(e)=>setName(e.target.value)}/>
                </div>
            <button type="submit" class="btn btn-primary" >I like this!</button>
            </form>
            {error && <span>{error}</span>}
      </div>
    );
}
export default AddThings;