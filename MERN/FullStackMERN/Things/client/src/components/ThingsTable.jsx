import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

const ThingsTable= (props) => {
    const {thing, setThing} = props;
    const {id} = useParams();
    const [things, setThings] = useState([]);

    thing.sort((a, b) =>
      a.likes > b.likes ? -1 : 1
    );

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/things")
    	.then((res)=>{
            setThing(res.data.things);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])


    const handleLikes = (thingId) => {
        axios
          .post(`http://localhost:8000/api/things/${thingId}`)
          .then((res) => {
            const updatedThing = thing.map((thing) => {
                if (thing._id === thingId) {
                  return { ...thing, likes: thing.likes + 1 };
                }
                return thing;
              });
              setThing(updatedThing);
            })
          .catch((err) => console.log(err));
      };
    
    return (
      <div>
        <p>Like these things!</p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Things</th>
              <th scope="col">Likes</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {thing.map((thing, index) => {
            return (
              <tr key={index}>
                <td><p>{thing.name}</p></td>
                <td>{thing.likes}</td>
                <td><button class="btn btn-outline-success" onClick={() => handleLikes(thing._id)}>Like</button><button class="btn btn-outline-info"><Link to={`/things/${thing._id}`}>Edit</Link></button></td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    );
}
export default ThingsTable;